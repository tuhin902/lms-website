import Image from "next/image";
import styles from "./helpdesk.module.css";
import Post from "../posts/post";
import Createpost from "../creatpost/createpost";
const Helpdesk = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.desktitlecontainer}>
          <h2 className={styles.desktitle}>HELP DESK</h2>
        </div>
        <div className={styles.createpostcontainer}>
          <div className={styles.posttop}>
            {/* image */}
            <div className={styles.postimg}>
              <Image src="/assets/creatpostimg/leftimg.svg" alt="" fill />
            </div>
            <input
              className={styles.psotinput}
              type="text"
              name=""
              id=""
              placeholder="Share or Ask Something"
            />
          </div>
          <div className={styles.postbottom}>
            <div className={styles.galleryicon}>
              <Image src="/assets/creatpostimg/gallery.svg" alt="" fill />
              <span className={styles.gallerytext}>Photo/Video</span>
            </div>
            <button className={styles.creatbutton}>Creat Post</button>
          </div>
        </div>
        <Post />
        <Createpost />
      </div>
    </div>
  );
};

export default Helpdesk;
