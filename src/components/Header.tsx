import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SearchBar from './SearchBar';

interface Props {
  search: string;
  onSearch: (v: string) => void;
  onMenu: () => void;
  cartCount: number;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
}

export default function Header({ search, onSearch, onMenu, cartCount, onOpenLogin, onOpenRegister }: Props) {
  const { isAuthenticated, email, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <button className="rounded-lg border px-2 py-1 md:hidden" onClick={onMenu}>☰</button>
        <Link to="/" className="text-lg font-bold text-brand">Avensio Market</Link>

        <div className="hidden flex-1 md:block">
          <SearchBar value={search} onChange={onSearch} />
        </div>

        <div className="ml-auto hidden items-center gap-2 sm:flex">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-slate-600">{email}</span>
              <button onClick={logout} className="rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50">Выйти</button>
            </>
          ) : (
            <>
              <button onClick={onOpenLogin} className="rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50">Войти</button>
              <button onClick={onOpenRegister} className="rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50">Регистрация</button>
            </>
          )}
        </div>

        <Link to="/cart" className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white transition hover:bg-slate-700">
          Корзина ({cartCount})
        </Link>
      </div>

      <div className="px-4 pb-3 md:hidden">
        <SearchBar value={search} onChange={onSearch} />
      </div>
    </header>
  );
}
