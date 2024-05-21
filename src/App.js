import React from 'react';
import SignForm from './Components/SignForm';
import Spark from './Components/Spark';

const App = () => {
  return (
    <div className="App">
      <main className='flex'>
        <SignForm />
        <Spark/>
      </main>
      <footer className='flex bg-red-600 justify-between'>
        <div className=' justify-start'>
        <p>&copy; 2024 Ride Management</p>
        </div>
        <div className='flex justify-left gap-3'>
        <span>License</span>
        <span>Terms of Use</span>
        <span>Blog</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
