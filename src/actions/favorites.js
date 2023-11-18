"use server"
import { getFavorites } from "@/utils/wordpress";

const getData = async (ids) => {
  const res = await getFavorites({ ids });
  if (!res) {
    return;
  }
  return JSON.parse(res);
}

export const Favorites = async ({ ids }) => {
  const data = await getData(ids);
  return data;
}