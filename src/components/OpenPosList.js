
import { Avatar, Button, List, Skeleton, Popconfirm, message } from 'antd'
import { Link } from "react-router-dom";
import { Trash2Icon, Edit } from 'lucide-react';
import $http from '../http';

interface IPROPS {
  list: any[],
  delete: any
}

function OpenPosList({ list, remove}: { list:any[], remove:any}) {

 
  return (
    <div className='bg-white p-8 shadow-md border border-gray-800'>
      <List
        className="demo-loadmore-list"
        // loading={initLoading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item className="hover:bg-slate-100" actions={[<Link to={`/openpos/details?cd=${item?.CD}&mode=edit`}><Edit></Edit></Link>,
            <Popconfirm title="Delete the open postion"
              description="Are you sure to delete this position?"
              onConfirm={async (e) => {
                e.preventDefault();
                await remove(item?.CD)
              }}
              okText="Yes"
              cancelText="No"><Trash2Icon color='red' className='cursor-pointer'></Trash2Icon></Popconfirm>
            ]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                // avatar={<Avatar src={item.picture.large} />}
                title={<Link to={`/openpos/details?cd=${item?.CD}&mode=edit`}>{item?.L_H1}</Link>}
                description={<>{ item?.L_D1 + ' ' +  item?.L_D2 + ' ' + item?.L_D3 } <div className='block md:hidden'>{item?.L_H2}</div></>}
              />
              <div className='hidden md:block'>{item?.L_H2}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  )
}

export default OpenPosList
