import React from 'react';
import TopComponent from './TopComponent';
import TopComponentOne from './TopComponentOne';
import TokenButtonComponent from './TokenButtonComponent';
import TokenComponentOne from './TokenComponentOne';
import Sidemenu from './Sidemenu';
import Transaction from './Transaction';

const Dashboard = () => {

 return (
  <>
  <Sidemenu />
   <div className='ps-customMarginLeft p-mt-3'>
    <TopComponent />
    
    <TokenButtonComponent />
    <br />
    <TokenComponentOne />
    
    <TopComponentOne />
    {/* <Transaction /> */}
   </div>

  </>
 )
}


export default Dashboard;