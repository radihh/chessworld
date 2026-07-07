import Navbar from '../components/page';

export default function PartidasLendarias() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <h1 className="title">Partidas Históricas</h1>
        <p className="highlight-box">
          O "Match do Século" em 1972 entre Bobby Fischer e Boris Spassky, em plena Guerra Fria, 
          levou o xadrez para os ecrãs de todo o mundo. Outro momento crucial foram os duelos entre Kasparov e Karpov.
        </p>
        <div className="image-wrapper">
          <img src="/partidas.jpg" alt="Tabuleiro e jogadas" className="chess-image" style={{ borderColor: '#600EE3' }} />
        </div>
      </main>
    </div>
  );
}