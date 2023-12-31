import Preloader from "../../common/preloader/preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          alt="bg"
          src="https://t3.ftcdn.net/jpg/04/56/11/06/240_F_456110688_0RbzwTy8UVyZwtObuxr8lb3XRr28R24X.jpg"
        ></img>
      </div>
      <div className={styles.descriptionBlock}>
        <img alt="img" src={props.profile.photos.large} />
        <ProfileStatus status={"Hello my"} />
      </div>
    </div>
  );
};

export default ProfileInfo;
