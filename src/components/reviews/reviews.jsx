import Image from "next/image";
import styles from "./reviews.module.css";
import Reviewcard from "../reviewcard/reviewcard";
import Yourfeedback from "../yourfeedback/yourfeedback";
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      img: "/assets/reviewimg/reviewimg1.svg",
      customername: "sarwar tuhin",
      username: "tuhin",
      active: "2 month ago",
      message:
        "I was completely impressed with their professionalism and customer service.",
    },
    {
      id: 2,
      img: "/assets/reviewimg/reviewimg2.svg",
      customername: "sarwar tuhin",
      username: "tuhin",
      active: "2 month ago",
      message:
        "I was completely impressed with their professionalism and customer service.",
    },
    {
      id: 3,
      img: "/assets/reviewimg/reviewimg3.svg",
      customername: "sarwar tuhin",
      username: "tuhin",
      active: "2 month ago",
      message:
        "I was completely impressed with their professionalism and customer service.",
    },
    {
      id: 4,
      img: "/assets/reviewimg/reviewimg1.svg",
      customername: "sarwar tuhin",
      username: "tuhin",
      active: "2 month ago",
      message:
        "I was completely impressed with their professionalism and customer service.",
    },
    {
      id: 5,
      img: "/assets/reviewimg/reviewimg3.svg",
      customername: "sarwar tuhin",
      username: "tuhin",
      active: "2 month ago",
      message:
        "I was completely impressed with their professionalism and customer service.",
    },
    {
      id: 6,
      img: "/assets/reviewimg/reviewimg2.svg",
      customername: "sarwar tuhin",
      username: "tuhin",
      active: "2 month ago",
      message:
        "I was completely impressed with their professionalism and customer service.",
    },
  ];

  const session = true;

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.reviews}>Review</h2>
        {session ? (
          <>
            <p className={styles.yourfeedback}>
              Your feedback{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.feedbackicon}
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
                    fill="#D9D9D9"
                  />
                  <path
                    d="M8.36189 3.86689C8.85098 3.37772 9.64401 3.3777 10.1332 3.86683C10.6223 4.35592 10.6223 5.14889 10.1332 5.63801L9.82107 5.9502L8.04983 4.17897L8.36189 3.86689ZM7.67862 4.55022L4.17936 8.0499C4.03715 8.19213 3.93719 8.37102 3.8906 8.56667L3.50714 10.1772C3.48603 10.2659 3.51243 10.3592 3.57689 10.4236C3.64135 10.4881 3.73463 10.5145 3.82331 10.4934L5.43374 10.1099C5.62946 10.0633 5.80841 9.96331 5.95067 9.82104L9.44986 6.32146L7.67862 4.55022Z"
                    fill="#212121"
                  />
                </svg>
              </span>
            </p>
          </>
        ) : (
          <></>
        )}
        <div className={styles.reviewtop}>
          <div className={styles.topcard}>
            <p>Total Student</p>
            <h3>7490</h3>
          </div>
          <div className={styles.topcard}>
            <p>Total Student</p>
            <h3>7490</h3>
          </div>
          <div className={styles.topcard}>
            <p>Total Student</p>
            <h3>7490</h3>
          </div>
        </div>
        <h2 className={styles.middletitle}>
          what our customers think about us
        </h2>
        <div className={styles.cardcontainer}>
          {reviews.map((review) => (
            <Reviewcard review={review} key={review.id} />
          ))}
        </div>
        {session && <Yourfeedback />}
      </div>
    </div>
  );
};

export default Reviews;
