import { LogOut, Menu, Search, ShoppingCart } from "lucide-react"
import { Logo } from "../atoms/Logo"
import { Button } from "../atoms/Button"

export const Header = () =>{

    const menuItems = [
        {nome: "Home"},
        {nome: "Menu"},
        {nome: "Contato"}
    ]

    return(
        <header className="flex items-center justify-between">
            <Logo></Logo>

            <ul className="hidden justify-between w-1/3 md:flex">
                {
                    menuItems.map((menu, index) => {
                        const active = menu.nome == "Home"
                        return <li key={index} className="cursor-pointer relative">
                            <span className={` text-lg ${active ? "font-bold" : "hover:text-violet-700"} `}>{menu.nome}</span>
                            {
                                active && <div className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 bg-violet-500 w-[85%] h-0.5 rounded`}></div>
                            }
                        </li>
                    })
                }
            </ul>

            <div className="flex items-center gap-5">
                <Search className="cursor-pointer" />
                <ShoppingCart className="cursor-pointer" />
                <Button type="1" className="text-black hidden md:flex">
                    <LogOut />
                    <span className="font-semibold">deslogar</span>
                </Button>
                <Menu className="md:hidden"></Menu>
            </div>
        </header>
    )
}