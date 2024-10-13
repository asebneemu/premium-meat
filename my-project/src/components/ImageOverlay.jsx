import yourImage from '/Pictures/orta.png'; // Resminizi buraya ekleyin

const ImageOverlay = () => {
  return (
    <div className="w-full h-screen relative">
      <img 
        src={yourImage} 
        alt="Descriptive Alt Text" 
        className="absolute top-10 left-0 w-full h-full object-cover opacity-70" 
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-40 p-4 rounded">
        <h2 className="text-center text-5xl text-white font-bold">Taze ve Sağlıklı Et Ürünleri ve Toptan Satışın Doğru Adresi</h2> {/* Yazı boyutu büyütüldü */}
        
      </div>
      
    </div>
  );
};

export default ImageOverlay;
