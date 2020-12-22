import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Layout} from 'antd'
import NavBar from './components/header/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import CreateProject from './components/projects/CreateNewProject'

function App() {
  return (
    
        <div className="App">
          <Layout>
         
          <BrowserRouter>
          <NavBar />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/project/createproject" component={CreateProject} />
                <Route path="/project/:id" component={ProjectDetails}/>
              </Switch>   
          </BrowserRouter>
          </Layout>
        </div>
  );
}

export default App;

