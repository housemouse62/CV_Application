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
    userPhone: "970 901 4810",
  },
  links: [
    {
      id: crypto.randomUUID(),
      linkName: "GitHub",
      linkAddress: "https://github.com/housemouse62",
    },
    {
      id: crypto.randomUUID(),
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
      schoolName: "Full Stack Javascript Course",
      cityName: "Online",
      stateName: "",
      countryName: "",
      degreeName: "Self-led Web Development Curriculum",
      year: "2025 - Present",
    },
    {
      id: crypto.randomUUID(),
      schoolName: "Trusted Tester",
      cityName: "Online",
      stateName: "",
      countryName: "",
      degreeName: "DHS Web Accesibility Testing Certification",
      year: "June 2025",
    },
  ],
  workHistory: [
    {
      id: crypto.randomUUID(),
      ind: 0,
      positionTitle: "English Language Teacher & Tutor",
      workPlaceName: "CEIP San Clemente & Online",
      dates: "Oct 2024 - Present",
      city: "Sedaví",
      state: "Valencia",
      country: "Spain",
      duties: [
        {
          id: crypto.randomUUID(),
          value:
            "Facilitate bilingual instruction and knowledge transfer within Spanish-led classrooms, strengthening cross-cultural communication and operational adaptability.",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      ind: 1,
      positionTitle: "Content Designer & Visual Communications Specialist",
      workPlaceName:
        "Andrea Moore Arts (Special Olympics International projects)",
      dates: " June 2024 - Present",
      city: "",
      state: "",
      country: "",
      duties: [
        {
          id: crypto.randomUUID(),
          value:
            "Created a cohesive icon library and aligned with disability-related vocabulary and curated a visual public health timeline aligned with accessibility standards.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Designed presentation materials and educational slide decks focused on navigating healthcare systems for individuals with developmental disabilities and their advocates, including alt-text for images to support screen reader compatibility. ",
        },
      ],
    },

    {
      id: crypto.randomUUID(),
      ind: 3,
      positionTitle: "Planned Career Break | Family relocation to Spain",
      workPlaceName: "",
      dates: "March 2023 - Present",
      city: "",
      state: "",
      country: "",
      duties: [
        {
          id: crypto.randomUUID(),
          value:
            "Managed sale of Baere Brewing Company, including operational handover, documentation, and staff transition.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Executed international relocation, overseeing visa process and family resettlement logistics.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Completed TEFL certification and 18-month Spanish language immersion; currently teaching in a Spanish public primary school.",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      ind: 4,
      positionTitle: "Co-Owner  |  Co-Founder  |  Operations Manager",
      workPlaceName: "Baere Brewing Company",
      dates: "2012 - 2023",
      city: "Denver",
      state: "Colorado",
      country: "",
      duties: [
        {
          id: crypto.randomUUID(),
          value:
            "Co-founded and operated a craft brewery, overseeing production, retail, and distribution operations in compliance with local, state, and federal regulations.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Directed business development from concept to launch, including site selection, buildout, equipment sourcing, and full operational setup.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Oversaw financial operations and managed ~$500,000 annual cash flow, including budgeting, payroll, accounting, and tax compliance.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Developed and implemented HR policies, hiring procedures, and team management systems to support a collaborative and accountable workplace.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Established internal systems and safety protocols in partnership with CSU Health & Safety to maintain OSHA-compliant operations.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Led company-wide operational pivot during COVID-19, transitioning from on-site service to packaging and distribution, implementing online ordering and revised logistics workflows.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Managed vendor relationships, procurement, and facility operations to ensure production continuity and cost control.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Built community partnerships, including a recurring “Charity of the Month” initiative supporting local nonprofits.",
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
      country: "",
      duties: [
        {
          id: crypto.randomUUID(),
          value:
            "Conducted regulatory inspections for food manufacturing and retail facilities, ensuring compliance with municipal and state health codes.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Advised business owners on risk mitigation strategies and operational improvements to reduce public health hazards.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Authored detailed inspection reports and enforcement documentation to support corrective action and legal proceedings.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Investigated foodborne illness complaints and public reports, coordinating follow-up actions and compliance measures.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Developed and delivered training programs for new staff and facility operators on regulatory standards and safe operating practices.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Led temporary facility closures and represented the department in formal enforcement and legal processes.",
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
      country: "",
      duties: [
        {
          id: crypto.randomUUID(),
          value:
            "Designed and executed large-scale forest restoration and habitat conservation projects across public lands.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Managed project lifecycles including planning, field implementation, data analysis, and reporting.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Collected and interpreted environmental data to inform resource management decisions and long-term planning.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Supervised and trained seasonal field crews, emphasizing safety protocols, risk mitigation, and equipment stewardship.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Developed operational procedures and training materials to improve internal program efficiency and compliance.",
        },
        {
          id: crypto.randomUUID(),
          value:
            "Created and delivered public-facing educational programming and community outreach initiatives.",
        },
      ],
    },
  ],
  technicalSkills: [
    {
      id: crypto.randomUUID(),
      skillCategory: "Operations & Strategy",
      skills: [
        {
          id: crypto.randomUUID(),
          value: "Operations Management",
        },
        {
          id: crypto.randomUUID(),
          value: "Business Development",
        },
        {
          id: crypto.randomUUID(),
          value: "Project Management",
        },
        {
          id: crypto.randomUUID(),
          value: "Financial & Budget Oversight",
        },
        {
          id: crypto.randomUUID(),
          value: "Regulatory Compliance & Risk Management",
        },
        {
          id: crypto.randomUUID(),
          value: "Policy & Procedure Development",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      skillCategory: "Leadership & Management",
      skills: [
        {
          id: crypto.randomUUID(),
          value: "Hiring & Staff Supervision",
        },
        {
          id: crypto.randomUUID(),
          value: "HR Administration & Payroll",
        },
        {
          id: crypto.randomUUID(),
          value: "Staff Training",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      skillCategory: "Technical & Systems",
      skills: [
        {
          id: crypto.randomUUID(),
          value: "Web Accessibility Testing (DHS Trusted Tester)",
        },
        {
          id: crypto.randomUUID(),
          value: "Web Development (HTML, CSS, JavaScript, React)",
        },
        {
          id: crypto.randomUUID(),
          value: "Digital & Visual Communication",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      skillCategory: "Languages",
      skills: [
        {
          id: crypto.randomUUID(),
          value: "English (Native)",
        },
        {
          id: crypto.randomUUID(),
          value: "Spanish (B1 - B2)",
        },
      ],
    },
  ],
};
export { emptyCV, demoCV };
