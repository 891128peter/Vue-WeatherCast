export type WeatherElementName = "Wx" | "MinT" | "MaxT" | "PoP" | "CI";

export interface Parameter {
  parameterName?: string;
  parameterUnit?: string;
}

export interface Time {
  startTime: string;
  endTime: string;
  parameter?: Parameter;
}

export interface WeatherElement {
  elementName: WeatherElementName;
  time?: Time[];
}

export interface Location {
  locationName: string;
  weatherElement: WeatherElement[];
}

export interface Period {
  startTime: string;
  endTime: string;
  weather: string | null;
  minT: string | null;
  maxT: string | null;
  pop: string | null;
  comfort: string | null;
}

export interface Forecast36Hr {
  city: string;
  periods: Period[];
}
