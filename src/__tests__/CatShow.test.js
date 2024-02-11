import { render, screen } from "@testing-library/react"
import CatShow from "../pages/CatShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockCats from "../mockCats.js"

describe("<CatShow />", () => {
  it("renders one cat", () => {
    render(
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
          <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
        </Routes>
      </MemoryRouter>
    )

    const catName = screen.getByText(`Meet ${mockCats[0].name}`)
    expect(catName).toBeInTheDocument()
    const catInfo = screen.getByText(
      "Mittens is 5 years old and enjoys sunshine and warm spots."
    )
    expect(catInfo).toBeInTheDocument()
  })
})
