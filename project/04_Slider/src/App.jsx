import { Testimonials } from './components/Testimonials'
import './App.css'
import reviews from './Data'

function App() {

  return (
    <div className='flex flex-col w-[100vw] h-[100vh] items-center justify-center bg-gray-200' >
    
    <div className='text-center '>
      
      <h1 className='text-4xl font-bold'>Our Testimonial</h1>

      <div className='h-[4px] w-1/5 bg-violet-400 mx-auto mt-1'></div>

      <Testimonials reviews={reviews}/>
    </div>
    </div>
  )
}

export default App
