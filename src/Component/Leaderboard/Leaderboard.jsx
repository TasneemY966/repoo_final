import React from 'react'
import Navbars from '../Navbar/Navbar'
import './Leaderboard.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Leaderboard() {
  return (
    <>  
    <Navbars/>
    <Row className="m-auto links_pages">
        <Col className="link_learning"><Link to="/home-course" id="link_learning" >Home</Link></Col>
        <Col className="link_learning"><Link to="/tracks" id="link_learning">Tracks</Link> </Col>
        <Col className="link_learning"><Link to="/My-learning" id="link_learning">My learning</Link> </Col>
        <Col className="link_home"><Link to="/Leaderboard" id="link_home">Leaderboard</Link> </Col>
      </Row>
      <Row>
        <table>
          <thead>
            <tr>
             <th>Position</th>
              <th>Name</th>
              <th>Weekly Points</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><ol>1</ol></td>
              <td>John Doe</td>
              <td>1500</td>
              <td>5000</td>
            </tr>
            <tr>
              <td><ol>2</ol></td>
              <td>John Doe</td>
              <td>1500</td>
              <td>5000</td>
            </tr>
          </tbody>
        </table>
      </Row>
    </>
  )
}
export {Leaderboard};