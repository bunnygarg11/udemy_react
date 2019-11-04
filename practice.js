import React from "react"
import ReactDOM from "react-dom"
import Componentdetail from "./componentdetail"
console.log(<Componentdetail name="bunny"/>)

const App=()=>{
    return (
        <div className="ui container comments">
    <Componentdetail  author="mohit"/>            
    <Componentdetail author="bunny"/>
    <Componentdetail author="anubha"/>

        </div>
    )
}
// console.log(<App/>)

ReactDOM.render(<App/>,document.querySelector("#root"))                                             





import React from "react"

const Componentdetail=(y)=>{
    // console.log(y)
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/"className="author">
                        {y.author}
                        {/* sam */}
                    </a>
                    <div className="metadata">
                        <span className="date">Todat at 6:00PM</span>
                    </div>
                    <div className="text">Nice Blog post</div>
                </div>
            </div>
    )
}


console.log((<Approvalcard  >
    <Componentdetail suthor="mohit"/>
</Approvalcard >).props.children.props.suthor)
export default Componentdetail 