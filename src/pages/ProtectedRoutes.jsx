import React, {} from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  // const [hasToken, setHasToken] = useState()


  // useEffect(() => {
  //   setHasToken(localStorage.getItem('token'))
  // }, [])
  
  // console.log(hasToken);
  if (localStorage.getItem('token')) {
    return (
      <Outlet />
     )
  }else{
    return <Navigate to='login'/>
  }

  
}

export default ProtectedRoutes