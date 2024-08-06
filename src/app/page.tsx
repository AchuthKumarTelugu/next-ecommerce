import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

const HomePage = () => {

  return (
    <div className=''>
      <Slider />
      <div className="mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        <h1 className="font-semibold text-3xl  my-10">Featured products</h1>
        <ProductList />
      </div>
      <div className="mt-8 px-2 relative">
        <h1 className="font-semibold text-3xl  my-10">Category</h1>
        <CategoryList/>
      </div>
    </div>
  )
}

export default HomePage