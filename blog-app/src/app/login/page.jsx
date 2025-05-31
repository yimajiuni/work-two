"use client";
import React from 'react'
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import styles from './login-page.module.css'

const LoginPage = () => {
  const { status } = useSession();
  const [redirecting, setRedirecting] = useState(false);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated" && !redirecting) {
    setRedirecting(true);
    return <div className={styles.loading}>Redirecting...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google", { callbackUrl: "/" })}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;