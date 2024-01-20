import styles from "./servicepaidcourse.module.css";
import PaidCourseCard from "../paidcoursecard/paidcoursecard";
const ServicePaidCourse = () => {
  const paidcourses = [
    {
      id: 1,
      img: "/assets/servicepage/paidcourse1.png",
      title: "App Development",
      teacher: "Teacher name",
      offerprice: "900",
      realprice: "1000",
    },
    {
      id: 2,
      img: "/assets/servicepage/paidcourse2.png",
      title: "Android APK ",
      teacher: "Teacher name",
      offerprice: "1000",
      realprice: "1500",
    },
    {
      id: 3,
      img: "/assets/servicepage/paidcourse3.png",
      title: "Google Play store",
      teacher: "Teacher name",
      offerprice: "1000",
      realprice: "1500",
    },
    {
      id: 4,
      img: "/assets/servicepage/paidcourse3.png",
      title: "App Design",
      teacher: "Teacher name",
      offerprice: "900",
      realprice: "1000",
    },
    {
      id: 5,
      img: "/assets/servicepage/paidcourse3.png",
      title: "App Design",
      teacher: "Teacher name",
      offerprice: "900",
      realprice: "1000",
    },
    {
      id: 6,
      img: "/assets/servicepage/paidcourse3.png",
      title: "App Design",
      teacher: "Teacher name",
      offerprice: "900",
      realprice: "1000",
    },
  ];
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.texttitle}>Paid Course</h2>
          <div className={styles.coursesearchfield}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 11.7101 16.9276 13.2866 15.964 14.5483L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3466 21.0676 19.7794 21.0953 19.3871 20.7903L19.2929 20.7071L14.5483 15.964C13.2866 16.9276 11.7101 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5ZM10 4.5C6.96243 4.5 4.5 6.96243 4.5 10C4.5 13.0376 6.96243 15.5 10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5Z"
                fill="#212121"
              />
            </svg>
            <input
              type="text"
              name="coursesearch"
              id="coursesearch"
              placeholder="Search Course"
              className={styles.coursesearch}
            />
          </div>
        </div>

        {/* Course card  */}
        <div className={styles.cardContainer}>
          {paidcourses.map((paidcourse) => (
            <PaidCourseCard paidcourse={paidcourse} key={paidcourse.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePaidCourse;
