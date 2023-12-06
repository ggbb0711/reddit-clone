import { useEffect, useState } from 'react';
import SigningPopUp from './components/signingPopUp/signingPopUp';


function App() {
  const [helloworld,setHelloWorld] = useState('')

  async function FetchData(){
    const response = await fetch('http://localhost:5000/HelloWorld')
    console.log(response)
    const data = await response.json()
    console.log(data)
    setHelloWorld(data.data)
  }
  
  useEffect(()=>{
    FetchData()
  },[])

  return (
    <div className="App">
      <p className='text-red-500'>{helloworld}</p>
      <SigningPopUp></SigningPopUp>
    </div>
  );
}

export default App;
