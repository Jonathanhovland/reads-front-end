import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



const Books = ({books}) => {
  console.log("books",books)
  return books.map((book, i) => {
    return(
      <Card key={i}>
        <Image src={book.bookCoverURL} />
        <Card.Content>
          <Card.Header>{book.bookTitle}</Card.Header>
          <Card.Description>Genre: {book.bookGenre}</Card.Description>
          <Card.Description>{book.bookDescription}</Card.Description>
        </Card.Content>
      </Card>
    )
  })
}

export default Books