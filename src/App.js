import React, { Component } from 'react';
import './assets/styles/App.css';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import innocent1 from "./assets/img/avatars/innocent1.jpg";
import innocent3 from "./assets/img/avatars/innocent3.jpg";
import innocent5 from "./assets/img/avatars/innocent5.png";
import cj from "./assets/img/avatars/cj.png";
import reactIcon from "./assets/img/icons/react.png";
import jsIcon from "./assets/img/icons/js.png";
import androidIcon from "./assets/img/icons/android.png";
import htmlIcon from "./assets/img/icons/html.png";
import angularIcon from "./assets/img/icons/angular.png";
import gitIcon from "./assets/img/icons/git.png";
import firebaseIcon from "./assets/img/icons/firebase.png";
import cssIcon from "./assets/img/icons/css.png";
import facebookIcon from "./assets/img/icons/facebook.png";
import twitterIcon from "./assets/img/icons/twitter.png";
import instagramIcon from "./assets/img/icons/instagram.png";
import WorkHistory from './components/WorkHistory';
import FeaturedProjects from './components/FeaturedProjects';
import Typewriter from 'typewriter-effect/dist/core';
import Header from './components/Header';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIcon: 0,
            stacks: [

                {
                    name: "React JS & Native",
                    icon: reactIcon,
                    desc: "My love for react and how it makes a programmer's life a whole lot easier when building web and mobile apps can never be over emphasized."
                },

                {
                    name: "Node JS",
                    icon: jsIcon,
                    desc: "I've learned a lot working on a good number of JavaScript projects."
                },
                {
                    name: "Android",
                    icon: androidIcon,
                    desc: "Building native Android applications has always been on my todo list. Imagine my excietment when I built my first native Android app. -I smiled all day my lips were almost touching my ears. :)"
                },
                {
                    name: "HTML 5",
                    icon: htmlIcon,
                    desc: "html was the first ever programing language i learnd. Its the basic of my programing career, and its so intresting. it basically builth my intrest in web development "
                },
                {
                    name: "Angular",
                    icon: angularIcon,
                    desc: "The concept of SPAs, two-way data binding, dependency injection was highly appreciated when I learned Angular."
                },

                {
                    name: "Git Version Control",
                    icon: gitIcon,
                    desc: "During the early stages of my career, Version control seemed like a daunting concept, but after taking a course on it, it has since then become a part of me."
                },
                {
                    name: "CSS",
                    icon: cssIcon,
                    desc: "My love for css and how it makes the styling of web pages and mobile applicationso easy, is something i joy talking about. Css is like a box of painting tools that produce colorful designs when used properly"
                },
                {
                    name: "Firebase",
                    icon: firebaseIcon,
                    desc: "This is one cloud service that I love so much, mostly because of their ease-of-use, efficiency and seamless integration."
                },

            ]
        }
    }

    componentDidMount() {
        this.loopIcons();
    }

    loopIcons() {
        const index = this.state.activeIcon;
        this.setState({ activeIcon: index })
        let stack = this.state.stacks[index];
        if (!stack) return;
        new Typewriter('#typewriter', {
            strings: stack.desc,
            autoStart: true,
        })
            .deleteAll()
            .pauseFor(1500)
            .callFunction(() => {
                if (this.state.activeIcon > this.state.stacks.length) return;
                this.setState({ activeIcon: index + 1 }, () => this.loopIcons())
            });
    }

    render() {
        return (
            <div className="m-0">
                <Header />
                <section>
                    <Row>
                        <Col md={12} className="hero m-0 p-0">
                            <Row className="overlay m-0">
                                <Col md={5} className="h-100 p-5 justify-center" style={{ flexDirection: "column" }}>
                                    <div>
                                        <h3 className="white-text font-weight-light mb-0">Hi, I am<br />Innocent Uchenye</h3>
                                    </div>
                                    <div className="py-2">
                                        <p className="white-text fa-2x">and I&apos;m a full stack developer</p>
                                        {this.state.stacks.map((stack, index) => (<img onClick={() => this.setState({ activeIcon: index }, () => this.loopIcons())} key={index} src={stack.icon} title={stack.name} alt={`${stack.name} icon`} className={`clickable icon-image ${this.state.activeIcon === index && 'animated bounce infinite'}`} />))}
                                    </div>
                                </Col>
                                <Col md={7} style={{ height: '100%' }} className="p-md-5 aligner-container">
                                    <Card style={{ background: `rgba(66, 66, 66, 0.31)`, color: '#fff', width: '100%', minHeight: '300px' }}>
                                        <CardBody>
                                            <CardHeader className="shadow-none border-0 fa-2x">
                                                {this.state.activeIcon < this.state.stacks.length &&
                                                    <>
                                                        <img src={this.state.stacks[this.state.activeIcon].icon} className={`icon-image`} alt="" />
                                                        <span>{this.state.stacks[this.state.activeIcon].name}</span>
                                                    </>
                                                }
                                            </CardHeader>
                                            <span id="typewriter" style={{ fontSize: 30 }}></span>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
                <section className="py-5 align-center">
                    <img src={cj} className="avatar-image" alt='' />
                    <h3 className="white-text font-weight-bold my-4">Innocent Chijioke Uchenye</h3>
                    <div className="paragraph white-text col-md-6 mx-auto">
                        I am a confident, highly organized, and dedicated individual who has very good communication
                        skills and can easily adapt to situations, is excellent at decision making and performing tasks
                        efficiently with minimum supervision. I am a result-driven and goal-oriented person who thinks
                        proactively and sees problems as a motivation and strives to find lasting solutions.
                    </div>
                </section>
                <section className="bg-dark-pattern-1 pt-5">
                    <WorkHistory />
                </section>
                <section className="py-5 align-center hidden-sm">
                    <img src={innocent1} className="avatar-image mt-3 mr-n3" style={{ width: 80, height: 80 }} alt="" />
                    <img src={innocent3} className="avatar-image" style={{ zIndex: 3 }} alt="" />
                    <img src={innocent5} className="avatar-image mt-3 ml-n3" style={{ width: 80, height: 80 }} alt="" />
                    <h3 className="white-text font-weight-bold my-4">Here are some of my projects</h3>
                    <FeaturedProjects
                        setCurrentProject={(project) => this.setState({ currentProject: project })}
                    />
                    {this.state.currentProject &&
                        <div className="w-100" style={{ position: "absolute", marginTop: 160 }}>
                            <a className="btn btn-grey btn-sm" href={this.state.currentProject.link} >{this.state.currentProject.title}</a>
                        </div>
                    }
                </section>
                <footer className="p-2 p-md-4 bg-grey-deep">
                    <Row>
                        <Col md={3} className="mx-auto align-center">
                            <a href="https://facebook.com/profile.php?id=100011757240920" ><img className="icon-image" src={facebookIcon} alt="" /></a>
                            <a href="https://instagram.com/contact/?i=437pqsg7onf7&utm_content=fayrqci"><img className="icon-image" src={instagramIcon} alt="" /></a>
                            <a href="https://twitter.com/cjhansom_cj" ><img className="icon-image" src={twitterIcon} alt="" /></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mx-auto align-center py-md-4">
                            <p className="white-text">Feel free to put a call through or send me a mail</p>
                            <p> <a href='tel:+234-903 054 5602'>+234-903 054 5602</a></p>
                            <p>  <a href='tel:+234-705 445 4910'>+234-705 445 4910</a></p>
                            <p>  <a href='mailto:uchenyeinnocent@gmail.com'>uchenyeinnocent@gmail.com</a></p>
                        </Col>
                    </Row>
                </footer>
            </div >
        );
    }
}

export default App;
