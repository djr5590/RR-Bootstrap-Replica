import React from 'react'
import Stores from './Stores'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function StoreListings() {
    const storesSrc = ['https://i0.wp.com/logotaglines.com/wp-content/uploads/2021/11/Aldi-Logo-Tagline-Slogan-Owner-Founder.jpg?fit=640%2C640&ssl=1', 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Sams_Club.svg', 'https://tl.vhv.rs/dpng/s/433-4331578_costco-wholesale-logo-vector-hd-png-download.png']
    const storesNames = ['Aldi', 'Sam\'s Club', 'Costco']
    let storeCards = storesSrc.map((storeLink, index) =>{
        return(
            <Col sm={4}>
                <Stores storeLink={storeLink} storeName={storesNames[index]} />
            </Col>
        )
    })
  return (
    <Container className='mt-2'>
        <Row>
            <Col sm={12} className= 'text-center'>
                <h2>Browse stores in Raleigh</h2>
            </Col>
        </Row>
        <Row>
            {storeCards}
        </Row>
        <Row className='mt-4'>
           {storeCards}
        </Row>
    </Container>
  )
}

export default StoreListings