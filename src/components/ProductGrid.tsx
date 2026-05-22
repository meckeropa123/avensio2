import { Product } from '../types';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) return <div className="rounded-2xl bg-white p-10 text-center text-slate-500">Товары не найдены. Измените фильтры или запрос.</div>;
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{products.map((p) => <ProductCard key={p.id} product={p} />)}</div>;
}
