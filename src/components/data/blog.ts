export interface Blog {
  id: number;
  title: string;
  desc: string;
  image: string;
  date: string;
  content: string;
}

export const blogsData: Blog[] = [
  {
    id: 1,
    title: "Why Every Business Needs a Responsive Website",
    desc: "Learn how responsive design improves user experience, SEO, and conversions in 2025.",
    image: "/images/blog1.jpg",
    date: "2025-11-09",
    content: `
Responsive websites adjust to all screen sizes, improving accessibility and SEO ranking.
With the increase in mobile users, responsive design ensures visitors have a seamless experience,
reduces bounce rate, and enhances conversion rates. At Nexify Digital, we focus on responsive frameworks like ReactJS + Tailwind to deliver flawless web experiences.`,
  },
  {
    id: 2,
    title: "The Power of CRM Systems in Business Growth",
    desc: "Explore how CRM systems streamline customer management and boost team collaboration.",
    image: "/images/blog2.jpg",
    date: "2025-11-07",
    content: `
CRM systems help manage clients, automate leads, and strengthen communication.
A well-designed CRM platform improves follow-ups, organizes data, and provides performance insights,
which ultimately improves sales and customer satisfaction.`,
  },
  {
    id: 3,
    title: "Boost Your Brand with Digital Marketing Strategies",
    desc: "Discover the latest techniques to grow your business through social media and SEO marketing.",
    image: "/images/blog3.jpg",
    date: "2025-11-05",
    content: `
Digital marketing helps businesses expand visibility through social media, SEO, and ads.
Modern strategies include targeted ad campaigns, content marketing, and analytics-driven results.
Our digital marketing team ensures brand visibility and audience engagement.`,
  },
  {
    id: 4,
    title: "How Hotel Management Software Simplifies Operations",
    desc: "End-to-end automation for hospitality management with real-time booking and billing systems.",
    image: "/images/blog4.jpg",
    date: "2025-11-02",
    content: `
Hotel management systems reduce manual errors and streamline operations.
Online booking, room availability, and integrated billing make the process fast and efficient.
We create custom hotel management apps tailored to each client's business needs.`,
  },
];
