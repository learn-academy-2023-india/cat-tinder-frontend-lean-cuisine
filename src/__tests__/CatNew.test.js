import { render, screen } from "@testing-library/react"
import CatNew from "../pages/CatNew"
import { BrowserRouter } from "react-router-dom"

describe("<CatNew />", () => {
  it("renders a form for a new cat", () => {
    render(
      <BrowserRouter>
        <CatNew createCat={() => {}} />
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
