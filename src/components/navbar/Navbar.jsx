"use client";
import Image from "next/image";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const session = true;

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
        {session ? (
          <>
            <div className={styles.afterlogin}>
              <span className={styles.avatar}></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 29 29"
                fill="none"
              >
                <circle cx="14.8672" cy="14.0606" r="14.0606" fill="#2D094F" />
                <path
                  d="M5.49365 4.68677H24.5328V23.7259H5.49365V4.68677Z"
                  fill="white"
                  fill-opacity="0.01"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.0134 7.06658C13.699 7.06658 12.6335 8.13209 12.6335 9.44647C12.6335 10.7609 13.699 11.8264 15.0134 11.8264C16.3277 11.8264 17.3933 10.7609 17.3933 9.44647C17.3933 8.13209 16.3277 7.06658 15.0134 7.06658ZM11.0469 9.44647C11.0469 7.25584 12.8227 5.47998 15.0134 5.47998C17.204 5.47998 18.9799 7.25584 18.9799 9.44647C18.9799 11.6371 17.204 13.413 15.0134 13.413C12.8227 13.413 11.0469 11.6371 11.0469 9.44647Z"
                  fill="#D1EDDE"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.08008 22.1395C7.08008 17.7583 10.6318 14.2065 15.0131 14.2065C19.3943 14.2065 22.946 17.7583 22.946 22.1395C22.946 22.5777 22.5909 22.9328 22.1527 22.9328C21.7146 22.9328 21.3594 22.5777 21.3594 22.1395C21.3594 18.6345 18.5181 15.7931 15.0131 15.7931C11.5081 15.7931 8.66667 18.6345 8.66667 22.1395C8.66667 22.5777 8.3115 22.9328 7.87338 22.9328C7.43525 22.9328 7.08008 22.5777 7.08008 22.1395Z"
                  fill="#D1EDDE"
                />
              </svg>
              <button className={styles.login}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <button className={styles.login}>Login</button>
            <button className={styles.signup}>Sign Up</button>
          </>
        )}
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
              <Links className={styles.mobileLinks} />
            </div>
            <div className={styles.mobileButtons}>
              {session ? (
                <>
                  <div className={styles.afterlogin}>
                    <span className={styles.avatar}></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 29 29"
                      fill="none"
                    >
                      <circle
                        cx="14.8672"
                        cy="14.0606"
                        r="14.0606"
                        fill="#2D094F"
                      />
                      <path
                        d="M5.49365 4.68677H24.5328V23.7259H5.49365V4.68677Z"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.0134 7.06658C13.699 7.06658 12.6335 8.13209 12.6335 9.44647C12.6335 10.7609 13.699 11.8264 15.0134 11.8264C16.3277 11.8264 17.3933 10.7609 17.3933 9.44647C17.3933 8.13209 16.3277 7.06658 15.0134 7.06658ZM11.0469 9.44647C11.0469 7.25584 12.8227 5.47998 15.0134 5.47998C17.204 5.47998 18.9799 7.25584 18.9799 9.44647C18.9799 11.6371 17.204 13.413 15.0134 13.413C12.8227 13.413 11.0469 11.6371 11.0469 9.44647Z"
                        fill="#D1EDDE"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.08008 22.1395C7.08008 17.7583 10.6318 14.2065 15.0131 14.2065C19.3943 14.2065 22.946 17.7583 22.946 22.1395C22.946 22.5777 22.5909 22.9328 22.1527 22.9328C21.7146 22.9328 21.3594 22.5777 21.3594 22.1395C21.3594 18.6345 18.5181 15.7931 15.0131 15.7931C11.5081 15.7931 8.66667 18.6345 8.66667 22.1395C8.66667 22.5777 8.3115 22.9328 7.87338 22.9328C7.43525 22.9328 7.08008 22.5777 7.08008 22.1395Z"
                        fill="#D1EDDE"
                      />
                    </svg>
                    <button className={styles.login}>Logout</button>
                  </div>
                </>
              ) : (
                <>
                  <button className={styles.login}>Login</button>
                  <button className={styles.signup}>Sign Up</button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
