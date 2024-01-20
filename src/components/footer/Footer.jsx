import Image from "next/image";
import Links from "../navbar/links/Links";
import styles from "./footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerLogo}>
        <Image src="/assets/logo/logo1.png" alt="logo" width={60} height={60} />
        <span>GMIT</span>
      </div>
      <div className={styles.content}>
        <div className={styles.leftSideContainer}>
          <div className={styles.leftSide}>
            <div>
              <span className={styles.leftSideTitle}>Office Address</span>
              <div className={styles.texts}>
                <p>8QPP+95J, Rd No.1, Chattogram</p>
                <p>Support:</p>
                <p>Helpline:</p>
              </div>
              <div className={styles.paymentMethod}>
                <h2 className={styles.paymentTitle}>Payment Methods:</h2>
                <div className={styles.paymentContainer}>
                  <span className={styles.bkashContainer}>
                    <Image
                      src="/assets/footer/leftside/bKash.svg"
                      alt="bKash"
                      width={40}
                      height={40}
                    />
                    <Image
                      src="/assets/footer/leftside/bKashicon.svg"
                      alt="bKashicon"
                      width={30}
                      height={30}
                    />
                  </span>
                  <span className={styles.visaicon}>
                    <Image
                      src="/assets/footer/leftside/visa.svg"
                      alt="visaicon"
                      width={40}
                      height={40}
                    />
                  </span>
                  <span className={styles.anothermethod}>
                    <Image
                      src="/assets/footer/leftside/leftvector.svg"
                      alt="lefticon"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/assets/footer/leftside/middlevector.svg"
                      alt="middleicon"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/assets/footer/leftside/rightvector.svg"
                      alt="righticon"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className={styles.paypalicon}>
                    <Image
                      src="/assets/footer/leftside/paypal.svg"
                      alt="paypalicon"
                      width={80}
                      height={38}
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* <div className={styles.navitems}>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
          </div> */}
          </div>
        </div>

        <div className={styles.rightSideContainer}>
          <div className={styles.navitems}>
            <div>
              <Link href="/">Home</Link>
              <Link href="/">Home</Link>
              <Link href="/">Home</Link>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/">Home</Link>
              <Link href="/">Home</Link>
              <Link href="/">Home</Link>
              <Link href="/">Home</Link>
            </div>
          </div>
        </div>

        <div className={styles.rightSideContainer}>
          <h2 className={styles.rightText}>Follow us</h2>
          <div>
            <div className={styles.socialMediaContainer}>
              <span>
                <Image
                  src="/assets/footer/rightside/facebookicon.svg"
                  alt="facebookicon"
                  width={50}
                  height={40}
                />
              </span>
              <span>
                <Image
                  src="/assets/footer/rightside/instaicon.svg"
                  alt="instaicon"
                  width={50}
                  height={40}
                />
              </span>
              <span>
                <Image
                  src="/assets/footer/rightside/linkdinicon.svg"
                  alt="linkdinicon"
                  width={50}
                  height={40}
                />
              </span>
              <span>
                <Image
                  src="/assets/footer/rightside/whatsappicon.svg"
                  alt="whatsappicon"
                  width={50}
                  height={40}
                />
              </span>
            </div>
            <h2 className={styles.dowloadText}>Download App</h2>
            <div className={styles.googlepay}>
              <span>
                <Image
                  src="/assets/footer/rightside/googlepayicon.svg"
                  alt="googlepayicon"
                  width={100}
                  height={60}
                />
              </span>
              <span>
                <Image
                  src="/assets/footer/rightside/appstoreicon.svg"
                  alt="appstoreicon"
                  width={100}
                  height={60}
                />
              </span>
            </div>

            <p className={styles.bottomtext}>© 2021 - 2023 GlobalMission. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
