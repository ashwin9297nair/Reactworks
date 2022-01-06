import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import MyNav from './components/navbar/MyNav';
import { TabViewDemo } from './components/TabView/TabViewDemo';
import { UpcomingEvents } from './components/UpcomingEvents';

function App() {
  return (
    <>

      <MyNav />

      <Banner />
      <br /><br />
      <TabViewDemo />
      <UpcomingEvents />
      <br /><br />
      <Footer />

    </>
  );
}

export default App;
