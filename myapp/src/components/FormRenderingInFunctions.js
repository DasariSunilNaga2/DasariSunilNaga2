import React from 'react'
import { useState } from 'react/cjs/react.development'



export default function FormRenderingInFunctions() {
 let initialdata={
 uname:"",
 pword="",
 email=""
 }
    let [values,updateValues]=useState(initialdata);
    





    const ChangePassword=(event)=>{
       updateValues({
          ...values, pword:event.target.value
       })
   }

 
    const submitUserData=(event)=>{
      event.preventDefault()
      console.log(`${values.uname} ${values.pword}`)
  }


    return (
        <div>
            <form onSubmit={submitUserData} method='get'>
                <input type="text" value={values.uname}
                onChange={changeUserName}
                />
            </form>
        </div>
    )
}
