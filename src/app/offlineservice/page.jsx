import Image from "next/image";
import styles from "./offline.module.css";
import ServicePaidCourse from "@/components/servicepaidcourse/servicepaidcourse";
import PricePlan from "@/components/priceplane/priceplan";
const OfflineservicePage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.topText}>
          <h2 className={styles.topFirst}>Offline service</h2>
          <h1 className={styles.toptitle}>
            We provide the best offline services{" "}
          </h1>
          <p className={styles.topdes}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book
          </p>
        </div>
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <div>
              <h2 className={styles.bannerTitle}>App Development</h2>
              <p className={styles.bannerdesc}>
                GM IT brings several Courses for Skill Development Start your
                child&apos;s learning with us!
              </p>
            </div>
            <div className={styles.bannerBottom}>
              <p className={styles.paidCourse}>Paid Courses (10)</p>
              <p className={styles.freeCourse}>Free Courses (2)</p>
            </div>
          </div>
          <div className={styles.bannerImg}>
            <Image src="/assets/servicepage/servicebannerimg.png" alt="" fill />
          </div>
        </div>
        <ServicePaidCourse />
        <PricePlan />
      </div>
    </div>
  );
};

export default OfflineservicePage;
