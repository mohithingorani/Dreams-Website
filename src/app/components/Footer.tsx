import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <>
            <div className="w-full bg-black text-white text-2xl py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div></div>
                <div className="text-center md:text-left">GET IN TOUCH:</div>
                <div className="text-center md:text-left">CONTACT US:</div>
            </div>
            <div className="w-full bg-black text-white text-sm py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div></div>
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <div>Mob: <Link href="/afsd" className="underline">+91 9825027030</Link></div>
                    <div>Email: <Link href="/afsd" className="underline">agrawalshalinkumar@gmail.com</Link> </div>
                    <div>
                        B-810 SIGNATURE 2,
                        <br /> SANAND CROSS ROAD,
                        <br /> SARKHEJ- 382210
                    </div>
                    <div className="flex gap-4">
                        <Link href="https://www.instagram.com/dreams_pmc/">
                            <Image src="/insta.webp" width="20" height="20" alt="insta logo" />
                        </Link>
                        <Link href="https://www.facebook.com/dreamspmc/">
                            <Image src="/twitter.webp" width="20" height="20" alt="insta logo" />
                        </Link>
                        <Link href="https://x.com/DREAMSPROJECTM1">
                            <Image src="/facebook.webp" width="20" height="20" alt="insta logo" />
                        </Link>
                    </div>
                    <div className="pt-8">
                        © 2006 by DREAMS
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="pb-1">Enter Your Name *</div>
                            <input className="border border-white bg-black hover:bg-[#2b2b2b] w-full px-3 py-1.5 focus:border-red-600 outline-none" placeholder="Name" />
                        </div>
                        <div>
                            <div className="pb-1">Enter Your Email *</div>
                            <input className="border border-white bg-black hover:bg-[#2b2b2b] w-full px-3 py-1.5 focus:border-red-600 outline-none" placeholder="Email" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="pb-1">Enter Your Message *</div>
                            <textarea className="border border-white bg-black hover:bg-[#2b2b2b] w-full px-3 py-1.5 focus:border-red-600 outline-none h-[7rem]" placeholder="Message"></textarea>
                        </div>
                        <div className="pt-4">
                            <button className="bg-white text-black w-full px-3 py-1.5">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

        </>
    );
}
