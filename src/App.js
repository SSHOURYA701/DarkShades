import React, { Component } from 'react';
import Header from  './components/common/Header'
import Left from './components/common/Left'
import Footer from './components/common/Footer'
import Right from './components/common/Right'
import './App.css'
import './components/common/Right-Left.css'
import Feed2 from './components/Feed/Feed'
// import {BrowserRouter,Route,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
                 <div> 
          <Header />
        </div>
        <div className="container" >
        <div className="row">
        <div className="col-md-5 kona">
        <Left />
        </div>
        <div className="col-md-1">
        </div>
        <div className="col-md-6">
        <Right />
        </div>
        </div>
        </div>
       
        
       <Footer />
      
      {/* <Feed2 />  */}
       </div>
    
    );
  }
}

export default App;
