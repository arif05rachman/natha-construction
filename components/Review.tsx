import React from "react";

const Review = () => {
  return (
    <div className="row">
      <div className="span12 aligncenter">
        <h3 className="title">
          <strong>Pendapat konsumen</strong> terhadap kami
        </h3>
        <div className="blankline30"></div>

        <ul className="bxslider">
          <li>
            <blockquote>
              Sangat puas dengan hasil kerja perusahaan ini dalam membangun
              kandang ayam kami. Tim profesional dan berpengalaman, mereka mampu
              memberikan solusi yang tepat sesuai dengan kebutuhan peternakan
              kami. Kualitas konstruksi dan perhatian terhadap detailnya sungguh
              luar biasa!
            </blockquote>
            <div className="testimonial-autor">
              <img src="img/dummies/testimonial/1.png" alt="" />
              <h4>Hillary Doe</h4>
              {/* <a href="#">www.companyname.com</a> */}
            </div>
          </li>
          <li>
            <blockquote>
              Pelayanan pelanggan yang sangat responsif dan ramah. Dari tahap
              perencanaan hingga pelaksanaan, perusahaan konstruksi kandang ayam
              ini memberikan dukungan yang luar biasa. Terbukti menjadi mitra
              yang dapat diandalkan untuk proyek-proyek peternakan kami.
            </blockquote>
            <div className="testimonial-autor">
              <img src="img/dummies/testimonial/2.png" alt="" />
              <h4>Michael Doe</h4>
              {/* <a href="#">www.companyname.com</a> */}
            </div>
          </li>
          <li>
            <blockquote>
              Keunggulan perusahaan ini terletak pada kemampuan mereka untuk
              menyusun jadwal kerja yang efisien dan menghormati tenggat waktu.
              Proses konstruksi kandang ayam berjalan dengan lancar, dan hasil
              akhirnya melebihi harapan kami. Sangat direkomendasikan!
            </blockquote>
            <div className="testimonial-autor">
              <img src="img/dummies/testimonial/3.png" alt="" />
              <h4>Mark Donovan</h4>
              {/* <a href="#">www.companyname.com</a> */}
            </div>
          </li>
          <li>
            <blockquote>
              Inovasi dan keberlanjutan menjadi fokus utama perusahaan
              konstruksi ini. Mereka tidak hanya membangun kandang ayam dengan
              standar tertinggi, tetapi juga memperhatikan aspek lingkungan.
              Kami merasa bangga bekerja sama dengan perusahaan yang peduli
              terhadap keberlanjutan dan kesejahteraan hewan.
            </blockquote>
            <div className="testimonial-autor">
              <img src="img/dummies/testimonial/4.png" alt="" />
              <h4>Marry Doe Elliot</h4>
              {/* <a href="#">www.companyname.com</a> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Review;
