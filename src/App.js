import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ContactPage from './pages/contactpage/contactpage.component';
import HeaderComp from './components/header/header.component';
import FooterComp from './components/footer/footer.component';
import ShopPage from './pages/shoppage/shop-page.component';
import SigninSignUpPage from './pages/sign-in-register/sign-in-register-page.component';
import { auth } from './firebase/firebase.utils';

const HatsPage = () => {
  return (
 
<div>
  <h1>Hats Page</h1>
</div>);
};

const TopicList = props =>{
  console.log(props);
  return( <div>
    <h1>TopicPage works</h1>
    <Link to='/topic/12'>Topic 12</Link>
  </div>);
   
   };

   const TopicDetail = props =>{
    console.log(props);
    return( <div> 
      {/* <Link to='/topic'>Topic</Link> */}
      <button onClick={() => props.history.push('/topic')}>Topic</button>
      <h1> Topic Detail Id {props.match.params.topicId}</h1>

     
    </div>);
     
     };
  

  class App extends React.Component{
    constructor(){
     super();
    
     this.state = {
      currentUser: null
    };

    }

    unsubscribeFromAuth = null;
    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({ currentUser: user });
  
        console.log(user);
      });
    }
  
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
  


    render(){
      return (
        <div>
        <HeaderComp  currentUser={this.state.currentUser}/>
        {/* <HomePage /> */}
        <div className="maincontent">
          <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hat' component={HatsPage}/>
        <Route path='/contact' component={ContactPage}/>
        <Route exact path='/topic' component={TopicList}/>
        <Route path='/topic/:topicId' component={TopicDetail}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signinregister' component={SigninSignUpPage}/>
        </Switch>
        </div>
        <FooterComp />
        </div>
      );
    }

    }
export default App;
