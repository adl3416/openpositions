
import { Button, DatePicker,Input, Select } from 'antd';
import React, { useEffect, useState } from 'react'
import { Col, Container, InputGroup, Row, Form} from 'react-bootstrap'
import Spacer from '../components/spacer';
import { FaCirclePlus } from "react-icons/fa6";
import { services } from '../api/service';
import { PlusIcon } from 'lucide-react'
import OpenPosList from '../components/OpenPosList';
import "./homePage.scss"

const HomePagee = () => {

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


      console.log(home);
      
  return (     
    <>

      <div className='bg'>
                <div className='up'>
                   <Button> Datei auswählen</Button>
                  <p>Keine ausgewählt</p>  
                   <Button> Upload</Button>  
                 </div>
        <div className='container'>

       

        <div className='box'>

              <div className='box1'>
                <div> <Button
                type="primary"
                icon={<PlusIcon />}
                title="Create">
               </Button></div>
                <div><h2 className='hidden md:block'>Manage Open Positions</h2></div>
              </div>

              <div className='box2'>
                <div> <Button >Export</Button></div>
                <div><Select style={{width:'7rem'}}
                
                 options={[
                   { label: 'All', value: '2' },
                   { label: 'Active', value: '1' },
                   { label: 'Inactive', value: '0' },
                 ]}
              
               >All</Select></div>
                <div><DatePicker 
                placeholder="Early start date"
                allowClear
                format={'DD.MM.YYYY'}
                className='datapicker'
                
              ></DatePicker></div>
                <div><Input 
                placeholder="Search"
                allowClear
                className="search"
                name="pSearch"
               
              /></div>
              </div>

        </div>

        <div className='open'> buraya acik Positions gelecek </div>

        </div>
      </div>
      

    </>












   /*  <div >  
      <Spacer/>
      <div className=""> 


      <div className="">
        <div className="title">
           <div className="flex">
               <Button
                type="primary"
                icon={<PlusIcon />}
                title="Create">
               </Button>
                <h2 className='hidden md:block'>Manage Open Positions</h2>
          </div>


        
              <div>
              <Button>
                Export
              </Button>
              </div>
          
            
              <div className="">
                <span></span>
                <Select
                 
                  options={[
                    { label: 'All', value: '2' },
                    { label: 'Active', value: '1' },
                    { label: 'Inactive', value: '0' },
                  ]}
               
                ></Select>
              </div>

              <DatePicker
                placeholder="Early start date"
                allowClear
                format={'DD.MM.YYYY'}
                className='datapicker'
                
              ></DatePicker>

              <Input
                placeholder="Search"
                allowClear
                className="search"
                name="pSearch"
               
              />
    

      </div>
          <div className="mt-10">
            <Spacer/>
            <OpenPosList></OpenPosList>
           </div>
       </div>
     </div>
  </div> */
)
}

export default HomePagee




/* 
  return (        //fluid tam ekran
  <Container className="m">
    <Spacer/>
    <Container >
      <Row>
           <Col sm={4} > <Button> <FaCirclePlus /> </Button>
            <h3> Manage Open Positions</h3>
          </Col>

          <Col sm={2} >
            <Button> Import</Button>
          </Col>

          <Col sm={2}>
          <Button   > All</Button>
        </Col>


           <Col sm={2} >
            <DatePicker> </DatePicker>
          </Col>

          <Col sm={2} >
            <Input placeholder='Search'/>
          </Col>
      </Row>

      <Spacer/>

      <Row>
        <Col></Col>
      </Row>
      
    </Container>


  </Container>
);
}
 */
