// Gatsby supports TypeScript natively!
import React, { useState, useContext } from "react"
import { FirebaseContext } from "../components/Firebase"
import { Form } from "../components/common/Form"
import { Input } from "../components/common/Input"
import { Button } from "../components/common/Button"
const Login = props => {
  const [formValues, setFormValues] = useState({ email: "", password: "" })
  const { firebase } = useContext(FirebaseContext)
  function handleSubmit(e) {
    e.preventDefault()
    firebase.login({ email: formValues.email, password: formValues.password })
  }
  function handleInputChange(e) {
    e.persist()
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
        />
        <Input
          name="password"
          onChange={handleInputChange}
          value={formValues.password}
          type="password"
          placeholder="password"
        />
        <Button block type="submit">
          Login
        </Button>
      </Form>
    </section>
  )
}

export default Login
