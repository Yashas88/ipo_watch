import IpoTable from "./Components/IpoTable";
import Navbar from "./Components/Navbar"
import IpoCards from "./Components/Ipo_data_cards";
import AboutPage from "./Components/AboutPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div >
        <Navbar />
        <IpoTable />
        <IpoCards />
        <AboutPage/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
