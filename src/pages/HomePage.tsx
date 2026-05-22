import CategoryList from '../components/CategoryList';
import ProductGrid from '../components/ProductGrid';
import { categories, products } from '../data/products';
import { Category } from '../types';

export default function HomePage({ category, setCategory }: { category: Category | 'все'; setCategory: (c: Category | 'все') => void }) {
  const popular = products.filter((p) => p.isPopular);
  return <div className="space-y-8">
    <section className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white shadow-soft"><h1 className="text-3xl font-bold">Найдите лучшие товары в одном месте</h1><p className="mt-2 max-w-2xl text-indigo-100">Современный маркетплейс для электроники, одежды, дома, спорта и красоты.</p></section>
    <section><h2 className="mb-3 text-xl font-semibold">Категории</h2><CategoryList categories={categories} active={category} onSelect={setCategory} /></section>
    <section><h2 className="mb-3 text-xl font-semibold">Популярные товары</h2><ProductGrid products={popular} /></section>
    <section className="grid gap-4 rounded-2xl bg-white p-5 sm:grid-cols-3"><div>🚚 Быстрая доставка</div><div>🔒 Безопасная оплата</div><div>💬 Поддержка 24/7</div></section>
  </div>;
}
