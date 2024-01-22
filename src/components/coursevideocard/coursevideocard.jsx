import styles from "./coursevideocard.module.css";

const Coursevideocard = () => {
  return (
    <div>
      <div className={styles.videosection}>
        <div>
          <video
            className={styles.video}
            controls
            controlsList="nodownload"
          >
            <source src="/assets/video/video1.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srclang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.videochangebtn}>
          <button className={styles.previousbtn}>Previous</button>
          <button className={styles.nextbtn}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Coursevideocard;
