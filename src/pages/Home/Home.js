import Header from "../../components/Header/Header";
import Hotelview from "../../components/Hotelview/Hotelview";
import Sidebar from "../../components/Sidebar/Sidebar";
import './home.scss';

function Home() {
    return (
      <>
          <Header />
          <div className="content">
            <Sidebar />
            <Hotelview />
          </div>
      </>
    );
  }
  
  export default Home;