import React from "react"

// React.memo is used to prevent unnecessary re-renders  by memoizing the component
const RepoCard= React.memo(({name,description,stars,forks})=>{
    return(
        <>
        <div className="repo-card">
            <h3>{name}</h3>
            <p>{description || "No description available"}</p>
            <div className="repo-stars">
                🌟{stars} ||  🍴{forks}
            </div>
        </div>   
        </>
    )
})
export default RepoCard;