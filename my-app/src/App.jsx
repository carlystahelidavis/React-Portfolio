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
      repositoryLink: "https://github.com/carlystahelidavis/remind-me",
      gitHubPagesLink: "https://monthlyreminders.herokuapp.com/",
      backgroundImageSource: "../public/images/remind-me.png",
    },
    {
      key: "project-2",
      displayName: "Java Chips",
      repositoryLink: "https://github.com/carlystahelidavis/java-chips",
      gitHubPagesLink: "https://carlystahelidavis.github.io/java-chips/",
      backgroundImageSource: "my-app/public/images/cabinet-keeper.png",
    },
    {
      key: "project-3",
      displayName: "First Personal Portfolio",
      repositoryLink: "https://github.com/carlystahelidavis/personal-portfolio",
      gitHubPagesLink:
        "https://carlystahelidavis.github.io/personal-portfolio/",
      backgroundImageSource: "../public/images/jate.png",
    },
    {
      key: "project-4",
      displayName: "Weather Forcast",
      repositoryLink: "https://github.com/carlystahelidavis/weather-forecast",
      gitHubPagesLink: "https://carlystahelidavis.github.io/weather-forecast/",
      backgroundImageSource: "../public/images/tech-blog.png",
    },
    {
      key: "project-5",
      displayName: "Work Day Scheduler",
      repositoryLink: "https://github.com/carlystahelidavis/work-day-scheduler",
      gitHubPagesLink:
        "https://carlystahelidavis.github.io/work-day-scheduler/",
      backgroundImageSource: "../public/images/note-taker.png",
    },
  ];
  const resume = [
    {
      title: "Receptionist",
      location: "Rural Power and Light - Orem, UT",
      timeline: "March 2023 - Present",
      description:
        "I am currently working at Rural Power and Light as a receptionist.  I manage the front office, take and direct curstomer calls to employees, manage other office tasks.  I also have joined the marketing team and am helping coordinate campaign and marketing shoots, and ad campaigns.",
    },
    {
      title: "Floral Designer",
      location: "Stems by Staheli - Spanish Fork, UT",
      timeline: "May 2020 - Present",
      description:
        "I am currently the owner of my own business doing floral design.  I work in the wedding and event industry.  I also would consider myself a freelance designer and help other companies work on their events as well.",
    },
    {
      title: "Receptionist",
      location: "Maple Ridge Chiropractic and Massage - Springville, UT",
      timeline: "August 2019 to October 2021",
      description:
        "I worked at Maple Ridge Chiropractic and Massage as a part time receptionist.  I managed over all office responsibilites with payments, phone calls, setting appointments, and greeting customers.  I took care of cleaning the office and set up the customers to prepare for their appointments.",
    },
    {
      title: "Resturant Worker",
      location: "Joe Banditos - Springville, UT",
      timeline: "June 2016 to January 2018",
      description:
        "At Joe Banditos I was a Hostess and a busser.  I would seat customers, take drinks, clean up tables, set up take out orders, and take payments.",
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
