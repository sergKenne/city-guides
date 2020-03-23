import React, { Component} from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import { Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import News from './components/pages/News';
import NotFoundPage from './components/pages/NotFoundPage';
import {UseContext} from './context'
import { placeInfo, reviews, detailInfo, news} from './data'


class App extends Component {

  state = {
    detailInfo: detailInfo
  }

  showInfo = (item) => {
      console.log(item);
      this.setState({ detailInfo: item});
  }


  render() {
    return (
      <UseContext.Provider value={{ placeInfo, detailInfo:this.state.detailInfo, reviews, news, showInfo:this.showInfo }}>
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/news" component={News} />
            <Route path="/details" component={Details} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>  
        <Footer />
      </div>
      </UseContext.Provider>
    );
  } 
}

export default App;
