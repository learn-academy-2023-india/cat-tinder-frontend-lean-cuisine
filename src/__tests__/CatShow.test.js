import { render, screen } from "@testing-library/react"
import CatShow from "../pages/CatShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockCats from "../mockCats.js"

describe("<CatShow />", () => {
  it("renders one cat", () => {
    const cat = "1"
    render(
      <MemoryRouter initialEntries={[`/catshow/${cat}`]}>
        <Routes>
          <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
        </Routes>
      </MemoryRouter>
    )

    const catName = screen.getByText(mockCats[0].name)
    expect(catName).toBeInTheDocument()
  })
})
