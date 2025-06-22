import React from 'react' 
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './LogOut.css';
export default function LogOut() {//setuserData
    // const [userData, setuserData] = useState(null);

    let navigate= useNavigate();
  
    localStorage.removeItem(null);
    // setuserData(null);
    navigate('/login');
  return <>
  <Button className="but1" id="but-reg" variant="light" size="sm">LogOut</Button>
  </>
}
