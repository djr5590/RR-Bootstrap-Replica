import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

function TopInput() {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><img src="https://cdn-icons-png.flaticon.com/512/1216/1216895.png" alt="Drop Pin"  style={{height: '1.5em'}}/></InputGroup.Text>
                <Form.Control
                    placeholder="Enter Your Address"
                    aria-label="Address"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </>
    )
}

export default TopInput