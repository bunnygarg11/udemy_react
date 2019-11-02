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
                        <span className="date">{y.date}</span>
                    </div>
                    <div className="text">Nice Blog post</div>
                </div>
            </div>
    )
}

export default Componentdetail