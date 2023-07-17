import React from 'react'
import { Link } from 'react-router-dom'

export default function SelectModal() {
  return (
    <div style={{paddingLeft:"15%",paddingTop:"10%"}}>
        <h1>
            All Modals!
        </h1>
        <br />
        <h4>
             Click to view the model
        </h4>
        <ul>
        <li> <Link to="/testing">Testing Room</Link></li>
        <li> <Link to="/waitingroom">Waiting Room</Link></li>
        <li> <Link to="/bunker">Bunker</Link></li>
        <li> <Link to="/controlroom">Control Room</Link></li>
        <li> <Link to="/finalroom">Final Room</Link></li>
        </ul>
    </div>
  )
}
