import './App.css';
import Header from './MyComponents/Header';
import TopContent from './MyComponents/TopContent';
import MidContent from './MyComponents/MidContent';
import Feedback from './MyComponents/Feedback';
import Footer from './MyComponents/Footer';
import Login from './MyComponents/Login';
import Refferal from './MyComponents/Refferal';
import IPLBonanza from './MyComponents/IPLBonanza';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render = {() => {
            return(
              <>
                <Header></Header>
                <TopContent></TopContent>
                <MidContent></MidContent>
                <Feedback></Feedback>
                <Footer></Footer>
              </>
            )
          }}></Route>
          <Route exact path="/login" render = {() => {
            return(
              <>
                <Login></Login>
              </>
            )
          }}></Route>
          <Route exact path="/referral" render = {() => {
            return(
              <>
                <Refferal></Refferal>
              </>
            )
          }}></Route>
          <Route exact path="/IPLBonanza" render = {() => {
            return(
              <>
                <IPLBonanza></IPLBonanza>
              </>
            )
          }}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
