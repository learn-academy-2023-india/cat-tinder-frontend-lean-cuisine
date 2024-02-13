import React from "react"
import { NavLink as RouterNavLink, useParams } from "react-router-dom"

const CatShow = ({ cats, deleteCat }) => {
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
      <p>
        {cat?.name} is {cat?.age} years old and enjoys {cat?.enjoys}.
      </p>
      <RouterNavLink to={`/catedit/${cat?.id}`} className="nav-link">
        <p>Edit {cat?.name}</p>
      </RouterNavLink>
      <p className="nav-link" onClick={() => deleteCat(cat.id)}>
        Delete {cat?.name}
      </p>
    </>
  )
}

export default CatShow
