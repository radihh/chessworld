import Navbar from '../components/page';

export default function Atualidade() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <h1 className="title">O Cenário Atual e o Ciclo Mundial</h1>
        <p className="highlight-box">
          Hoje em dia, o ciclo mundial é gerido pela FIDE. Os melhores jogadores do mundo enfrentam-se 
          no Torneio de Candidatos para decidir quem ganha o direito de desafiar o atual Campeão Mundial.
        </p>
        <div className="image-wrapper">
          <img src="/atualidade.jpg" alt="Torneio Moderno" className="chess-image" style={{ borderColor: '#1EE6E1' }} />
        </div>
      </main>
    </div>
  );
}