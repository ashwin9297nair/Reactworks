import './App.css';
import './plutus.css';
import './setting.css';
import './transfer.css';
import './temp.css'
import './chatbot.css'
import Banner from './components/Banner';
import Footer from './components/Footer';
// import MyNav from './components/navbar/MyNav';
import Dashboard from './components/Plutus/Dashboard';
import { TabViewDemo } from './components/TabView/TabViewDemo';
import { UpcomingEvents } from './components/UpcomingEvents';
// import  React from 'react';
import { useState, useEffect } from 'react';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';


function App() {
  const [chartData, setchartData] = useState([]);
  const [trendData, settrendData] = useState([]);
  const [categData, setcategData] = useState([]);


  return (

    <>
      {/* <div>
        <Switch>
          <Route exact path="/assist" component={Assist} render={() => <Assist APIdata={categData} chartdata={chartData} trenddata={trendData} />} />
        </Switch>
      </div> */}


      <Dashboard />

      {/* <MyNav /> */}
      {/* <Banner /> */}
      {/* <TabViewDemo /> */}
      {/* <UpcomingEvents /> */}

      {/* <Footer /> */}




    </>
  );
}

export default withRouter(App);
