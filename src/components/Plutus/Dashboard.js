import React from 'react';
import TopComponent from './TopComponent';
import TopComponentOne from './TopComponentOne';
import TokenButtonComponent from './TokenButtonComponent';
import TokenComponentOne from './TokenComponentOne';
import Sidemenu from './Sidemenu';
import DashboardIn from './DashboardIn';

const Dashboard = () => {

 return (
  <>
  <Sidemenu />
   <div className='ps-customMarginLeft'>
    <TopComponent />
    
    {/* <TokenButtonComponent /> */}
    <DashboardIn />
    <br />
    {/* <TokenComponentOne /> */}
    
    {/* <TopComponentOne /> */}




   </div>

  </>
 )
}


export default Dashboard;