import logo from "./logo.svg";
import "./App.css";
import { PortfolioPage } from "./Components/Portfolio";
import { Contact } from "./Components/Contact";
import { Resume } from "./Components/Resume";
import { AboutMe } from "./Components/About Me";
import { Header } from "./Components/Header";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";

function App() {
  const pages = [
    {
      key: "about-me",
      displayName: "About Me",
    },
    {
      key: "portfolio",
      displayName: "Portfolio",
    },
    {
      key: "contact",
      displayName: "Contact",
    },
    {
      key: "resume",
      displayName: "Resume",
    },
  ];
  const projects = [
    {
      key: "project-1",
      displayName: "Remind Me",
      repositoryLink: "https://github.com/jmichaeldavis/remind-me",
      gitHubPagesLink: "https://monthlyreminders.herokuapp.com/",
      backgroundImageSource: "../public/images/remind-me.png",
    },
    {
      key: "project-2",
      displayName: "Cabinet Keepers",
      repositoryLink: "https://github.com/AegeanGrey/team-waffles",
      gitHubPagesLink: "https://aegeangrey.github.io/team-waffles",
      backgroundImageSource: "my-app/public/images/cabinet-keeper.png",
    },
    {
      key: "project-3",
      displayName: "J.A.T.E",
      repositoryLink: "https://github.com/jmichaeldavis/text-editor",
      gitHubPagesLink:
        "https://jmichaeldavis-text-editor-2b29e40b04ad.herokuapp.com",
      backgroundImageSource: "../public/images/jate.png",
    },
    {
      key: "project-4",
      displayName: "Tech Blog",
      repositoryLink: "https://github.com/jmichaeldavis/tech-blog",
      gitHubPagesLink: "https://git.heroku.com/jmichaeldavis-tech-blog.git",
      backgroundImageSource: "../public/images/tech-blog.png",
    },
    {
      key: "project-5",
      displayName: "Note Taker",
      repositoryLink: "https://github.com/jmichaeldavis/note-taker",
      gitHubPagesLink: "https://stark-tundra-68793-0bb5c00d78f0.herokuapp.com/",
      backgroundImageSource: "../public/images/note-taker.png",
    },
  ];
  const resume = [
    {
      title: "Project Manager and Analyst",
      location: "Landd, LLC - Lehi, UT",
      timeline: "February 2021 to January 2023",
      description:
        "I worked for a land development company that focused on the development of subdivisions and multi-family properties. I initially was hired as a land analyst, but I quickly learned and gained more responsibility. After 6 months I became in charge of managing our projects, meeting with city planners and managers, coordinating with our vendors, understanding the city code relating to each project, updating our investors, and presenting in front of city council. I essentially became the person to do anything and everything that my boss needed.",
    },
    {
      title: "Sales Professional",
      location: "Progrexion - Provo, UT",
      timeline: "October 2019 to February 2021",
      description:
        "I was a credit consultant. I answered 60-80 calls a day and sold our credit repair service to these leads. I quickly became a top salesman in my team. I averaged 8 sales per day with a high of 16 sales in one shift.",
    },
    {
      title: "Digital Marketing Specialist",
      location: "Canyonwall, LLC - Provo, UT",
      timeline: "August 2018 to October 2019",
      description:
        "I worked for Canyonwall. I managed Amazon marketing campaigns for over two dozen companies. I was able to consistently increase client success while keeping to their marketing budget. In addition, I created graphics using Adobe Illustrator and Adobe Photoshop to improve product detail pages.",
    },
    {
      title: "Restaurant Worker",
      location: "Cafe Zupas - Spanish Fork, UT",
      timeline: "August 2015 to January 2016",
      description:
        "I prepared and served food for our customers and aided in maintaining a clean and presentable restaurant.",
    },
  ];
  const [currentPage, setCurrentPage] = useState("about-me");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "portfolio":
        return <PortfolioPage projects={projects} />;
      case "contact":
        return <Contact />;
      // return <Contact />;
      case "resume":
        return <Resume resume={resume} />;
      case "about-me":
      default:
        return <AboutMe />;
    }
  };
  return (
    <div className="App">
      <Header />
      <NavBar pages={pages} onPageClick={setCurrentPage} />
      <div>{renderCurrentPage()}</div>
      <Footer />
    </div>
  );
}

export default App;
