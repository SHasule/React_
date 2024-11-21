import './App.css'
import Item from '../public/components/Item'
import ItemPrice from './component/ItemPrice'
import Card from './component/Card'
import ProductForm from './component/ProductForm'
function App() {

  const newbrand="moti saban"
  const respones=[
    {name:"supreem",
     rate:"110", 
     year:"2021"},

    {name:"suprem2",
     rate:"1120", 
     year:"20212"},

    {name:"supreem3",
     rate:"1103", 
     year:"20213"},
  ]

  return (
    <>
    <ProductForm></ProductForm>
   <Card>
   <ItemPrice name={respones[0].name} rate={respones[0].rate} year={respones[0].year}></ItemPrice>
    <ItemPrice name={respones[1].name} rate={respones[1].rate} year={respones[1].year}></ItemPrice>
    <ItemPrice name={respones[2].name} rate={respones[2].rate} year={respones[2].year}></ItemPrice>
   </Card>
    <Item newname={newbrand}></Item>
      <div>hello jee</div>
    </>
  )
}

export default App
