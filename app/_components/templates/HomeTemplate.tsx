import { ReactNode } from "react"
import { Header } from "../organisms/Header"

export const HomeTemplate = ({children}: {children: ReactNode}) =>{
    return(
        <div className="w-full min-h-screen bg-linear-to-br from-purple-300 via-violet-300 to-purple-400 text-gray-900">
            <div className="container mx-auto p-4 lg:py-7 h-full w-full">
                <Header></Header>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}