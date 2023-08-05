import logo from './logo.svg';
import './App.css';

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
        return <div>Portfolio Page</div>
        // return <Portfolio projects={projects} />;
      case "contact":
        return <div>Contact</div>
        // return <Contact />;
      case "resume":
        return <div>Resume</div>
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
  );
}

export default App;
