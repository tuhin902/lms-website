import Image from "next/image";
import styles from "./course.module.css";

const CourseCard = ({ course }) => {
  const { img, title, desc } = course;
  return (
    
      <div className={styles.card}>
        <Image
          src={course.img}
          className={styles.cardImg}
          alt=""
          width={295}
          height={185}
        />
        <div className={styles.cardbody}>
          <h3 className={styles.cardtitle}>{course.title}</h3>
          <div className={styles.carddes}>
            <p>{course.desc}</p>
            <Image
              src="/assets/coursepic/locksvg.svg"
              alt=""
              width={36}
              height={36}
            />
          </div>
        </div>
      </div>
    
  );
};

export default CourseCard;
