
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home';
import { PagenotFound } from './Pages/Pagenotfound';
import { AddTask } from './Pages/AddTask';
import { TaskList } from './Pages/TaskList';
import { EditTask } from './Pages/EditTask';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addtask' element={<AddTask/>}></Route>
      <Route path='/tasklist' element={<TaskList/>}></Route>
      <Route path='/edittask/:id' element={<EditTask/>}></Route>



      <Route path='*' element={<PagenotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}
export default App;
