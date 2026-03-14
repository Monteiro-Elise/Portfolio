import Banner from './components/Banner';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

function App() {
  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      <Header />
      <main className="pt-9">
        <Banner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
