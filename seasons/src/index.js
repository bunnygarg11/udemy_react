import React from "react"
import ReactDOM from "react-dom"

// const App=()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         (pos)=>console.log(pos),
//         (err)=>console.log(err)
//     )
//     return <div>BUNNY</div>
// }

class d{
    constructor(){
        this.name="bunny"
    }
}
class e extends d{
    fun(){
        console.log("mohit")
    }
}
let b=new e()
console.log(b)
console.log(React.Component)
class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (pos)=>console.log(pos),
            (err)=>console.log(err)
        )
        return <div>location: </div>
    }
}
console.log(<App/>)
ReactDOM.render(<App/>,document.querySelector("#root"))