import './App.css';
import Header from './Component/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import LogIn from './Component/LogIn';
import Register from './Component/Register';
import Footer from './Component/Footer';
import About from './Component/About';
import Home from './Component/Home';
import ContactUs from './Component/ContactUs';
import Shop from './Component/Shop';
import Detail from './Component/Detail';
import { Provider } from 'react-redux';
import { store } from './Component/redux/Store';
import Cart from './Component/Cart';
import WishList from './Component/redux/WishList';
import CheckOut from './Component/CheckOut';
import NotFound from './Component/NotFound';

function App() {
  window.addEventListener('scroll', e => {
    let artinScroolIcon = document.querySelector('.artinScrollIcon')
    if (window.scrollY > 400) {
      artinScroolIcon.classList.remove('opacity-0')
      artinScroolIcon.classList.remove('invisible')
      artinScroolIcon.style.transition = 'all 0.8s'
      artinScroolIcon.style.zIndex = '9999'
      artinScroolIcon.addEventListener('click', e => {
        window.scrollTo({ top: '0', behavior: 'smooth' })
      })
    } else {
      artinScroolIcon.classList.add('opacity-0')
      artinScroolIcon.classList.add('invisible')
      artinScroolIcon.style.transition = 'all 0.8s'

    }
  })
  return (
    <div style={{ overflowX: 'hidden' }}>
      <i className="bi bi-arrow-up-circle-fill text-info fs-3 opacity-0 invisible artinScrollIcon" style={{ position: 'fixed', bottom: '50px', right: '35px' }}></i>

      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='login' element={<LogIn />} />
          <Route path='register' element={<Register />} />
          <Route path='about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='shop' element={<Shop />} />
          <Route path='shop/:id' element={<Detail />} />
          <Route path='cart' element={<Cart />} />
          <Route path='wishList' element={<WishList />} />
          <Route path='checkout' element={<CheckOut />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
        <Footer />
      </Provider>

    </div>
  );
}

export default App;
