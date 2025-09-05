export default function Hero() {
    return (
        <div
            className="relative w-full bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/hero.png')",
                height: '600px'  
            }}

        >
            <div className="absolute inset-0  bg-opacity-40"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Skyper Pool Partment</h1>
                <p className="text-sm md:text-lg mb-4">
                    112 Glenwood Ave Hyde Park, Boston, MA
                </p>
                <div className="flex gap-6 text-sm md:text-base mb-4">
                    <div>4 beds</div>
                    <div>5 Baths</div>
                    <div>1 Garage</div>
                    <div>1200 Sq Ft</div>
                </div>
                <div className="text-2xl font-semibold mb-4">$5,250/mo</div>
                <button className="bg-white text-[#0D263B] px-6 py-2 rounded font-medium hover:bg-gray-200 transition">
                    Read more
                </button>
            </div>
        </div>
    );
}
