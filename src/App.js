import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routs';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-[#F8F9FD]' >
    <RouterProvider router={router}></RouterProvider>
   </div>
  );
}

export default App;
