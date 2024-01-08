import React from "react";
import { Col, Container, Row } from "reactstrap";
export default function Roadmap(props) {
    return (
        <>
            <section className="h-[100%] mt-[140px] mb-[4%]">
                <h2 className="text-[50px] font-extrabold text-[monospace] text-center text-[#E8D682] ">Road Map</h2>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <main className="d-flex  justify-content-center mt-5" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 1: A</h2>
                                    <p className="text-white">Platform Conceptualization: Lay the foundation by defining the core concepts, features, and the overarching vision of StardustStroke (Gallery).</p>
                                </div>
                            </main>
                        </Col>
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-3" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 1: B</h2>
                                    <p className="text-white">Team Formation: Assemble a multidisciplinary team of blockchain developers, artists, and marketing experts to kickstart the project.</p>
                                </div>
                            </main>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-5" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 2: A</h2>
                                    <p className="text-white">Smart Contract Development: Initiate the development of smart contracts and undertake multiple security audits to ensure the robustness of the platform.</p>
                                </div>
                            </main>
                        </Col>
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-3" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]">Phase 2: B</h2>
                                    <p className="text-white">MVP Launch: Release the Minimum Viable Product (MVP) to the community for testing and gather valuable feedback to enhance user experience.</p>
                                </div>
                            </main>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-5" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 2: C</h2>
                                    <p className="text-white">Token Sale: Conduct a strategic token sale to fund development, ensuring fair distribution and community participation.</p>
                                </div>
                            </main>
                        </Col>
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-3" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 3: A</h2>
                                    <p className="text-white">Beta Platform Launch: Introduce a beta version of the StardustStroke (Gallery) platform, allowing users to mint, trade, and interact with NFTs.</p>
                                </div>
                            </main>
                        </Col>
                    </Row>
                </Container>

                <Container fluid>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-5" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 3: B</h2>
                                    <p className="text-white">Community Onboarding: Launch targeted community-building campaigns to attract artists, collectors, and enthusiasts to join the platform.</p>
                                </div>
                            </main>
                        </Col>
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-3" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 3: C</h2>
                                    <p className="text-white">Iterative Development: Continuously refine the platform based on user feedback, adding features and optimizing performance.</p>
                                </div>
                            </main>
                        </Col>
                    </Row>
                </Container>

                <Container fluid>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-5" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 4: A</h2>
                                    <p className="text-white">Forge partnerships with artists and creators to bring exclusive content to the platform, expanding the diversity of available NFTs.</p>
                                </div>
                            </main>
                        </Col>
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-3" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 4: B</h2>
                                    <p className="text-white">Enhance the marketplace with advanced features such as bidding, auctions, and curated collections to enrich user experience.</p>
                                </div>
                            </main>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-5" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 4: C</h2>
                                    <p className="text-white">Form collaborations with gaming and dating industry leaders to integrate StardustStroke (Gallery) NFTs into their ecosystems.</p>
                                </div>
                            </main>
                        </Col>
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-3" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 5: A</h2>
                                    <p className="text-[white]">Official Platform Launch: Unveil the fully functional StardustStroke (Gallery) platform to the public, marking the official entry into the NFT space.</p>
                                </div>
                            </main>
                        </Col>
                    </Row>
                </Container>

                <Container fluid>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-5" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 5: B</h2>
                                    <p className="text-[white]">Global Outreach: Implement an extensive marketing campaign to reach a global audience, showcasing the platform's unique offerings in gaming and dating NFT experiences.</p>
                                </div>
                            </main>
                        </Col>
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-3" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 5: C</h2>
                                    <p className="text-[white]">Community Governance Activation: Introduce community governance mechanisms, allowing token holders to actively participate in decision-making processes.</p>
                                </div>
                            </main>
                        </Col>
                    </Row>
                </Container>

                <Container fluid>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-5" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 6: A</h2>
                                    <p className="text-[white]">NFT Ecosystem Enhancements: Implement continuous updates and enhancements to the platform, introducing new features and optimizing existing ones.</p>
                                </div>
                            </main>
                        </Col>
                        <Col md={6}>
                            <main className="d-flex justify-content-center mt-3" data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                                <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                                <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                                    <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 6: B</h2>
                                    <p className="text-[white]">Global Events and Collaborations: Participate in and host global events, collaborations, and partnerships to maintain visibility and foster community engagement.</p>
                                </div>
                            </main>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <main className="flex justify-center items-center mt-[50px] mx-[10px]"
                        data-aos='fade-up' data-aos-offset='100' data-aos-delay='700'>
                        <div className="p-[14px] h-[2px] rounded-[100px] dot-ball bg-[#E8D682] w-[2px]   mx-[20px]"></div>
                        <div className="bg-[#302E2F] rounded-[10px] h-[auto] p-[10px] max-w-[400px]">
                            <h2 className="text-[#FFB700] text-[21px] py-[10px]" >Phase 6: C</h2>
                            <p className="text-[white]">Research and Development: Invest in R&D to explore emerging technologies and trends in the NFT and blockchain space, ensuring StardustStroke (Gallery) remains at the forefront of innovation.</p>
                        </div>
                    </main>
                </Container>


            </section>
        </>
    );
}