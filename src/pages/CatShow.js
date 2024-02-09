import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  const cat = cats.find((item) => item.id === +id)
  return (
    <>
      <h3>Meet {cat?.name}</h3>
      <img
        src={cat?.image}
        alt="profile of all our cats friends"
        className="cat-profile-pic"
      />
      <p>{cat?.age}</p>
      <p>{cat?.enjoys}</p>
    </>
  )
}

export default CatShow
