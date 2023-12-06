import React, { useState } from "react"
import { useStringInputs } from "../../utils/interfaces/hooks/useStringInputs"
import { Input } from "./input"

function SignUp({submitFn}:{submitFn:()=>void}){
    const [inputs,changeInputs]=useStringInputs({
        email:'',
        password:''
    })

 return(
    <form className="max-w-[450px] max-h-[550px] w-full h-full p-6 bg-white rounded-lg flex justify-center items-start flex-col gap-8">
        <h1 className="text-black text-xl">Sign up</h1>
        <div className="flex flex-col gap-4 w-full">
            <Input value={inputs.email} changeValue={changeInputs} type="email" name='email'/>
            
            <Input value={inputs.password} changeValue={changeInputs} type="password" name='password'/>
        </div>
        
    </form>
 )
}


export {SignUp}