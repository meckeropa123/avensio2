import { useState } from 'react';
import { useCart } from '../context/CartContext';
import AuthModal from './AuthModal';
import Footer from './Footer';
import Header from './Header';
import MobileMenu from './MobileMenu';

export default function Layout({ children, search, setSearch }: { children: React.ReactNode; search: string; setSearch: (v:string)=>void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null);
  const { totalItems } = useCart();

  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        search={search}
        onSearch={setSearch}
        onMenu={() => setMenuOpen(true)}
        cartCount={totalItems}
        onOpenLogin={() => setAuthMode('login')}
        onOpenRegister={() => setAuthMode('register')}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <AuthModal open={Boolean(authMode)} mode={authMode ?? 'login'} onClose={() => setAuthMode(null)} />
      <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}
