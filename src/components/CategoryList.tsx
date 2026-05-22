import { Category } from '../types';

interface Props { categories: Category[]; active: Category | 'все'; onSelect: (c: Category | 'все') => void; }

export default function CategoryList({ categories, active, onSelect }: Props) {
  return <div className="flex flex-wrap gap-2">{(['все', ...categories] as const).map((c) => <button key={c} onClick={() => onSelect(c)} className={`rounded-full px-4 py-2 text-sm transition ${active===c?'bg-brand text-white':'bg-white hover:bg-slate-100'}`}>{c}</button>)}</div>;
}
