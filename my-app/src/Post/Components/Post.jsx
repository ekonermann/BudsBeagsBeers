import '../Styles/Post.css';

const Post = (props) => (
  <div className = "post-bg">
  <div className = "card card-default post-body">
    <div className = "card-body">
      {
        props.postBody.map((postPart, idk) => (
          <div>{postPart}</div>
        ))
      }
    </div>
  </div>
  </div>
);

export default Post;
