import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/ProductGrid';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  if (!product) return <div>Товар не найден</div>;
  const similar = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  return <div className="space-y-10"><Link to="/catalog" className="text-brand">← Назад в каталог</Link><div className="grid gap-6 rounded-2xl bg-white p-5 md:grid-cols-2"><img src={product.image} className="h-80 w-full rounded-xl object-cover"/><div><h1 className="text-2xl font-bold">{product.name}</h1><p className="mt-2 text-amber-500">★ {product.rating}</p><p className="mt-3 text-3xl font-semibold">{product.price.toLocaleString('ru-RU')} ₽</p><p className="mt-4 text-slate-600">{product.description}</p><button onClick={()=>addToCart(product)} className="mt-6 rounded-xl bg-brand px-5 py-3 text-white hover:bg-indigo-600">Добавить в корзину</button></div></div><div><h2 className="mb-3 text-xl font-semibold">Похожие товары</h2><ProductGrid products={similar} /></div></div>;
}
