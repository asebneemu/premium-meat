import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Rota kontrolü için useLocation hook'u
import yourImage from '/Pictures/anaplan.png'; // Resmi burada da import et

function AnimatedImage() {
  const location = useLocation(); // Şu anki rotayı almak için kullanılıyor
  const [showImage, setShowImage] = useState(true); // Başlangıçta resmi göster
  const [isAnimating, setIsAnimating] = useState(false); // Animasyon kontrolü için state

  // Sadece anasayfada görüntülemek için rota kontrolü
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      const timer = setTimeout(() => {
        if (showImage && !isAnimating) {
          setIsAnimating(true); // 15 saniye sonra animasyonu başlat
          setTimeout(() => {
            setShowImage(false); // Animasyon bittiğinde resmi gizle
          }, 1000); // Animasyon süresi
        }
      }, 5000); // 5 saniye sonra

      return () => clearTimeout(timer); // Timer'ı temizle
    }
  }, [showImage, isAnimating, isHomePage]);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true); // Animasyonu başlat
      setTimeout(() => {
        setShowImage(false); // Animasyon bittiğinde resmi gizle
      }, 1000); // Animasyon süresi
    }
  };

  return (
    <>
      {isHomePage && showImage && ( // Sadece anasayfada gösterilecek
        <div className="fixed top-0 left-0 right-0 flex justify-center z-50" onClick={handleClick}>
          <img 
            src={yourImage} 
            alt="Animasyonlu Resim" 
            className={`transition-transform transform ${isAnimating ? 'animate-slideOut' : 'animate-slideIn'}`} 
          />
        </div>
      )}
    </>
  );
}

export default AnimatedImage;
