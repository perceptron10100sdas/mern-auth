import React from 'react'
import "../styles/header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div >
        <div class="header">
      <h1>Auth project </h1>
      </div>
      <div class="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sign">sign</Link>

      </div>
    </div>
  )
}
