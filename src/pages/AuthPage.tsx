import { Link } from 'react-router-dom';

interface Props {
  mode?: 'login' | 'register';
}

export default function AuthPage({ mode = 'login' }: Props) {
  const isRegister = mode === 'register';

  return (
    <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-soft">
      <h1 className="mb-2 text-2xl font-bold">{isRegister ? 'Регистрация' : 'Вход'}</h1>
      <p className="mb-5 text-sm text-slate-500">
        {isRegister ? 'Создайте аккаунт для покупок.' : 'Войдите в аккаунт, чтобы продолжить покупки.'}
      </p>

      <form className="space-y-3">
        <input type="email" placeholder="Email" className="w-full rounded-xl border px-3 py-2" />
        <input type="password" placeholder="Пароль" className="w-full rounded-xl border px-3 py-2" />
        {isRegister && (
          <input
            type="password"
            placeholder="Повторите пароль"
            className="w-full rounded-xl border px-3 py-2"
          />
        )}

        <button className="w-full rounded-xl bg-brand py-2 text-white transition hover:bg-indigo-600">
          {isRegister ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </form>

      <div className="mt-4 text-sm text-slate-600">
        {isRegister ? (
          <p>
            Уже есть аккаунт?{' '}
            <Link to="/auth/login" className="text-brand hover:underline">
              Войти
            </Link>
          </p>
        ) : (
          <p>
            Нет аккаунта?{' '}
            <Link to="/auth/register" className="text-brand hover:underline">
              Зарегистрироваться
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
