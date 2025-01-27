import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nb-logo'>
        <a href="/">Logo</a>
      </div>
      <ul className='nb-links'>
        <li><a href="/search">Haku</a></li>
        <li><a href="/new-cars">Uudet</a></li>
        <li><a href="/reviews">Arvostelut</a></li>
      </ul>
    </nav>
  )
}
