import React from "react";
import Products from "./components/product";

function App() {
  const products = [
    {
      name: "G-Cloud",
      price: 50,
      description: "A reliable and affordable monitor for everyday use.",
      image:
        "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/cloud-handheld-gaming/gallery/cloud-handheld-gallery-1.png?v=1",
    },
    {
      name: "Keyboard",
      price: 30,
      description:
        "A comfortable and responsive keyboard for typing and gaming.",
      image:
        "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g915-tkl/g915-tkl-gallery-1-carbon.png?v=1",
    },
    {
      name: "Mouse",
      price: 20,
      description:
        "An ergonomic mouse with precision tracking and customizable buttons.",
      image:
        "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/hyjal-g502-hero/g502-hero-gallery-2-nb.png?v=1",
    },
    {
      name: "Headphones",
      price: 60,
      description:
        "High-quality headphones with noise-cancellation and superior sound.",
      image:
        "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/astro-a50-x/product-gallery/astro-a50-x-black-gallery-1.png?v=1",
    },
    {
      name: "Webcam",
      price: 40,
      description: "A HD webcam perfect for video calls and streaming.",
      image:
        "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/mx-brio/buy/gallery/mx-brio-3qtr-front-right-graphite-gallery.png?v=1",
    },
    {
      name: "USB-C Hub",
      price: 25,
      description:
        "A versatile USB-C hub with multiple ports for all your devices.",
      image:
        "https://resource.astrogaming.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/astro/en/products/cable/micro-usb-cable/micro-usb-cable-gallery-01.png?v=1",
    },
    {
      name: "Bluetooth Speaker",
      price: 45,
      description:
        "A compact Bluetooth speaker with excellent sound quality and battery life.",
      image:
        "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g560/g560-gallery-1.png?v=1s",
    },
    {
      name: "Wireless Charger",
      price: 35,
      description:
        "A fast wireless charger compatible with all Qi-enabled devices.",
      image:
        "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/powerplay/2024-update/powerplay-gallery-1-new.png?v=1",
    },
  ];
  
  return (
    <>
      <Products products={products} />
    </>
  );
}

export default App;
