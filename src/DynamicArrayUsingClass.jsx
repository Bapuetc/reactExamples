import React from 'react'
export default class DyArray extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userList:[],
            Name:'',
            Place:''
        }
    }
    setName=(e)=>{
        this.setState({Name:e.target.value})
    }
    setPlace=(e)=>{
        this.setState({Place:e.target.value})
    }
    setUser=()=>{
        let arr=this.state.userList;
        arr.push({Name:this.state.Name,Place:this.state.Place});
        this.setState({userList:arr});
        this.setState({Name:'',Place:''})
    }
    deleteUser=()=>{
        let arr=this.state.userList;
        arr.pop({Name:this.state.Name,Place:this.state.Place});
        this.setState({userList:arr});
        console.log(this.state.userList);

    }
    render(){
        return(
            <div className="component">
                <h2>class Based Dynamic Add/remove user</h2><br />
                <input onChange={this.setName} value={this.state.Name} /><br />
                <input onChange={this.setPlace} value={this.state.Place} /><br />
                <button onClick={this.setUser} >Add User</button><br />
                <button onClick={this.deleteUser} >Remove</button><br />
                {this.state.userList.map((v)=><div>{v.Name} - {v.Place}</div>)}          
            </div>
        )
    }
}
