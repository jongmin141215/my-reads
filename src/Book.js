import React from 'react';

function Book(props) {
  const renderAuthors = (book) => {
    if (book.authors) {
      return book.authors.map(author => <div className="author" key={author}>{author}</div>)
    } else {
      return <div className="author">Unknown</div>
    }
  }
  return (
    <div>
      <img src={props.book.imageLinks.thumbnail} className="cover" />
      <div className="title">{props.book.title}</div>
      {renderAuthors(props.book)}
    </div>
  )
}

export default Book;
