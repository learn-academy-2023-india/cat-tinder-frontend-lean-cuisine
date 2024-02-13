import React, { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useParams } from "react-router-dom"

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  const cat = cats.find((item) => item.id === +id)

  const [catFormData, setCatFormData] = useState({
    name: cat?.name,
    age: cat?.age,
    enjoys: cat?.enjoys,
    image: cat?.image
  })

  const handleSubmit = () => {
    updateCat(catFormData, cat.id)
  }

  return (
    <>
      <h3>Modify Your Cat's Information</h3>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Enter Your Cat's Name</Label>
          <Input
            data-testid="name"
            name="name"
            type="text"
            value={catFormData.name}
            onChange={(e) =>
              setCatFormData({ ...catFormData, name: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">Enter Your Cat's Age</Label>
          <Input
            data-testid="age"
            name="age"
            type="number"
            value={catFormData.age}
            onChange={(e) =>
              setCatFormData({ ...catFormData, age: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="enjoys">Enter What Your Cat Likes To Do</Label>
          <Input
            id="enjoys"
            data-testid="enjoys"
            name="enjoys"
            type="textarea"
            value={catFormData.enjoys}
            onChange={(e) =>
              setCatFormData({ ...catFormData, enjoys: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="url">Enter the URL of Your Cat's Image</Label>
          <Input
            data-testid="image"
            name="image"
            type="text"
            value={catFormData.image}
            onChange={(e) =>
              setCatFormData({ ...catFormData, image: e.target.value })
            }
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  )
}

export default CatEdit
