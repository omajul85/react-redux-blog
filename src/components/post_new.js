import React, { Component } from 'react';
import { Field, reduxForm }from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {field.meta.error}
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field name="title" label="Title" component={this.renderField} />
        <Field name="categories" label="Categories" component={this.renderField} />
        <Field name="content" label="Content" component={this.renderField} />
      </form>
    );
  }
}

// values -> { title: 'foo', categories: 'tito, tete', content: 'La la la'}
function validate(values) {
  const errors = {};

  // Validate the input from values
  if (!values.title) {
    errors.title = "Enter a title"
  }

  if (!values.categories) {
    errors.categories = "Enter some categories"
  }

  if (!values.content) {
    errors.content = "Enter some content"
  }

  // if errors if empty, the form is fine to submit. In case of errors, the form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm' //this is kind of a namespace (unique) for the form
})(PostsNew);