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

export default Componentdetail

console.log((<Approvalcard  >
    <Componentdetail suthor="mohit"/>
</Approvalcard >).props.children.props.suthor)
export default Componentdetail 








import React from "react"

class SearchBar extends React.Component{
    oninputchange(e){
        console.log(e.target.value)

    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" >
                   <div className="field">
                       <label>image search</label>
                   <input type="text" onChange={this.oninputchange}/>
                   </div>
                </form>
            </div>
        )
    }
}
export default SearchBar










class App extends React.Component{

    state={val:"jnjn"}

  async onSearchSubmit (value){
        console.log(value)
       await this.setState({val:value})
        console.log(this.state.val)
        console.log("milan")






    }

    render(){
        return(
            <div className="ui container" style={{marginTop:"10px"}}>
                <SeachBar onSubmit={this.onSearchSubmit} That={this}/>
            </div>
        )
    }
}
export default App






class SearchBar extends React.Component{
    // oninputchange(e){
    //     console.log(e.target.value)

    // }
    // constructor(props){
    //     super(props)
    //     this.onsubmit=this.onsubmit.bind(this)
    // }
    // onsubmit=(e)=>{
    //     e.preventDefault()
    //     console.log(this.state.val)
    // }
    state={val:""}
    onFormSubmit=(e)=>{
        e.preventDefault()
        // console.log(this.state.val)
        let that=this.props.That
        that.onSearchSubmit(this.state.val)
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                   <div className="field">
                       <label>image search</label>
                   <input type="text" value={this.state.val} onChange={e=>this.setState({val:e.target.value.toUpperCase()})}/>
                   </div>
                </form>
            </div>
        )
    }
}
export default SearchBar