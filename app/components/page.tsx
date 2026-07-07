import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-link">Início</Link>
      <Link href="/campeoes" className="nav-link">Campeões</Link>
      <Link href="/partidas-lendarias" className="nav-link">Partidas Lendárias</Link>
      <Link href="/atualidade" className="nav-link">Cenário Atual</Link>
    </nav>
  );
}
