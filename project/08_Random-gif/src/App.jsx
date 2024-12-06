import Rondom from './components/Rondom'
import './App.css'
import Tag from './components/Tag'


function App() {
  return (
   <div className='background flex h-screen w-full flex-col overflow-x-hidden items-center'>
      <h1 className='text-center mt-[30px] bg-white rounded-lg w-11/12
     text-2xl py-1 font-bold '>RONDOM GIFS</h1>

       <div className='flex w-full gap-y-5 mt-5 items-center flex-col'>
       <Rondom />
       <Tag />
       </div>
   </div>
  )
}

export default App
