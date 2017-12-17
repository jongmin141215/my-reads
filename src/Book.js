import React from 'react';

function Book(props) {
  return (
    <div>
      <img src={props.book.imageLinks.thumbnail} class="cover" />
      <div class="title">{props.book.title}</div>
      {props.book.authors.map(author => <div class="author">{author}</div>)}
    </div>
  )
}

export default Book;
