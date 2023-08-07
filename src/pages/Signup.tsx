import React from 'react'
import TittleComponent from '../components/TittleComponent'
import RegisterComponent from '../components/RegisterComponent';

function SigupNewP() {
    const title = "ลงทะเบียน";
  return (
    
    <>
    <TittleComponent data  = {title} />
    <RegisterComponent />
    </>
  );
}

export default SigupNewP