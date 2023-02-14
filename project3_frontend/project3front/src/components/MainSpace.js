import React from "react"
import ProblemCard from "./ProblemCard"
import CommentCard from "./CommentCard"

function MainSpace() {
    return(
        <div className="mx-auto w-4/6 mt-6">
            <ProblemCard/>
            <CommentCard/>
        </div>
    )
}

export default MainSpace
