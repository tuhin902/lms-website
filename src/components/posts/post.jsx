import Image from "next/image";
import styles from "./post.module.css";
const Post = () => {
  return (
    <div>
      <div className={styles.postcontainer}>
        <h3 className={styles.allposttext}>All Post</h3>
        <div className={styles.singlepost}>
          <div className={styles.topdetails}>
            <div className={styles.userimg}>
              <Image src="/assets/creatpostimg/leftimg.svg" alt="" fill />
            </div>
            <div>
              <p className={styles.username}>Shaba Khan sanaia</p>
              <p className={styles.active}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.clockicon}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.9931 6.64827C11.9435 6.28233 11.6295 6 11.25 6C10.836 6 10.5 6.336 10.5 6.75V12.75L10.5069 12.8517C10.5565 13.2177 10.8705 13.5 11.25 13.5H15.25L15.3517 13.4931C15.7177 13.4435 16 13.1295 16 12.75C16 12.336 15.664 12 15.25 12H12V6.75L11.9931 6.64827Z"
                      fill="#212121"
                    />
                  </svg>
                </span>
                an hour ago
              </p>
            </div>
          </div>
          <div className={styles.middledetails}>
            <h2 className={styles.problemname}>Loading problem</h2>
            <p className={styles.problemdes}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className={styles.postbottom}>
              <div className={styles.commentcontainer}>
                <div className={styles.commenticon}>
                  <Image
                    src="/assets/creatpostimg/commenticon.svg"
                    alt=""
                    fill
                  />
                </div>
                <span className={styles.commenttext} >1 comment</span>
              </div>
              <div className={styles.callendercontainer}>
                <div className={styles.callendericon}>
                  <Image src="/assets/creatpostimg/callender.svg" alt="" fill />
                </div>
                <span className={styles.callemdertext}>January 2, 2024</span>
              </div>
            </div>
          </div>

          <div className={styles.bottomborder}></div>
        </div>
        <div className={styles.singlepost}>
          <div className={styles.topdetails}>
            <div className={styles.userimg}>
              <Image src="/assets/creatpostimg/leftimg.svg" alt="" fill />
            </div>
            <div>
              <p className={styles.username}>Shaba Khan sanaia</p>
              <p className={styles.active}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.clockicon}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.9931 6.64827C11.9435 6.28233 11.6295 6 11.25 6C10.836 6 10.5 6.336 10.5 6.75V12.75L10.5069 12.8517C10.5565 13.2177 10.8705 13.5 11.25 13.5H15.25L15.3517 13.4931C15.7177 13.4435 16 13.1295 16 12.75C16 12.336 15.664 12 15.25 12H12V6.75L11.9931 6.64827Z"
                      fill="#212121"
                    />
                  </svg>
                </span>
                an hour ago
              </p>
            </div>
          </div>
          <div className={styles.middledetails}>
            <h2 className={styles.problemname}>Loading problem</h2>
            <p className={styles.problemdes}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className={styles.postbottom}>
              <div className={styles.commentcontainer}>
                <div className={styles.commenticon}>
                  <Image
                    src="/assets/creatpostimg/commenticon.svg"
                    alt=""
                    fill
                  />
                </div>
                <span className={styles.commenttext} >1 comment</span>
              </div>
              <div className={styles.callendercontainer}>
                <div className={styles.callendericon}>
                  <Image src="/assets/creatpostimg/callender.svg" alt="" fill />
                </div>
                <span className={styles.callemdertext}>January 2, 2024</span>
              </div>
            </div>
          </div>

          <div className={styles.bottomborder}></div>
        </div>
      </div>
    </div>
  );
};

export default Post;
