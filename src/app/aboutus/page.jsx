import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <h2 className={styles.aboutTitle}>About Us</h2>
      <div className={styles.container}>
        <h3 className={styles.missionTitle}>Our Mission</h3>
        <div className={styles.abouttop}>
          <div className={styles.topText}>
            <p className={styles.topDes}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button className={styles.topButton}>Read More</button>
          </div>
          <div className={styles.topimg}>
            <Image src="/assets/aboutus/aboutrightimg.png" alt="" fill />
          </div>
        </div>

        <div className={styles.aboutMiddle}>
          <span className={styles.middleFirst}>Who we are</span>
          <span>Our Work</span>
          <span>Business Services</span>
          <span>Our Staff</span>
        </div>

        <div className={styles.aboutBottom}>
          <div className={styles.aboutCard}>
            <div className={styles.bottomcardimg}>
              <Image src="/assets/aboutus/aboutcard1.png" alt="" fill />
            </div>
            <h2 className={styles.bottomTitle}>Title</h2>
            <p className={styles.bottomdesc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className={styles.aboutCard}>
            <div className={styles.bottomcardimg}>
              <Image src="/assets/aboutus/aboutcard1.png" alt="" fill />
            </div>
            <h2 className={styles.bottomTitle}>Title</h2>
            <p className={styles.bottomdesc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className={styles.aboutCard}>
            <div className={styles.bottomcardimg}>
              <Image src="/assets/aboutus/aboutcard1.png" alt="" fill />
            </div>
            <h2 className={styles.bottomTitle}>Title</h2>
            <p className={styles.bottomdesc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
