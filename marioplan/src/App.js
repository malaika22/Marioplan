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
                <Route path="/project/:id" component={ProjectDetails}/>
                <Route path="/project/createproject" component={CreateProject} />
              </Switch>   
          </BrowserRouter>
          </Layout>
        </div>
  );
}

export default App;

