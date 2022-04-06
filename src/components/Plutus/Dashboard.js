import React from 'react';
import TopComponent from './TopComponent';
import TopComponentOne from './TopComponentOne';
import TokenButtonComponent from './TokenButtonComponent';
import TokenComponentOne from './TokenComponentOne';
import Sidemenu from './Sidemenu';
import DashboardIn from './DashboardIn';
import Transfer from './Transfer'
import Swap from './Swap';
import ChtBot from './ChtBot';
import PlutusLanding from './PlutusLanding';
import CreateFund from './CreateFund';
import Funds from './Funds';
import AboutUs from './AboutUs';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ProfileSettings from '../Setting/ProfileSettings';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {

  return (
    <>
      {/* <PlutusLanding /> */}

      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <AboutUs /> */}
      <Sidemenu />
      <div className='ps-customMarginLeft'>
        <ProfileSettings />
        {/* <TopComponent /> */}
        {/* <TokenButtonComponent /> */}
        {/* <DashboardIn />  */}
    <br />
    {/* <TokenComponentOne /> */}

        {/* <TopComponentOne /> 

        {/* <Transfer /> */}
        {/* <ChtBot /> */}
        {/* <Swap /> */}

        {/* <CreateFund /> */}
        {/* <Funds /> */}


      </div>

    </>
  )
}


export default Dashboard;