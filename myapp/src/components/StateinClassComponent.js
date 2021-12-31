import React, { Component } from 'react'

export default class StateinClassComponent extends Component {
              constructor(props) {
                  super(props)
              
                  this.state = {
                       name:"sunil dasari",
                       count:0
                  }
              }
              



    render() {
               setTimeout(()=>{
                   this.setState({
                       name:"sunil"
                       
                   })
                   
               },2000)

               



        return (
            <div>
                <h1>i love u {this.state.name} </h1>
                <h2>count:{this.state.count}</h2>
                <button onClick={()=>
                {
                    this.setState(
                        {
                            count:this.state.count+1
                        }
                    )
                }}>Increment button </button>
                <br></br>


<button onClick={()=>
                {
                    this.setState(
                        {
                            count:this.state.count-1
                        }
                    )
                }}>decrement button</button>
                <br></br>



<button onClick={()=>
                {
                    this.setState(
                        {
                            count:0
                        }
                    )
                }}>reset button</button>
                
            </div>
        )
    }
}
