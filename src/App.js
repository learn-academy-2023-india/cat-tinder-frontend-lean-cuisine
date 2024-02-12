import React, { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew"
import CatEdit from "./pages/CatEdit"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"
// import mockCats from "./mockCats.js"

const App = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    readCat()
  })

  const readCat = () => {
    fetch("http://localhost:3000/cat_fights")
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((errors) => console.log("Cat read errors:", errors))
  }

  const createCat = (newCat) => {
    fetch("http://localhost:3000/cat_fights", {
      body: JSON.stringify(newCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readCat())
      .catch((errors) => console.log("Cat create errors:", errors))
  }

  const updateCat = (cat, id) => {
    console.log(cat)
    console.log(id)
  }

  const deleteCat = (id) => {
    console.log(id)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route
          path="/catshow/:id"
          element={<CatShow cats={cats} deleteCat={deleteCat} />}
        />
        <Route path="/catnew" element={<CatNew createCat={createCat} />} />
        <Route
          path="/catedit/:id"
          element={<CatEdit cats={cats} updateCat={updateCat} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
