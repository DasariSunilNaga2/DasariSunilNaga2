import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'

export default function ListRendering() {

    // let emplist=["sunil","govardan","navvenroy"]
    let emplist=[
        {
            name:"sunil",
            salary:50000,
            email:"dasaris2003@gmail.com"
        },

        {
            name:"harshini",
            salary:50000,
            email:"harshi2002@gmail.com"
        },

        {
            name:"pravalli",
            salary:50000,
            email:"pravalli2000@gmail.com"
        },
    ]
    return (
        <div>
            <h1>ListRendering</h1>
            {/* {
             emplist.map(element =>(
             <h1>{element}</h1>
             ))
             } */}
{
             emplist.map(
                  empdata =>
                 <div>
                     <p>{empdata.name}</p>
                     <p>{empdata.salary}</p>
                     <p>{empdata.email}</p>
                 </div>
             )
}
        </div>
    )
             
}
