import { useState } from 'react';


function Calcul() {

  const [num1,setNum1] = useState(0)
  const [num2,setNum2] = useState(0)
  const [result,setResult] = useState(0)

  const getNum1 = (e) =>{
    console.log(e.target.value)
    setNum1(e.target.value);

  }
  const getNum2 = (e) =>{
    setNum2(e.target.value);
  }

  const sum = () => {
    setResult(parseInt(num1)+parseInt(num2))
    console.log(parseInt(num1)+parseInt(num2));
    // console.log(result);
  }
  return (
    <div >
      <h1>hello world</h1>
      <label htmlFor="name">num 1 :</label>
      <input
      onChange={(e)=>getNum1(e)} 
      type="text" className='num1' id ="N1"/>
      <br />
      <label htmlFor="name">num 2 :</label>
      <input onChange={(e)=>getNum2(e)}
      type="text" className='num2' id ="N2"/>
      <br />
      <button className='btn btn-success' onClick={sum}>calcul</button>

      <br />
      <label htmlFor="name" className='rslt'>{result}</label>
    </div>
  );
}



export default Calcul;