import React, { useEffect, useState } from 'react';
import Navbars from '../Navbar/Navbar';
import './Leaderboard.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const api_url = "https://fakestoreapi.com/products"; // Example API, adjust as needed

  useEffect(() => {
    axios.get(api_url)
      .then((response) => {
        // Simulate leaderboard data, adjust mapping based on your API response
        const leaderboardData = response.data.map((item, index) => ({
          position: index + 1,
          name: item.title.split(" ")[0] + " " + item.title.split(" ")[1], // Example name generation
          weeklyPoints: Math.floor(Math.random() * 200), // Random weekly points
          points: Math.floor(Math.random() * 1000) + 900 // Random total points
        })).slice(0, 13); // Limit to 13 entries for this example
        setLeaderboard(leaderboardData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>  
      <Navbars />
      <Row className="m-auto links_pages">
        <Col className="link_learning"><Link to="/home-course" id="link_learning">Home</Link></Col>
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
            {leaderboard.map((entry) => (
              <tr key={entry.position}>
                <td><ol>{entry.position}</ol></td>
                <td>{entry.name}</td>
                <td>{entry.weeklyPoints}</td>
                <td>{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>
    </>
  );
}

export { Leaderboard };