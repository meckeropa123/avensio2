import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/ProductGrid';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  if (!product) return <div>Товар не найден</div>;

  const images = product.images?.length ? product.images : [product.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const similar = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="space-y-10">
      <Link to="/catalog" className="text-brand">← Назад в каталог</Link>

      <div className="grid gap-6 rounded-2xl bg-white p-5 md:grid-cols-2">
        <div className="space-y-3">
          <img src={images[activeImageIndex]} alt={product.name} className="h-80 w-full rounded-xl object-cover" />
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, index) => (
              <button key={img} onClick={() => setActiveImageIndex(index)} className={`overflow-hidden rounded-lg border-2 ${index === activeImageIndex ? 'border-brand' : 'border-transparent'}`}>
                <img src={img} alt={`${product.name} ${index + 1}`} className="h-16 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="mt-2 text-amber-500">★ {product.rating}</p>
          <p className="mt-3 text-3xl font-semibold">{product.price.toLocaleString('ru-RU')} ₽</p>
          <p className="mt-4 text-slate-600">{product.description}</p>
          <button onClick={() => addToCart(product)} className="mt-6 rounded-xl bg-brand px-5 py-3 text-white hover:bg-indigo-600">Добавить в корзину</button>

          <div className="mt-8">
            <h2 className="mb-3 text-xl font-semibold">Отзывы</h2>
            <ul className="space-y-2">
              {(product.reviews ?? []).map((review) => (
                <li key={review} className="rounded-xl bg-slate-50 p-3 text-slate-700">{review}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold">Похожие товары</h2>
        <ProductGrid products={similar} />
      </div>
    </div>
  );
}
