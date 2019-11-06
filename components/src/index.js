import React from "react"
import ReactDOM from "react-dom"
import Componentdetail from "./componentdetail"
import Approvecard from "./approvalcard"
console.log(<Componentdetail name="bunny"/>)

const App=()=>{
    return (
        <div className="ui container comments">
            <Approvecard/>
    <Componentdetail  author="mohit" date="today at 6:00 PM"/>            
    <Componentdetail author="bunny" date="yesterday at 11:00 am"/>
    <Componentdetail author="anubha" date="tomorrow at 11:00 pm"/>
    console.log(<Componentdetail author="anubha" date="tomorrow at 11:00 pm"/>)

        </div>
    )
}
// console.log(<App/>)

ReactDOM.render(<App/>,document.querySelector("#root"))                                             