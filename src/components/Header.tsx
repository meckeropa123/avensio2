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
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:gap-3">
        <button
          className="rounded-lg border px-2 py-1 md:hidden"
          onClick={onMenu}
          aria-label="Открыть меню"
        >
          ☰
        </button>

        <Link
          to="/"
          className="min-w-0 truncate text-base font-bold text-brand sm:text-lg"
          aria-label="Avensio Market"
        >
          <span className="sm:hidden">Avensio</span>
          <span className="hidden sm:inline">Avensio Market</span>
        </Link>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          {isAuthenticated ? (
            <>
              <span className="max-w-44 truncate text-sm text-slate-600">{email}</span>
              <button onClick={logout} className="rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50">Выйти</button>
            </>
          ) : (
            <>
              <button onClick={onOpenLogin} className="rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50">Войти</button>
              <button onClick={onOpenRegister} className="rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50">Регистрация</button>
            </>
          )}
        </div>

        <Link
          to="/cart"
          className="shrink-0 rounded-lg bg-slate-900 px-2.5 py-1.5 text-sm text-white transition hover:bg-slate-700 sm:px-3"
        >
          <span className="sm:hidden">🛒 {cartCount}</span>
          <span className="hidden sm:inline">Корзина ({cartCount})</span>
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-3">
        <SearchBar value={search} onChange={onSearch} />
      </div>
    </header>
  );
}
