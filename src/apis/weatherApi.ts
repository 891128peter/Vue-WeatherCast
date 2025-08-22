import axios from "axios";

const BASE_URL = "https://weather-proxy-ten.vercel.app";

export async function fetch36HrForecastRaw() {
  const res = await axios.get(`${BASE_URL}/api/forecast36hr`);
  return res.data;
}
