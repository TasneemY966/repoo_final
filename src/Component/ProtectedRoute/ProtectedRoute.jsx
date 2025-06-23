import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
  if(!localStorage.getItem('token')){
    return <Navigate to='/login'/>
  }
  else {
    
      return props.children;


}
// else if(props.userData === 6){
    
//       return <Navigate to='/home-course'/>
      
// }
}
