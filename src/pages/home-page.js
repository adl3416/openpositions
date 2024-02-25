
import { Button, DatePicker, Input } from 'antd';
import React from 'react'
import { Col, Container, InputGroup, Row } from 'react-bootstrap'

const HomePage = () => {
  return (        //fluid tam ekran
  <Container className="m">
    <Container >
      <Row className="g-5">


        <Col md={2}>
          <Button> </Button>
        </Col>


           <Col md={2} >
            <h2> Manage Open Positions</h2>
          </Col>

          <Col md={2} >
            <Button> Import</Button>
          </Col>

          <Col md={2}>
          <Button> All</Button>
        </Col>


           <Col md={2} >
            <DatePicker> </DatePicker>
          </Col>

          <Col md={2} >
            <Input/>
          </Col>

      </Row>
      
    </Container>
  </Container>
);
}

export default HomePage