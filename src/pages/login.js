// Gatsby supports TypeScript natively!
import React, { useState, useContext } from "react"
import { FirebaseContext } from "../components/Firebase"
import { Form, Input, Button, ErrorMessage } from "../components/common"

const Login = props => {
  const [formValues, setFormValues] = useState({ email: "", password: "" })
  const { firebase } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    firebase
      .login({ email: formValues.email, password: formValues.password })
      .catch(error => {
        console.log(error)
        setErrorMessage(error.message)
      })
  }
  function handleInputChange(e) {
    e.persist()
    setErrorMessage("")
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section>
      <Form action="" onSubmit={handleSubmit}>
        <Input
          name="email"
          onChange={handleInputChange}
          value={formValues.email}
          type="text"
          placeholder="email"
          required
        />
        <Input
          name="password"
          onChange={handleInputChange}
          value={formValues.password}
          type="password"
          placeholder="password"
          required
        />
        {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button block type="submit">
          Login
        </Button>
      </Form>
    </section>
  )
}

export default Login
