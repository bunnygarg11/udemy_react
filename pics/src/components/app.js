import React from "react"
import unsplash from '../api/unsplash';
import SeachBar from "./searchbar"
import ImageList from "./imagelist"

// const App=()=>{
//     return (<div className="ui container" style={{marginTop:"10px"}}>
//         <SeachBar/>
//     </div>)

// }
class App extends React.Component{

    state={images:[]}

   onSearchSubmit = async(value)=>{
    const response = await unsplash.get('/search/photos', {
        params: { query: value }})
        // console.log(value)
    //    await this.setState({val:value})
    //     console.log(this.state.val)
    //     console.log("milan")

    // AudioScheduledSourceNode.length("https://api.unspalsh.com/search/photos")

        this.setState({images:response.data.results})



    }

    render(){
        return(
            <div className="ui container" style={{marginTop:"10px"}}>
                <SeachBar onSubmit={this.onSearchSubmit} />
                {/* found:{this.state.images.length} */}
                <ImageList num={this.state.images.length}/>
            </div>
        )
    }
}
export default App