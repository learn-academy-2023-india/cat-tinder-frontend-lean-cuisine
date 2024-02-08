import React from "react"

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
              <p>{cat.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CatIndex
