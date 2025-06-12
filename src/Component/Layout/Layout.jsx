import React from 'react'

import Footer from '../Footer/Footer'
import { Outlet ,useLocation} from 'react-router-dom'

// export default function Layout() {
//   return <>
//   {/* <Navbars/> */}
//   <Outlet></Outlet>
//   <Footer/>
//   </>
// }
export default function Layout () {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/dashboard', '/verify-email'];
  const showFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <div>
      <Outlet />
      {showFooter && <Footer />}
    </div>
  );
};