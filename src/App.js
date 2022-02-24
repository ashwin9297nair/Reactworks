import './App.css';
import './plutus.css';
import './temp.css'
import Banner from './components/Banner';
import Footer from './components/Footer';
// import MyNav from './components/navbar/MyNav';
import Dashboard from './components/Plutus/Dashboard';
import { TabViewDemo } from './components/TabView/TabViewDemo';
import { UpcomingEvents } from './components/UpcomingEvents';
// import  React from 'react';
import { useState, useEffect } from 'react';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { AssistAPI } from './components/Plutus/AssistAPI';
import { trendAPI } from './components/Plutus/AssistAPI';
import Assist from './components/Plutus/AssistedPage';


function App() {
  const [chartData, setchartData] = useState([]);
  const [trendData, settrendData] = useState([]);
  const [categData, setcategData] = useState([]);

  useEffect(() => {

    const funct = async () => {
      const categdata = await AssistAPI()
      const [chartdata, trenddata] = await trendAPI()
      setchartData(chartdata)
      settrendData(trenddata)
      setcategData(categdata)
    }
    funct()
  }, [])


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
      <br /><br />
      {/* <TabViewDemo /> */}
      {/* <UpcomingEvents /> */}
      <br /><br />
      {/* <Footer /> */}




    </>
  );
}

export default withRouter(App);
