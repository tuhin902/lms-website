import Link from "next/link";
import styles from "./coursevideo.module.css";
import Yourcoursecard from "@/components/yourcoursecard/yourcoursecard";
import AllCourseCard from "@/components/allcoursescard/allcoursescard";
import Sessioncard from "@/components/sessioncard/sessioncard";
import Coursevideocard from "@/components/coursevideocard/coursevideocard";
const Coursevideo = () => {
  return (
    <div>
      <div className={styles.mycoursecontainer}>
        <h2 className={styles.welcometext}>
          Welcome <span className={styles.username}>Antoni Leo</span>, Are You
          Ready For Your Lesson?
        </h2>
        <div className={styles.topbtn}>
          <button className={styles.yourcoursebtn}>
            Class 1: Introduction
          </button>
          <Link href="/" className={styles.bookmarks}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.bookmarksicon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.19094 21.8547C5.6948 22.2117 5.00293 21.8571 5.00293 21.2459V6.25C5.00293 4.45507 6.458 3 8.25293 3H15.7513C17.5462 3 19.0013 4.45507 19.0013 6.25V21.2459C19.0013 21.8571 18.3094 22.2117 17.8133 21.8547L12.0021 17.6738L6.19094 21.8547Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className={styles.bookmarksbtn}>Add Bookmarks</span>
          </Link>
        </div>
        <div className={styles.topline}></div>
        <div className={styles.coursesection}>
          <div className={styles.leftside}>
            <Coursevideocard />
          </div>
          <div className={styles.rightside}>
            <div className={styles.rightsideinput}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.searchicon}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 11.7101 16.9276 13.2866 15.964 14.5483L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3466 21.0676 19.7794 21.0953 19.3871 20.7903L19.2929 20.7071L14.5483 15.964C13.2866 16.9276 11.7101 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5ZM10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5Z"
                    fill="#212121"
                  />
                </svg>
              </span>
              <input
                type="text"
                name="searchcourse"
                id="searchcourse"
                placeholder="Search Course"
              />
            </div>
            <div className={styles.allcourses}>
              <AllCourseCard />
            </div>
          </div>
        </div>

        <div className={styles.supportsession}>
          <h2 className={styles.sessiontitle}>Support Session</h2>
          <div className={styles.sessioncontainer}>
            <h2 className={styles.extraclasstitle}>Extra Classes</h2>
            <div className={styles.extraclass}>
              <Sessioncard />
            </div>
            <h2 className={styles.extraclasstitle}>Problem Solution Class</h2>
            <div className={styles.extraclass}>
              <Sessioncard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursevideo;
