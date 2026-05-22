import { CartItemType } from '../types';

interface Props { item: CartItemType; onQuantity: (q:number)=>void; onRemove: ()=>void; }
export default function CartItem({ item, onQuantity, onRemove }: Props) {
  return <div className="flex gap-3 rounded-xl bg-white p-3 shadow-soft">
    <img src={item.product.image} className="h-20 w-20 rounded-lg object-cover"/>
    <div className="flex-1">
      <p className="font-medium">{item.product.name}</p>
      <p className="text-sm text-slate-500">{item.product.price.toLocaleString('ru-RU')} ₽</p>
      <div className="mt-2 flex items-center gap-2">
        <button onClick={()=>onQuantity(item.quantity-1)} className="rounded border px-2">-</button>
        <span>{item.quantity}</span>
        <button onClick={()=>onQuantity(item.quantity+1)} className="rounded border px-2">+</button>
        <button onClick={onRemove} className="ml-3 text-sm text-red-500">Удалить</button>
      </div>
    </div>
  </div>;
}
