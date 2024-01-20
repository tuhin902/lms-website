import CourseCard from "../coursecard/coursecard";
import styles from "./ourcourses.module.css";
const OurCourses = () => {
  const courses = [
    {
      id: 1,
      img: "/assets/coursepic/courseimg1.png",
      title: "Graphics Design",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 2,
      img: "/assets/coursepic/courseimg1.png",
      title: "Graphics Design",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 3,
      img: "/assets/coursepic/courseimg3.png",
      title: "Graphics Design",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 4,
      img: "/assets/coursepic/courseimg3.png",
      title: "Graphics Design",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 5,
      img: "/assets/coursepic/courseimg5.png",
      title: "Graphics Design",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 6,
      img: "/assets/coursepic/courseimg6.png",
      title: "Graphics Design",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 7,
      img: "/assets/coursepic/courseimg7.png",
      title: "Graphics Design",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    },
    {
      id: 8,
      img: "/assets/coursepic/courseimg7.png",
      title: "Graphics Design",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Our Courses</h2>
        <select className={styles.category} name="category">
          <option selected>Category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className={styles.content}>
        {courses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
