import styles from "./offlineservices.module.css";
import Image from "next/image";
import ServiceCard from "@/components/servicecard/servicecard";

const OfflineServices = () => {
  const services = [
    {
      id: 1,
      img: "/assets/offlineservice/service1.png",
      title: "Offline Course",
    },
    {
      id: 2,
      img: "/assets/offlineservice/service2.png",
      title: "Apps Development",
    },
    {
      id: 3,
      img: "/assets/offlineservice/service1.png",
      title: "Video Editing",
    },
    {
      id: 4,
      img: "/assets/offlineservice/service4.png",
      title: "Digital Marketing",
    },
    {
      id: 5,
      img: "/assets/offlineservice/service5.png",
      title: "Web Design",
    },
    {
      id: 6,
      img: "/assets/offlineservice/service6.png",
      title: "App Design",
    },
    {
      id: 7,
      img: "/assets/offlineservice/service7.png",
      title: "Cyber Security",
    },
    {
      id: 8,
      img: "/assets/offlineservice/service8.png",
      title: "Graphics Design",
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Offline Services</h2>
      <div className={styles.content}>
        {services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default OfflineServices;
