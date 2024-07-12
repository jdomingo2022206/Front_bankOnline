import Navbar from "../components/navbar/Navbar";
import heroImage from '../assets/img/banco.jpg'
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:mr-8">
                        <h1 className="text-5xl font-bold leading-tight mb-6">Welcome to E-bank: Your Trusted Financial Partner!</h1>
                        <p className="text-gray-700 text-lg mb-6">E-bank offers a seamless and secure banking experience with features like easy account opening, instant money transfers, and comprehensive financial management. Join us and take control of your finances today.</p>
                        <div className="flex space-x-4">
                            <Link to='/createAccount' className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md">Open an Account</Link>
                            <button className="bg-gray-400 hover:bg-gray-300 text-black px-6 py-3 rounded-md">Learn More</button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-12 lg:mt-0">
                        <img src={heroImage} alt="E-bank" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;