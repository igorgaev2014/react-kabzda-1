import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        src="https://e7.pngegg.com/pngimages/1008/377/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-black-hair-thumbnail.png"
        alt=""
      />
      {props.message}
      <div className="">
        <span>{props.likesCount} like</span>
      </div>
    </div>
  );
};

export default Post;
