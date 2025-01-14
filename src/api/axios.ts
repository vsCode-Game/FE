import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.davincicodegame.store",
});

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
