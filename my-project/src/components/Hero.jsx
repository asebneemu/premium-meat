import { Link } from 'react-router-dom'; // Link bileşeni eklendi

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center"> {/* Ekranı tamamen kaplayan div, dikey ve yatay ortalama */}
      {/* Arka planda video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/Pictures/video.mp4" type="video/mp4" /> {/* Video dosyasını public klasöründen al */}
      </video>
      
      {/* İçerik */}
      <div className="w-[1140px] flex items-center justify-center h-[80%] p-8 m-4 bg-white bg-opacity-20 rounded-md"> {/* Şeffaf beyaz arka plan */}
        {/* Şeffaf siyah arka planlı iç div */}
        <div className="flex-grow flex flex-col items-center justify-center p-8 bg-black bg-opacity-50 rounded-md h-[95%] space-y-8"> {/* Saydam siyah arka plan */}
          <div className="flex justify-center space-x-48"> {/* Butonlar arasında mesafe artırıldı */}
            <Link 
              to="/" // Ana sayfaya yönlendirme
              className="bg-gradient-to-r from-red-600 via-gray-300 to-orange-400 text-transparent bg-clip-text text-2xl font-bold border-2 border-transparent hover:text-red-600 transition duration-300 px-2 py-1 rounded"
            >
              Anasayfa
            </Link>
            <Link 
              to="/mission" // Yönlendirme
              className="bg-gradient-to-r from-red-600 via-gray-300 to-orange-400 text-transparent bg-clip-text text-2xl font-bold border-2 border-transparent hover:text-red-600 transition duration-300 px-2 py-1 rounded"
            >
              Misyonumuz
            </Link>
            <Link 
              to="/products" // Ürünlerimiz linki için Link bileşeni kullanıldı
              className="bg-gradient-to-r from-red-600 via-gray-300 to-orange-400 text-transparent bg-clip-text text-2xl font-bold border-2 border-transparent hover:text-red-600 transition duration-300 px-2 py-1 rounded"
            >
              Ürünlerimiz
            </Link>
            <Link 
              to="/contact" // İletişim linki güncellendi
              className="bg-gradient-to-r from-red-600 via-gray-300 to-orange-400 text-transparent bg-clip-text text-2xl font-bold border-2 border-transparent hover:text-red-600 transition duration-300 px-2 py-1 rounded"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
