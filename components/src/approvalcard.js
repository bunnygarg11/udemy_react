import React from "react"

const Approvalcard=()=>{
    return (
        <div className="ui card">
            <div className="content">Are You sure?</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    )

}
export default Approvalcard