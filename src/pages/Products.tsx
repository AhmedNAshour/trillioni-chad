import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductsHero from '@/components/products/ProductsHero';
import ByTrillioni from '@/components/products/ByTrillioni';
import OtherBrands from '@/components/products/OtherBrands';
import CategoryGrid from '@/components/products/CategoryGrid';
import CategoryPage from '@/components/products/CategoryPage';

const Products = () => {
  const { category } = useParams();

  // If we have a category parameter, show the category page
  if (category) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <CategoryPage category={category} />
        <Footer />
      </div>
    );
  }

  // Otherwise show the main products page
  return (
    <div className="min-h-screen">
      <Navigation />
      <ProductsHero />
      <ByTrillioni />
      <OtherBrands />
      <CategoryGrid />
      <Footer />
    </div>
  );
};

export default Products;
