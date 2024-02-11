import { render, screen } from "@testing-library/react"
import CatEdit from "../pages/CatEdit"
import { BrowserRouter } from "react-router-dom"
import mockCats from "../mockCats.js"

describe("<CatEdit />", () => {
  it("renders a form for a new cat", () => {
    render(
      <BrowserRouter>
        <CatEdit cats={mockCats} updateCat={() => {}} />
      </BrowserRouter>
    )

    const catName = screen.getByTestId("name")
    expect(catName).toBeInTheDocument()
    const catAge = screen.getByTestId("age")
    expect(catAge).toBeInTheDocument()
    const catEnjoys = screen.getByTestId("enjoys")
    expect(catEnjoys).toBeInTheDocument()
    const catImage = screen.getByTestId("image")
    expect(catImage).toBeInTheDocument()
    const submit = screen.getByText("Submit")
    expect(submit).toBeInTheDocument()
  })
})
