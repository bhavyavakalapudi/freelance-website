import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const About = () => {
    return <div>
        <div>
            <Navbar />
        </div>
        <div className="bg-blue-200 text-center">
            <h1 className="text-center pt-5 text-xl font-bold">Welcome to My Website  🌟</h1>
            <div className="flex justify-center items-center">
                <img class="rounded-full w-90 h-90 m-10 shadow-xl dark:shadow-gray-800" src="Profilepic.jpg" alt="image description"></img>
            </div>
            <p className="p-5">
                I'm a talented graphic designer with two years of experience, recognized for delivering high-quality, creative designs that effectively
                communicate ideas and engage audiences. With a strong command of design tools like Adobe Creative Suite, they specialize in branding,
                web design, and marketing materials. </p>
            <p className="p-5">
                Now looking to showcase their work, this designer is eager to present a portfolio that highlights
                their ability to blend aesthetics with functionality, demonstrating their expertise in visual storytelling and their growth within the design field.
                Now looking to showcase their work, this designer is eager to present a portfolio that highlights
                their ability to blend aesthetics with functionality, demonstrating their expertise in visual storytelling and their growth within the design field.
            </p>
        </div>
        <Footer />
    </div>
}