import { Description, Heading } from "../components/Heading";
import { PersonCard } from "../components/PersonCard";

export default function About() {
    return (
        <div className="sm:px-8 lg:px-32 xl:px-64 pt-16 pb-8">
            <section>
                <Heading>VISION</Heading>
                <div className="pb-8">
                    <ul className="list-disc list-inside">
                        <li>TO STAND ABOVE THE COMPETITION BY</li>
                        <li>PROVIDING LEVEL BEST SERVICE IN</li>
                        <li>INDUSTRY TO OUR CLIENT</li>
                    </ul>
                </div>
            </section>

            <section>
                <Heading>MISSION</Heading>
                <div className="pb-8">
                    <ul className="list-disc list-inside">
                        <li>TO REPRESENT, SERVE AND SAFEGUARD</li>
                        <li>CLIENT’S INTEREST IN ALL STAGES OF</li>
                        <li>CONSTRUCTION</li>
                    </ul>
                </div>
            </section>

            <section>
                <Heading>ABOUT US</Heading>
                <div className="pb-8">
                    <PersonCard />
                </div>
                <div className="pb-8 text-lg leading-relaxed">
                    <p>
                        We dreams would like to introduce ourselves as project management consultants. We coordinate for the construction projects from design and development phase, execution phase with quality control and value addition. We also give our services for cost analysis, manpower management, MIS, cashflow and reporting system, planning and scheduling of the activities. We also do the coordination and third-party supervision for construction projects and interior projects as well as turn-key interior projects.
                    </p>
                    <p>
                        We have a team of 8 engineers constantly working with dedication and commitment to complete the projects to perfection in the desired time and cost
                    </p>
                </div>
            </section>

            <section>
                <Heading>SCOPE</Heading>
                <div className="max-w-2xl pb-8 text-lg leading-relaxed">
                    Following is the scope of our PMC Service:
                </div>

                <div className="flex flex-col gap-8">
                    <div>
                        <Heading>DESIGN MANAGEMENT</Heading>
                        <ul className="list-disc list-inside pl-5">
                            <li>
                                Responsible for helping & assisting the client in finalization of drawing, amenities of the proposed project so as to give them a clear idea about the feasibility of construction & approximate construction cost.
                            </li>
                            <li>
                                To help & assist the Client and various appointed consultancies to establish flawless drawing so as to incorporate each and every service in a predefined manner which is agreed & which satisfies the architectural and functional requirements of the project.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <Heading>BUDGET AND COST PLANNING</Heading>
                        <ul className="list-disc list-inside pl-5">
                            <li>
                                Prepare cost planning of construction activities so as to give a fairly accurate idea of monthly expenses.
                            </li>
                            <li>
                                Prepare & get approved budget plan of construction activity so as to give a fairly accurate idea of the monthly estimate.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <Heading>SCHEDULE MANAGEMENT</Heading>
                        <ul className="list-disc list-inside pl-5">
                            <li>Prepare construction planning & schedule planning for approval.</li>
                            <li>Prepare Schedule of major milestone for each type of services.</li>
                            <li>Prepare Schedule of a major milestone for the main construction.</li>
                        </ul>
                    </div>

                    <div>
                        <Heading>TENDERING AND CONTRACTS</Heading>
                        <ul className="list-disc list-inside pl-5">
                            <li>
                                Assist & help the client to appoint contractors & to finalize contracts for various contractors for their services in the project.
                            </li>
                            <li>
                                Certify all the bill of contractors prior to the payment as per the Terms & condition of the contract mad between the client and the contractor.
                            </li>
                            <li>
                                Arbitration - Any disputes/differences between the contractors/agencies and the client will be managed and efforts will be made to amicably resolve the matter/issue to avoid any litigations.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <Heading>PROJECT ADMINISTRATION</Heading>
                        <ul className="list-disc list-inside pl-5">
                            <li>
                                Quality Control - Establish and conduct regular testing on materials & construction for best quality assurance.
                            </li>
                            <li>
                                Record Maintenance  - Record & maintain all events, drawing, testing reports, checklists, guarantees, testing certificates etc. which shall be handed over to the client & ultimately to the users of the flats.
                            </li>
                            <li>
                                Call, conduct & record regular ( weekly / fortnightly / monthly ) planning meetings.
                            </li>
                            <li>
                                Call, conduct & record regular ( weekly / fortnightly / monthly ) progress review meetings.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <Heading>PROJECT HANDOVER</Heading>
                        <ul className="list-disc list-inside pl-5">
                            <li>
                                Prepare snag list and get the corrections done.
                            </li>
                            <li>
                                Prepare documents containing as-built drawing, test certificate, etc.
                            </li>
                            <li>
                                Handing over peaceful possession of the site.
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
