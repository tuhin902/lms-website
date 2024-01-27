import styles from "./additionalinfo.module.css";
const Additionalinfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.additional}>
        <p className={styles.additionaltext}>Additional Info</p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.profileicon}
            viewBox="0 0 44 44"
            fill="none"
          >
            <path
              d="M27.2344 28.417L29.9844 25.667H11.4628C9.18574 25.667 7.33984 27.5128 7.33984 29.7899V30.8489C7.33984 32.4857 7.92378 34.0688 8.98669 35.3134C11.5456 38.31 15.2978 39.9541 20.1658 40.2766C20.1583 39.9415 20.1953 39.5966 20.2826 39.2476L20.7061 37.5539C16.3549 37.3345 13.1732 35.9813 11.0779 33.5276C10.4402 32.7808 10.0898 31.831 10.0898 30.8489V29.7899C10.0898 29.0317 10.7045 28.417 11.4628 28.417H27.2344ZM22.0001 3.67554C27.0626 3.67554 31.1667 7.7796 31.1667 12.8422C31.1667 17.9048 27.0626 22.0089 22.0001 22.0089C16.9374 22.0089 12.8333 17.9048 12.8333 12.8422C12.8333 7.7796 16.9374 3.67554 22.0001 3.67554ZM22.0001 6.42554C18.4562 6.42554 15.5833 9.29839 15.5833 12.8422C15.5833 16.386 18.4562 19.2589 22.0001 19.2589C25.5439 19.2589 28.4167 16.386 28.4167 12.8422C28.4167 9.29839 25.5439 6.42554 22.0001 6.42554ZM35.0158 23.2273L24.1946 34.0484C23.5637 34.6793 23.1162 35.4698 22.8997 36.3355L22.0606 39.6918C21.6957 41.1513 23.0179 42.4735 24.4775 42.1085L27.8337 41.2694C28.6993 41.053 29.4898 40.6055 30.1208 39.9745L40.9419 29.1534C42.5783 27.517 42.5783 24.8638 40.9419 23.2273C39.3055 21.5907 36.6523 21.5907 35.0158 23.2273Z"
              fill="#212121"
            />
          </svg>
        </p>
      </div>
      <form action="">
        <div className={styles.inputcontainer}>
          <div className={styles.formtop}>
            <div>
              <label htmlFor="gender">Your Gender</label>
              <input type="text" name="gender" id="gender" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
          </div>
          <div className={styles.formmiddle}>
            <div>
              <label htmlFor="age">Your Age</label>
              <input type="text" name="age" id="age" />
            </div>
            <div>
              <label htmlFor="mobile">Mobile No</label>
              <input type="text" name="mobile" id="mobile" />
            </div>
          </div>
        </div>
        <div className={styles.btncontainer}>
          <button className={styles.changebtn}>Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default Additionalinfo;
