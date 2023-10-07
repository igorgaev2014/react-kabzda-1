import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          alt="bg"
          src="https://t3.ftcdn.net/jpg/04/56/11/06/240_F_456110688_0RbzwTy8UVyZwtObuxr8lb3XRr28R24X.jpg"
        ></img>
      </div>
      <div className={styles.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
