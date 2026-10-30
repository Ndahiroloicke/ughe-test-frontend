import type { HomepageData, LoginResponse } from "./types";

function getApiBase(): string {
  if (typeof window === "undefined") {
    return (
      process.env.API_URL ??
      process.env.NEXT_PUBLIC_API_URL ??
      "http://localhost:8000/api"
    );
  }
  return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";
}

export async function fetchHomepage(): Promise<HomepageData> {
  const res = await fetch(`${getApiBase()}/homepage/`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to load homepage (${res.status})`);
  }
  return res.json();
}

export async function login(
  username: string,
  password: string
): Promise<LoginResponse> {
  const res = await fetch(`${getApiBase()}/auth/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.detail ?? "Login failed");
  }
  return res.json();
}

export async function fetchMe(token: string): Promise<{ username: string }> {
  const res = await fetch(`${getApiBase()}/auth/me/`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Not authenticated");
  }
  const data = await res.json();
  return { username: data.username };
}
