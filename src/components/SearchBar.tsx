interface Props { value: string; onChange: (value: string) => void; }

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Поиск товаров..."
      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-indigo-100"
    />
  );
}
