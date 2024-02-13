import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"

const CatNew = ({ createCat }) => {
  const [catFormData, setCatFormData] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const handleChange = (e) => {
    setCatFormData({ ...catFormData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createCat(catFormData)
  }

  return (
    <>
      <h3>Add Your Cat and Start Making New Friends</h3>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Enter Your Cat's Name</Label>
          <Input
            data-testid="name"
            name="name"
            placeholder="name"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">Enter Your Cat's Age</Label>
          <Input
            data-testid="age"
            name="age"
            placeholder="age"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="enjoys">Enter What Your Cat Likes To Do</Label>
          <Input
            data-testid="enjoys"
            name="enjoys"
            placeholder="enjoys"
            type="textarea"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="url">Enter the URL of Your Cat's Image</Label>
          <Input
            data-testid="image"
            name="image"
            placeholder="url"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  )
}

export default CatNew
