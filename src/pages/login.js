// Gatsby supports TypeScript natively!
import React, { useState } from "react"
import { PageProps, Link } from "gatsby"
import { useAuth } from "../components/Firebase"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Login = props => {
  const [formValues, setFormValues] = useState({ email: "", password: "" })
  const { firebase } = useAuth()
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
    <Layout>
      <form action="" onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleInputChange}
          value={formValues.email}
          type="text"
          placeholder="email"
        />
        <input
          name="password"
          onChange={handleInputChange}
          value={formValues.password}
          type="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </Layout>
  )
}

export default Login
