import { ChangeEventHandler, useState } from "react";
import { IStringinputs } from "../IStringinputs";

function useStringInputs(inputName:IStringinputs):[IStringinputs,ChangeEventHandler<HTMLInputElement>]{
    const [inputs,setInputs]=useState<IStringinputs>(inputName)

    const changeInput:ChangeEventHandler<HTMLInputElement>=(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        const newInputs={...inputs}
        newInputs[e.currentTarget.name]=e.currentTarget.value
        console.log(newInputs)
        setInputs(newInputs)
    }

    return [inputs,changeInput]
}

export {useStringInputs}