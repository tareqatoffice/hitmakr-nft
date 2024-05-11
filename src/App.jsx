import './App.css';
import AppLayout from "./components/AppLayout";
import Header from './components/header/Header';
import NFTArea from './components/nft/NFTArea';
import Options from './components/option/Options';

const App = () => {
  return (
    <AppLayout>
      <Header />
      <NFTArea />
      <Options />
    </AppLayout>
  );
};

export default App;