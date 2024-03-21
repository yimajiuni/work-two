import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="yuko blog" width={50} height={50}/>
          <h1 className={styles.logoText}>YukoBlog</h1>
        </div>
        <p className={styles.desc}>
        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, 
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
        magna aliquam erat volutpat.
         Ut wisi enim ad minim veniam,
        quis nostrud exerci tation ullamcorper suscipit lobortis 
        nisl ut aliquip ex ea commodo consequat.
        </p>
        <div className={styles.icons}>
        <Image src="/facebook.png" alt="facebook" width={18} height={18} />
        <Image src="/instagram.png" alt="instagram" width={18} height={18} />
        <Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
        <Image src="/youtube.png" alt="youtube" width={18} height={18} />
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
            <span className={styles.listTitle}>Tages</span>
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
            <Link href="/">TikTok</Link>
            <Link href="/">Youtube</Link>
          </div>
      </div>
    </div>
  );
};

export default Footer