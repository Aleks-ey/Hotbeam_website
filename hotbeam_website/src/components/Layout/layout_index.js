import { Outlet } from 'react-router-dom';
import Footer from '../Footer/footer_index';
import Home from '../Home/home_index';
import Topbar from '../Topbar/topbar_index';
import './layout_index.css'

const Layout = () => {
    return (
        <>
            <Topbar />
            <div className='page'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout;
