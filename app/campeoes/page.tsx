import Navbar from '../components/page';

export default function Campeoes() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <h1 className="title">Galeria de Campeões Notáveis</h1>
        
        <div className="grid-container">
          <div className="card">
            <h3>Garry Kasparov</h3>
            <p>Dominou o xadrez mundial de 1985 a 2000 com um estilo agressivo e dinâmico.</p>
          </div>
          <div className="card">
            <h3>Magnus Carlsen</h3>
            <p>O prodígio norueguês que revolucionou a era moderna com a sua consistência impressionante.</p>
          </div>
        </div>

        <div className="image-wrapper">
          <img src="/campeoes.jpg" alt="Confronto Histórico" className="chess-image" style={{ borderColor: '#1EE6E1' }} />
        </div>
      </main>
    </div>
  );
}