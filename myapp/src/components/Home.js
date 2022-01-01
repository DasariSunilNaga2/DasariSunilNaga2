import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import FormRendering from './FormRendering';

export default function Home() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}

function Main() {
    

    return(
        <>
        <h1> :: homepage ::</h1>
        </>
    )
    
}

