import React, { useState } from "react";
import './App.css';
// import Submit from './ShowInfo';

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {Name:'',Department:'',Rating:'',Employe:[],setEmploye:[]}
//     this.state = {Data:[],setData:[]}
//   }

//  updateValue = (e) => {
//   let Name = e.target.value;
//   let inputValue = e.target.value;
//   // this.setState({Name:e.target.value})
//   // this.setState({Department:e.target.value})
//   // this.setState({Rating:e.target.value})
//   this.setEmploye({...this.Employe,[Name]:[inputValue]})
//  }

//    handleSubmit = (e) =>{
//     e.preventDefalut();

//     // let Employe ={
//     //   Name:this.state.Name,
//     //   Department:this.state.Department,
//     //   Rating:this.state.Rating,

//     // }
//     this.setData([...this.Data,{...this.Employe,id:this.Data.length}])
//     this.setName('');
//     this.setDepartment('');
//     this.setRating('');
//   }
//   render(){
//     return (
//       <>
           
//          <h1>EMPLOYEE FEEDBACK FORM</h1>
//          <form className = "header" onSubmit={this.handleSubmit}>
//          Name : <input type = 'text' name='Name' onChange ={this.updateValue}/><br />
//          Department : <input type = 'text' name='Department' onChange ={this.updateValue}/><br />
//          Rating : <input type = 'number' name='Rating' onChange ={this.updateValue}/><br />
//          {/* Name={this.state.Name} Deprt={this.state.Department} Rate={this.state.Rating} */}
//          <button onClick={Submit}>submit</button>
//          <div className ='view-con'>
//            <Submit />
//         </div>
//         </form>
        
      
//       </>
     
//     )
//   }
// }
// export default App;


function App(){
  const [Details,setDetails] = useState({Name:'',Department:'',Rating:''});
  const [Data,setData] = useState([]);
  let enter = (e) =>{
    let name = e.target.name;
    let inputValue = e.target.value; 
    setDetails({...Details,[name]:[inputValue]});
  }
  const add = (e) => {
    e.preventDefault();
    setData([...Data,{...Details,id:Data.length}]);
     setDetails('');
    
     
  }
  return (
    <div className="container">
       <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form onSubmit={add}>
        <label className='lab'>Name : </label>
        <input type="text" onChange={enter} name='Name' placeholder="Enter Name.." className='text'/><br /><br />
        <label  className='lab'>Department : </label>
        <input type="text" onChange={enter} name='Department' placeholder="Field" className='text'/><br /><br />
        <label  className='lab'>Rating : </label>
        <input type="number" onChange={enter} name='Rating' placeholder="Out of 5" maxLength={1} minLength={1} className='text' />
        <br />
        <br />
        <br />
        <br />
        <input  type="submit" value="Submit" className='button'/>
        <div className="box">
        {Data.map((e)=>(
          <h3 className="showDetails" key={e.id}>
          Name : {e.Name} || Department : {e.Department } || Rating : {e.Rating}
          </h3>))}
        </div>
      </form>
    </div>
  )
}
export default App;

