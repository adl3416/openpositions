
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/homePage'
import Home from '../pages/home-page'

const CustomRoutes = () => {

  return (


    <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route index element={""}/>
                <Route path="openpos" element={<Home/>}/>

            </Route>
        </Routes>
    </BrowserRouter>


  )
}

export default CustomRoutes;
// 