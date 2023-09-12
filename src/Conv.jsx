import React, { useState } from 'react'

const Conv = () => {
    const[celc,setcel]=useState('')
    const[fore,setfore]=useState('')
    const[kel,setkel]=useState('')
    const[value,setvalue]=useState('')
    const[final,setfinal]=useState('')
    const[dummy,setdummy]=useState('')
    const[dummy2,setdummy2]=useState('')
    const[convalue,setconvalue]=useState('')
    const handleinput=(e)=>{
       setvalue(e.target.value)
       console.log(value)
       console.log(celc)
       console.log(fore)
       console.log(kel)
       console.log(final)
       console.log(setkel)
       console.log(setfinal)
    }
    const handledrop=(e)=>{
    const seltemp=e.target.value
      setdummy(seltemp)
     if(seltemp==="1"){
        setcel(seltemp)
     }
     if(seltemp==="2"){
        setfore(seltemp)
     }
     if(setcel==="3"){
        setcel(seltemp)
     }
     
        
     
    }


    const handleinput2=(e)=>{
       
     }
     const handledrop2=(e)=>{
        const seltemp2=e.target.value
        setdummy2(seltemp2)
        console.log(dummy2)

        if(dummy==='1' && dummy2==='22'){
            const q=value*1.8+32
            setconvalue(q)
            
            console.log('llllllllllllllll')
        }
        else if(dummy==='1' && dummy2==='33'){
            const r=(parseInt(value))+273.15
            setconvalue(r)
            console.log('llllllllllllllll')
        }
        else if(dummy==='2' && dummy2==='11'){
            const r=((parseInt(value)-32)*5/9)
            setconvalue(r)
            console.log('llllllllllllllll')
        }
        else if(dummy==='2' && dummy2==='33'){
            const r=((((value)-32)*0.55)+237.15)
            setconvalue(r)
            console.log('llllllllllllllll')
        }
        else if(dummy==='3' && dummy2==='11'){
            const r=parseInt(value)-273.15
            setconvalue(r)
            console.log('llllllllllllllll')
        }
        else if(dummy==='3' && dummy2==='22'){
            const r= parseInt(value -273.15) * 9/5 + 32 

            setconvalue(r)
            console.log('llllllllllllllll')
        }
     }


  return (
    <>
    <div>
        <input type="number"
        value={value}
        onChange={handleinput}
        />
        <select name="" id="" onChange={handledrop}>
        <option value="">Select </option>
            <option value="1">Celcius</option>
            <option value="2">Forenhite</option>
            <option value="3">Kelvin</option>
        </select>
         <div className='eq'>=</div>
        <br />
        <div className='right'>
        <input type="number"
        value={convalue}
        disabled

        onChange={handleinput2}
        />
        <select name="" id="" onChange={handledrop2}>
        
        <option value="">Select </option>
            <option value="11">Celcius</option>
            <option value="22">Forenhite</option>
            <option value="33">Kelvin</option>
        </select>
        </div>
        <h1>Your Converted Value is = {convalue}</h1>
        <span>Sir in this react application that i have created its working fine but there is only one thing that im not able to correct right just because of time
            when you entered data in first input filed and choose the temp after that if you are going to choose from second drop down it will not change but when again click on diffrent item from drop down the first result will show i can send the video link for this

        </span>
        <h2>My code is correct just i need to fix something ad i will do this and update </h2>
        <h2>please check my code if there any suggestion from your side that will be grateful for me </h2>

    </div>
    
    
    
    </>
  )
}

export default Conv
