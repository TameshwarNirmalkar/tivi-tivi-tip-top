import './App.scss';
import HomeContainer from './container/Home';

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className="content">
        <HomeContainer />
      </div>
    </div>
  );
};

export default App;
