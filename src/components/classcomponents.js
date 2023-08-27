import axios from "axios";
import { Component } from "react";
class Classexample extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    
    changehandler(){
        this.setState({
            data:[],
        })
    
        
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
        .catch(() => {
            this.setState({
                data:[]
            })
        })
    }

    render() {
        return <>
        {/* <h1>{this.state.data}</h1> */}
        <h2>hh </h2>
        <button onClick={() => this.changehandler()}>click</button>
        {this.state.data.map((ele) =>{
                return <p>{ele.id}{ele.username}</p>
        }

        )}
        </>
        

    }
}


export default Classexample