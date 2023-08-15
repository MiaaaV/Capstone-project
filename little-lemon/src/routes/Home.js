import Header from '../components/frontpage/Header';
import Hero from '../components/frontpage/Hero';
import Specials from '../components/frontpage/Specials';
import Testimonials from '../components/frontpage/Testimonials';
import Info from '../components/frontpage/Info';
import Footer from '../components/frontpage/Footer';

import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

  useEffect(() => {
    const toastItem = localStorage.getItem('confirmToast');
    const toastText = (
      <div>
        Thank you for your reservation!
        <br />
        A confirmation will be sent to the provided email.
      </div>
    )

    if (toastItem === 'true') {
      toast.success(toastText, {
        position: 'top-right',
        autoClose: false,
        style: {
          backgroundColor: '#F4CE14',
          color: 'black',
        }
      });
      localStorage.removeItem('confirmToast');
    }
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <Info />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Home;