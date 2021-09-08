import React,{useState} from 'react'

const Array = () => {
    const [arr,setArr]=useState(
        [
        {
            Name:"Bapu",
            Place:"Bubaneswar"
        },
        {
            Name:"Ranjan",
            Place:"Nayagarh"
        },
        {
            Name:"Chandan",
            Place:"Cuttack"
        }
    ]
    );
    return (
        <div className="component">
            <h2>Showing User Data from Array of Objects</h2>
           {arr.map(v=>
           <>
           <h3>{v.Name}-{v.Place}</h3>
           </>)}
        </div>
    )
}

export default Array 