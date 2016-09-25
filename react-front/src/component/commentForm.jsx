import React, {Component} from 'react';

export default class CommentForm extends Component {
  constructor() {
    super();
    this.state = { author: '', text: '' };
  }
  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }
  handleTextChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({ author: author, text: text });
    this.setState({ author: '', text: '' });
  }
  render() {
    return (
      <form className="commentForm" onSubmit={ev => this.handleSubmit(ev)}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={ev => this.handleAuthorChange(ev)}
          />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={ev => this.handleTextChange(ev)}
          />
        <input type="submit" value="Post" />
      </form>
    );
  }
};