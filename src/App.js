
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routs';

function App() {
  return (
    <div className='bg-[#F8F9FD]'>
      <div className=' ' >
    <RouterProvider router={router}></RouterProvider>
   </div>
    </div>
  );
}

export default App;
