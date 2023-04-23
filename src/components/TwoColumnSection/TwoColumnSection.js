import React from "react";
import "./styles.css"; // Import CSS file for styling
import slider1 from '../../assets/images/slider1.jpg'

const TwoColumnSection = () => {
  return (
    <div className="container">
      <div className="column">
        <img
          src={slider1}
          alt="Example Image"
          className="image"
        />
      </div>
      <div className="column">
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at enim eu metus tempor elementum. Sed ut metus non erat iaculis facilisis. Aliquam fermentum, sapien nec malesuada gravida, sapien sapien vehicula dolor, vitae egestas mauris lacus eu metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sodales elit est, et vestibulum ipsum vestibulum ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod malesuada rhoncus. Nulla dapibus felis et enim aliquam, et rhoncus ipsum fermentum. Donec malesuada quam lacus, at tempor risus bibendum id. Sed sit amet iaculis ligula. Nam malesuada convallis risus, a porttitor ante. Vivamus lacinia, eros et pharetra sollicitudin, odio arcu imperdiet nisi, vitae suscipit risus lacus vitae elit. Sed et mi in enim commodo vestibulum nec non erat. Nam quis lacus libero.
        </p>
      </div>
    </div>
  );
};

export default TwoColumnSection;
