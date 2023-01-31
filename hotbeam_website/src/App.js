import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout_index';
import Home from './components/Home/home_index';
import Services from './components/Services/services_index';
import Contact_Us from './components/Contact_Us/contact_index';
import Our_Mission from './components/Our_Mission/mission_index';
import Meet_the_DJs from './components/Meet_the_DJs/meet_index';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="meet" element={<Meet_the_DJs />} />
        <Route path="mission" element={<Our_Mission />} />
        <Route path="contact" element={<Contact_Us />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
