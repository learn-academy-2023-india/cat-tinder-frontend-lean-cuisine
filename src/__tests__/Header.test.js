import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom'

describe("<Header />", () => {
  it("renders a logo", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
      // Debugging 
      // screen.debug()
      // screen.logTestingPlaygroundURL()
    // Act
    const logo = screen.getByRole('img', {
      name: /thin outline of a cat with a long tail/i
    })
    expect(logo).toBeInTheDocument()
  })

  it("renders an index link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const indexLink = screen.getByText("Meet All the Cats")
    expect(indexLink).toBeInTheDocument()
  })

  it("renders a create link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const createLink = screen.getByText("Add Your Cat")
    expect(createLink).toBeInTheDocument()
  })

  it("renders an adopt a cat link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const adoptLink = screen.getByRole('link', {
      name: /adopt a cat!/i
    })
    expect(adoptLink).toBeInTheDocument()
  })
})
