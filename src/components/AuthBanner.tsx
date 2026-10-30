"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchMe } from "@/lib/api";

const TOKEN_KEY = "ughe_access_token";

export default function AuthBanner() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return;
    fetchMe(token)
      .then((me) => setUsername(me.username))
      .catch(() => localStorage.removeItem(TOKEN_KEY));
  }, []);

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("ughe_refresh_token");
    setUsername(null);
  }

  if (!username) {
    return (
      <div className="login-banner">
        UGHE Test Web App — sign in to verify API authentication.
        <Link href="/login">Log in</Link>
      </div>
    );
  }

  return (
    <div className="login-banner">
      Signed in as {username}. Content is loaded from Django Admin via REST API.
      <button
        type="button"
        onClick={logout}
        style={{
          marginLeft: 12,
          background: "transparent",
          border: "1px solid #fff",
          color: "#fff",
          padding: "2px 10px",
        }}
      >
        Log out
      </button>
    </div>
  );
}

export { TOKEN_KEY };
