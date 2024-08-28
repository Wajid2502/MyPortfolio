import {
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoBootstrap,
} from "react-icons/bi";
import {
  TbBrandNextjs,
  TbApi,
  TbDatabase,
  TbBrandPrisma,
  TbBrandNodejs,
} from "react-icons/tb";
import { SiThemoviedatabase, SiExpress, SiReactquery } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "The Unique Closet",
    image: "./muc.svg",
    icons: [BiLogoReact, BiLogoTypescript, BiLogoFirebase, SiReactquery],
    date: "September 2023 - May 2024 • Philadelphia, USA",
    description:
      "A sophisticated tool allowing users to design custom closets tailored to their room layouts, with options to define walls, select spaces, add shelves and cabinets, choose materials, and finalize orders seamlessly.",
    github: "https://github.com/VijayKumarReddyTalakola/IMDB",
    demo: "https://imdb-rho.vercel.app",
  },
  {
    id: "2",
    name: "Sauk Valley Community College",
    image: "./svcc.svg",
    icons: [BiLogoReact, BiLogoBootstrap, BiLogoFirebase, TbBrandNodejs],
    date: "November 2022 - July 2023 • Philadelphia, USA",
    description:
      "A responsive website for Sauk Valley Community College, enhancing user experience with intuitive navigation, integrated course catalogs, and a streamlined application process. Designed for optimal accessibility, the site supports the college’s mission to provide quality education",
    github: "https://github.com/VijayKumarReddyTalakola/Ecommerce-Demo",
    demo: "https://vijay-ecommerce.vercel.app",
  },
  {
    id: "3",
    name: "PetLand",
    image: "./petland.png",
    icons: [BiLogoReact, BiLogoCss3, BiLogoFirebase],
    date: "November 2021- April 2022 • Philadelphia, USA",
    description:
      "Developed a responsive e-commerce website for Petland, enabling users to shop for pets, brands, food, and access training tutorials and health resources. The site features intuitive navigation, category browsing by pet type, and a streamlined user experience, supporting both sales and educational content.",
    github: "https://github.com/VijayKumarReddyTalakola/Chat-App",
    demo: "https://vchat4whisperchat.vercel.app",
  },
  // {
  //   id: "4",
  //   name: "Expense Tracker",
  //   image: "./expense-tracker.png",
  //   icons: [
  //     BiLogoMongodb,
  //     SiExpress,
  //     BiLogoReact,
  //     BiLogoRedux,
  //     BiLogoTailwindCss,
  //   ],
  //   description:
  //     "This application provides an interface for users to track their expenses .",
  //   github: "https://github.com/VijayKumarReddyTalakola/Expense-Tracker",
  //   demo: "https://vtrack-expense.vercel.app",
  // },
  // {
  //   id: "5",
  //   name: "Car Rental Website",
  //   image: "./car-rental-app.png",
  //   icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
  //   description:
  //     "This is an online platform that allows users to rent cars for personal or business use.",
  //   github: "https://github.com/VijayKumarReddyTalakola/nextjs-car-rental-app",
  //   demo: "https://car-rental-application.vercel.app",
  // },
  // {
  //   id: "8",
  //   name: "Blog Application",
  //   image: "./blog-app.png",
  //   icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb, TbBrandPrisma],
  //   description:
  //     "This application allows users to express their thoughts and experiences through blogs.",
  //   github: "https://github.com/VijayKumarReddyTalakola/Blog-Application",
  //   demo: "https://write-ur-blog.vercel.app",
  // },
];

export default ProjectsData;
