import logo from './logo.svg';
import './App.css';
import { PortfolioPage } from './Components/Portfolio';
import { Contact } from './Components/Contact';
import { Resume } from './Components/Resume';
import { AboutMe } from './Components/About Me';
import { Header } from './Components/Header';
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';


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
  const [currentPage, setCurrentPage] = useState("about-me");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "portfolio":
        return <PortfolioPage projects={projects} />
      case "contact":
        return <div>Contact</div>
        return <Contact />
        // return <Contact />;
      case "resume":
        return <div>Resume</div>
        return <Resume resume={resume} />;
        // return <Resume resume={resume} />;
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
