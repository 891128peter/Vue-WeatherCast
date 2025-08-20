import type { Location, Forecast36Hr, WeatherElementName } from "@/types/weather";

export function parseLocation(location: Location): Forecast36Hr {
  const timeCount = location.weatherElement[0]?.time?.length ?? 0;

  const periods = Array.from({ length: timeCount }, (_, i) => {
    const getValue = (name: WeatherElementName) =>
      location.weatherElement.find((el) => el.elementName === name)?.time?.[i]
        ?.parameter?.parameterName ?? null;

    const startTime = location.weatherElement[0]?.time?.[i]?.startTime ?? "";
    const endTime = location.weatherElement[0]?.time?.[i]?.endTime ?? "";

    return {
      startTime,
      endTime,
      weather: getValue("Wx"),
      minT: getValue("MinT"),
      maxT: getValue("MaxT"),
      pop: getValue("PoP"),
      comfort: getValue("CI"),
    };
  });

  return { city: location.locationName, periods };
}
