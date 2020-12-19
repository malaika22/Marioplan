import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Layout} from 'antd'
import NavBar from './components/header/NavBar'
function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Layout>
              <NavBar />
          </Layout>


        </div>
    
    </BrowserRouter>

  );
}

export default App;
