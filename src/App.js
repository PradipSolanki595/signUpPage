import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import SignUpFunc from "./components/SignUpFunc";
import LogIn from "./components/Login";
import Profile from "./components/Profile";
import "./App.css"


function App () {

  
    return(

      
      <div className="main_wrapper">
               <Router>
                    <Switch>
                      
                      <Route exact path="/signup">
                          <SignUpFunc/>
                      </Route>
                      <Route path="/login">
                        <LogIn/>
                      </Route>
                      <Route path="/profile">
                          <Profile />
                      </Route>

                    </Switch>
                </Router>
      </div>
      
    )
  }


 

export default App