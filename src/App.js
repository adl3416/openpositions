import './App.css'

import { useState, useEffect } from 'react'
import { Form, Button, message, Input, DatePicker, Select } from 'antd'
import { Home, PlusIcon } from 'lucide-react'
import $http from './http'
import OpenPosList from './components/OpenPosList'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { mkConfig, generateCsv, download } from 'export-to-csv'
import { map, values, keys } from 'lodash'
import { saveAs } from 'file-saver'
import * as ExcelJS from 'exceljs'
import HomePage from './pages/home-page'
import CustomRoutes from './router/custom-routes'



const App = () => {
  return (

    <>  
      <CustomRoutes/>
    </>
  )
}

export default App 