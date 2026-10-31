import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const socials = [
  { src: "/facebook-black.svg", alt: "Facebook", href: "/" },
  { src: "/instagram-black.svg", alt: "Instagram", href: "/" },
  { src: "/linkedin-black.svg", alt: "LinkedIn", href: "https://www.linkedin.com" },
  { src: "/youtube-black.svg", alt: "YouTube", href: "/" },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo-crebl.png" alt="Crebl!" width={50} height={50} />
          {/* <h1 className={styles.logoText}>Crebl!</h1> */}
        </div>
        <p className={styles.desc}>
          Discover my stories, creative ideas! and Share your life.
        </p>
        <div className={styles.icons}>
          {socials.map((item) => (
            <Link key={item.alt} href={item.href} aria-label={item.alt}>
              <Image src={item.src} alt={item.alt} width={22} height={22} />
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Create</Link>
          <Link href="/">Culture</Link>
          <Link href="/">Trend</Link>
          <Link href="/">Travel</Link>
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="https://www.linkedin.com">LinkedIn</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
