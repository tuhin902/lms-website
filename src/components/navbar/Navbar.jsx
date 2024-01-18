"use client";
import Image from "next/image";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/assets/logo/logo1.png" alt="logo" width={50} height={50} />
        <span>GMIT</span>
      </div>
      <div className={styles.links}>
        <Links />
      </div>
      <div className={styles.buttons}>
        <button className={styles.login}>Login</button>
        <button className={styles.signup}>Sign Up</button>
      </div>
      <Image
        className={styles.menuButton}
        src="/assets/menu/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <>
          <div className={styles.mobileNav}>
            <div>
              <Links className={styles.mobileLinks}/>
            </div>
            <div className={styles.mobileButtons}>
              <button className={styles.login}>Login</button>
              <button className={styles.signup}>Sign Up</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
