import React, { Component } from 'react';
import Post from '../../Post/Components/Post';
import PostEditor from '../../PostEditor/Components/PostEditor';

class ThreadDisplay extends Component {

  constructor(props) {
    super(props);

    this.databaseRef = this.props.database.ref().child('post');
    this.addPost = this.addPost.bind(this);
    this.updateLocalState = this.updateLocalState.bind(this);

    this.state = {
      posts: [],
    }
  }

  componentWillMount() {
    const {updateLocalState} = this;
    this.databaseRef.on('child_added', snapshot => {
      const response = snapshot.val();
      updateLocalState(response);
    });
  }

  updateLocalState(response) {
    const posts = this.state.posts;
    const brokenDownPost = response.postBody.split(/[\r\n]/g);
    posts.push(brokenDownPost);
    this.setState({
      posts: posts,
    });
  }

  addPost(postBody){
    const postToSave = {postBody};
    this.databaseRef.push().set(postToSave);
  }

  render() {
    return (
      <div>
        <PostEditor addPost = {this.addPost} />
        {
          this.state.posts.map((postBody, idx) => {
            return (
              <Post key = {idx} postBody = {postBody} />
            )
          })
        }
      </div>
    );
  }
}

export default ThreadDisplay;
