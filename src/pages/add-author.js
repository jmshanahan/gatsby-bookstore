import React, { useState, useContext } from "react"
import { FirebaseContext } from "../components/Firebase"
import { Form, Input, Button } from "../components/common"

const AddAuthor = () => {
  const { firebase } = useContext(FirebaseContext)

  const [authorName, setAuthorName] = useState("")
  const [success, setSuccess] = useState(false)
  function handleSubmit(e) {
    e.preventDefault()
    console.log(authorName)
    firebase.createAuthor({ authorName }).then(() => {
      console.log("Added author")
      //   setAuthorName("")
      //   setSuccess(true)
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="author name"
        onChange={e => {
          e.persist()
          setSuccess(false)

          setAuthorName(e.target.value)
        }}
        value={authorName}
      />
      {!!success && <span>Author created successfully!</span>}
      <Button type="submit" block>
        Add new author
      </Button>
    </Form>
  )
}
export default AddAuthor
