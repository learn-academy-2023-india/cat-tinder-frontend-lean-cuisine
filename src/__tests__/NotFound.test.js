import notACat from "../assets/not-a-cat.png"
import NotFound from "../pages/NotFound"
import { BrowserRouter } from "react-router-dom"
import { screen, render } from "@testing-library/react"

describe("<NotFound />", () => {
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", notACat)
  })
})