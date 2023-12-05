import React,{useState} from 'react' ;
import Header from '../Components/Common/Header';
import axios from 'axios' ;
import { useNavigate } from 'react-router'; 

function Register() {
  const [username, setUsername] = useState('') ;
  const [password, setPassword] = useState('') ;
  const navigate = useNavigate() ;

  const handleSubmit = async () => {

     try{
      const res = await axios.post('https://newcrypto.onrender.com/register', {username, password}) ;
      console.log(res) ;
      navigate('/login')
     }
     catch(error){
      console.log("Register Error", error);
     }
     finally{
      setUsername('');
      setPassword('') ;
     }


  }
return (
  <div>
    <Header />
      <h1>Registration Page</h1>
      <input type='text' value={username} placeholder='Username'
      onChange={e=> setUsername(e.target.value)}
      />
      <input type='password' value={password} placeholder='Password' onChange={e=> setPassword(e.target.value)}/>
      <button onClick={handleSubmit} >Submit</button>
  </div>
)
}

export default Register