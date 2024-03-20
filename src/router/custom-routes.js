
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home-page'

const CustomRoutes = () => {

  return (


    <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route index element={""}/>
                <Route path="openpos" element={<HomePage/>}/>

            </Route>
        </Routes>
    </BrowserRouter>


  )
}

export default CustomRoutes