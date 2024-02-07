import React from "react"
import notACat from "../assets/not-a-cat.jpeg"

const NotFound = () => {
  return (
    <>
      <img
        src={notACat}
        alt="cute little dog that is definitely not a cat"
        className="main-content-image"
      />
      <h4>Oops, no cats here!</h4>
    </>
  )
}

export default NotFound
