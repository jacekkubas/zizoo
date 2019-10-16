import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Lists from './components/Lists';
import Footer from './components/Footer';
import Request from './components/Request';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <div className="container">
          <div className="page__wrapper">
            <div className="page__sidebar">
              <Sidebar />
            </div>
            <div className="page__lists">
              <Lists />
            </div>
          </div>
          <Request />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
