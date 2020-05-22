import React from "react"
import Layout from "../components/layout"
import BookItem from "../components/BookItem"

const BookTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <BookItem
        authorName={pageContext.author.name}
        bookSummary={pageContext.summary}
        bookTitle={pageContext.title}
      />
    </Layout>
  )
}
export default BookTemplate
