export default function AuthPage() {
  return <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-soft"><h1 className="mb-5 text-2xl font-bold">Вход / Регистрация</h1><form className="space-y-3"><input type="email" placeholder="Email" className="w-full rounded-xl border px-3 py-2" /><input type="password" placeholder="Пароль" className="w-full rounded-xl border px-3 py-2" /><div className="grid grid-cols-2 gap-2"><button className="rounded-xl bg-brand py-2 text-white">Войти</button><button type="button" className="rounded-xl border py-2">Регистрация</button></div></form></div>;
}
