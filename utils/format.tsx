import { BigNumber } from "bignumber.js";

export const formatUsd = (
  tvl: number,
  digit = 0,
  symbol = "$US",
  currency = "USD",
  oraclePrice = 1,
  hasData = true
) => {
  if (!hasData) return " - " + symbol;

  // TODO: bignum?
  if (oraclePrice) {
    tvl /= oraclePrice;
  }
  const order = Math.floor(Math.log10(tvl) / 3);

  const units = ["", "k", "M", "B", "T"];
  const shouldShowUnits = order > 1; // only use units if 1M+
  let unitToDisplay = "";
  let num = tvl;

  if (shouldShowUnits) {
    num = tvl / 1000 ** order;
    unitToDisplay = units[order];
  }
  const currencySymbol = symbol;
  const digitSmallNumber = digit === 0 ? 2 : digit;

  return num < 999
    ? num.toFixed(digitSmallNumber) + unitToDisplay + " " + currencySymbol
    : tvl.toLocaleString("fr-FR", {
        style: "currency",
        currency: currency,
        maximumFractionDigits: digit,
        minimumFractionDigits: digit,
      });
};

export const formatSimpleUsd = (
  tvl: number,
  hasData = true,
  digit = 0,
  symbol = "$",
  currency = "USD",
  oraclePrice = 1
) => {
  return formatUsd(tvl, digit, symbol, currency, oraclePrice, hasData);
};

/**
 * Formats a number to output as a percent% string
 * @param percent as decimal e.g. 0.01 to represent 1%
 * @param dp
 * @param placeholder
 */
export const formatPercent = (
  percent: number | null | undefined,
  dp = 2,
  placeholder: string = "?"
) => {
  if (!percent && percent !== 0) return placeholder;

  if (percent === 0) {
    return "0%";
  }

  // Convert to number
  const numberPercent: number = percent * 100;

  const units = ["", "k", "M", "B", "T", "Q", "S"];
  const order = Math.floor(Math.log10(numberPercent) / 3);

  // Show fire symbol if very large %
  if (order >= units.length - 1) return `🔥`;

  // Magnitude to display
  let unitToDisplay = "";
  let num: number = numberPercent;
  if (order > 1) {
    num = numberPercent / 1000 ** order;
    unitToDisplay = units[order];
  }

  // Format output
  return num < 999
    ? `${num.toFixed(dp)}${unitToDisplay}%`
    : numberPercent.toLocaleString("en-US", {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      }) + "%";
};

export function formatSmallPercent(
  percent: number,
  maxPlaces = 2,
  minPlaces = 0,
  formatZero = false,
  hasData = true
): string {
  if (!hasData) return "- %";
  return !formatZero && percent === 0
    ? "0%"
    : (percent * 100).toLocaleString("en-US", {
        maximumFractionDigits: maxPlaces,
        minimumFractionDigits: minPlaces,
      }) + "%";
}

export const formatNumber = (
  base: number,
  digit = 0,
  unit: string | undefined = undefined,
  order: number | undefined = undefined
) => {
  //console.log("formatNumber", base, digit, unit, order);
  const units = ["", "k", "M", "B", "T"];

  const orderCalc =
    unit === undefined
      ? Math.floor(Math.log10(base) / 3)
      : order ?? units.findIndex((u) => u === unit);
  const unitCalc = unit ?? units[orderCalc];

  const shouldShowUnits = orderCalc >= 1; // only use units if 1M+
  let unitToDisplay = "";
  let num = base;

  if (shouldShowUnits) {
    num = base / 1000 ** orderCalc;
    unitToDisplay = unitCalc;
  }

  const digitSmallNumber = Number.isInteger(
    new BigNumber(num.toFixed(digit)).toNumber()
  )
    ? 0
    : digit;
  //new BigNumber(num.toFixed(digitSmallNumber)).toNumber();

  return num.toFixed(digitSmallNumber) + unitToDisplay;
};

export function formatBigNumber(num: number) {
  let value = new BigNumber(num);
  value = value.decimalPlaces(2, BigNumber.ROUND_FLOOR);

  if (value.isZero()) {
    return "0";
  }
  const order = getBigNumOrder(value);
  if (value.abs().gte(100)) {
    value = value.decimalPlaces(0, BigNumber.ROUND_FLOOR);
  }
  if (order < 2 && value.abs().gte(100)) {
    return value.toNumber().toLocaleString("en-US", {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
  }
  const units = ["", "k", "M", "B", "T"];

  return value.shiftedBy(-order * 3).toFixed(2) + units[order];
}

export function getBigNumOrder(num: BigNumber): number {
  const nEstr = num
    .abs()
    .decimalPlaces(0, BigNumber.ROUND_FLOOR)
    .toExponential();
  const parts = nEstr.split("e");
  const exp = parseInt(parts[1] || "0");
  return Math.floor(exp / 3);
}

export function formatFullNumber(
  num: number,
  maxDp = 2,
  roundMode: BigNumber.RoundingMode = BigNumber.ROUND_HALF_UP
) {
  let value = new BigNumber(num);
  value = value.decimalPlaces(2, BigNumber.ROUND_HALF_UP);
  return stripTrailingZeros(
    value.toFormat(maxDp, roundMode, {
      prefix: "",
      decimalSeparator: ".",
      groupSeparator: ",",
      groupSize: 3,
      secondaryGroupSize: 0,
      fractionGroupSeparator: ".",
      fractionGroupSize: 0,
      suffix: "",
    })
  );
}
export function formatFullBigNumber(
  value: BigNumber,
  maxDp = 2,
  roundMode: BigNumber.RoundingMode = BigNumber.ROUND_HALF_UP
) {
  value = value.decimalPlaces(2, BigNumber.ROUND_HALF_UP);
  return stripTrailingZeros(
    value.toFormat(maxDp, roundMode, {
      prefix: "",
      decimalSeparator: ".",
      groupSeparator: ",",
      groupSize: 3,
      secondaryGroupSize: 0,
      fractionGroupSeparator: ".",
      fractionGroupSize: 0,
      suffix: "",
    })
  );
}

export const stripTrailingZeros = (str: string) => {
  return str.replace(/(\.[0-9]*?)(0+$)/, "$1").replace(/\.$/, "");
};

export function formatBigDecimals(num: number, maxPlaces = 8, strip = true) {
  const value = new BigNumber(num);

  if (value.isZero() && strip) {
    return "0";
  }

  const fixed = value.toFixed(maxPlaces);
  return strip ? stripTrailingZeros(fixed) : fixed;
}

export function formatBTC(num: number, hasData = true) {
  return (hasData ? formatBigDecimals(num) : "- ") + " BTC";
}

export function formatToken(num: number, symbol = "") {
  let maxDp = 2;
  if (num > 10) maxDp = 0;
  return formatFullNumber(num, maxDp) + (symbol == "" ? "" : " " + symbol);
}

export function formatHashrate(num: number, hasData = true) {
  if (!hasData) return "- TH/s";
  const numBig = new BigNumber(num);
  const value = numBig.dividedBy(new BigNumber(10).exponentiatedBy(12));
  return formatFullBigNumber(value, 0, 0) + " TH/s";
}

export function formatCustumHashrate(num: number, shift: number, unit: string) {
  const numBig = new BigNumber(num);
  const value = numBig.dividedBy(new BigNumber(10).exponentiatedBy(shift));
  return formatFullBigNumber(value, 0, 0) + " " + unit;
}

export const formatUsdCentsPerKWh = (
  tvl: number,
  digit = 4,
  symbol = "$",
  currency = "USD",
  oraclePrice = 1
) => {
  const usd = formatUsd(tvl, digit, symbol, currency, oraclePrice);
  const suffix = " / kWh";

  return usd + suffix;
};

export function formatParenthesis(text: string): string {
  return "(" + text + ")";
}

export function formatTimestamp(timestamp: number): string {
  // Créer une copie de la date pour éviter de la modifier directement
  const dateCopy = new Date(timestamp);

  // Utiliser les méthodes de l'objet Date en UTC pour extraire les composants de la date
  const year = dateCopy.getUTCFullYear();
  const month = (dateCopy.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = dateCopy.getUTCDate().toString().padStart(2, "0");
  const hours = dateCopy.getUTCHours().toString().padStart(2, "0");
  const minutes = dateCopy.getUTCMinutes().toString().padStart(2, "0");
  const seconds = dateCopy.getUTCSeconds().toString().padStart(2, "0");

  // Retourner la date formatée en UTC
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds} UTC`;
}

export function formatTimestampDay(timestamp: number): string {
  // Créer une copie de la date pour éviter de la modifier directement
  const dateCopy = new Date(timestamp);

  // Utiliser les méthodes de l'objet Date en UTC pour extraire les composants de la date
  const year = dateCopy.getUTCFullYear();
  const month = (dateCopy.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = dateCopy.getUTCDate().toString().padStart(2, "0");

  // Retourner la date formatée en UTC
  return `${day}/${month}/${year}`;
}

export function formatTimestampHour(timestamp: number): string {
  // Créer une copie de la date pour éviter de la modifier directement
  const dateCopy = new Date(timestamp);

  // Utiliser les méthodes de l'objet Date en UTC pour extraire les composants de l'heure
  const hours = dateCopy.getUTCHours().toString().padStart(2, "0");
  const minutes = dateCopy.getUTCMinutes().toString().padStart(2, "0");
  const seconds = dateCopy.getUTCSeconds().toString().padStart(2, "0");

  // Retourner l'heure formatée en UTC
  return `${hours}:${minutes}:${seconds} UTC`;
}

export function formatAddress(address: string): string {
  if (address.length < 12) {
    // Si la chaîne est trop courte pour être masquée, retourne la chaîne d'origine
    return address;
  }

  const maskedAddress = address.slice(0, 6) + "..." + address.slice(-4); // Garde les 6 premiers caractères et les 4 derniers caractères

  return maskedAddress;
}
