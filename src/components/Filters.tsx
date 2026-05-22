interface Props {
  minPrice: number; maxRating: number; sort: string;
  onMinPrice: (v: number) => void; onMaxRating: (v: number) => void; onSort: (v: string) => void;
}
export default function Filters({ minPrice, maxRating, sort, onMinPrice, onMaxRating, onSort }: Props) {
  return <div className="grid gap-3 rounded-2xl bg-white p-4 sm:grid-cols-3">
    <input type="number" min={0} value={minPrice} onChange={(e)=>onMinPrice(Number(e.target.value)||0)} placeholder="Цена от" className="rounded-xl border px-3 py-2" />
    <select value={maxRating} onChange={(e)=>onMaxRating(Number(e.target.value))} className="rounded-xl border px-3 py-2">
      <option value={0}>Любой рейтинг</option><option value={4}>От 4.0</option><option value={4.5}>От 4.5</option>
    </select>
    <select value={sort} onChange={(e)=>onSort(e.target.value)} className="rounded-xl border px-3 py-2">
      <option value="popular">По популярности</option><option value="price_asc">Цена: по возрастанию</option><option value="price_desc">Цена: по убыванию</option><option value="new">По новизне</option>
    </select>
  </div>;
}
