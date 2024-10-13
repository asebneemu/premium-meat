import React from 'react';

const Mission = () => {
  return (
    <div className="p-4 mb-20">
      <h1 className="text-4xl font-bold text-center mt-40 mb-20">MİSYONUMUZ</h1> {/* Yukarıdan 200px margin eklendi */}
      <div className="flex justify-center mt-4"> {/* Flex kullanarak ortalanacak */}
        <div className="flex justify-between w-4/5"> {/* %80 genişliğinde bir alan */}
          <p className="w-1/3 text-left"> {/* %30 kaplama ve sola yaslama */}
            Bu, ilk paragrafın içeriğidir. Burada misyonunuz hakkında bilgi verebilirsiniz. Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius in numquam asperiores eveniet ipsam neque, excepturi facilis ad exercitationem cupiditate. Vitae sint non libero veritatis magnam voluptatibus accusamus vero?
          </p>
          <p className="w-1/3 text-right"> {/* %30 kaplama ve sağa yaslama */}
            Bu, ikinci paragrafın içeriğidir. Ek bilgiler veya açıklamalar ekleyebilirsiniz. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque a esse officiis tenetur, animi fuga, dolor et eaque numquam illo nostrum quod nisi dicta itaque sit commodi, nesciunt quos harum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
