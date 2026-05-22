import { Routes, Route } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Layout from './components/Layout';
import { products as allProducts } from './data/products';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AuthPage from './pages/AuthPage';
import { Category } from './types';

export default function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category | 'все'>('все');
  const [minPrice, setMinPrice] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState('popular');

  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'все' || p.category === category) &&
      p.price >= minPrice &&
      p.rating >= minRating,
    );
    return filtered.sort((a, b) => {
      if (sort === 'price_asc') return a.price - b.price;
      if (sort === 'price_desc') return b.price - a.price;
      if (sort === 'new') return Number(b.isNew) - Number(a.isNew);
      return Number(b.isPopular) - Number(a.isPopular);
    });
  }, [search, category, minPrice, minRating, sort]);

  return (
    <Layout search={search} setSearch={setSearch}>
      <Routes>
        <Route path="/" element={<HomePage category={category} setCategory={setCategory} />} />
        <Route
          path="/catalog"
          element={<CatalogPage products={filteredProducts} category={category} setCategory={setCategory} minPrice={minPrice} setMinPrice={setMinPrice} minRating={minRating} setMinRating={setMinRating} sort={sort} setSort={setSort} />}
        />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Layout>
  );
}
