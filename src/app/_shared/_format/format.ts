import { Formats } from 'next-intl'

export const intlFormats: Formats = {
  dateTime: {
    numeric: {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    },
  },
  number: {
    rounded: { style: 'decimal', maximumFractionDigits: 0 },
    roundedTwoFractionDigit: { style: 'decimal', maximumFractionDigits: 2 },
    percent: { style: 'percent', maximumFractionDigits: 2 },
    dollar: {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'narrowSymbol',
    },
    dollarCompact: {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'narrowSymbol',
      notation: 'compact',
      maximumFractionDigits: 1,
      minimumFractionDigits: 0,
    },
    dollarRounded: {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'narrowSymbol',
      maximumFractionDigits: 0,
    },
    byteCompact: {
      notation: 'compact',
      style: 'unit',
      unit: 'byte',
      unitDisplay: 'narrow',
    },
  },
  list: {},
}
