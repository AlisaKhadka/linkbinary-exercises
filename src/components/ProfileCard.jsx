 import React from "react"
 export default function ProfileCard({ name, title, address, email }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <h3>{address}</h3>
      <p>{email}</p>
    </div>
  )
}

