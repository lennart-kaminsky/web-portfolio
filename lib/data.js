const projects = [
  {
    title: "i still skip over songs",
    subtitle: "Spotify Dashboard",
    slug: "spotify-dashboard",
    tools: [
      "React",
      "Next.js",
      "next-auth",
      "Zustand",
      "styled-components",
      "spotfy-web-api-node",
      "use-local-storage-state",
      "Vercel",
    ],
    image: {
      url: "/images/dashboard-desktop.png",
      width: 3584,
      height: 1996,
    },
    hrefs: [
      { title: "live", url: "https://www.istillskipoversongs.com/" },
      {
        title: "code",
        url: "https://github.com/lennart-kaminsky/spotify-dashboard",
      },
    ],
    description:
      "This is a spotify dashboard that shows your listening habits such as top artists, top tracks and the songs you recently listened to.",
  },
  {
    title: "My Grocery",
    subtitle: null,
    slug: "my-grocery",
    tools: [
      "React",
      "Next.js",
      "styled-components",
      "SWR",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Leaflet",
      "OpenStreetMap API",
      "Lottie for React",
      "use-local-storage-state",
      "Vercel",
    ],
    image: {
      url: "/images/myGrocery-desktop.png",
      width: 3584,
      height: 1996,
    },
    hrefs: [
      { title: "live", url: "https://capstone-grocery-app.vercel.app/" },
      {
        title: "code",
        url: "https://github.com/lennart-kaminsky/capstone-grocery-app",
      },
    ],
    description:
      "My Grocery is a shopping list app for groceries with the option of linking created products and stores with each other while also saving and displaying additional information such as locations or product photos.",
  },
  {
    title: ".This",
    subtitle: null,
    slug: "this",
    tools: ["React", "Next.js", "styled-components", "framer-motion", "Vercel"],
    image: {
      url: "/images/this-desktop-dark.png",
      width: 3584,
      height: 1996,
    },
    hrefs: [
      { title: "live", url: "/" },
      {
        title: "code",
        url: "https://github.com/lennart-kaminsky/web-portfolio",
      },
    ],
    description:
      "In case you are wondering how i built this website. The code is open source so feel free to take a look at it.",
  },
];

export default projects;

export const aboutParagraphs = [
  "Hello again. I'm Lennart, most people call me Lenni, and I'm a Junior Web Developer. I studied computer science for a few years but decided that university was not the right way for me to get where I want to be. I found my fascination for web development though and that's why I completed a bootcamp to get a solid foundation with a lot of practise in web development.",
  "Now I am building my own projects to educate myself further while also looking for a job where I can grow and learn more about development. I love working with new tools and technologies and hope to learn a lot from experienced developers.",
  "When I'm not coding, you propably see me on my mountain bike or meet me on concerts. I'm always up for a coffee or a beer and a good chat about music, bikes, photography or coding.",
];

export const techStack = [
  { name: "React", href: "https://reactjs.org/" },
  { name: "Next.js", href: "https://nextjs.org/" },
  { name: "styled-components", href: "https://styled-components.com/" },
  { name: "framer-motion", href: "https://www.framer.com/motion/" },
  { name: "MongoDB", href: "https://www.mongodb.com/" },
  { name: "Mongoose", href: "https://mongoosejs.com/" },
];