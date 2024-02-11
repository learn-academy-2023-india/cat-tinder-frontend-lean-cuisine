import React from "react"
import { NavLink as RouterNavLink } from "react-router-dom"

const CatIndex = ({ cats }) => {
  return (
    <>
      <h3>Meet All the Cats</h3>
      <div className="cat-index-section">
        {cats?.map((cat) => {
          return (
            <div key={cat.id}>
              <img
                src={cat.image}
                alt="profile of all our cats friends"
                className="cat-profile-pic"
              />
              <RouterNavLink to={`/catshow/${cat.id}`} className="nav-link">
                <p>{cat.name}</p>
              </RouterNavLink>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CatIndex
