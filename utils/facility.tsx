"use client";
import React from "react";
import {
  IconWindmill,
  IconDroplet,
  IconWorldBolt,
  IconSun,
  IconBuildingFactory,
} from "@tabler/icons-react";
import {
  CleanSatMiningFacility,
  EnergyType,
  FacilityData,
} from "@/models/Facility";
import { formatNumber } from "@/utils/format";

export function getEnergyIcon(energyType: EnergyType): React.ReactNode {
  switch (energyType) {
    case "solar":
      return <IconSun key="solar" />;
    case "hydro":
      return <IconDroplet key="hydro" />;
    case "wind":
      return <IconWindmill key="wind" />;
    case "nuclear":
      return <IconBuildingFactory key="nuclear" />;
    case "fossil":
      return <IconBuildingFactory key="fossil" />;
    case "geothermal":
      return <IconBuildingFactory key="geothermal" />;
    case "biomass":
      return <IconBuildingFactory key="biomass" />;
    default:
      return <IconWorldBolt key="default energy" />;
  }
}

export function getFacilityEnergiesLabel(
  facility: CleanSatMiningFacility
): React.ReactNode {
  if (!facility.data) return "";
  return facility.data?.powerPlant.energies.reduce((acc, energy) => {
    const separator = acc === "" ? "" : ", ";
    switch (energy) {
      case EnergyType.hydro:
        return acc + separator + "Hydro";
      case EnergyType.wind:
        return acc + separator + "Eolien";
      case EnergyType.solar:
        return acc + separator + "Solaire";
      case EnergyType.nuclear:
        return acc + separator + "Nucléaire";
      case EnergyType.fossil:
        return acc + separator + "Fossile";
      case EnergyType.geothermal:
        return acc + separator + "Géothermique";
      case EnergyType.biomass:
        return acc + separator + "Biomasse";
      default:
        return acc + separator + "Autre";
    }
  }, "");
}

export function getFacilityEnergiesIcon(
  facility: CleanSatMiningFacility
): React.ReactNode[] {
  if (!facility.data) return [];
  return facility.data?.powerPlant.energies.map((energy) => {
    return getEnergyIcon(energy);
  });
}

export function getFacilityPower(
  facility: CleanSatMiningFacility
): number | undefined {
  const p = facility.data ? getFacilityPowerW(facility.data) : undefined;

  return p ? Math.round(p) : p;
}

export function getFacilityPowerW(data: FacilityData) {
  return data.mining.containers.reduce(
    (acc, energy) => acc + energy.asics.powerW * energy.units,
    0
  );
}

export function getFacilityHashrate(
  facility: CleanSatMiningFacility
): number | undefined {
  const h = facility.data ? getFacilityHashrateTHs(facility.data) : undefined;

  return h ? Math.round(h) : h;
}

export function getFacilityHashrateTHs(data: FacilityData) {
  return data.mining.containers.reduce(
    (acc, energy) => acc + energy.asics.hashrateTHs * energy.units,
    0
  );
}

export function getFacilityFundraising(
  facility: CleanSatMiningFacility
): number | undefined {
  const f = facility.data
    ? getFacilityFundraisingUsd(facility.data)
    : undefined;
  return f ? Math.round(f) : f;
}

export function getFacilityFundraisingUsd(data: FacilityData): number {
  return data.fundraisings.reduce(
    (acc, fundraising) => acc + fundraising.amount,
    0
  );
}

export function formatFacilityPowerWToMW(power: number): string {
  return formatNumber(power, 1, "M") + "W";
}

export function formatFacilityHashrateTHsToPHs(hashrate: number): string {
  return formatNumber(hashrate, 1, "P", 1) + "H/s";
}

export function formatFacilityFundraisingToM(fundraising: number): string {
  return "$" + formatNumber(fundraising, 1, "M") + "+";
}
