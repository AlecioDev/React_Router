import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

import Home from './Pages/Home/Home.js';
import NotFound from './Pages/NotFound/NotFound.js';
import Contact from './Pages/Contact/Contact.js';
import About from './Pages/About/About.js';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Home/>} />
                <Route exact={true} path="/About" element={<About/>} />
                <Route exact={true} path="/Contact" element={<Contact/>} />
                <Route exact={true} path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
