import AppRouter from './AppRouter';
import Footer from './components/common/Footer';
import Header from './components/common/Header';

function App() {
  return (
    <>
      <Header />
      <AppRouter>
      </AppRouter>
      <Footer />
    </>
  );
}

export default App;
