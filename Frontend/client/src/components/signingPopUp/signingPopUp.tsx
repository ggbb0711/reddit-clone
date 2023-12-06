import { SignUp } from "./signUp"

export default function SigningPopUp (){
    return (
        <div className="fixed w-screen h-screen bg-black/50 flex justify-center items-center">
            <SignUp submitFn={()=>{}} />
        </div>
    )
}

export {SigningPopUp}