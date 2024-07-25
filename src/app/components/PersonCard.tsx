import Image from "next/image";

export function PersonCard() {
    return (
        <div className="bg-[#8eb2d1] sm:max-w-fit lg:max-w-4xl w-max p-4 text-[#20303c] rounded-xl overflow-hidden   ">
            <div className="flex justify-normal gap-4 pb-4">

                <Image src="/photo.webp" width="300" height="300" alt="Image" className="rounded-2xl pb-2" />
                <div className="flex flex-col items-start gap-4">

                    <div className="text-xl  tracking-tight">OWNER</div>
                    <div className=" text-2xl font-extrabold  flex justify-center pt-2 tracking-widest">
                        <div className="flex flex-col">
                            <div>SHALINKUMAR </div>
                            <div>AGRAWAL</div>
                        </div>
                    </div>
                    <div className=" font-normal  ">
                        <div>B.ARCH.  [MREC (MNIT) JAIPUR]</div>
                        <div>GDIP.IN ADVANCED CONSTRUCTION</div>
                        <div>MANAGEMENT [NICMAR PUNE]</div>
                    </div>
                    <div className="underline">
                        <div>agrawlshalinkumar@gmail.com</div>
                        <div>+91 9825027030</div>
                    </div>
                </div>
            </div>
            <div className=" font-medium items-center  ">
                <div className="pb-4">
                    During service, he has worked with reputed firms like Cushman & Wakefield, Kalpataru developers Mumbai, Agrawal builders Ahmedabad, Mistry associates Ahmedabad.
                </div>

                <div className="pb-4">
                    He has acquired a professional degree in construction management from world reputed organisation -NICMAR Pune with the basic qualification in bachelor of architecture from MREC(MNIT) Jaipur.
                </div>

                <div className="pb-4">
                    He started his own firm dreams in 2006 and created many landmarks like Narayani heights hotel, Lakshaya international school, Saraswati hospital, city pulse multiplex etc.
                </div>
            </div>
        </div>
    )
}