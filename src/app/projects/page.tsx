import styles from './ProjectCard.module.css';

export default function Projects() {
    return (
        <div className="h-screen w-full flex justify-center items-center py-24">
            <div className="w-8xl p-4">
                <div className="flex flex-col justify-center items-center text-6xl py-8 text-[#4682B4] font-semibold w-full">
                    Projects
                </div>
                <div className="grid grid-cols-3 gap-4 p-4">
                    <ProjectCard bgImage="url('/residential.webp')" text="RESIDENTIAL" />
                    <ProjectCard bgImage="url('/institutional.jpg')" text="INSTITUTIONAL" />
                    <ProjectCard bgImage="url('/commercial.jpeg')" text="COMMERCIAL" />
                    <ProjectCard bgImage="url('/turnkey.jpg')" text="TURN-KEY INTERIORS" />
                    <ProjectCard bgImage="url('/corporatehouse.jpg')" text="CORPORATE HOUSES" />
                    <ProjectCard bgImage="url('/interiors.jpeg')" text="INTERIORS" />
                </div>
            </div>
        </div>
    );
}

export function ProjectCard({ text, bgImage }: { text: string, bgImage: string }) {
    return (
        <div
            className={`${styles.projectCard} w-full max-w-lg px-2 py-12 lg:px-12 text-center lg:text-xl lg:py-24 rounded-md text-white lg:font-semibold select-none font-semibold relative`}
            style={{ backgroundImage: bgImage }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md"></div>
            <div className="relative z-10">
                <div >
                    {text}
                </div>
            </div>
        </div>
    );
}
