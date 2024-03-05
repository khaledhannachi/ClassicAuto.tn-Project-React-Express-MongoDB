import React from 'react'
import Sidebar from './Sidebar'
import ContentUser from './ContentUser'
const DashboardPageUser = ({loggedUser} ) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  scrollToTop ();
  return (
    <div className="relative flex justify-between gap-6">
      <div className='w-1/4 min-h-screen fixed top-0 left-0 h-screen ' >
        <Sidebar />
        </div>
      <div className='w-3/4 mt-10 right-0 absolute' >
        <ContentUser loggedUser={loggedUser} />
        </div>
    </div>
  )
}

export default DashboardPageUser