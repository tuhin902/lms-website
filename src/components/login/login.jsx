import Image from "next/image";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.loginpage}>
      <div className={styles.logincontainer}>
        <div className={styles.formleft}>
          <div className={styles.loginimg}>
            <Image src="/assets/registerimg/registerimg.png" alt="" fill />
          </div>
          <div className={styles.group1}>
            <Image src="/assets/registerimg/group1.png" alt="" fill />
          </div>
          <div className={styles.group2}>
            <Image src="/assets/registerimg/group2.png" alt="" fill />
          </div>
        </div>
        <div className={styles.formright}>
          <div className={styles.formtop}>
            <div className={styles.loginlogo}>
              <Image src="/assets/logo/loginlogo.png" alt="" fill />
            </div>
            <button className={styles.registerbtn}>REGISTER</button>
          </div>
          <form action="" className={styles.form}>
            <h2 className={styles.logintext}>Log in</h2>
            <div>
              <label htmlFor="loginmobile">Login Mobile No</label>
              <input
                type="text"
                name="loginmobile"
                id="loginmobile"
                required
                placeholder="+8801000-000000"
              />
            </div>
            <div>
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="loginmobile"
                id="loginmobile"
                required
                placeholder="**********"
              />
            </div>
            <p className={styles.forgetpass}>FORGET PASSWORD</p>
            <div className={styles.loginbtncontainer}>
              <button type="submit" className={styles.loginbtn}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
