import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode,
    type: "1" | "2",
    className?: string
}

export const Button = (buttonProps: ButtonProps) => {

    if (buttonProps.type == "1")
        return <button className={`bg-white flex items-center gap-2 py-2 px-6 shadow-xl rounded-4xl cursor-pointer ${buttonProps.className}`}>{buttonProps.children}</button>;
    else{
        return <button className="bg-red-500">{buttonProps.children}</button>;
    }

}