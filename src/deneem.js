import logo from './logo.svg';
import './App.css';
import { Form, Button, message, Input, DatePicker, Select} from 'antd';
import { PlusIcon } from 'lucide-react';

function App() {

 /*  const exportCSV = async () => { */
 /*    document.querySelector('div[data-name="pActive"]') */



  return (
    <div className="h-screen w-full relative overflow-y-scroll">
      <div className=''>
                        {/* <div className="fixed min-h-20 w-full bg-white mb-10 shadow-sm border-b-0 border-b-gray-200 p-4">
                        Open positions
                        </div> */}
        <div className="mx-auto max-w-6xl mt-20" >
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Button
              type='primary'
              icon={<PlusIcon/>}
              title="Create"
              onClick={()=>{
                  //navigate('/openpos/details?mode=create')
                }}
                ></Button>
              <h2> Manage Open Positions</h2>
            </div>

            <div></div>

            <div className="w-auto flex flex-row space-x-3">
              <Button
           /*    onClick={async ()=> { */
           /*      await exportCSV() */
           /*    }} */
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
            </div>


          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
