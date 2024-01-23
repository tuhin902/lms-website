import Image from "next/image";
import styles from "./register.module.css";

const Register = () => {
  return (
    <div className={styles.registerpage}>
      <div className={styles.registercontainer}>
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
            <button className={styles.loginbtn}>Login</button>
          </div>
          <form action="" className={styles.form}>
            <h2 className={styles.registertext}>Register</h2>
            <div className={styles.names}>
              <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" required />
              </div>
              <div>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" required />
              </div>
            </div>
            <div className={styles.loginnumber}>
              <div>
                <label htmlFor="loginnumber">Login Mobile No</label>
                <input
                  type="text"
                  name="loginnumber"
                  id="loginnumber"
                  required
                />
              </div>
              <button className={styles.sendcodebtn}>Send Code</button>
            </div>

            <div className={styles.whatsappfield}>
              <label htmlFor="whasappnumber">What’s App No</label>
              <input
                type="text"
                name="whasappnumber"
                id="whasappnumber"
                required
              />
            </div>
            <div className={styles.councilorfield}>
              <label htmlFor="councilorcode">
                Select Batch Councillor Code
              </label>
              <input
                type="text"
                name="councilorcode"
                id="councilorcode"
                required
              />
            </div>
            <div className={styles.district}>
              <label htmlFor="district">District</label>
              <select name="district" id="district" required>
                <option selected>Select District</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className={styles.divisionthana}>
              <div>
                <label htmlFor="division">Division</label>
                <select name="division" id="division" required>
                  <option selected>Select Division</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div>
                <label htmlFor="thana">Thana</label>
                <select name="thana" id="thana" required>
                  <option selected>Select Thana</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className={styles.password}>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
              </div>
              <div>
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  required
                />
              </div>
            </div>

            <div className={styles.registerbtncontainer}>
              <button type="submit" className={styles.registerbtn}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
