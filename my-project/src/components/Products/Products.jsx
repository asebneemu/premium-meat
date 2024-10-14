import { Link } from 'react-router-dom'; // Link bileşeni import edildi
import topImage from '/Pictures/top-image.png';
import videoDana from '/Pictures/dana-background-video.mp4'; // Dana arka plan videosu
import videoKuzu from '/Pictures/kuzu-background-video.mp4'; // Kuzu arka plan videosu
import videoTavuk from '/Pictures/tavuk-background-video.mp4'; // Tavuk arka plan videosu
import videoSakatat from '/Pictures/sakatat-background-video.mp4'; // Sakatat arka plan videosu
import backgroundImg from '/Pictures/products-bg.png'; // Arka plan resmi

const Products = () => {
    return (
        <div 
            className="flex flex-col items-center" 
            style={{
                backgroundImage: `url(${backgroundImg})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                minHeight: '100vh' // Sayfanın tamamen kaplanması için
            }}
        >
            <div className="flex justify-center items-center mt-10">
                <div className="bg-black bg-opacity-80 rounded-full flex justify-center items-center" style={{ width: '200px', height: '200px' }}>
                    <img src={topImage} alt="Top Image" className="w-48 h-auto" />
                </div>
            </div>
            <h1 className="text-4xl font-bold mb-8 mt-[3%]">ÜRÜNLERİMİZ</h1>

            <div className="flex flex-wrap justify-between w-full px-10 py-10">
                {/* Dana Eti Ürünleri Divi */}
                <div className="border-4 border-black w-[22%] p-2 mb-4 relative">
                    <div className="relative w-full h-[200px]">
                        <video
                            autoPlay
                            loop
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={videoDana} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <Link to="/dana-urunleri">
                                <h1 className="text-white text-xl font-bold">DANA ETİ ÜRÜNLERİ</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Kuzu Eti Ürünleri Divi */}
                <div className="border-4 border-black w-[22%] p-2 mb-4 relative">
                    <div className="relative w-full h-[200px]">
                        <video
                            autoPlay
                            loop
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={videoKuzu} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <Link to="/kuzu-urunleri">
                                <h1 className="text-white text-xl font-bold">KUZU ETİ ÜRÜNLERİ</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Tavuk Eti Ürünleri Divi */}
                <div className="border-4 border-black w-[22%] p-2 mb-4 relative">
                    <div className="relative w-full h-[200px]">
                        <video
                            autoPlay
                            loop
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={videoTavuk} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <Link to="/tavuk-urunleri">
                                <h1 className="text-white text-xl font-bold">TAVUK ETİ ÜRÜNLERİ</h1>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sakatat Ürünleri Divi */}
                <div className="border-4 border-black w-[22%] p-2 mb-4 relative">
                    <div className="relative w-full h-[200px]">
                        <video
                            autoPlay
                            loop
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={videoSakatat} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <Link to="/sakatat-urunleri">
                                <h1 className="text-white text-xl font-bold">SAKATAT ÜRÜNLERİ</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Home Butonu Sağ Üstte */}
            <Link to="/" className="fixed top-4 right-4 rounded-full bg-white p-5 shadow-md"> {/* Sağ üst köşeye yerleştirildi */}
                <img src="/Pictures/home.png" alt="Home" className="w-8 h-8" />
            </Link>
        </div>
    );
};

export default Products;
