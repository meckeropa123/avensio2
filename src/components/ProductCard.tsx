import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="rounded-2xl bg-white p-3 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="block cursor-pointer">
        <img src={product.image} alt={product.name} className="h-44 w-full rounded-xl object-cover" />
      </Link>
      <div className="mt-3 space-y-1">
        <p className="text-xs text-slate-500">{product.category}</p>
        <Link to={`/product/${product.id}`} className="line-clamp-2 block font-medium hover:text-brand">{product.name}</Link>
        <p className="text-sm text-amber-500">★ {product.rating}</p>
        <p className="font-semibold">{product.price.toLocaleString('ru-RU')} ₽</p>
      </div>
      <button onClick={() => addToCart(product)} className="mt-3 w-full rounded-xl bg-brand px-3 py-2 text-white transition hover:bg-indigo-600">Добавить в корзину</button>
    </article>
  );
}
