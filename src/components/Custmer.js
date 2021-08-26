import React from 'react'
export const Custmer = (props) => {
    return (
        <div>
           <CustmerProfile
                id={props.id}
                image={props.image}
                name={props.name}                
           />
           <CustmerInfo
                birthday={props.birthday}
                gender={props.gender}
                job={props.job}
           />
        </div>
    )
}

export const CustmerProfile = (props) =>{
    return (
        <div>
            <img src={props.image} alt="profile"/>
            <h2>{props.name}({props.id})</h2>
        </div>
    )
}


export const CustmerInfo = (props) =>{
    return(
       <div>
           <p>{props.birthday}</p>
           <p>{props.gender}</p>
           <p>{props.job}</p>
       </div>
    )
}