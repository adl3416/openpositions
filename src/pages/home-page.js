
import { Button, DatePicker,Input } from 'antd';
import React from 'react'
import { Col, Container, InputGroup, Row, Form} from 'react-bootstrap'
import Spacer from '../components/spacer';
import { FaCirclePlus } from "react-icons/fa6";

const HomePage = () => {
  return (        //fluid tam ekran
  <Container className="m">
    <Spacer/>
    <Container >
      <Row className="g-5">


        <Col md={2}>
          <Button> <FaCirclePlus /> </Button>
        </Col>


           <Col md={2} >
            <h3> Manage Open Positions</h3>
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
    <Form>
      <div></div>
    </Form>
  </Container>
);
}

export default HomePage