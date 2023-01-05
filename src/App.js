import './App.css';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Navbar from './componentes/Navbar/Navbar';
import WhatsAppContato from './componentes/WhatsAppContato/WhatsAppContato';

function App() {
  return (
    <div className="App">
      <WhatsAppContato texto="Agendar horário" />
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
