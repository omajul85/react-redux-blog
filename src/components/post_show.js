import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component {
  componentDidMount () {
    // match comes from react-router library
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    return (
      post ?
      <div>
        <Link className="btn btn-info" to="/">Home</Link>
        <button className="btn btn-warning pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
        : <h6>Loading post...</h6>
    );
  }
}

// deconstructuring posts from the state object
// the 2nd arg is by convention ownProps
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);