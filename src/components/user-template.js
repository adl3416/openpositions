import React from 'react'
import Spacer from './spacer';

const UserTemplate = () => {
    const {children}=props;


  return (

    <>
        <Spacer/>
        {children}
        <Spacer/>
    </>
  )
}

export default UserTemplate