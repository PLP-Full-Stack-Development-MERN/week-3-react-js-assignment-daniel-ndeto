import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="React Fundamentals Assignment" />
      
      <main className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Profile 
            initialName="Daniel Ndeto" 
            initialEmail="musyokidaniel@gmail.com" 
          />
          
          <Counter initialCount={5} />
        </div>
      </main>
      
      <footer className="bg-gray-200 py-4 px-6 mt-8">
        <div className="container mx-auto text-center text-gray-600">
          <p>React Fundamentals Assignment By Ndeto&copy; 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;