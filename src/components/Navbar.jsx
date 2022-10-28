import React , {useState, useEffect }from 'react';
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize= () => setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize);

    handleResize();
    return () => window.removeEventListener('resize',handleResize);
  }, [])

  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className='logo'>
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
              <MenuOutlined/>
            </Button>
        </div>
        {activeMenu && (<Menu theme="dark">
          <Menu.Item icon ={<HomeOutlined/>} >
            <Link to="/">Accueil</Link>  
          </Menu.Item >
          <Menu.Item icon ={<FundOutlined/>} >
            <Link to="/cryptocurrencies">Cryptomonnaies</Link>  
          </Menu.Item >
          {/*<Menu.Item icon ={<MoneyCollectOutlined/>} >
            <Link to="/exchanges">Echanges</Link>  
  </Menu.Item >*/}
          <Menu.Item icon ={<BulbOutlined/>} >
            <Link to="/news">Actualités</Link>  
          </Menu.Item >
        </Menu>)}
    </div>
  )
}

export default Navbar