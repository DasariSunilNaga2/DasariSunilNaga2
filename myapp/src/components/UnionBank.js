import React from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    return (
        <div>
           <h1>UnionBank location is hyderabad</h1> 
           <AndhraBank location="vijayawada" />
           <CorporationBank location="kurnool" />
        </div>
    )
}
