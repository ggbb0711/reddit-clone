import { ChangeEventHandler } from "react"

function Input({value,type,name,changeValue}:{value:string,type:string,name:string,changeValue:ChangeEventHandler<HTMLInputElement>}){
    return (
    <div className="relative">
        <input type={type} className="pl-3 peer w-full min-h-[60px] bg-gray-500/20 rounded-lg" value={value} onChange={changeValue} name={name}/>
        <p className={`text-gray-600 text-xl absolute top-4 left-3 peer-focus:text-xs peer-focus:top-1 ${value.length>0?'text-xs top-1':''}`}>{name[0].toLocaleUpperCase()+name.slice(1)}</p>
    </div>)
}

export{Input}