import React, { Component } from 'react';
import AddPost from './AddPost.js';
import moment from 'moment';


class BlogRoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };

    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.getBlog();
  }

  getBlog() {
    fetch('https://cko-dev-test.firebaseio.com/posts.json', {
      method: 'GET',
    })
    .then(function(response) {
      return response.json();
    })
    .then(response => {
      this.setState({
        data: response
      });
    });
  }

  deletePost(key) {
    fetch(`https://cko-dev-test.firebaseio.com/posts/${key}.json`, {
      method: 'DELETE',
    })
    .then(response => {
      this.getBlog();
    });
  }


  render () {
    return (
      <div className="padding">
        <AddPost></AddPost>

        {Object.keys(this.state.data).map(key => {
          const postKey = this.state.data[key];
          return (
            <div className="post uk-card uk-card-default uk-margin" key={key}>
              <table className="uk-table-responsive">
                <tbody>
                  <tr className="uk-child-width-expand">
                    <td className="uk-width-1-3">
                      <img className="post-image" src={postKey.imageUrl} alt={postKey.imageUrl}></img>
                    </td>
                    <td>
                      <div className="post-date uk-margin">{moment(postKey.postDate).format('MMMM DD, YYYY').toUpperCase()}</div>
                      <h4 className="uk-margin">{postKey.title}</h4>
                      <div className="uk-margin">{postKey.summary}</div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="uk-button-group button-group">
                <button className="uk-button uk-button-small post-buttons">Edit</button>
                <button className="uk-button uk-button-small post-buttons" onClick={() => this.deletePost(key)}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default BlogRoll;
