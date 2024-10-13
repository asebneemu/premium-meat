
import yourImage from '/Pictures/png1.png'; // Resminizi buraya ekleyin

const Navbar = () => {
  return (
    <div className="top-0 left-0 right-0 z-10 flex items-center">
      <div className="flex justify-start mx-1 w-1/2"> {/* Sol resim için alan */}
        <img 
          src={yourImage} 
          alt="Descriptive Alt Text" 
          className="w-[50%]" // Resim genişliği
        />
      </div>
      <div className="flex-grow flex items-center p-2"> {/* Butonlar için alan */}
        <div className="flex justify-around space-x-24"> {/* Butonlar arasında çok daha fazla mesafe */}
          <a 
            href="#mission" 
            className="bg-gradient-to-r from-red-600 via-gray-300 to-orange-400 text-transparent bg-clip-text text-2xl font-bold border-2 border-transparent hover:bg-white hover:text-red-600 transition duration-300 px-2 py-1 rounded"
          >
            Misyonumuz
          </a>
          <a 
            href="#products" 
            className="bg-gradient-to-r from-red-600 via-gray-300 to-orange-400 text-transparent bg-clip-text text-2xl font-bold border-2 border-transparent hover:bg-white hover:text-red-600 transition duration-300 px-2 py-1 rounded"
          >
            Ürünlerimiz
          </a>
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-red-600 via-gray-300 to-orange-400 text-transparent bg-clip-text text-2xl font-bold border-2 border-transparent hover:bg-white hover:text-red-600 transition duration-300 px-2 py-1 rounded"
          >
            İletişim
          </a>
        </div>
      </div>
      <div className="flex justify-end mx-1 w-1/2"> {/* Sağ resim için alan */}
        <img 
          src={yourImage} 
          alt="Descriptive Alt Text" 
          className="w-[50%]" // Resim genişliği
        />
      </div>
    </div>
  );
};

export default Navbar;
