import React from 'react';

function Book(props) {
  return (
    <div>
      <img src={props.book.imageLinks.thumbnail} />
      {props.book.title}
      {props.book.authors.map(author => <p>{author}</p>)}
    </div>
  )
}

export default Book;
