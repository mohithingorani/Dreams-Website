"use client"
import { link } from "fs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


export function NavBar() {
    return <>
        <DesktopNavBar />
    </>
}

const items = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
    { label: "About", link: "/about" },
]

function DesktopNavBar() {

    function scrollToBottom() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })
    }
    
    return <div className="flex justify-center pt-8 px-4">
        <nav className="">
            <div className="flex  min-h-[60px]">

                <div className="flex h-full sm:gap-x-8  md:gap-x-16 lg:gap-x-32 ">
                    <div className="flex justify-between items-center">
                        <Image src="/dreams.webp" width="100" height="100" alt="dreams logo" />
                        <div className="text-3xl text-blue-950 font-medium select-none">Dreams</div>
                    </div>
                    {items.map(item => (
                        <NavBarItem
                            key={item.label}
                            label={item.label}
                            link={item.link}
                        />
                    ))}
                    <div className="flex items-center">
                        <button onClick={scrollToBottom} className="bg-[#588ebb] text-white px-6 py-1.5 hover:text-gray-900">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="flex  gap-2">

            </div>

        </nav>
    </div>
}



function NavBarItem({ link, label }: {
    link: string,
    label: string
}) {

    const pathname = usePathname();
    const isActive = pathname === link;
    return <div className="flex items-center sm:text-md md:text-lg  ">
        <Link href={link}>
            {isActive ? <button className="text-blue-800 hover:scale-105">{label}</button> : <button className="hover:text-blue-500  hover:scale-105">{label}</button>}
        </Link>
    </div>
}