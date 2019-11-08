import React from "react"

class ImageCard extends React.Component{
    constructor(props){
        super(props)
        this.state={spans:0}
        this.ImageRef=React.createRef()
    }
    componentDidMount(){
        // console.log(this.ImageRef.current.clientHeight)
        const spans=Math.ceil(this.ImageRef/150+1)
        this.setState({spans})
    }

    render(){
        const{description,urls}=this.props.image
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.ImageRef} alt={description} src={urls.regular}></img>
            </div>
        )
    }
}
export default ImageCard