import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
const BookItemWrapper = styled.section`
  display: flex;
  border: 1px solid #ddd;
  background: white;
  padding: 8px;
  margin-bottom: 8px;
  h2 {
    small {
      font-size: 14px;
      font-weight: normal;
      padding-left: 8px;
    }
  }
`
const BookItemImageWrapper = styled.div`
  max-width: 200px;
  img {
    max-width: 200px;
  }
`

const BookItemContentWrapper = styled.div`
  flex-grow: 1;
  padding-left: 8px;
`

const BookItem = ({
  bookCover,
  bookTitle,
  bookSummary,
  authorName,
  children,
}) => {
  return (
    <BookItemWrapper>
      <BookItemImageWrapper>
        <Img fixed={bookCover} />
      </BookItemImageWrapper>
      <BookItemContentWrapper>
        <h2>
          {bookTitle} <small>{authorName}</small>
        </h2>
        <p>{bookSummary}</p>
        <div>{children}</div>
      </BookItemContentWrapper>
    </BookItemWrapper>
  )
}

export default BookItem
