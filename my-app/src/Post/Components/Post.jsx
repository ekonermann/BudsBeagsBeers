import '../Styles/Post.css';

const Post = (props) => (
  <div className = "card card-default post-body">
    <div className = "card-body">
      { props.postBody }
    </div>
  </div>
);

export default Post;
