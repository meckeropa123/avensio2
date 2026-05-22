import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  if (!items.length) return <div className="rounded-2xl bg-white p-12 text-center text-slate-500">Корзина пуста. Добавьте товары из каталога.</div>;
  return <div className="grid gap-4 lg:grid-cols-[1fr_320px]"><div className="space-y-3">{items.map((i)=><CartItem key={i.product.id} item={i} onQuantity={(q)=>updateQuantity(i.product.id,q)} onRemove={()=>removeFromCart(i.product.id)} />)}</div><aside className="h-fit rounded-2xl bg-white p-5 shadow-soft"><p className="text-sm text-slate-500">Итог</p><p className="mt-1 text-2xl font-bold">{totalPrice.toLocaleString('ru-RU')} ₽</p><button className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-white hover:bg-slate-700">Оформить заказ</button></aside></div>;
}
