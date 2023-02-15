import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout_index';
import Home from './components/Home/home_index';
import Services from './components/Services/services_index';
import ContactUs from './components/Contact_Us/contact_index';
import OurMission from './components/Our_Mission/mission_index';
import MeetTheDJs from './components/Meet_the_DJs/meet_index';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/meet" element={<MeetTheDJs />} />
        <Route path="/mission" element={<OurMission />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
