import videoBackground from '/Pictures/dana-background-video.mp4'; // Arka plan videosu
import { danaProducts } from '../../data'; // Dana ürün verilerini import ettik
import backgroundImg from '/Pictures/bg-bg-dana2.png'; // Arka plan resmi
import { Link } from 'react-router-dom'; // Link bileşeni
import geriIcon from '/Pictures/geri.png'; // Geri butonu resmi
import homeIcon from '/Pictures/home.png'; // Ana sayfa butonu resmi

const DanaProducts = () => {
  return (
    <div 
      className="relative w-full h-screen flex justify-center items-center" 
      style={{
        backgroundImage: `url(${backgroundImg})`, // Arka plan resmi
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }} // Arka plan resmi ayarları
    >
      <div className="relative w-[1140px] mx-4 my-6 p-2 bg-white bg-opacity-50"> {/* Şeffaf beyaz arka planlı dış div */}
        
        {/* Arka planda video */}
        <video
          autoPlay
          loop
          muted
          className="w-full h-auto object-cover rounded-md"
        >
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Şeffaf siyah arka planlı iç div */}
        <div className="absolute top-0 w-[95%] h-[95%] left-[2.5%] top-[2.5%] bg-black bg-opacity-50 flex flex-col justify-start items-center px-10 pb-10 pt-5 rounded-md">
          <h1 className="text-white text-4xl mb-4">Dana Et Ürünleri</h1> {/* Başlık */}
          <table className="table-auto w-full text-white"> {/* Fiyat listesi */}
            <thead>
              <tr>
                <th className="w-2/3 text-left pb-2 text-lg">Ürün</th> {/* Ürün başlığı */}
                <th className="w-1/3 text-right pb-2 text-lg">Fiyat</th> {/* Fiyat başlığı */}
              </tr>
            </thead>
            <tbody>
              {danaProducts.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 text-left text-md">{product.name}</td> {/* Ürün adı */}
                  <td className="py-2 text-right text-md">{product.price}</td> {/* Fiyat */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Geri butonu */}
      <Link to="/products" className="absolute bottom-4 right-4">
        <div className="bg-white rounded-full p-3 shadow-md flex justify-center items-center">
          <img src={geriIcon} alt="Geri" className="w-8 h-8" /> {/* Geri butonu */}
        </div>
      </Link>

      {/* Ana sayfa butonu */}
      <Link to="/" className="absolute top-4 right-4">
        <div className="bg-white rounded-full p-3 shadow-md flex justify-center items-center">
          <img src={homeIcon} alt="Ana Sayfa" className="w-8 h-8" /> {/* Ana sayfa butonu */}
        </div>
      </Link>
    </div>
  );
};

export default DanaProducts;
