import React from "react"
import "./imagelist.css"
import ImageCard from "./imagecard";

const Imagelist =(props)=>{
    const images= props.num.map((image)=>{
        // return <img alt={description} key={id} src={urls.regular}></img>
        return <ImageCard key={image.id} image={image}/>
    })
    return <div className="image-list">{images}</div>
}
export default Imagelist
