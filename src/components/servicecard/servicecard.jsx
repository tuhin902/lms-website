import Image from "next/image";
import styles from "./service.module.css";

const ServiceCard = ({ service }) => {
  const { img, title } = service;
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image src={img} className={styles.cardImg} alt="" fill />
      </div>
      <div className={styles.cardtitle}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
