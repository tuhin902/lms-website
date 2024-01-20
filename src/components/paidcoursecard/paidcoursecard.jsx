import Image from "next/image";
import styles from "./paidcoursecard.module.css";

const PaidCourseCard = ({ paidcourse }) => {
  const { img, title, teacher, offerprice, realprice } = paidcourse;
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image src={img} alt="" fill />
      </div>
      <div className={styles.cardDetails}>
        <h2>{title}</h2>
        <p>{teacher}</p>
        <span className={styles.offerprice}>tk.{offerprice}</span>
        <span className={styles.beforeprice}>tk.{realprice}</span>
      </div>
    </div>
  );
};

export default PaidCourseCard;
