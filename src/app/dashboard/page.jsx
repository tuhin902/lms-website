import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Add Your Additional Educational And Job-Related Information!</h2>
        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industr standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
