import CategoryItem from "../Category-item/Category-item-component"
import "./directory-syles.scss"

const Directory=({categories})=>{
   return(
    <div className="directory-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
   )
    
}

export default Directory