"use server";

import { serverClient } from "@/lib/streamServer";

export const createToken = async (userId: string) => {
  const token = await serverClient.createToken(userId);
  console.log("Creating token for user:", userId); // For debugging purposes
  return token;
};
