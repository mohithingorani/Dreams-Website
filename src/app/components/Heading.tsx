import { ReactNode } from "react";

export function Heading({children}:{children:ReactNode}){
    return <div className="text-2xl text-[#4682B4] tracking-widest">
        {children}
    </div>
}

export function Description({children}:{children:ReactNode}){
    return <div>
        {children}
    </div>
}