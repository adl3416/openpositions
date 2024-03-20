//import { Container, Row, Col, Button } from 'react-bootstrap';
import React from 'react'
import "./homePage.scss"
import { Form, Button, message, Input, DatePicker, Select } from 'antd'
import { PlusIcon } from 'lucide-react'
import OpenPosList from '../components/OpenPosList'

const HomePage = () => {
  return (

   
      <div className='h-screen w-full relative overflow-y-scroll'>
        <div className='p-8 md.p-0' >
          <form noValidate encType="multipart/form-data">
          <input type='file'  name='file' placeholder='FILE UPLOAD'/>
              <Button role='submit' type='button' >
                Upload
              </Button>
            </form>  
          <div className="mx-auto max-w-6xl mt-2 md:mt-20">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-4">
                  <Button role='submit'  type="button" icon={<PlusIcon />} title="Create" >

                  </Button>
                  <h2 className='hidden md:block'>Manage Open Positions</h2>
                  </div>
                  <div></div>
                   <div className="w-auto flex flex-row space-x-3">
                 <Button>
                 Export
               </Button>
              <div className="flex flex-row space-x-2 items-center">
                <span></span>
                <Select data-name="pActive">

                </Select>
              </div>

              <DatePicker 
              placeholder="Early start date"
              allowClear
              format={'DD.MM.YYYY'}
              className="w-20 md:w-32">
              </DatePicker>

              <Input
               placeholder="Search"
               allowClear
               className="w-32 md:w-52"
               name="pSearch">
              </Input>
          </div>
          </div>

          <div className='mt-10'>
          <OpenPosList  ></OpenPosList>
          </div>
          
        </div>
      </div>
      
    </div>

  )
}

export default HomePage