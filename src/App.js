import './App.scss'
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import SignIn from './routes/sign-in/signin';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';
// Routes
import { Route,Routes } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';

// User
import { useEffect} from "react";
import { onAuthStateChangedListener ,createUserDocumentFromAuth} from "./utils/firebase/firebase";
import { setCurrentUser } from './store-redux/user/user.reducer';

// Products
import { getProducts } from './utils/firebase/firebase';
import { setProductsMap } from './store-redux/products/product.reducer';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const getProductsMap = async () => {
        const productMap = await getProducts();
        dispatch(setProductsMap(Object.values(productMap)))
    }
    getProductsMap();
  },[])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
