import './App.scss'
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import SignIn from './routes/sign-in/signin';

// Routes
import { Route,Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
