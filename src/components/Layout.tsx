import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import MobileMenu from './MobileMenu';
import { useCart } from '../context/CartContext';

export default function Layout({ children, search, setSearch }: { children: React.ReactNode; search: string; setSearch: (v:string)=>void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
  return <div className="min-h-screen bg-slate-50"><Header search={search} onSearch={setSearch} onMenu={()=>setMenuOpen(true)} cartCount={totalItems} /><MobileMenu open={menuOpen} onClose={()=>setMenuOpen(false)} /><main className="mx-auto max-w-7xl px-4 py-6">{children}</main><Footer /></div>;
}
