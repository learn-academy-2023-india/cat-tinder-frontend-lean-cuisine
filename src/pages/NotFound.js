import React from "react"
import notACat from "../assets/not-a-cat.png"

const NotFound = () => {
  return (
    <img
      src={notACat}
      alt="cute little dog that is definitely not a cat"
      className="main-content-image"
    />
  )
}

export default NotFound
