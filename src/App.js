import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
// 	    <input type="text" onChange={() =>{console.log("I am clicked")}}/>
//    </React.Fragment>
//   );
// }

const App = () => {
  const profiles = [
    {name:"Taro" ,age:"10"},
    {name:"Hanako",age:"5"},
    {name:"NaName"}
  ]

  const products = [
    "Apple","Grape","banana"
  ]

  return (
    <div>
      {
        profiles.map((profiles,index) => {
          return <User name={profiles.name} age={profiles.age} key={index}/>
        })
      }
      <hr/>
      <User name={"Taro"}  age={10}/>

      {
        products.map((product,index)=>{
          return <Frutis name={product} key={index}/>
        })
      }
     
    </div>
  )
}

const User = (props) => {
  return (
    <div>
      Hi, I am {props.name}, and {props.age} years old
    </div>
  )
}

const Frutis = (props) =>{
  return(
    <div>
      {props.name} 
    </div>
  )
}

User.defaultProps = {
  age:1
}

export default App;
