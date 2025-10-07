import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // backend adresin
  withCredentials: false,
});

// Normalize response payloads so frontend can always expect r.data.data as array when endpoints return lists
api.interceptors.response.use(
  (response) => {
    const d = response.data;
    // If backend returned an array directly => wrap into { data: [...] }
    if (Array.isArray(d)) {
      response.data = { data: d };
      return response;
    }
    // If backend returned common wrappers with array fields, normalize to { data: [...] }
    if (d && Array.isArray(d.data)) {
      response.data = { data: d.data };
      return response;
    }
    if (d && Array.isArray(d.items)) {
      response.data = { data: d.items };
      return response;
    }
    if (d && Array.isArray(d.all_Exercises)) {
      response.data = { data: d.all_Exercises };
      return response;
    }
    // otherwise leave single-object responses untouched
    return response;
  },
  (error) => Promise.reject(error)
);

export default api;
