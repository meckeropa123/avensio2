import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

interface Props { search: string; onSearch: (v: string) => void; onMenu: () => void; cartCount: number; }
export default function Header({ search, onSearch, onMenu, cartCount }: Props) {
  return <header className="sticky top-0 z-30 border-b bg-white/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
      <button className="rounded-lg border px-2 py-1 md:hidden" onClick={onMenu}>☰</button>
      <Link to="/" className="text-lg font-bold text-brand">Avensio Market</Link>
      <div className="hidden flex-1 md:block"><SearchBar value={search} onChange={onSearch} /></div>
      <Link to="/auth" className="rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50">Профиль</Link>
      <Link to="/cart" className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white hover:bg-slate-700">Корзина ({cartCount})</Link>
    </div>
    <div className="px-4 pb-3 md:hidden"><SearchBar value={search} onChange={onSearch} /></div>
  </header>;
}
