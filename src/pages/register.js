import React, { useState, useContext } from "react"
import { Form, Input, Button, ErrorMessage } from "../components/common"
import { FirebaseContext } from "../components/Firebase"

const Register = () => {
  const { firebase } = useContext(FirebaseContext)
  const [errorMessage, setErrorMessage] = useState("")
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  })
  function handleSubmit(e) {
    e.preventDefault()
    if (formValues.password === formValues.confirmPassword) {
      firebase
        .register({
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
        })
        .catch(error => {
          setErrorMessage(error.message)
        })
    } else {
      setErrorMessage("Password and confirm password fields must match")
    }
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
    <Form action="" onSubmit={handleSubmit}>
      <Input
        onChange={handleInputChange}
        value={formValues.username}
        autoComplete="off"
        name="username"
        placeholder="username"
        type="text"
        required
        minLength={3}
      />
      <Input
        onChange={handleInputChange}
        value={formValues.email}
        autoComplete="off"
        name="email"
        placeholder="email"
        type="email"
        required
        minLength={3}
      />

      <Input
        onChange={handleInputChange}
        value={formValues.password}
        name="password"
        placeholder="password"
        type="password"
        required
        minLength={6}
      />
      <Input
        onChange={handleInputChange}
        value={formValues.confirmPassword}
        name="confirmPassword"
        placeholder="confirm password"
        type="password"
        required
        minLength={6}
      />
      {!!ErrorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button type="submit" block>
        Register
      </Button>
    </Form>
  )
}
export default Register
