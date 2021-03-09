import React from 'react'
import '../styles/Main.css'

const League = () => {
  return (
    <main className="main">
      <h3 className="title">Create your fixtures</h3>
      <div className="button-group">
      <div className="selector">
        <button className="selector-button">GROUP</button>
        <button className="selector-button active">LEAGUE</button>
      </div>
      </div>
      <h3 className="title">Teams quantity</h3>
      <div className="button-group">
      <button className="button">4</button>
      <button className="button">4</button>
      <button className="button">4</button>
      <button className="button">4</button>
      </div>
      <h3 className="title">Your teams</h3>
      <div className="input-group">
        <input type="text" className="input" placeholder="Team 1"/>
        <input type="text" className="input" placeholder="Team 2"/>
        <input type="text" className="input" placeholder="Team 3"/>
        <input type="text" className="input" placeholder="Team 4"/>
        <input type="text" className="input" placeholder="Team 1"/>
        <input type="text" className="input" placeholder="Team 2"/>
        <input type="text" className="input" placeholder="Team 3"/>
        <input type="text" className="input" placeholder="Team 4"/>
      </div>
    </main>
  )
}

export default League
