import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Stores({  storeLink, storeName }) {
  return (
    <Row>
        <Col sm={3}>
            <img src={storeLink} alt={storeName} style={{height: '3em'}} />
        </Col>
        <Col sm={6}>
            <Row>
                <Col sm={12}>{storeName}</Col>
            </Row>
            <Row>
                <Col sm={12}>Delivery | Pickup</Col>
            </Row>
        </Col>
    </Row>

  )
}

export default Stores