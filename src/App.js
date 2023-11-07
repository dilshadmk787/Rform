import { useState } from 'react';
import './App.css';
import cardImage from './card.png';


function App() {
const [firstname , setFirstname] = useState('')
const [isfirstname , setIsFirstname] = useState(true)
const [lastname , setLastname] = useState('')
const [islastname , setIsLastname] = useState(true)
const [mobno , setMobno] = useState('')
const [ismobno , setIsMobno] = useState(true)
const [pan , setPan] = useState('')
const [ispan , setIsPan] = useState(true)
const [password , setPassword] = useState('')
const [ispassword , setIsPassword] = useState(true)



const Validatefname=(e)=>{
  const {value}=e.target 
  if (value.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
  )){
    setIsFirstname(true);
    setFirstname(value);
  }
  else
  {
    setIsFirstname(false);
    setFirstname(value);
  }
}
//validate second name
const Validatelname=(e)=>{
  const {value}=e.target
  if (value.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)){
    setIsLastname(true);
    setLastname(value);
  }
  else{
    setIsLastname(false);
    setLastname(value);
  }
}
//validate number
const Validatemobno=(e)=>{
  const {value}=e.target
  if(value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)){
    setIsMobno(true);
    setMobno(value);
  }else{
    setIsMobno(false);
    setMobno(value);
  }
}

//validate pan
const Validatepan=(e)=>{
  const {value}=e.target
  if(value.match(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)){
    setIsPan(true);
    setPan(value);
  }
  else{
    setIsPan(false);
    setPan(value);
    }
    }
   // validate password
   const validatePass=(e)=>{
    const {value}=e.target
    if(value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#\$%\^\&*\)\(+=._-])/)){
      setIsPassword(true);
      setPassword(value);
    }
    else
    {
      setIsPassword(false);
      setPassword(value); 
    }
  } 


  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!firstname || !lastname || !mobno || !pan || !password){
      alert('Please fill all the fields')
    }
    else{
      alert('registration sucessfully')
      setFirstname('')
      setLastname('')
      setMobno('')
      setPan('')
      setPassword('')
    }
    
  }
  return (
    <div className="container-fluid">
      <h1>Live-Bank</h1>
      <h2>Welcome to Live Bank!</h2>
      <div className='row d-flex justify-content-center align-items center'>

        <div className="col-1" ></div>
        <div className="col-5" id='image' style={{textAlign:'center'}}><img src={cardImage} alt="" /></div>

        <div className="col-5" id='rform'>        
          <h2> User Registration </h2>
          <form>
            <label for="fname">First Name:</label><br />
            <input type="text" value={firstname}  onChange={(e)=>{Validatefname(e)}} id="fname" name="firstname" placeholder="Your first name.."/><br/>
            {!isfirstname && <p className='validation'>*Invalid Input</p>}

            <label for="lname">Last Name:</label><br />
            <input type="text" id="lname" value={lastname}  onChange={(e)=>{Validatelname(e)}}  name="lastname" placeholder="Your last name.."/><br/>
           {!islastname && <p className='validation'>*Invalid Input</p>}

            <label for="mobno">mobile No:</label><br />
            <input type="number" id="mobno" name="mobno" value={mobno}  onChange={(e)=>{Validatemobno(e)}}  placeholder="Enter mobile no...."/><br/>
            {!ismobno && <p className='validation'>*Invalid Input</p>}

            <label for="pan">Pan No:</label><br />
            <input type="text" id="pan" name="pan" value={pan}  onChange={(e)=>{Validatepan(e)}} placeholder="Your pan no.."/><br/>
            {!ispan && <p className='validation'>*Invalid Input</p>}
            <label for="password">Password:</label><br />
            <input type="password" id="password" name="password" value={password}  onChange={(e)=>{validatePass(e)}}  placeholder="Your password.."/><br/>
            {!ispassword && <p className='validation'>*Invalid Input</p>}

            


            <button onClick={handleSubmit} type="submit">Submit</button>
          </form>
        </div>
        <div className="col-1"></div>


      </div>
    </div>
  );
}

export default App;
