const emptyCV = {
  generalInfo: {
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userPhone: "",
  },
  links: [],
  education: [],
  workHistory: [],
  technicalSkills: [],
};

const demoCV = {
  generalInfo: {
    userFirstName: "Ryan",
    userLastName: "Skeels",
    userEmail: "ryan.skeels@gmail.com",
    userPhone: "666 53 71 84",
  },
  links: [
    {
      id: crypto.randomUUID(),
      linkName: "GitHub",
      linkAddress: "https://github.com/housemouse62",
    },
    {
      id: crypto.randomUUID,
      linkName: "LinkedIn",
      linkAddress: "https://www.linkedin.com/in/ryan-skeels62/",
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      schoolName: "Colorado State University",
      cityName: "Ft. Collins",
      stateName: "Colorado",
      countryName: "USA",
      degreeName: "BS Forest Management",
      year: "2006",
    },
    {
      id: crypto.randomUUID(),
      schoolName: "International TEFL Academy",
      cityName: "Chicago",
      stateName: "Illinois",
      countryName: "USA",
      degreeName: "TEFL Certification",
      year: "2023",
    },
    {
      id: crypto.randomUUID(),
      schoolName: "Taronja Spanish Language School",
      cityName: "Valencia",
      stateName: "Valencia",
      countryName: "Spain",
      degreeName: "Continued Learning",
      year: "2023 - 2024",
    },
    {
      id: crypto.randomUUID(),
      schoolName: "La Pagoda Spanish Language School",
      cityName: "Valencia",
      stateName: "Valencia",
      countryName: "Spain",
      degreeName: "Continued Learning",
      year: "2024 - 2025",
    },
    {
      id: crypto.randomUUID(),
      schoolName: "Self-Driven Learning",
      cityName: "Online",
      stateName: "",
      countryName: "",
      degreeName: "Web Development",
      year: "2025 - Present",
    },
  ],
  workHistory: [
    {
      id: crypto.randomUUID(),
      ind: 0,
      positionTitle: "English Language Assistant",
      workPlaceName: "CEIP San Clemente",
      dates: "Oct 2024 - Present",
      city: "Sedaví",
      state: "Valencia",
      country: "Spain",
      duties: [
        {
          id: crypto.randomUUID(),
          value: "Support English language instruction for students K–6",
        },
        {
          id: crypto.randomUUID(),
          value: "Collaborate with teachers and school leadership",
        },
        {
          id: crypto.randomUUID(),
          value: "Classroom management and lesson planning",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      ind: 1,
      positionTitle:
        "Freelance Content Designer & Visual Communications Specialist",
      workPlaceName: "Andrea Moore Arts (Projects for Special Olympics)",
      dates: " June 2024 - Present",
      city: "",
      state: "",
      country: "",
      duties: [
        {
          id: crypto.randomUUID(),
          value:
            "Created a cohesive icon library aligned with disability-related vocabulary and visual accessibility standards.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Designed presentation materials in Canva and outlined educational slide decks focused on navigating healthcare systems for individuals with developmental disabilities and their advocates.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Sourced and organized visuals for timelines showcasing public health and disability rights milestones.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Wrote alt-text for images to support screen reader compatibility and ensure inclusive access to all materials.",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      ind: 2,
      positionTitle: "English Tutor",
      workPlaceName: "Preply & LingoAce | Online",
      dates: " June 2024 - Present",
      city: "",
      state: "",
      country: "",
      duties: [
        {
          id: crypto.randomUUID(),
          value:
            "Deliver personalized 1-on-1 English lessons to learners of all levels in a virtual classroom setting.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Plan and adapt lessons to meet individual learning goals, focusing on conversation, grammar, vocabulary, and real-world usage.",
        },
        {
          id: crypto.randomUUID(),
          value: "Utilize interactive tools and authentic materials",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      ind: 3,
      positionTitle: "Planned Career Break",
      workPlaceName: "Preply & LingoAce | Online",
      dates: "March 2023 - January 2024 ",
      city: "",
      state: "",
      country: "",
      duties: [
        {
          id: crypto.randomUUID(),
          value:
            "Transitioned ownership of Baere Brewing Company, including staff support, systems handover, and process documentation.",
        },
        {
          id: crypto.randomUUID(),
          value: "Completed a 120-hour TEFL certification course",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Managed the visa application process and international relocation for family ",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Began immersive Spanish language learning through formal classes",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      ind: 4,
      positionTitle: "Operating Manager  |  Owner  |  Founder",
      workPlaceName: "Baere Brewing Company",
      dates: "2012 - 2023",
      city: "Denver",
      state: "Colorado",
      country: "USA",
      duties: [
        {
          id: crypto.randomUUID(),
          value:
            "Co-founded and operated a successful craft brewery, overseeing both production and retail operations in compliance with local and federal regulations.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Directed business development from concept to launch, including buildout planning, equipment sourcing, and installation.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Led product development and brewing operations, creating original recipes and managing all aspects of brewing, packaging, and delivery.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Managed financial operations, including payroll, accounting, and vendor payments, using best practices for small business bookkeeping.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Developed and implemented HR policies, hiring procedures, and team management systems to support a collaborative work environment.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Oversaw marketing strategy, social media, graphic design, and community engagement efforts, including a long-running Non-Profit of the Month program.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Handled procurement of ingredients and materials, equipment maintenance, and facility upkeep",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      ind: 5,
      positionTitle: "Environmental Health Investigator II",
      workPlaceName: "City of Denver Public Health & Environment",
      dates: "2012 - 2014",
      city: "Denver",
      state: "Colorado",
      country: "USA",
      duties: [
        {
          id: crypto.randomUUID(),
          value:
            "Conducted public health inspections for food manufacturing and retail facilities to ensure compliance with health codes.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Authored inspection reports, summaries, and recommendations to support enforcement and education.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Developed and delivered training programs for new staff, as well as food facility personnel.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Responded to foodborne illness reports and public complaints, executing follow-up investigations and enforcing corrective actions.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Led temporary closures and represented the department in legal proceedings related to public health violations.",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      ind: 6,
      positionTitle: "Natural Resource Specialist",
      workPlaceName: "Jefferson County Open Space ",
      dates: "2008 - 2012",
      city: "Golden",
      state: "Colorado",
      country: "USA",
      duties: [
        {
          id: crypto.randomUUID(),
          value:
            "Designed and managed forest restoration and habitat conservation projects across public lands.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Wrote detailed management plans, ecological assessments, and project reports based on field data.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Collected, analyzed, and interpreted environmental data to guide resource decisions.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Trained and supervised seasonal staff; led educational programming on machinery safety and environmental topics.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Developed training materials and protocols for internal programs and public outreach.",
        },
      ],
    },
  ],
  technicalSkills: [
    {
      id: crypto.randomUUID(),
      skillCategory: "Business",
      skills: [
        {
          id: crypto.randomUUID(),
          value: "Business Development & Strategy",
        },
        {
          id: crypto.randomUUID(),
          value: "Operations & Project Management",
        },
        {
          id: crypto.randomUUID(),
          value: "Policy & Procedure Development",
        },
        {
          id: crypto.randomUUID(),
          value: "Communication",
        },
        {
          id: crypto.randomUUID(),
          value: "Team Collaboration",
        },
        {
          id: crypto.randomUUID(),
          value: "Training, Education & Staff Development",
        },
        {
          id: crypto.randomUUID(),
          value: "Financial & Budget Management",
        },
        {
          id: crypto.randomUUID(),
          value: "Regulatory Compliance & Risk Management",
        },
        {
          id: crypto.randomUUID(),
          value: "Visual Communication & Graphic Design",
        },
        {
          id: crypto.randomUUID(),
          value: "Human Resources & Payroll Administration",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      skillCategory: "Web Development",
      skills: [
        {
          id: crypto.randomUUID(),
          value: "HTML",
        },
        {
          id: crypto.randomUUID(),
          value: "CSS",
        },
        {
          id: crypto.randomUUID(),
          value: "JavaScript",
        },
        {
          id: crypto.randomUUID(),
          value: "React",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      skillCategory: "Languages",
      skills: [
        {
          id: crypto.randomUUID(),
          value: "Native English",
        },
        {
          id: crypto.randomUUID(),
          value: "Spanish Level B2",
        },
      ],
    },
  ],
};
export { emptyCV, demoCV };
