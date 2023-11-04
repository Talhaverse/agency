// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="I am current managing, designing, and developing all consumer and digital product initiatives at My Supply Co."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Innovation Hub</h3>
                <h4>Permanent Full-time</h4>
                <h4>Oct 2022 - Present </h4>
                <h5>Karachi, Pakistan</h5>
              </span>
              <p>
                Innovation Hub fosters technological innovation by offering
                startups and tech companies expert guidance and cutting-edge
                solutions. We provide strategic support, software development,
                and consultation to help turn your vision into reality,
                transforming ambitious ideas into successful ventures.{" "}
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            {/* <div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Director of Product Design and Development</h3>
									<h4>Nov 2021 - Present · 1 yrs 3 mos</h4>
								</span>
								<p>
								I am responsible for the ideation, planning, and development of new consumer goods—and customer and employee facing microservice software. During these projects I work with key stakeholders within our company and supplychain to ensure and meet quality goals across multiple domains.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div> */}

            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Junior Mobile Developer & Technical Program Manager</h3>
                  <h4>Oct 2022 - Present </h4>
                </span>
                <p>
                  As a junior React Native developer and technical program
                  manager, I am a versatile professional who excels in bridging
                  the gap between design and code. My skills encompass
                  translating Figma designs into functional UI/UX, crafting
                  front-end screens, integrating APIs, and optimizing code. I
                  actively engage in gathering client requirements, identifying
                  pain points, enhancing user experiences, and creating
                  technical documentation. During development, I breathe life
                  into designs, manage databases, and contribute to research and
                  tool selection. I also act as a client liaison, seamlessly
                  incorporating feedback, manage cross-functional teams,
                  facilitate testing, and ensure successful product releases. My
                  ability to single-handedly manage support and maintenance
                  demonstrates my all-encompassing approach to project
                  management and development.{" "}
                </p>
                <p>Some vital skills learnt during this time 👇</p>
                <ul className={career.list}>
                  <li>
				  technical project management 
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Technical documentation ( software architecture diagram , erd, uml, product backlog etc)
                    </span>
                  </li>
                  <li>
                    end to end project execution with team  
                    <span className={career.subList}>
                      <span className={career.bullet}></span>presales -
                    discovery - design - development - testing - deployment -
                    marketing
                    </span>
                  </li>
                  <li>
                    client retention and upsale{" "}
                    <span className={career.subList}>
                      <span className={career.bullet}></span>I boosted client retention, upsell, and profitability by transitioning two projects from development to support and maintenance.
                    </span>
                  </li>
                  <li>
				  Going on client calls and demonstrating work to the client                   
				   <span className={career.subList}>
                      <span className={career.bullet}></span>I actively engage in client meetings and presentations to showcase project progress and gather valuable feedback.
                    </span>
                  </li>
                </ul>
                <Badges
                  list={fullStack}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>

            {/* <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Front End Developer & User Interface Designer</h3>
                  <h4>Apr 2019 - Feb 2020 · 11 mos</h4>
                </span>
                <p>
                  I was brought on to help fill multiple creative rolls in a
                  small start-up environment. Working with the marketing team to
                  create the brand and logos — designing and developing a new
                  front end for the website — and improving the users experience
                  and store KPIs through design and merchandising optimizations.
                </p>
                <p>Some key projects completed during this time 👇</p>
                <ul className={career.list}>
                  <li>
                    Full functionality interactive shopping cart to replace cart
                    page
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Increased
                      conversions by 0.7%
                    </span>
                  </li>
                  <li>
                    Complex multi-state animated menus represented in an elegant
                    UI
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Strong brand
                      confidence booster with state of the art menu
                    </span>
                  </li>
                  <li>
                    Design and development of the site and merchandising
                    strategy optimized for market
                    <span className={career.subList}>
                      <span className={career.bullet}></span>7.1% overall
                      conversion rate{" "}
                    </span>
                  </li>
                </ul>
                <Badges
                  list={stack}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div> */}
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Sayyo</h3>
                <h4>Permanent Full-time</h4>
                <h4>Aug 2023 - Present</h4>
                <h5>Karachi, Pakistan</h5>
              </span>
              <p>
			  I developed Sayyo, a Tinder-like platform for recruiters and talents, creating a successful MVP using React Native at Buildspace, achieving recognition among the top 1000 projects out of 17,000+. This project was featured on the Buildspace website and in email templates, showcasing my proficiency in React Native Expo, UI/UX design, and project execution.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Core Team Member</h3>
                <h4>Permanent Contract</h4>
                {/* <h4>Jan 2006 - Nov 2011 · 5 yrs 11 mos</h4> */}
                <h5>Karachi, Pakistan</h5>
              </span>
              {/* <p>I was the Electronics Wizard 🧙‍♂️</p> */}
              <p>
			  I played a pivotal role as a core team member in various organizations, contributing to their success by assisting with marketing initiatives, hosting events like NFT KHI, and actively participating in web3 pak's fundraising efforts, where we raised £50,000 for flood-affected individuals in Pakistan. Additionally, I dedicated my time to educating students about the fundamentals of blockchain as part of the Blockship DAO, further enriching my contributions.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  );
}

const fullStack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];

const stack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];
