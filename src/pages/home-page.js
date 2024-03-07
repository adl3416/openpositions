
import { Button, DatePicker,Input, Select } from 'antd';
import React, { useEffect, useState } from 'react'
import { Col, Container, InputGroup, Row, Form} from 'react-bootstrap'
import Spacer from '../components/spacer';
import { FaCirclePlus } from "react-icons/fa6";
import { services } from '../api/service';

const HomePage = () => {

    const [home, setHome] = useState([]);
    const [loadind, setLoadind] = useState(true);

    const loadData =async () =>{

      try {
        const resp = await services();
        setHome(resp.data)

      } catch (err) {
        console.log(err)
        
      }
      finally{
        setLoadind(false)
      }
    };

      useEffect(() => {  // sadece ilk yuklenirken  caliscak
       loadData(); // componet ilk render olunca backende  baglancak bu fonksiyonla datayi cekiyoruz 
    
      }, [])









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
          <Button   > All</Button>
        </Col>


           <Col md={2} >
            <DatePicker> </DatePicker>
          </Col>

          <Col md={2} >
            <Input placeholder='Search'/>
          </Col>

      </Row>
      
    </Container>
    <Spacer height={35}/>
    <Form>
      <div>Form</div>
    </Form>
  </Container>
);
}

export default HomePage