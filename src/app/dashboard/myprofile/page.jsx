import Image from "next/image";
import styles from "./myprofile.module.css";
const Myprofile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Myprofile}>
        <p className={styles.myprofiletext}>My Profile</p>
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

      <form action="" className={styles.form}>
        <div>
          <div className={styles.formtop}>
            <div>
              <label htmlFor="name">Full Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" required />
            </div>
          </div>
          <div className={styles.formmiddle}>
            <div>
              <label htmlFor="studentid">Student ID</label>
              <input type="text" name="studentid" id="studentid" required />
            </div>
            <div>
              <label htmlFor="mobile">Mobile No</label>
              <input type="text" name="mobile" id="mobile" required />
            </div>
          </div>
        </div>
        <div className={styles.uploadimg}>
          <h2>Profile Image</h2>
          <div className={styles.updatedimg}>
            <Image src="/assets/dashboard/dashboardpic.svg" alt="" fill />
          </div>
          <div className={styles.uploadfield}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.uploadicon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.2498 3.50962C18.664 3.50974 19 3.17405 19 2.75984C19 2.34563 18.6644 2.00974 18.2502 2.00962L5.25022 2.00586C4.836 2.00574 4.5 2.34143 4.5 2.75564C4.5 3.16986 4.83557 3.50574 5.24978 3.50586L18.2498 3.50962ZM11.6482 21.9978L11.75 22.0047C12.1297 22.0047 12.4435 21.7225 12.4932 21.3564L12.5 21.2547L12.499 7.56968L16.2208 11.29C16.4871 11.5562 16.9038 11.5804 17.1974 11.3625L17.2815 11.2899C17.5477 11.0236 17.5719 10.6069 17.354 10.3133L17.2814 10.2292L12.2837 5.23262C12.0176 4.96653 11.6012 4.94223 11.3076 5.15979L11.2235 5.23232L6.22003 10.2289C5.92694 10.5216 5.92661 10.9965 6.21931 11.2896C6.48539 11.556 6.90204 11.5805 7.1958 11.3629L7.27997 11.2903L10.999 7.57668L11 21.2547C11 21.6344 11.2822 21.9482 11.6482 21.9978Z"
                  fill="#212121"
                />
              </svg>
            </span>
            <label htmlFor="uploadfile" className={styles.uploadtext}>
              Upload Field
            </label>
            <input
              type="file"
              name="uploadfile"
              id="uploadfile"
              className={styles.uploadfile}
            />
          </div>
        </div>
        <div>
          <div className={styles.btncontainer}>
            <button className={styles.changebtn}>Save Changes</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Myprofile;
