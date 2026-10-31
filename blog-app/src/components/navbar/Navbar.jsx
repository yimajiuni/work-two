import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authlinks/AuthLinks";
import ThemeToggle from "../themetoggle/ThemeToggle";

const socials = [
  { src: "/facebook-black.svg", alt: "Facebook" },
  { src: "/instagram-black.svg", alt: "Instagram" },
  { src: "/linkedin-black.svg", alt: "LinkedIn" },
  { src: "/youtube-black.svg", alt: "YouTube" },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        {socials.map((item) => (
          <Image
            key={item.alt}
            src={item.src}
            alt={item.alt}
            width={24}
            height={24}
          />
        ))}
      </div>
      <div className={styles.logo}>Cribl!</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
