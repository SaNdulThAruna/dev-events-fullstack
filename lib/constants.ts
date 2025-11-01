export type Event = {
  title: string;
  image: string; // path under public/images
  slug: string;
  location: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm (24h)
};

export const events: Event[] = [
  {
    title: "AWS re:Invent 2025",
    image: "/images/event1.png",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, USA",
    date: "2025-12-01",
    time: "09:00",
  },
  {
    title: "HackZurich 2025",
    image: "/images/event3.png",
    slug: "hackzurich-2025",
    location: "Zurich, Switzerland",
    date: "2025-11-21",
    time: "18:00",
  },
  {
    title: "JSConf Asia 2026",
    image: "/images/event4.png",
    slug: "jsconf-asia-2026",
    location: "Singapore",
    date: "2026-02-20",
    time: "09:30",
  },
  {
    title: "KubeCon + CloudNativeCon Europe 2026",
    image: "/images/event6.png",
    slug: "kubecon-cloudnativecon-europe-2026",
    location: "Barcelona, Spain",
    date: "2026-03-18",
    time: "08:45",
  },
  {
    title: "ETHGlobal London 2026",
    image: "/images/event1.png",
    slug: "ethglobal-london-2026",
    location: "London, UK",
    date: "2026-04-10",
    time: "17:00",
  },
  {
    title: "GraphQL Conf 2026",
    image: "/images/event3.png",
    slug: "graphql-conf-2026",
    location: "Berlin, Germany",
    date: "2026-05-08",
    time: "10:00",
  },
  {
    title: "Next.js Conf 2026 (Online)",
    image: "/images/event4.png",
    slug: "nextjs-conf-2026",
    location: "Online",
    date: "2026-03-05",
    time: "16:00",
  },
  {
    title: "PyCon US 2026",
    image: "/images/event6.png",
    slug: "pycon-us-2026",
    location: "Pittsburgh, USA",
    date: "2026-05-15",
    time: "09:00",
  },
];
