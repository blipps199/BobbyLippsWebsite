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
                        description="I am passionate about building web front-ends. Transforming a design into a fully functional website is an immensely rewarding journey for me. I have extensive experience with various front-end technologies, including React, Vue, and Bootstrap, among others."
                        projects={7} />
                    <AboutCard
                        title="Cloud Development"
                        icon="/icons/code.svg"
                        description="I have a passion for tinkering with cloud services. As an AWS Certified Developer, I particularly enjoy working with serverless technologies such as Lambda, DynamoDB, and S3. I thrive on building CI/CD pipelines and utilizing infrastructure as code with AWS CDK. Additionally, I see endless possibilities for AI in the cloud, especially with AWS Bedrock."
                        projects={10} />
                    <AboutCard
                        title="AI and ChatBots"
                        icon="/icons/phone.svg"
                        description="Recently, I have developed a keen interest in AI-powered chatbots. I have been working with OpenAI to build several chatbots and am also exploring other AI technologies like AWS Bedrock/Knowledgebase. It's been an exciting journey to process large datasets and use AI to extract valuable insights from them."
                        projects={7} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduction</h5>
                    <h1 className="white">Hello, I&#39;m Bobby Lipps.</h1>
                    <h3 className="white">Crafting the Future Through Code</h3>
                    <p className="gray">My professional path is driven by a deep-seated passion for exploring the vast possibilities within cloud and frontend development. This enthusiasm is not just about building applications but about constructing gateways that transform user interaction and operational efficiency. Programming for me is akin to diving into a rabbit hole where each challenge is an opportunity to innovate and each line of code is a step towards redefining functionality.<br/><br/>
                    In this ever-evolving digital landscape, I thrive on the thrill of continuous learning and the satisfaction of overcoming complex problems. Whether it&#39;s mastering AWS services or developing seamless front-end interfaces, I am perpetually in pursuit of creating solutions that are not only effective but also transformative. My commitment to technology is fueled by a curiosity that keeps me at the cutting edge, constantly challenging my skills to craft experiences that make a difference.</p>
                    <br/>
                    <a className="green" href="https://bobby-lipps-website-assets.s3.amazonaws.com/Bobby-Lipps-Resume-Cloud-Frontend-Developer.pdf" rel="noreferrer" target="_blank">View My Resume(PDF)</a>
                </div>
            </div>

            <div className="flex partners justify-space">
                <Image src="/images/partners/amazon-web-services.png" height={45} width={180} alt="Amazon Web Services" />
                <Image src="/images/partners/react.png" height={45} width={180} alt="React" />
                <Image src="/images/partners/vue.png" height={45} width={180} alt="VueJS" />
                <Image src="/images/partners/WordPress-logo.png" height={45} width={180} alt="WordPress" />
                <Image src="/images/partners/chatgpt.png" height={45} width={180} alt="ChatGPT" />
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