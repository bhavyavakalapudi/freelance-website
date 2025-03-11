import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const Hero = () => {
    return <div>
        <div>
            <Navbar />
        </div>
        <div>
            <div className="h-screen w-full" style={{ backgroundImage: "url('/Hi I am.png')" }}>
                <h1 className="text-center text-6xl font-bold pt-50">Hi I'm Alex</h1>
                <h2 className="text-center text-3xl pt-5">Graphic designer</h2>
                <div className="text-center pt-15">
                <Link to="/portfolio" className="btn btn-primary text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View My Work</Link>
                <Link to="/contact" className="btn btn-primary text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get in Touch</Link>    
                </div>
                </div>
        </div>
        <Footer />
    </div>
}