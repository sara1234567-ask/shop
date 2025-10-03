import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Магазин</h1>
      <nav className="flex gap-4">
        <Link to="/" className="hover:underline">Товары</Link>
        <Link to="/cart" className="hover:underline">Корзина</Link>
        <Link to="/auth" className="hover:underline">Вход</Link>
        <Link to="/profile" className="hover:underline">Профиль</Link>
      </nav>
    </header>
  );
}