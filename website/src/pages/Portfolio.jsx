import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Link } from 'react-router-dom';

export const Portfolio = () => {
    const images = [
        {
            id: 1,
            image: '/Logo1.png',
            clientName: 'Client A',
            description: 'This is a brief description of the project.',
        },
        {
            id: 2,
            image: '/Logo3.png',
            clientName: 'Client B',
            description: 'This is a brief description of another project.',
        },
        {
            id: 3,
            image: '/Logo2.png',
            clientName: 'Client C',
            description: 'This is a brief description of another project.',
        },
        {
            id: 4,
            image: '/Logo4.png',
            clientName: 'Client D',
            description: 'This is a brief description of another project.',
        },
        {
            id: 5,
            image: '/Logo1.png',
            clientName: 'Client E',
            description: 'This is a brief description of another project.',
        },
        {
            id: 6,
            image: '/Logo6.png',
            clientName: 'Client F',
            description: 'This is a brief description of another project.',
        },
        {
            id: 7,
            image: '/Logo7.png',
            clientName: 'Client G',
            description: 'This is a brief description of another project.',
        },
        {
            id: 8,
            image: '/Logo8.png',
            clientName: 'Client H',
            description: 'This is a brief description of another project.',
        },
        {
            id: 9,
            image: '/Logo9.png',
            clientName: 'Client I',
            description: 'This is a brief description of another project.',
        },
    ];

    return <div>
        <div>
            <Navbar />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
            {images.map((image) => (
                <div key={image.id} className="relative rounded-lg overflow-hidden shadow-lg">
                    <Link to={`/model/${image.id}`}>
                        <img
                            src={image.image}
                            className="h-auto max-w-full rounded-lg object-cover"
                        />
                    </Link>
                </div>
            ))}
        </div>
        <Footer />
    </div>
}
