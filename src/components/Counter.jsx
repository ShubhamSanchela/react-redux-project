import React from 'react'

function Counter({ data }) {
    console.log(data)
    return (
        <div>
           <h1>Counter Works</h1> 
           {data.first_name}
        </div>
    )
}

export default Counter
