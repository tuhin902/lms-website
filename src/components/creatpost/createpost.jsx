import Image from "next/image";
import styles from "./create.module.css";

const Createpost = () => {
  return (
    <div>
      <div className={styles.createpostcontainer}>
        <h2 className={styles.createposttext}>Create Post</h2>
        <form action="" className={styles.newpost}>
          <div>
            <label htmlFor="subject">Title/Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="your title"
              required
            />
          </div>
          <div className={styles.nameidinput}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="id">ID</label>
              <input
                type="text"
                name="id"
                id="id"
                placeholder="Enter your id"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="mobile">Mobile No</label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="+8801000-000000"
              required
            />
          </div>
          <div>
            <label htmlFor="contet">Content Details</label>
            <textarea
              name="content"
              id=""
              cols="30"
              rows="10"
              placeholder="Share or Ask Something"
            ></textarea>
          </div>

          <div className={styles.creatpostbottom}>
            <div className={styles.galleryicon}>
              <Image src="/assets/creatpostimg/gallery.svg" alt="" fill />
              <span className={styles.gallerytext}>Photo/Video</span>
            </div>
            <button className={styles.submitbtn}>Submit Post</button>
          </div>
          <p className={styles.formbottomtext}>Image uploads limited to 1MB, video uploads up to 20MB.</p>
        </form>
      </div>
    </div>
  );
};

export default Createpost;
