import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import NotificationButton from "./components/NotificationButton"

function App() {
  return (
    <>
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
