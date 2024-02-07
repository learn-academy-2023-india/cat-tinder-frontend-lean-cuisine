import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom'

describe("<Header />", () => {
  it("renders an index link", () => {
    // Arrange
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // Debugging 
    // screen.debug()
    // screen.logTestingPlaygroundURL()
    // Act
    const indexLink = screen.getByText("Meet All the Cats")
    // Assert
    expect(indexLink).toBeInTheDocument()
  })

  it("renders a create link", () => {
    // Arrange
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    // Debugging 
    // screen.debug()
    // Act
    const createLink = screen.getByText("Add Your Cat")
    // Assert
    expect(createLink).toBeInTheDocument()
  })
})
