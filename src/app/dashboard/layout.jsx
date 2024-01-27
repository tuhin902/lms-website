import Sidebar from "@/components/dashboard/sidebar/sidebar";
import styles from "../../components/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
