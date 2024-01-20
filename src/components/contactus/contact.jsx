import styles from "./contactus.module.css";
const Contactus = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.contacttitle}>
          <h2 className={styles.title}>Contact Us</h2>
        </div>

        <form action="">
          <div className={styles.form}>
            <div className={styles.formtop}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className={styles.name}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className={styles.name}
              />
            </div>
            <div className={styles.formbottom}>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Message"
                className={styles.message}
              />
            </div>
            <div className={styles.buttoncontainer}>
              <button className={styles.submit}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
