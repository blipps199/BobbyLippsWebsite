import React from "react";
import Image, { StaticImageData } from "next/image";

export default function Portfolio() {
    return (
        <section id="portfolio" className="dark-bg">
            <h2 className="white">Portfolio</h2>
            <p className="white">
                Below are <i>some</i> of the websites I have developed, highlighting various technologies and innovative design approaches.<br/><br/>
            </p>
            <div className="website-grid">
                <WebsiteCard
                    screenshot="/images/websites/bioskryb.png"
                    link="https://www.bioskryb.com"
                    description="BioSkryb Genomics"
                    techUsed="React, NextJS, Bootstrap, AWS Amplify, Strapi"
                />
                <WebsiteCard
                    screenshot="/images/websites/jeffrey-court.png"
                    link="https://www.jeffreycourt.com"
                    description="Jeffrey Court"
                    techUsed="React, NextJS, Bootstrap, Strapi"
                />
                <WebsiteCard
                    screenshot="/images/websites/florida-tile.png"
                    link="https://www.floridatile.com"
                    description="Florida Tile"
                    techUsed="VueJS, Bootstrap, Python, Django"
                />
                <WebsiteCard
                    screenshot="/images/websites/flow-dynamics.png"
                    link="https://www.thesmartvalve.com"
                    description="Flow Dyanamics"
                    techUsed="WordPress, Custom Theme, ACF Gutenberg Blocks"
                />
                <WebsiteCard
                    screenshot="/images/websites/work-in-wayne.png"
                    link="https://www.workinwayne.com"
                    description="Work in Wayne"
                    techUsed="WordPress, Custom Theme, ACF Gutenberg Blocks"
                />
                <WebsiteCard
                    screenshot="/images/websites/kag.png"
                    link="https://www.thekag.com"
                    description="Kenan Advantage Group"
                    techUsed="WordPress, Bootstrap, Modified Theme"
                />
                <WebsiteCard
                    screenshot="/images/websites/kag-equipment.png"
                    link="https://equipment.thekag.com/equipment/"
                    description="Kenan Advantage Group Equipment"
                    techUsed="React, NextJS, Bootstrap, Strapi"
                />
                <WebsiteCard
                    screenshot="/images/websites/gbs-corp.png"
                    link="https://example2.com"
                    description="GBS Corp"
                    techUsed="Vue.js, Node.js"
                />
                <WebsiteCard
                    screenshot="/images/websites/awp-safety.png"
                    link="https://www.awpsafety.com"
                    description="AWP Safety"
                    techUsed="WordPress, Custom Theme, Custom Plugins"
                />
                <WebsiteCard
                    screenshot="/images/websites/superior-clay.png"
                    link="https://www.superiorclay.com"
                    description="Superior Clay"
                    techUsed="WordPress, Modified Theme, Bootstrap"
                />
                <WebsiteCard
                    screenshot="/images/websites/clay-chimney-pots.png"
                    link="https://www.claychimneypots.com"
                    description="Clay Chimney Pots"
                    techUsed="WordPress, WooCommerce"
                />
                <WebsiteCard
                    screenshot="/images/websites/tomtreyco.png"
                    link="https://www.tomtreyco.com"
                    description="TomTreyCo"
                    techUsed="WordPress, Custom Theme, Custom Plugins, Login and Class Sign Up System"
                />
            </div>
        </section>
    );
}

type Props = {
    screenshot: string | StaticImageData;
    link: string;
    description: string;
    techUsed: string;
}

function WebsiteCard ({ screenshot, link, description, techUsed } : Props) {
    return (
        <div className="light-bg website-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Image src={screenshot} alt="Website Screenshot" width={300} height={151} />
            </a>
            <div className="website-info">
                <p className="white">{description}</p>
                <span className="white">{techUsed}</span>
            </div>
        </div>
    );
};