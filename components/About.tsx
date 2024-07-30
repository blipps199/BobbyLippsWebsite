import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Front-End Development"
                        icon="/icons/design.svg"
                        description="I love building web front-ends. Taking a design and turning it into a fully functional website is a rewarding journey. I have experience with many front-end technologies including React, Vue, and Bootstrap. Just to name a few."
                        projects={7} />
                    <AboutCard
                        title="Cloud Development"
                        icon="/icons/code.svg"
                        description="I love tinkering with cloud services. I am an AWS Certified Developer and love serverless technologies. Especially Lambda, DynamoDB, and S3. I enjoy working with CI/CD pipelines and infrastructure as code using the AWS CDK. I also see endless posibilities with AI in the cloud, especially with AWS Bedrock."
                        projects={10} />
                    <AboutCard
                        title="Mobile"
                        icon="/icons/phone.svg"
                        description="I develop cross-platform mobile applications."
                        projects={7} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduction</h5>
                    <h1 className="white">Hello, I&#39;m Bobby Lipps.</h1>
                    <h3 className="white">Crafting the Future Through Code: A Journey Beyond the Screen</h3>
                    <p className="gray">My professional path is driven by a deep-seated passion for exploring the vast possibilities within cloud and frontend development. This enthusiasm is not just about building applications but about constructing gateways that transform user interaction and operational efficiency. Programming for me is akin to diving into a rabbit hole where each challenge is an opportunity to innovate and each line of code is a step towards redefining functionality.<br/><br/>
                    In this ever-evolving digital landscape, I thrive on the thrill of continuous learning and the satisfaction of overcoming complex problems. Whether it's mastering AWS services or developing seamless front-end interfaces, I am perpetually in pursuit of creating solutions that are not only effective but also transformative. My commitment to technology is fueled by a curiosity that keeps me at the cutting edge, constantly challenging my skills to craft experiences that make a difference.</p>
                </div>
            </div>

            <div className="flex partners justify-space">
                <Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty" />
                <Image src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy" />
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}