import { Navbar } from "../components/Navbar"
import { FaDesktop, FaPencilRuler, FaPrint } from 'react-icons/fa';

export const Services = () => {
    return <div>
        <div>
            <Navbar />
        </div>
        <h1 className="text-center text-6xl font-bold p-4 text-orange-500">Services Offered</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
            <div>
                <div className="flex justify-center items-center text-4xl text-blue-700 mb-4">
                    <FaPencilRuler />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Branding</h3>
                <p className="text-gray-600 text-center m-4">
                    We work on typically involve creating a unique identity for a business, product, or individual. 
                    These projects can vary in scope but often include visual, experiential components that help clients 
                    stand out in their industry. This involve logo design, designing business cards etc.
                </p>
            </div>
            <div>
                <div className="flex justify-center items-center text-4xl text-blue-700 mb-4">
                    <FaDesktop />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Web Design</h3>
                <p className="text-gray-600 text-center m-4">
                    We offer a range of services that help businesses, individuals, or organizations create a strong online presence. 
                    My work focuses on designing websites that are visually appealing, user-friendly, and functional
                </p>
            </div>
            <div>
                <div className="flex justify-center items-center text-4xl text-blue-700 mb-4">
                    <FaPrint />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Print Design</h3>
                <p className="text-gray-600 text-center mb-4">
                    I'm specialized in creating visual designs for printed materials that effectively communicate a brand's message, product, or service.
                    I work on a variety of print projects, from brochures to posters to packaging, ensuring that designs are visually 
                    appealing and properly formatted for printing.
                </p>
            </div>
        </div>
    </div>
}