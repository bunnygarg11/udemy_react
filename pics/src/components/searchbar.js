import React from "react"

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
        // let that=this.props.That
        this.props.onSubmit(this.state.val)
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