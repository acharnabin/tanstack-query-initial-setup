import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axios-instance";

export interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}

export interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Geolocation {
  lat: string;
  long: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}

const useUser = (retry:number) => {
  const res = useQuery({
    queryKey: ["product-details",retry],
    queryFn: async () => {
      const res = await axiosInstance.get<User[]>("users");
      return res.data;
    },
  });

  return res;
};

export default useUser;
