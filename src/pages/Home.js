import React from "react"
import toastKitty from "../assets/toast.jpeg"

const Home = () => {
  return (
    <>
      <h3>Find a Furry Friend</h3>
      <img
        src={toastKitty}
        alt="Toast Kitty hard at work"
        className="main-content-image"
      />
    </>
  )
}

export default Home
