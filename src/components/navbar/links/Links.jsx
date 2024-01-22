import Link from "next/link";
import styles from "./link.module.css";
import Navlink from "./navlink/navlink";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Our Courses",
      path: "/ourcourses",
    },
    {
      title: "About Us",
      path: "/aboutus",
    },
    {
      title: "Offline Sevice",
      path: "/offlineservice",
    },
    {
      title: "Review",
      path: "/review",
    },
    {
      title: "Help Desk",
      path: "/helpdesk",
    },
    {
      title: "My Course",
      path: "/mycourse",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}
      </div>
    </div>
  );
};

export default Links;
