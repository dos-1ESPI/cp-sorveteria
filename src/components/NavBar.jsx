import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { label: "Início", to: "/" },

  { label: "Monte seu pote", to: "/produtos" },
  { label: "Sobre", to: "/#sobre" },
  { label: "Onde estamos", to: "/#onde-estamos" },
];

const linkClass = ({ isActive }) =>
  `transition-colors hover:text-morango ${isActive ? "text-morango font-semibold" : "text-chocolate"
  }`;

function ItemMenu({ link, onClick, extraClass = "" }) {
  if (link.to.includes("#")) {
    return (
      <Link
        to={link.to}
        onClick={onClick}
        className={`${extraClass} ${linkClass({ isActive: false })}`}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <NavLink
      to={link.to}
      end={link.to === "/"}
      onClick={onClick}
      className={(state) => `${extraClass} ${linkClass(state)}`}
    >
      {link.label}
    </NavLink>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-baunilha/95 backdrop-blur font-sans">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" onClick={close} className="flex items-center gap-2">
          <img src={logo} alt="" className="h-8 w-8" />
          <span className="font-display text-2xl font-semibold text-chocolate">
            Nuvem Gelato
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <ItemMenu link={link} />
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to="/produtos"
          className="hidden rounded-full bg-morango px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 md:inline-block"
        >
          Cardápio
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-chocolate transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-chocolate transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-chocolate transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="border-t border-chocolate/10 px-4 pb-6 md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.label}>
                <ItemMenu link={link} onClick={close} extraClass="block py-3" />
              </li>
            ))}
          </ul>
          <Link
            to="/produtos"
            onClick={close}
            className="mt-3 block rounded-full bg-morango py-3 text-center font-semibold text-white"
          >
            Cardápio
          </Link>
        </nav>
      )}
    </header>
  );
}