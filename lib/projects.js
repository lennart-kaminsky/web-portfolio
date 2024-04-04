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
