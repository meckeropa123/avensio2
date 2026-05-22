import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface Props {
  open: boolean;
  mode: 'login' | 'register';
  onClose: () => void;
}

export default function AuthModal({ open, mode, onClose }: Props) {
  const { login, register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!open) return null;

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) return;

    if (mode === 'login') {
      login(email, password);
    } else {
      register(email, password);
    }

    setEmail('');
    setPassword('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-soft" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold">{mode === 'login' ? 'Вход' : 'Регистрация'}</h2>
        <p className="mt-1 text-sm text-slate-500">Введите email и пароль.</p>

        <form className="mt-4 space-y-3" onSubmit={submit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-xl border px-3 py-2"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            className="w-full rounded-xl border px-3 py-2"
          />
          <button className="w-full rounded-xl bg-brand py-2 text-white transition hover:bg-indigo-600">
            {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>
      </div>
    </div>
  );
}
