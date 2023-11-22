import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  nodejs,
  git,
  docker,

  svt,
  phogene,
  hetejdid,

  azure,
  firebase,
  flutter,
  go,
  java,
  kotlin,
  python,
  unity,
  ubuntu,
  sastec,
  quebec,
  tekab,
  space,
  speech,
  gym

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "explore",
    title: "Explore",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Simulation & Gaming",
    icon: creator,
  },
  {
    title: "AR / VR",
    icon: backend,
  },

];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Go",
    icon: go,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Mobile & Web developer",
    company_name: "Quebec center",
    icon: quebec,
    iconBg: "#ffffff",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Develop a language learning platform",
      "Implement voice interaction features",
      "Design user interfaces for language lessons",
      "Optimize platform performance for responsiveness",
      "Conduct thorough testing of voice interactions",
      "Document the development process and features",
    ],
  },
  {
    title: "Backend developer",
    company_name: "Tekab dev",
    icon: tekab,
    iconBg: "#ffffff",
    date: "Aug 2021 - Jan 2022",
    points: [
        "Design and implement robust APIs",
        "Development of backend services for a video streaming platform.",
        "Collaborate with front-end developers for seamless integration",
        "Migrating project to a more suitable technology.",],
},
{
  title: "Web developer intern",
  company_name: "SASTEC Group",
  icon: sastec,
  iconBg: "#383E56",
  date: "Feb 2021 - May 2023",
  points: [
      "Develop Design-to-web automatic conversion solution",
      "Collaborate with designers for accuracy",
      "Optimize code for performance",
      "Conduct thorough testing",
      "Document conversion process and guidelines",
  ],
}
];

const explores = [
  {
    platform:
      "Play store apps",
    link: "https://play.google.com/store/apps/developer?id=Hazem+Jday",
    image: "https://freelogopng.com/images/all_img/1664285914google-play-logo-png.png",
  },
  {
    platform:
      "Github",
    link: "https://github.com/hazem-jday",
    image: "https://camo.githubusercontent.com/fe3b97974431a5652f0572ef8dd3c46d206d0aeb9658c7dd1f9c766ed89e4215/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f6769746875622d69636f6e2d77686974652f6769746875622d69636f6e2d77686974652d362e6a7067",
  },
  {
    platform:
      "LinkedIn",
    link: "https://www.linkedin.com/in/hazemjday",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png",
  },
];

const projects = [
  {
      name: "SVT Bac Sciences",
      description:
          "A Bac Exam Quiz App, developed with Android Studio and Kotlin. This education tool enhances student preparation with a user-friendly interface and seamless navigation. It is now on play store with more thn 60K dowloads.",
      tags: [
          {
              name: "Android",
              color: "blue-text-gradient",
          },
          {
              name: "Kotlin",
              color: "green-text-gradient",
          }
      ],
      image: svt,
      source_code_link: "https://github.com/hazem-jday/svt-bac",
      live_demo_link: "https://play.google.com/store/apps/details?id=com.hazemjday.svtbacsciencesexprimentales",
  },
  {
      name: "PhoGene",
      description:
          "A Mobile App leveraging the 'Stable Diffusion' AI model for image generation, developed with Android Studio, Kotlin and Firebase. This project demonstrates my commitment to integrating cutting-edge technologies for innovative solutions.",
      tags: [
          {
              name: "Android",
              color: "blue-text-gradient",
          },
          {
              name: "Firebase",
              color: "green-text-gradient",
          },
          {
              name: "AI",
              color: "pink-text-gradient",
          },
      ],
      image: phogene,
      source_code_link: "https://github.com/hazem-jday",
      live_demo_link: "https://www.linkedin.com/posts/hazemjday_android-kotlin-ai-activity-7065366074740924417-CLQM",
  },
  {
      name: "Het ejdid",
      description:
          "Web news application featuring web scraping capabilities. Developed with React.js for the frontend, Golang for the backend, and Python for web scraping, this project illustrates my expertise in building interactive and dynamic web applications.",
      tags: [
          {
              name: "ReactJS",
              color: "blue-text-gradient",
          },
          {
              name: "Go",
              color: "green-text-gradient",
          },
          {
              name: "Python",
              color: "pink-text-gradient",
          },
          {
              name: "Web Scraping",
              color: "orange-text-gradient",
          },
          {
              name: "Docker",
              color: "purple-text-gradient",
          },
      ],
      image: hetejdid,
      source_code_link: "https://github.com/hazem-jday/het-ejdid",
      live_demo_link: "https://www.linkedin.com/posts/hazemjday_reactjs-python-golang-activity-6936635786477899776-nMIy",
  },
  {
    name: "Tunisian Space Odyssey",
    description:
        "Virtual Reality experience, which invites you on a mesmerizing journey to the moon and beyond, all aboard a Tunisian spacecraft.",
    tags: [
        {
            name: "Unity",
            color: "blue-text-gradient",
        },
        {
            name: "VR",
            color: "green-text-gradient",
        },
        {
            name: "3D",
            color: "pink-text-gradient",
        }
    ],
    image: space,
    source_code_link: "https://github.com/hazem-jday/SpaceHackathon",
    live_demo_link: "https://www.linkedin.com/posts/rihab-ben-moussa-a15905224_space-hackathon-event-activity-7114659446336667648-faX2?utm_source=share&utm_medium=member_desktop",
},
{
  name: "Speech Tools",
  description:
      "A web interface developed with python for Text To Speech (TTS) generation, using gradio library and responsive voice.",
  tags: [
      {
          name: "Unity",
          color: "blue-text-gradient",
      },
      {
          name: "VR",
          color: "green-text-gradient",
      },
      {
          name: "3D",
          color: "pink-text-gradient",
      }
  ],
  image: speech,
  source_code_link: "https://github.com/hazem-jday/speech-tools",
  live_demo_link: "no",
},

{
  name: "One Touch FA",
  description:
      "Membership management desktop application for a gym in Saudi Arabia.",
  tags: [
      {
          name: "Flutter",
          color: "blue-text-gradient",
      },
      {
          name: "Desktop",
          color: "green-text-gradient",
      },
      {
          name: "Supabase (realtime database)",
          color: "pink-text-gradient",
      }
  ],
  image: gym,
  source_code_link: "https://github.com/hazem-jday",
  live_demo_link: "no",
},
  
];

export { services, technologies, experiences, explores, projects };
