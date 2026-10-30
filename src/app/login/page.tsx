"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";
import { TOKEN_KEY } from "@/components/AuthBanner";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("ughe_admin");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const tokens = await login(username, password);
      localStorage.setItem(TOKEN_KEY, tokens.access);
      localStorage.setItem("ughe_refresh_token", tokens.refresh);
      router.push("/");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1 className={styles.title}>UGHE Test Web App</h1>
        <p className={styles.hint}>
          Predefined credentials (see readme.txt): default username{" "}
          <strong>ughe_admin</strong>
        </p>
        <label className={styles.label}>
          Username
          <input
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        {error && <p className={styles.error}>{error}</p>}
        <button className={styles.submit} type="submit" disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </button>
        <Link href="/" className={styles.back}>
          ← Back to homepage
        </Link>
      </form>
    </div>
  );
}
