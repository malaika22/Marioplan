import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Layout} from 'antd'
import NavBar from './components/header/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import {ProjectDetails} from './components/projects/ProjectDetails'
import CreateProject from './components/projects/CreateNewProject'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
  return (
    
        <div className="App">
          <Layout>
          <BrowserRouter>
          <NavBar />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/projects/:id" component={ProjectDetails}/>
                <Route path='/signin' component={SignIn}/>
                <Route path="/create" component={CreateProject} />
                <Route path='/signup' component={SignUp} />
              </Switch>   
          </BrowserRouter>
          </Layout>
        </div>
  );
}

export default App;

