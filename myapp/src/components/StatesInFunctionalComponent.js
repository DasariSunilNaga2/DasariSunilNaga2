import React, { useState } from 'react'

export default function StatesInFunctionalComponent() {

    let [name,updateName]=useState("sunil")
    let [count,updateCount]=useState(0)
    return (
        <div>
            
            <h1 onMouseOver={()=>{updateName("d.sunil")}}
            onMouseLeave={()=>{updateName("sunil..d")}}>
                              {name}
          </h1>
           
                          
    
            
     </div>



           


           
    )
}
            
