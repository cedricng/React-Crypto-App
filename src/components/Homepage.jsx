import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic} from 'antd';
import {Link} from 'react-router-dom';
import {  useGetCryptosQuery} from '../services/cryptoApi';
import {News, Cryptocurrencies} from '../components';
import Loader from './Loader'; 


const {Title} = Typography;
const Homepage = () => {
  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;


  if (isFetching) return <Loader/>;
  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Statistiques globales
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Nombre de cryptomonnaies" value={globalStats.total}/>
        </Col>
        <Col span={12}>
          <Statistic title="Nombre de plateforme d'échanges" value={millify(globalStats.totalExchanges)}/>
        </Col>
        <Col span={12}>
          <Statistic title="Capitalisation en Dollars" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Volume en 24h" value={millify(globalStats.total24hVolume)}/>
        </Col>
        <Col span={12}>
          <Statistic title="Nombre de marchés" value={millify(globalStats.totalMarkets)}/>
        </Col>
        
      </Row>

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 des cryptomonnaies</Title>
        <Title level={3} className='détails'><Link to="/cryptocurrencies">Détails</Link></Title>
      </div>
      <Cryptocurrencies  simplified/>

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Dernières Actualités</Title>
        <Title level={3} className='détails'><Link to="/news">Détails</Link></Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage