import Image from "next/image";
import { signIn } from "next-auth/react";
import googleLogo from "@/public/googleLogo.png"
import githubLogo from "@/public/githubLogo.png"

export function GoogleAuth(){
    const handleClick = () => {
        signIn("google")
    }

    return (
        <button onClick={handleClick} className="flex rounded-lg border-white hover:border-[1px] py-6 bg-[rgb(38,39,44)]">
            <div className="flex px-6 w-full gap-x-4 text-white ">
                <Image src={googleLogo} alt="google" width={20} height={20}/>
                <p>Continue with Google</p>
            </div>
        </button>
    )
}


export function GithubAuth(){
    const handleClick = () => {
        signIn("github")
    }

    return(
        <button onClick={handleClick} className="flex rounded-lg border-white hover:border-[1px] py-6 bg-[rgb(38,39,44)]">
        <div className="flex px-6 w-full gap-x-4 text-white ">
            <Image src={githubLogo} alt="github" width={20} height={20}/>
            <p>Continue with Github</p>
        </div>
    </button>
    )

}