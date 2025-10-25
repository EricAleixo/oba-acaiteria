import Image from "next/image"

export const Logo = () =>{
    return(
        <div className="flex items-center gap-2">
            <Image className="rounded-full" src={'/images/logo.jpg'} alt="Logo da OBA Açaiteria" width={40} height={40} />
            <h2 className="font-extrabold font-nunito text-3xl cursor-default">OBA Acaiteria</h2>
        </div>
    )
}