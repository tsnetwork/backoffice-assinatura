import { signOut } from "@/Context/AuthContext";
import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies();

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies["user.token"]}`,
  },
});

api.interceptors.response.use(response =>{
  return response;
},(error: AxiosError) =>{
  if(error.response?.status === 401){
    signOut();
  }
})
