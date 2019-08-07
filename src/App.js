import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Contents from './components/contents/Contents';
import Footer from './components/footer/Footer';
import Dialogs from './components/contents/dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom'; 
import Music from './components/contents/music/Music';
import News from './components/contents/news/News';
import Settings from './components/contents/settings/Settings';

const App = () => {
    return (
        <BrowserRouter>
        
        <div className="wrapper">
            <Header />
            <Nav />
            <div className="wrapperContent">
                <Route path='/contents' component={Contents} />
                <Route path='/dialogs' component={Dialogs} />
                <Route path='/music' component={Music} />
                <Route path='/news' component={News} />
                <Route path='/settings' component={Settings} />
            </div>
            <Footer />
        </div>
        </BrowserRouter>

    )


}

export default App;
