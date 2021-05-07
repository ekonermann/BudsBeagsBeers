import React, { Component } from 'react';
import '../Styles/PostEditor.css';
import '../../Pages/Style/main.css';
import { Link } from 'react-router-dom';
import logo from '../../Pages/Images/Logo.png'
import 'bootstrap/dist/css/bootstrap.css';

const symbol = "\u25c8";
const url = "https://sites.google.com/view/beaglesand12s/home";

class PostEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPostBody: '',
    };

    this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  handlePostEditorInputChange(ev) {
    this.setState({
      newPostBody: ev.target.value
    });
  }

  createPost(){
    this.props.addPost(this.state.newPostBody);
    this.setState({
      newPostBody: '',
    });
  }

  render() {
    return (
    <html>
      <head>
        <title>Buds, Beagles, and Beer</title>
      </head>
      <body>
      <div class = "header">
        <h1>Buds, Beagles, and Beer</h1>
        <button id = "login-signup">Login/Sign-Up</button>
      </div>
        <div class="navbar">
          <Link to = "/" style = {{color: 'black', position: 'absolute', left:20}} >Home</Link>
          <Link to = "/learn" style = {{color: 'black', position: 'absolute', left:100}}>Learn</Link>
          <div class="dropdown">
            <button class="dropbtn">Beer</button>
              <div class="dropdown-content">
                  <a href = "beers#Porter">Porter</a>
                  <a href = "beers#Stout">Stout</a>
                  <a href = "beers#IPA">IPA</a>
                  <a href = "beers#Pale Ale">Pale Ale</a>
                  <a href = "beers#Brown Ale">Brown Ale</a>
                  <a href = "beers#Pilsner">Pilsner</a>
                  <a href = "beers#Lager">Lager</a>
                  <a href = "beers#Wheat">Wheat</a>
                  <a href = "beers#Sour">Sour</a>
                  <a href = "beers#Belgian">Belgian</a>
                  <a href = "beers#Amber">Amber</a>
                  <a href = "beers#Hefeweizen">Hefeweizen</a>
                  <a href = "beers#Saison">Saison</a>
                  <a href = "beers#Kolsch">Kolsch</a>
              </div>
            </div>
          <Link to = "/forums" style = {{color: 'black', position: 'absolute', left:245}}>Forums</Link>
          <a href = {url} style = {{color: 'black', position: 'absolute', left:330}}>Beagles and 12s</a>
        </div>
        <div class = "logo-bg">
          <img src = {logo} alt = "Logo" class = "logo" />
        </div>
        <div class = "forums-bg">
            <div class = "page-title">{symbol} Forums {symbol}</div>
            <div class = "inner-forums-bg"><p> Welcome to the forums.
                 If you would like to start a new post click below. If you are
                 browsing, feel free to scroll or use the search bar to find the
                 certain topic you are looking for. In order to start a new forum
                 post, you must be signed in.</p>
            </div>
        </div>
        <div class = "black-bg"></div>
        <div class = "post-bg">
        <div class = "post-title">Add a Post Here</div>
        <div className = "card card-default post-editor" style = {{backgroundColor: '#E1C699'}}>
          <div className = "card-body">
            <textarea className = "form-control post-editor-input" value = {this.state.newPostBody} onChange = {this.handlePostEditorInputChange} />
            <button className = "btn btn-success post-editor-button" onClick = {this.createPost}>Post</button>
          </div>
        </div>
        </div>
      </body>
    </html>
    )
  }
}

export default PostEditor;
