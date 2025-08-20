import { fetch36HrForecastRaw } from "./weatherApi";
import { parseLocation } from "@/utils/weatherParser";
import type { Location, Forecast36Hr } from "@/types/weather";

export async function getAll36HrForecast(): Promise<Forecast36Hr[] | null> {
  try {
    const data = await fetch36HrForecastRaw();
    const locations: Location[] = data.records.location;
    return locations.map(parseLocation);
  } catch (err: any) {
    console.error("❌ CWA API 請求失敗：", err?.message ?? err);
    throw err;
  }
}
