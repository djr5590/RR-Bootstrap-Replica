import './App.css';
import TopBar from './components/TopBar';
import TopSection from './components/TopSection';
import StoreListings from './components/StoreListings';

function App() {
  return (
    <>
      <div style={{ height: '250px' }}>
        <TopBar />
        <TopSection />
        <StoreListings />
      </div>
    </>
  );
}

export default App;