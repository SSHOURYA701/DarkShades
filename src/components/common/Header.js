import React,{Component} from 'react';

import {Link} from 'react-router-dom'
//import {axios} from 'axios'
 
class Header extends Component {
  
  

  render()
  {
    return (

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="/Users/shivamraj/Documents/React/hack-2/hack-2/src/components/Feed/Feed.js">DarkdShades <span>😎</span></a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      
      <li class="nav-item">
        <a class="nav-link" href="#">Co-Founders</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0" method="post" action="">
      <input class="form-control mr-sm-2" type="text" placeholder="Enter your Email" aria-label="Search" required="true"/>
      <input class="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Search"  required="true"/>
      <button type="button" class="btn btn-info"  >Log In</button>
    </form>
  </div>
</nav>
    );
  }


}


export default Header