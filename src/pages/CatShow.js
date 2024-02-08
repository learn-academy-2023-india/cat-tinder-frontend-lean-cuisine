import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  const cat = cats.find((item) => item.id === +id)
  console.log(cat)
  return (
    <>
      <h3>CatShow component</h3>
      <img
        src={cat?.image}
        alt="profile of all our cats friends"
        className="cat-profile-pic"
      />
      <p>{cat?.name}</p>
      <p>{cat?.age}</p>
      <p>{cat?.enjoys}</p>
    </>
  )
}

export default CatShow
