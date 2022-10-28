import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography,Space} from 'antd';
import './App.css';
import {Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails} from './components';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
              <Routes>
                  <Route exact path="/" element={<Homepage />}/>
                  {/*<Route exact path="/exchanges" element={<Exchanges/>}/>*/}
                  
                  <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}/>
                    
                  <Route exact path="/crypto/:coinId" element={<CryptoDetails />}/>
                  <Route exact path="/news" element ={<News />}/>
                    
                  
              </Routes>
          </div>
        </Layout>
        <div className='footer' >
          <Typography.Title level ={5} style={{ color: 'white', textAlign: 'center'}}>
            Cryptoverse <br />
            Tous droits réservés.
          </Typography.Title>
          <Space>
            <Link to="/">Accueil</Link>
            {/*<Link to='/exchanges'>Echanges</Link>*/}
            <Link to ="/news">Actualités</Link>
          </Space>
        </div>
      </div>

    </div>
  )
}

export default App