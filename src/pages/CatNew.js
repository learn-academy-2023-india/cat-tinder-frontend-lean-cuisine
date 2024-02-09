import React, { useState } from "react"
import { Form, FormGroup, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const CatNew = ({ createCat }) => {
  const [catFormData, setCatFormData] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCatFormData({ ...catFormData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createCat(catFormData)
    navigate("/catindex")
  }

  return (
    <>
      <h3>Add Your Cat Info to Make New Cat Friends</h3>
      <Form>
        <FormGroup>
          <Input
            id="name"
            name="name"
            placeholder="Enter Your Cat's Name"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="age"
            name="age"
            placeholder="Enter Your Cat's Age"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="enjoys"
            name="enjoys"
            placeholder="Enter What Your Cat Likes To Do"
            type="textarea"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="image"
            name="image"
            placeholder="Enter the URL of Your Cat's Image"
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
