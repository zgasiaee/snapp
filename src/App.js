import { Route, Routes } from 'react-router-dom'

//component
import TaxiRide from './components/taxi-ride/TaxiRide'
import HomePage from './components/shared/HomePage'
import BikeDelivery from './components/bike-delivery/BikeDelivery'
import PickupTruck from './components/pichup-truck/PickupTruck'
import OnlineSupermarket from './components/online-supermarket/OnlineSupermarket'
import InternationalFlight from './components/international-flight/InternationalFlight'
import MedicalServices from './components/medical-services/MedicalServices'
import Hotels from './components/hotels/Hotels'
import Lodgings from './components/lodgings/Lodgings'
import Shop from './components/shop/Shop'
import Club from './components/club/Club'
import InvestmentServices from './components/investment-services/InvestmentServices'
import MovingServices from './components/moving-services/MovingServices'
import SnappCredit from './components/snapp-credit/SnappCredit'
import Ticket from './components/ticket/Ticket'
import BusTicket from './components/bus-ticket/BusTicket'
import TrainTicket from './components/train-ticket/TrainTicket'
import FlightsTicket from './components/flights-ticket/FlightsTicket'
import OnlineFood from './components/online-food/OnlineFood'
import Bakery from './components/online-food/Bakery'
import Juice from './components/online-food/Juice'
import Cafe from './components/online-food/Cafe'
import Confectionery from './components/online-food/Confectionery'
import Express from './components/express/Express'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Register from './components/register/Register'
import Career from './components/career/Career'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/taxi-ride" element={<TaxiRide />} />
        <Route path="/bike-delivery" element={<BikeDelivery />} />
        <Route path="/pickup-truck" element={<PickupTruck />} />
        <Route path="/online-supermarket" element={<OnlineSupermarket />} />
        <Route path="/international-flight" element={<InternationalFlight />} />
        <Route path="/medical-services" element={<MedicalServices />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/lodgings" element={<Lodgings />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/club" element={<Club />} />
        <Route path="/investment-services" element={<InvestmentServices />} />
        <Route path="/moving-services" element={<MovingServices />} />
        <Route path="/snapp-credit" element={<SnappCredit />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/bus-ticket" element={<BusTicket />} />
        <Route path="/train-ticket" element={<TrainTicket />} />
        <Route path="/flights-ticket" element={<FlightsTicket />} />
        <Route path="/online-food" element={<OnlineFood />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/juice-icecream" element={<Juice />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/confectionery" element={<Confectionery />} />
        <Route path="/express" element={<Express />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </>
  )
}

export default App
