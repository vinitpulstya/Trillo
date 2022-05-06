import Header from "../../components/Header/Header";
import Hotelview from "../../components/Hotelview/Hotelview";
import Sidebar from "../../components/Sidebar/Sidebar";
import './hotel.scss';

function Hotel() {
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

export default Hotel;