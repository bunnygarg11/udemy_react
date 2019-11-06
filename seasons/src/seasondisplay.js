import React from "react"
import "./seasonDisplay.css"

const seasonconfig={
    summer:{
        text:"let hit the beach",
        icon: "massive sun icon"
    },
    winter:{
        text:"blur! its chilly",
        icon:"massive snowflake icon"
    }
}

const getSeason=(lat,month)=>{
if(month>2 && month<9){
    return lat>0? "summer":"winter"
}
else{
    return lat>0 ? "winter":"summer"
}

}

const SeasondDisplay=(props)=>{
    const season=getSeason(props.lat,new Date().month)
    // const text=season==="winter"? "blur,it is chilly" : "let hit the beach"
   const {text,icon}=seasonconfig[season]
    return <div className={`season-dispaly ${season}`}>
        <i className={`icon-left ${icon}`}/>
    <h1>{text}</h1>
    <i className={`icon-right ${icon}`}/>
    </div>
}
export default SeasondDisplay