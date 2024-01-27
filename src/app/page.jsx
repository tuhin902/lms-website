import Image from "next/image";
import styles from "./home.module.css";
import OurCourses from "@/components/ourcourses/ourcourses";
import AboutPage from "./aboutus/page";
// import OfflineservicePage from "./offlineservice/page";
import Contactus from "@/components/contactus/contact";
import OfflineServices from "@/components/offlineservices/offlineservices";
const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <Image
          src="/assets/topbanner/topshadow.svg"
          fill
          className={styles.topshadow}
          alt=""
        />
        <div className={styles.bannertexts}>
          <h2 className={styles.title}>
            Your <span>Title</span>
          </h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            aperiam harum consequatur. Quo eveniet iusto natus fugit cum
            quibusdam pariatur.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
      <div className={styles.secondBanner}></div>
      <OurCourses />
      <AboutPage />
      <OfflineServices />
      <Contactus />
    </div>
  );
};

export default Home;
