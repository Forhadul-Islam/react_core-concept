import React, { useState, Profiler, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const persons = ["Tamim Iqbal", "Abdul Hamid", "Shaik Hasina", "Messi", "Alia Bhatt", "Khaleda zia"]
  const products = [
    {name :'Photoshop', price: '$90.99'},
  {name: 'Illustrator', price: '$60.00'},
  {name: 'Adobe DX', price: '$19.99'},
  {name: 'Premier EI', price: '$240.99'},
  {name: 'Photo Filter', price: '$98.99'}
]
const profiles = [
  {
    name: 'Mizanur Rahaman',
    hometown: 'Chittagong',
    institute: 'University of  Chittagong'
  },
  {
    name: 'Omar Faruk',
    hometown: 'Chittagong',
    institute: 'IIUC'
  },
  {
    name: 'Soykat Alam',
    hometown: 'Chittagong',
    institute: 'BGMEA'
  },
  {
    name: 'Khaled Hasan',
    hometown: 'Chittagong',
    institute: 'University of  Chittagong'
  },
  {
    name: 'Mubasshir',
    hometown: 'Chittagong',
    institute: 'BUET'
  }
]


  return (

    <div className="App">
      <header className="App-header">
      <p>I am a react person</p>
     
      <Users></Users>

      <Todos></Todos>

     
      <Counter></Counter>


        <ol>
          {
            persons.map(person => <li>{person}</li>)
          }
        </ol>

      <ul>
        {
          persons.map(person =><li>{person}</li>)
        }
          <h4>Product Price:</h4>
        {
          products.map(product => <li>Name:{product.name} <br /> Price:{product.price}</li>)
        } 
      </ul>


      {
        products.map(prd => <Product product={prd}></Product>)
      }
      {
        profiles.map(pro=><Profile profile ={pro}></Profile>)
      }
      <ol>
        {
          profiles.map(user=><li>{user.name}</li>)
        }
      </ol>

 

    <Product product={products[0]}></Product>
   <Product product={products[1]}></Product>
  <Person name ={persons[0]} job = 'cricketer'></Person>
  <Person name ={persons[1]}  job = 'President'></Person>
  <Person name ={persons[2]} job = 'Prime Minister'></Person>
  <Person name ={persons[3]}  job = 'Footballer'></Person>
  <Person name ={persons[4]}  job = 'Actress'></Person>    </header>
    
  
    </div>
    );
}


function Profile(props){
  const profileStyle = {
    backgroundColor:'Salmon',
    margin: '5px',
    width:'320px',
    height:'250px',
    border:'3px solid gray',
    color: 'gold'
  }
  return(
    <div style = {profileStyle}>
      <h2>Name:{props.profile.name}</h2>
      <h4>Hometown:{props.profile.hometown}</h4>
      <h4>Institute:{props.profile.institute}</h4>
      <ul><li>{props.profile.institute}</li></ul>
    </div>
  )
}


//pass object to components and access object 

function Counter(){
  const [count, setCount]=useState(9);
  const handleIncrease = () =>setCount(count + 1);
  
  return(
    <div>
       <h3>Count: {count}</h3>
       <button onClick={() => setCount(count-1)}>decrease</button>
       <button onClick={handleIncrease}>Increase</button>
       
    </div>
   
  
  )
}

//Dynamically loading data from server

function Users(){
  const [users, setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user =><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

//Dynamic users 2
function Todos(){
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res =>res.json())
    .then(data =>setTodos(data))
  }, [])

  return(
    <div>
      <h2>{todos.length}</h2>
      <div>
        {
          todos.map(todo=><h5>Title:{todo.title}</h5>)
        }
      </div>
      
      <ul>
        {
          todos.map(todo=><li>{todo.title}</li>)
        }
      </ul>
    </div>
  )
}
//Product component
function Product(props){
  const productStyle = {
    border:'1px solid gray',
    backgroundColor:'lightGray',
    borderRadius:'5px',
    margin: '2px',
    float:'left',
    height:'220px',
    width:'220px',
    color:'black'
    
  }
  
  const {name, price} = props.product;
  console.log(price)
  return(
    <div style = {productStyle}>
      <h3>Name:{name}</h3>
  <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}





//creating components
function Person(props){
  
  const style = {
    color: 'gray',
    fontSize: '25px',
    border: '1px solid lightsalmon',
    backgroundColor: 'purple',
    padding: '3px'
  }
  return(
    <div>
      <h2>NAME: <span style = {style}>{props.name}</span></h2>
  <h4>JOB: <span style = {style}>{props.job}</span></h4>
       < hr style = {{backgroundColor:' gray',height: '1px', width: "300px"}}/>
    </div>

  )
}





export default App;
