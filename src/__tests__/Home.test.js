import { render, screen } from '@testing-library/react';
import Home from '../pages/Home'
import { BrowserRouter } from 'react-router-dom'
import toastKitty from "../assets/cat-home.png"

describe("<Home />", () => {
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", toastKitty)
  })
})