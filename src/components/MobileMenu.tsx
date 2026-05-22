import { Link } from 'react-router-dom';

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={onClose}>
      <div className="absolute left-0 top-0 h-full w-72 bg-white p-5" onClick={(e) => e.stopPropagation()}>
        <p className="mb-4 text-lg font-semibold">Меню</p>
        <nav className="space-y-3">
          <Link to="/" onClick={onClose} className="block">Главная</Link>
          <Link to="/catalog" onClick={onClose} className="block">Каталог</Link>
          <Link to="/cart" onClick={onClose} className="block">Корзина</Link>
        </nav>
      </div>
    </div>
  );
}
