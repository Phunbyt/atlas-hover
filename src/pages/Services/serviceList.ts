import {
  CHIP,
  DATA_GIRL,
  DESK,
  JANITOR,
  PROGRAMMING,
  STAFF,
  TEAM,
} from "../../assets";

export const serviceListArray = [
  {
    mainText: "Computer Programming Services",
    subText:
      "At AtlasHover, we specialize in delivering bespoke software solutions that perfectly align with your unique business requirements. Our team of skilled programmers leverages the latest tools and frameworks to craft robust, scalable, and high-performance software applications.",
    listTexts: [
      "Customized software development",
      "Agile project management",
      "On-time delivery",
      "Ongoing support",
    ],
    cardImage: PROGRAMMING,
    isReverse: false,
    linkId: "programming",
  },
  {
    mainText: "Computer System Design Services",
    subText:
      "We partner with OEMs and ISVs to deliver comprehensive computer system design and engineering services. Our seasoned design engineers leverage years of hardware platform expertise  to craft high-performance solutions that drive business success.",
    listTexts: [
      "Accelerate product development",
      "Reduce costs and risks",
      "Enhance system performance and reliability",
      "Focus on core competencies while we handle system design",
    ],
    cardImage: CHIP,
    isReverse: true,
    linkId: "design",
  },
  {
    mainText: "Computer Training Services",
    subText:
      "Unlock your team's potential with our comprehensive IT and professional training programs, designed to keep pace with the rapidly evolving tech landscape. Our extensive training empowers your team to enhance IT skills in areas such as cybersecurity, network administration, and cloud computing, while also leveraging AI and Machine Learning expertise in data science, natural language processing, and computer vision.",
    listTexts: [
      "Bridges knowledge gaps",
      "Enhances IT expertise",
      "Fosters innovation",
      "Ensures business resilience",
    ],
    cardImage: STAFF,
    isReverse: false,
    linkId: "train",
  },
  {
    mainText: "Computer Facility Management",
    subText:
      "The AtlasHover Computer Facilities Management (CFM) solution provides an all-encompassing suite of tools designed to optimize and streamline the management of IT infrastructure. This includes interactive and batch data processing capabilities, allowing for efficient handling of both real-time and scheduled data tasks.",
    listTexts: [
      "Needs Analysis",
      "Solution Design",
      "Implementation",
      "Post-Implementation Support",
    ],
    cardImage: DATA_GIRL,
    isReverse: true,
    linkId: "manage",
  },
  {
    mainText: "Administrative Management and General Management Consulting",
    subText:
      "In our approach to General Management Consulting, we take a comprehensive, holistic view to support agency leadership in making well-informed, strategic decisions. We deliver actionable insights and data-driven recommendations across a range of critical areas, including organizational structure, resource allocation, performance management, and long-term strategic planning.",
    listTexts: [
      "Organizational development and design",
      "Resource management and optimization",
      "Performance improvement and measurement",
      "Strategic planning and implementation",
    ],
    cardImage: TEAM,
    isReverse: false,
    linkId: "admin",
  },
  {
    mainText: "Janitorial Services",
    subText:
      "At Atlashover, we're dedicated to delivering exceptional commercial janitorial services that exceed our clients' expectations. Our winning team of experienced janitors shares our commitment to unwavering work ethic and unmatched customer service. With a focus on quality, reliability, and attention to detail, we ensure a cleaner, healthier environment for your business.",
    listTexts: [
      "A foundation of hard work and dedication",
      "A passion for customer satisfaction",
      "A team of skilled janitors",
      "A commitment to quality and excellence",
    ],
    cardImage: JANITOR,
    isReverse: true,
    linkId: "janitor",
  },
  {
    mainText: "Other Computer Related Services",
    subText:
      "At AtlasHover, we understand that every business has unique computer needs. That's why we offer comprehensive support and solutions beyond our listed services. Our expert team is dedicated to addressing all your computer-related problems, providing personalized support, and delivering tailored solutions to drive your business forward.",
    listTexts: [
      "Peace of mind knowing your computer needs are covered",
      "Increased productivity and efficiency",
      "Rapid problem resolution",
      "Proactive IT management",
    ],
    cardImage: DESK,
    isReverse: false,
    linkId: "others",
  },
];
