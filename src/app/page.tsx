import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-16 gap-2 text-[#4682B4] px-4 text-center">
        <div className="lg:text-2xl tracking-widest  font-bold">
          PROJECT IS NOT JUST A PROJECT - DEAD ELEMENT BUT OUR BABY.
        </div>
        <div className="text-2xl lg:text-3xl font-extrabold tracking-widest">
          MOULDING YOUR DREAMS INTO REALITY
        </div>

        <div className="text-2xl  lg:text-3xl font-extrabold tracking-[0.2rem] pt-8">PROJECT MANAGEMENT CONSULTANT - COORDINATOR</div>
        <Image src={"/mall.webp"} layout="responsive" objectFit="cover" width={1000} height={1000} alt="mall image" className="pb-2" draggable="false"/>
        <div className="text-2xl  lg:text-3xl font-extrabold tracking-[0.2rem] pt-8">TURN KEY PROJECTS</div>
        <Image src={"/residence.webp"} layout="responsive" objectFit="cover" width={1000} height={1000} alt="mall image" className="pb-2" draggable="false" />
      </div>

    </>
  )
}
