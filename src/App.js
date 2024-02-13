import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew"
import CatEdit from "./pages/CatEdit"
import NotFound from "./pages/NotFound"

const App = () => {
  const [cats, setCats] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    readCat()
  }, [])

  const readCat = () => {
    fetch("http://localhost:3000/cat_fights")
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((errors) => console.log("Cat read errors:", errors))
  }

  const createCat = (newCat) => {
    fetch("http://localhost:3000/cat_fights", {
      body: JSON.stringify(newCat),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then(() => readCat())
      .catch((errors) => console.log("Cat create errors:", errors))
    navigate("/catindex")
  }

  const updateCat = (cat, id) => {
    fetch(`http://localhost:3000/cat_fights/${id}`, {
      body: JSON.stringify(cat),
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then(() => readCat())
      .catch((errors) => console.log("Cat edit errors:", errors))
    navigate(`/catshow/${id}`)
  }

  const deleteCat = (id) => {
    fetch(`http://localhost:3000/cat_fights/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then(() => readCat())
      .catch((errors) => console.log("Cat delete errors:", errors))
    navigate("/catindex")
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
