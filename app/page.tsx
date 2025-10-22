import { Layout } from "../components/layout/Layout";
//import {Button } from "../components/button";

export default function Dashboard() {
    return(
        <Layout>

            <div className="p-4 bg-blue-500 text-white rounded-lg">
                Tailwind Works 🎉
            </div>
            <section className="flex flex-col items-center justify-center text-center font-serif py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
                I'm Lucky, Are you feeling Lucky?
            </h1>
            <p className="text-lg font-sans text-gray-600 max-w-2xl mb-6">
                I'm a robotics enthusiast and software developer passionate about creating innovative solutions that blend hardware and software seamlessly.
            </p>
            <button>View My Works</button>
            </section>
            <div className="ring-2 ring-primary-500 p-4 bg-gray-100">
                Manual ring test 
            </div>
            {/* Projects Section */}
            <section className="py-24 px-6 bg-gray-50">
                <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-10 text-center">
                    Latest Projects
                </h2>
            <div  className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Autonomous Delivery Robot
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Developed a robot capable of navigating urban environments to deliver packages using computer vision and machine learning.
                    </p>
                    <button>See More</button>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        OCR Visual PCBA Quality Control
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Created an OCR system to inspect PCBA components, improving quality control processes in manufacturing.
                    </p>
                    <button>See More</button>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        My Food: Chinese Asian Restaurant
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Making information system for asian chinese restaurant 
                    </p>
                    <button>See More</button>
                </div>
            </div>
            </section>

            <section>
                
            </section>
        </Layout>
    )
}