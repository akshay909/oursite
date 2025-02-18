"use client";
import { Tab, Nav } from "react-bootstrap";
import Image from 'next/image';

export default function Expertise() {
    return (
        <>
            <section>
                <div className="container">
                    <div className='headcontent pb-3 text-center'>
                        <h2>Core <span>Expertise</span> Vouched by CTOs Globally</h2>
                        <p>We are the architects of digital innovation. We continue our legacy to lead the Artifical Intelligence development, Mobile Apps, Web development and offshore IT outsourcing market with our exceptional customized software development services for our esteemed clientele globally.</p>
                    </div>


                    <div className="row exptabs">

                        <Tab.Container defaultActiveKey="tab1">
                            {/* Tabs Navigation */}
                            <Nav variant="tabs" className="mb-3 gap-3 border-0 justify-content-center">

                                <Nav.Item>
                                    <Nav.Link eventKey="tab1">CMS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab2">ecommerce</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab3">Frontend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="tab4">Backend</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            {/* Tabs Content */}
                            <Tab.Content className="exptabscons py-3">


                                <Tab.Pane eventKey="tab1">
                                    <div className="row justify-content-center text-center">
                                        <div className="col-md-2">
                                            <Image src="/images/wordpress.svg" alt="wordpress" width={100} height={100} className="" />
                                            <h6>Wordpress</h6>
                                        </div>
                                        <div className="col-md-2">
                                            <Image src="/images/drupal.svg" alt="drupal" width={100} height={100} className="" />
                                            <h6>Drupal</h6>
                                        </div>

                                    </div>
                                </Tab.Pane>


                                <Tab.Pane eventKey="tab2">
                                <div className="row justify-content-center text-center">
                                        <div className="col-md-2">
                                            <Image src="/images/shopify.svg" alt="shopify" width={100} height={100} className="" />
                                            <h6>Shopify</h6>
                                        </div>
                                        <div className="col-md-2">
                                            <Image src="/images/woocommerce.svg" alt="woocommerce" width={100} height={100} className="" />
                                            <h6>Woocommerce</h6>
                                        </div>

                                    </div>
                                </Tab.Pane>


                                <Tab.Pane eventKey="tab3">
                                <div className="row justify-content-center text-center">
                                        <div className="col-md-2">
                                            <Image src="/images/react-native.svg" alt="react" width={100} height={100} className="" />
                                            <h6>React Js</h6>
                                        </div>
                                        <div className="col-md-2">
                                            <Image src="/images/angularjs.svg" alt="angular" width={100} height={100} className="" />
                                            <h6>Angular Js</h6>
                                        </div>

                                        <div className="col-md-2">
                                            <Image src="/images/typescript.svg" alt="typescript" width={100} height={100} className="" />
                                            <h6>Typescript</h6>
                                        </div>

                                        <div className="col-md-2">
                                            <Image src="/images/javascript.svg" alt="javascript" width={100} height={100} className="" />
                                            <h6>Javascript</h6>
                                        </div>

                                        <div className="col-md-2">
                                            <Image src="/images/ui-ux.svg" alt="uiux" width={100} height={100} className="" />
                                            <h6>UI-UX Design</h6>
                                        </div>

                                    </div>
                                </Tab.Pane>


                                <Tab.Pane eventKey="tab4">
                                <div className="row justify-content-center text-center">
                                        <div className="col-md-2">
                                            <Image src="/images/php.svg" alt="php" width={100} height={100} className="" />
                                            <h6>PHP</h6>
                                        </div>
                                        <div className="col-md-2">
                                            <Image src="/images/node.svg" alt="node" width={100} height={100} className="" />
                                            <h6>Node Js</h6>
                                        </div>

                                        <div className="col-md-2">
                                            <Image src="/images/laravel.svg" alt="laravel" width={100} height={100} className="" />
                                            <h6>Laravel</h6>
                                        </div>

                                        <div className="col-md-2">
                                            <Image src="/images/codeigniter.svg" alt="codeigniter" width={100} height={100} className="" />
                                            <h6>Codeigniter</h6>
                                        </div>

                                        <div className="col-md-2">
                                            <Image src="/images/cakephp.svg" alt="cakephp" width={100} height={100} className="" />
                                            <h6>Cake PHP</h6>
                                        </div>

                                    </div>
                                </Tab.Pane>


                            </Tab.Content>
                        </Tab.Container>

                    </div>
                </div>
            </section>
        </>
    );
}