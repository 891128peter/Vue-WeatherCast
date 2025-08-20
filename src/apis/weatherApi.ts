import axios from "axios";

const CWA_API_KEY = "CWA-2DC46789-9C58-43CF-ACF5-1FD6796F38B6";
const BASE_URL = "https://opendata.cwa.gov.tw/api/v1/rest/datastore";

export async function fetch36HrForecastRaw() {
  const res = await axios.get(`${BASE_URL}/F-C0032-001`, {
    params: { Authorization: CWA_API_KEY },
  });
  return res.data;
}
