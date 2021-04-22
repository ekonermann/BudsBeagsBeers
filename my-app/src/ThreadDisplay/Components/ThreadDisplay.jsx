import React, { Component } from 'react';
import Post from '../../Post/Components/Post';
import PostEditor from '../../PostEditor/Components/PostEditor';

class ThreadDisplay extends Component {

  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);

    this.state = {
      posts: [],
    }
  }
  
  addPost(newPostBody){
    const newState = Object.assign({}, this.state);
    newState.posts.push(newPostBody);
    this.setState(newState);
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
