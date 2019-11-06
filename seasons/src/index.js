import React from "react"
import ReactDOM from "react-dom"
import SeasonDisplay from "./seasondisplay"
import Spinner from "./spinner"


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
        console.log("mohit ki dulhahiya")
    }
}
let b=new e()
console.log(b)
console.log(React.Component)
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={lat:null,err:null}
       
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (pos)=>{
                this.setState({lat:pos.coords.latitude})
            },
            (err)=>{
                this.setState({err:err.message})
            }
        )
    }


    render(){
    if(this.state.err && !this.state.lat){
        return <div>Error: {this.state.err}</div>
    }
    if(!this.state.err && this.state.lat){
    return <SeasonDisplay lat={this.state.lat}/ >
}
    return <Spinner/>
    {/* // return <SeasonDisplay lat={this.state.lat}/ > */}
    }
}
console.log(<App/>)
ReactDOM.render(<App/>,document.querySelector("#root"))