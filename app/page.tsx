import Footer from "./componenets/footer/Footer";
import Navbar from "./componenets/navbar/Navbar";
import Nosotros from "./componenets/nosotros/Nosotros";
import Proyectos from "./componenets/proyectos/Proyectos";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Nosotros />
        <Proyectos />
      </main>
      <Footer />
    </div>
  )
}
