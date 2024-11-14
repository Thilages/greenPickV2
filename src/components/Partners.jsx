import React from 'react';
  // External CSS file for animation

const Partners = () => {
  const icon = "https://static.wixstatic.com/media/fefb78_faa25dfe93aa42ca915de554e22690e9~mv2.png/v1/crop/x_0,y_1,w_3000,h_899/fill/w_213,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Name_board%204x12%20ft%20copy%202-01.png"
  return (
    <div className=" py-12 ">
      <h2 className="text-center text-3xl font-bold text-xprimary mb-8">Our Partners</h2>
      <div className="overflow-hidden">
        <div className="partners-scroll flex">
          <img src={icon} alt="Partner 1" className="partner-logo" />
          <img src={icon} alt="Partner 2" className="partner-logo" />
          <img src={icon} alt="Partner 3" className="partner-logo" />
          <img src={icon} alt="Partner 4" className="partner-logo" />
          {/* Duplicate logos to make the scrolling smooth */}
          <img src={icon} alt="Partner 1" className="partner-logo" />
          <img src={icon} alt="Partner 2" className="partner-logo" />
          <img src={icon} alt="Partner 3" className="partner-logo" />
          <img src={icon} alt="Partner 4" className="partner-logo" />

          <img src={icon} alt="Partner 1" className="partner-logo" />
          <img src={icon} alt="Partner 2" className="partner-logo" />
          <img src={icon} alt="Partner 3" className="partner-logo" />
          <img src={icon} alt="Partner 4" className="partner-logo" />

          <img src={icon} alt="Partner 1" className="partner-logo" />
          <img src={icon} alt="Partner 2" className="partner-logo" />
          <img src={icon} alt="Partner 3" className="partner-logo" />
          <img src={icon} alt="Partner 4" className="partner-logo" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
