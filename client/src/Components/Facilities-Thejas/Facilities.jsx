import HostelInfo from './Hostels';
import ParkingInfo from './Parking';
import BackToTop from '../../BackToTop';
import Canteen from './Annapoorna';
import CoOpStore from './Co-op';
import ClsAndLabs from './ClsAndLabs';
import ComputerCenter from './CompCenter';
import Library from './Library';
import StaffRoom from './StaffRoom';

function Facilities() {
  return (
    <>
      <Canteen/>
      <CoOpStore/>
      <ClsAndLabs/>
      <ComputerCenter/>
      <HostelInfo />
      <Library/>
      <StaffRoom/>
      <ParkingInfo />
      <BackToTop />
    </>
  );
}

export default Facilities;
