import { createAuthClient } from "better-auth/react";
import { polarClient } from "@polar-sh/better-auth";
import { env } from "@/lib/env";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  plugins: [polarClient()],
});

export const { signIn, signUp, useSession, signOut } = authClient;
