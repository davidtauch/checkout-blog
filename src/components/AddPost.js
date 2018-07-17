import React, { Component } from 'react';

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      imageUrl: '',
      summary: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const field = event.target.name;

    this.setState({
      [field]: value
    });
  }

  submit() {
    fetch('https://cko-dev-test.firebaseio.com/posts.json', {
      method: 'POST',
      body: JSON.stringify({
        imageUrl: this.state.imageUrl,
        postDate: new Date(),
        summary: this.state.summary,
        title: this.state.title
      })
    })
    .then(function(response) {
      // update BlogRoll data
      console.log('SUCCESS');
      return;
    })
  }

  render () {
    return (
      <div id="add-post-modal" uk-modal='true'>
        <div className="uk-modal-dialog uk-modal-body modal">
          <form className="padding">
            <div className="uk-margin">
              <input name="title" className="uk-input" type="text" placeholder="Enter post title" value={this.state.title} onChange={this.handleInputChange}></input>
            </div>
            <div className="uk-margin">
              <input name="imageUrl" className="uk-input" type="text" placeholder="Post image URL" value={this.state.imageUrl} onChange={this.handleInputChange}></input>
            </div>
            <div className="uk-margin">
              <textarea name="summary" className="uk-textarea" type="text" placeholder="Enter summary" value={this.state.summary} onChange={this.handleInputChange}></textarea>
            </div>
            <button className="uk-modal-close uk-button button" type="button" onClick={this.submit}>Submit</button>
          </form>
        </div>
      </div>
    );
  }

}

export default AddPost;
