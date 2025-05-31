import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './contexts/ShopContext';
import { HelmetProvider, Helmet } from "react-helmet-async";/*for seo*/

const productSchema = {/*seo example
  You should not put product-specific metadata in index.js, 
  because it's rendered on every page, not just the product page.
 Instead: Move the JSON-LD injection into your <Product /> 
page component and make it dynamic per product. Want help setting that up next?
*/
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Men's Running Shoes",
  "image": [
    "https://e-commerce.yimajiuni.com/images/shoes1.jpg"
  ],
  "description": "Comfortable, durable running shoes. Perfect for daily workouts.",
  "sku": "35",
  "brand": {
    "@type": "Brand",
    "name": "Yimajiuni"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://e-commerce.yimajiuni.com/product/35",
    "priceCurrency": "USD",
    "price": "69.99",
    "availability": "https://schema.org/InStock"
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <Helmet>
      {/* seo example */}

      {/* Open Graph Tags */}


      {/* Twitter Card (Optional) */}

      {/*seo example*/}

    </Helmet>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </HelmetProvider>
);
