import './App.css'

import { useState, useEffect } from 'react'
import { Form, Button, message, Input, DatePicker, Select } from 'antd'
import { PlusIcon } from 'lucide-react'
import $http from './http'
import OpenPosList from './components/OpenPosList'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { mkConfig, generateCsv, download } from 'export-to-csv'
import { map, values, keys } from 'lodash'
import { saveAs } from 'file-saver'
import * as ExcelJS from 'exceljs'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
}

const csvConfig = mkConfig({ useKeysAsHeaders: true, title: 'Open Positions', fieldSeparator: '\t', filename: `${dayjs(new Date()).format('DD_MM_YYYY HH_mm_ss').toString()}` })

const fetcher = async (active = '') => {
  const data = (
    await $http.get(
      `mdsub.p_app_open_pos_list/json?sTimeStamp=19012024-160151&sSessionId=${
        localStorage.MDS_SESSION_ID || '0344DFC7DEC0494685031C7DB8516A8C'
      }&sRequestNo=-2&sRequestCode=OpenPosList&pContext=APP&sPagesize=500&sPageNumber=1&pActive=${active}`
    )
  ).data
  return data
}

function App() {
  const [form] = Form.useForm()
  const [list, setList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(async () => {
      const result = await fetcher()
      setList(result?.ResultSets[0])
    }, 100)
  }, [])

  const deletePost = async (cd) => {
    const {
      data: { OutputParameters },
    } = await $http.get(`mdsub.p_app_open_pos_detail_modify/json?pCd=${cd}&pAction=DEL&sSessionId=${localStorage.MDS_SESSION_ID}&sRequestNo=-2&sRequestCode=OpenPosDetailModify&pContext=APP`)
    message.info(OutputParameters.PRET_MESSAGE)

    setTimeout(async () => {
      const result = await fetcher()
      setList(result?.ResultSets[0])
    }, 300)
  }

  const exportCSV = async () => {
    document.querySelector('div[data-name="pActive"]')

    //@ts-ignore
    var pSearch = document.querySelector('input[name="pSearch"]').value || ''
    var pActive = document.querySelector('div[data-name="pActive"] input').getAttribute('data-value') || '2'

    const response = (
      await $http.get(`mdsub.p_app_open_pos_list/json?pSearch=${pSearch}&pActive=${pActive}&pType=ADMIN&sSessionId=${localStorage.MDS_SESSION_ID}&sRequestNo=-2&sRequestCode=OpenPosList&pContext=APP`)
    ).data
    const csv = generateCsv(csvConfig)(response.ResultSets[0])

    var x: any[] = []

    // x.push(keys(response.ResultSets[0][0]).join('\t') + '\n');

    // map(response.ResultSets[0], (text) => {
    //   x.push(values(text).join('\t') + "\n")
    // })

    // var file = new File(x, `${dayjs(new Date()).format('DD_MM_YYY HH_mm_ss')}.csv`, {type: "application/text;charset=utf-8"});
    // saveAs(file);

    const workbook = new ExcelJS.Workbook()
    workbook.creator = 'Me'
    workbook.lastModifiedBy = 'Her'
    workbook.created = new Date(1985, 8, 30)
    workbook.modified = new Date()
    workbook.lastPrinted = new Date(2016, 9, 27)
    const worksheet = workbook.addWorksheet('My Sheet')
    worksheet.autoFilter = 'A:AF'

    map(keys(response.ResultSets[0][0]), (keys) => {
      x.push({ header: keys, key: keys.toString().toLowerCase(), width: 10 })
    })

    var rows = []

    worksheet.columns = x

    map(response.ResultSets[0], (text) => {
      const newValue = map(values(text), (value) => {
        return decodeURIComponent(value || '')
      })
      rows.push(newValue)
    })

    worksheet.addRows(rows)

    workbook.xlsx.writeBuffer().then(function (data) {
      var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      saveAs(blob, `Open_Pos_List_${dayjs(new Date()).format('DD.MM.YYYY HH:mm:ss')}.xlsx`)
    })

   
   
  

  return (
    <div className="h-screen w-full relative overflow-y-scroll">
      <div className="">
        {/* <div className="fixed min-h-20 w-full bg-white mb-10 shadow-sm border-b-0 border-b-gray-200 p-4">
          Open positions
        </div> */}
        <div className="mx-auto max-w-6xl mt-20">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Button
                type="primary"
                icon={<PlusIcon />}
                title="Create"
                onClick={() => {
                  navigate('/openpos/details?mode=create')
                }}
              ></Button>
              <h2>Manage Open Positions</h2>
            </div>

            <div></div>

            <div className="w-auto flex flex-row space-x-3">
              <Button
                onClick={async () => {
                  await exportCSV()
                }}
              >
                Export
              </Button>
              <div className="flex flex-row space-x-2 items-center">
                <span></span>
                <Select
                  data-name="pActive"
                  onChange={(value) => {
                    setTimeout(() => {
                      document.querySelector('div[data-name="pActive"] input').setAttribute('data-value', value)
                    }, 100)

                    setTimeout(async () => {
                      const result = await fetcher(value)
                      setList(result?.ResultSets[0])
                    }, 100)
                  }}
                  defaultValue={'2'}
                  className="w-24"
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
                className="w-32"
                onChange={async (value, dayString) => {
                  if (value !== null) {
                    const result = (
                      await $http.get(
                        `mdsub.p_app_open_pos_list/json?pSearch=${dayjs(value).format('DD.MM.YYYY')}&pType=NORM&sSessionId=${
                          localStorage.MDS_SESSION_ID
                        }&sRequestNo=-2&sRequestCode=OpenPosList&pContext=APP`
                      )
                    ).data
                    setTimeout(() => {
                      setList(result?.ResultSets[0])
                    }, 200)
                  } else {
                    if (value == null) {
                      setTimeout(async () => {
                        const result = await fetcher()
                        setList(result?.ResultSets[0])
                      }, 100)
                    }
                  }
                }}
              ></DatePicker>

              <Input
                placeholder="Search"
                allowClear
                className="w-52"
                name="pSearch"
                onChange={async (e) => {
                  const value = e.target.value
                  if (value.length >= 3) {
                    const result = (
                      await $http.get(`mdsub.p_app_open_pos_list/json?pSearch=${value}&pType=NORM&sSessionId=${localStorage.MDS_SESSION_ID}&sRequestNo=-2&sRequestCode=OpenPosList&pContext=APP`)
                    ).data
                    setTimeout(() => {
                      setList(result?.ResultSets[0])
                    }, 200)
                  }
                  if (value == '') {
                    setTimeout(async () => {
                      const result = await fetcher()
                      setList(result?.ResultSets[0])
                    }, 100)
                  }
                }}
              />
            </div>
          </div>

          <div className="mt-10">
            <OpenPosList list={list} remove={deletePost}></OpenPosList>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
