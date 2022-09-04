import React, { useEffect, useState } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import boilerPlate from "../assets/img/projects/google-materialdesign.png"
import android from "../assets/img/projects/android.png"
import myweb from "../assets/img/avatars/myweb.png"
import ios from "../assets/img/projects/ios.png"
import web from "../assets/img/projects/web.png"
import dispatch_z from "../assets/img/projects/dispatch_z.jpg"

const carouselRef = React.createRef();

const FeaturedProjects = (props) => {
    const [projects] = useState([
        {
            title: "My profile",
            photoUrl: myweb,
            link: "https://cj-hansom.github.io/innocent/"
        },
        {
            title: "Android android",
            photoUrl: android,
            link: "https://covid19sniffer.com"
        },

        {
            title: "ios app",
            photoUrl: ios,
            link: "https://apps.apple.com/app/dispatch-z/id1607865321"
        },

        {
            title: "dispatch-website",
            photoUrl: web,
            link: "https://dispatchz.ng"
        },

        {
            title: "Dispatch-Z",
            photoUrl: dispatch_z,
            link: "https://play.google.com/store/apps/details?id=com.dispatch_z"
        }
    ])

    const carouselChange = () => {
        props.setCurrentProject(projects[carouselRef.current.getCurrentIndex()])
    }

    useEffect(() => {
        props.setCurrentProject(projects[0])
    }, []);

    return (
        <div style={{ position: "relative", marginTop: 160 }}>
            <ReactCardCarousel ref={carouselRef} afterChange={carouselChange} autoplay={true} autoplay_speed={5000} spread={"wide"}
            >
                {projects.map((project, index) => (
                    <div key={index} className="carousel-card">
                        <img className="carousel-img clickable" src={`${project.photoUrl || boilerPlate}`} alt='' />
                    </div>
                ))}
            </ReactCardCarousel>
        </div>
    )
}
export default FeaturedProjects;