import React,{useState} from 'react'

const DynamicArray = () => {
    const [userData,setUserData] = useState([]);
    const [userName,setUserName] = useState("");
    const [userPlace,setUserPlace] = useState("");

    const uName=(e)=>{
        setUserName(e.target.value)
    }
    
    const uPlace=(e)=>{
        setUserPlace(e.target.value)
    }
    const uDetails=()=>{
        const userDetail={
            Name : userName,
            Place : userPlace
        }
        let objArr=userData;
        objArr.push(userDetail)
        setUserData(objArr);
        setUserName('');
        setUserPlace('');
        console.log(userData);
    }
    const removeItem=()=>{
        let objArr1=userData;
        objArr1.pop();
        console.log(objArr1);
        setUserData(objArr1);
        setUserName('');
        setUserPlace('');
    }
    return (
        <div className="component">
            <h2>Using useState Hooks,but map not updating after array updating</h2><br />
            <input
             value={userName}
              onChange={uName}
               placeholder="Enter the Name of the User"
            />
            <br />
            <input
            value={userPlace}
            onChange={uPlace}
            placeholder="Enter the Place of the User" 
            />
            <br />
            <button
            onClick={uDetails}
            >
                Add User
            </button>
            <br />
            <button onClick={removeItem}>
            Remove
            </button>
            {userData.map((v,i)=><h4 key={i}>{v.Name}-{v.Place}</h4>)}
        </div>
    )
}
export default DynamicArray
