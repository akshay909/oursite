"use client"; // Required for Next.js App Router
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Tab, Nav } from "react-bootstrap";
export default function Resulttabs() {
    return (
        <>
            <div className="restabs container-fluid mt-4">
                <Tab.Container defaultActiveKey="tab1">
                    {/* Tabs Navigation */}
                    <Nav variant="tabs" className="mb-3 gap-3 border-0 justify-content-center">
                        <Nav.Item>
                            <Nav.Link eventKey="tab1">Traffic</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tab2">Leads</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tab3">CPL</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tab4">Data</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    {/* Tabs Content */}
                    <Tab.Content className="">
                        <Tab.Pane eventKey="tab1">
                            <div className="row tabrow">
                                <div className="col-md-7">
                                    <h3>Boost your website traffic and visibility</h3>
                                    <p>
                                        Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                    <Link href="#">Explore SEO Services  </Link>
                                </div>
                                <div className="col-md-5">
                                    <Image src="/images/wedrive.png"
                                        alt="Example Image"
                                        width={450}
                                        height={300} className='m-auto' />
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab2">
                            <div className="row tabrow">
                                <div className="col-md-7">
                                    <h3>Supercharge your lead generation efforts</h3>
                                    <p>
                                        Struggling to get qualified leads in your pipeline? Turn up the dial on your lead generation with digital marketing plans, tailored to your goals and budget.</p>
                                    <Link href="#">Explore Lead Gen Services  </Link>
                                </div>
                                <div className="col-md-5">
                                    <Image src="/images/wedrive.png"
                                        alt="Example Image"
                                        width={450}
                                        height={300} className='m-auto' />
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab3">
                            <div className="row tabrow">
                                <div className="col-md-7">
                                    <h3>Optimize your digital ad campaigns for lower CPL</h3>
                                    <p>
                                        Tired of wasting dollars on ad campaigns? Our paid ad experts can help streamline your bidding strategy and refine ad targeting, so you get the maximum impact from your ads.</p>
                                    <Link href="#">Explore PPC Services  </Link>
                                </div>
                                <div className="col-md-5">
                                    <Image src="/images/wedrive.png"
                                        alt="Example Image"
                                        width={450}
                                        height={300} className='m-auto' />
                                </div>
                            </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab4">
                            <div className="row tabrow">
                                <div className="col-md-7">
                                    <h3>Unify your marketing and sales data for better insights</h3>
                                    <p>
                                        Don’t let leads slip through the cracks. Unify your sales and marketing efforts with Nutshell and MarketingCloudFX, to provide end-to-end reporting and analysis of your data.</p>
                                    <Link href="#">Explore MarketingCloudFX </Link>
                                </div>
                                <div className="col-md-5">
                                    <Image src="/images/wedrive.png"
                                        alt="Example Image"
                                        width={450}
                                        height={300} className='m-auto' />
                                </div>
                            </div>
                        </Tab.Pane>

                    </Tab.Content>
                </Tab.Container>
            </div>
        </>
    );
}