import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/Hero/Hero';
import { TrustedBy } from './components/TrustedBy/TrustedBy';
import { Features } from './components/Features/Features';
import { Price } from './components/Price/Price';
// import { Form } from './components/Form/Form';
// import { useState } from 'react';

function App() {
  //   const [isFormOpen, setIsFormOpen] = useState(false);

  //   function handleOpenForm() {
  //     setIsFormOpen(!isFormOpen);
  //   }

  return (
    <>
      <NavBar />
      <Hero />
      <TrustedBy />
      <Features />
      <Price />
      {/* {isFormOpen && <Form />} */}
    </>
  );
}

export default App;
