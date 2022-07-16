import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
      <Header />
      <main> {/*  <!-- Principal, semantica  --> */}
        <section id="sales"> {/* <!-- Uma section  --> */}
          <div className="dsmeta-container"> {/* <!-- vai delimitar o tamanho --> */}
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
