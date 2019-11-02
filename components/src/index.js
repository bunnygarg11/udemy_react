import React from "react"
import ReactDOM from "react-dom"
import Componentdetail from "./componentdetail"
import Approvalcard from "./approvalcard"
console.log(<Approvalcard>
    <Componentdetail/>
</Approvalcard>)

const App=()=>{
    return (
        <div className="ui container comments">
            <Approvalcard>
    <Componentdetail  author="mohit" date="today at 6:00PM"/> 
    </Approvalcard>           
    <Componentdetail author="bunny" date="yesterday at 11:00PM"/>
    <Componentdetail author="anubha" date="tomorrow at 11:00AM"/>

        </div>
    )
}
// console.log(<App/>)

ReactDOM.render(<App/>,document.querySelector("#root"))