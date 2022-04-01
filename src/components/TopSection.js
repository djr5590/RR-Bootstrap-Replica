import React from 'react'
import SelectCountry from './SelectCountry'
import TopInput from './TopInput'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


function TopSection() {
    return (
        <>
            <Container className='top-section'>
                <Row>
                    <Col sm={2} className="p-4">
                        <SelectCountry />
                    </Col>
                    <Col sm={7}>
                        <Row>
                            <Col sm={12}>
                                <h2 className='text-left pt-3'>Order Groceries for delivery or pickup today</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={10}>
                                <TopInput />
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>

        </>
    )
}

export default TopSection