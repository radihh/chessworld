import "./globals.css"; 
import Navbar from './components/page';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <h1 className="title">A História do Campeonato Mundial de Xadrez</h1>
        <p className="highlight-box">
          O Campeonato Mundial de Xadrez é a competição máxima para definir o melhor jogador do planeta. 
          Desde o primeiro campeonato oficial em 1886, vencido por Wilhelm Steinitz, o título representa 
          o topo do génio estratégico.
        </p>
        <div className="image-wrapper">
          <img src="/home.jpg" alt="Tabuleiro de Xadrez" className="chess-image" />
        </div>
      </main>
    </div>
  );
}