import React from 'react';
import danaImage from '/Pictures/dana.png'; // Dana resmi
import kuzuImage from '/Pictures/kuzu.png'; // Kuzu resmi
import tavukImage from '/Pictures/tavuk.png'; // Tavuk resmi
import sakatatImage from '/Pictures/sakatat.png'; // Sakatat resmi

const Products = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-20 mt-20">ÜRÜNLERİMİZ</h1> {/* Ürünlerimiz başlığı */}
      <div className="flex justify-around"> {/* Divlerin yan yana olması için flex kullanılıyor */}
        <div className="border p-4"> {/* Dana için div */}
          <img src={danaImage} alt="Dana" className="w-full h-auto mb-2" /> {/* Dana resmi */}
          <h2>Dana</h2>
          <p>Ürün hakkında bilgi burada yer alacak.</p>
        </div>
        <div className="border p-4"> {/* Kuzu için div */}
          <img src={kuzuImage} alt="Kuzu" className="w-full h-auto mb-2" /> {/* Kuzu resmi */}
          <h2>Kuzu</h2>
          <p>Ürün hakkında bilgi burada yer alacak.</p>
        </div>
        <div className="border p-4"> {/* Tavuk için div */}
          <img src={tavukImage} alt="Tavuk" className="w-full h-auto mb-2" /> {/* Tavuk resmi */}
          <h2>Tavuk</h2>
          <p>Ürün hakkında bilgi burada yer alacak.</p>
        </div>
        <div className="border p-4"> {/* Sakatat için div */}
          <img src={sakatatImage} alt="Sakatat" className="w-full h-auto mb-2" /> {/* Sakatat resmi */}
          <h2>Sakatat</h2>
          <p>Ürün hakkında bilgi burada yer alacak.</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
