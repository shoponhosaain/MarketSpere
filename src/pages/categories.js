
import useFirestoreData from '../hooks/useFirestoreDoc';
import Product from './../components/Product';
import { useParams } from 'react-router-dom';
import UpperNav from './../components/UpperNav';
import CategoryPageList from './../components/categoryPageList';

function Categories() {
  const {data} = useFirestoreData("product")
  let { name } = useParams();

 
    return (
      <>
     <UpperNav/>
    <div className="list container pt-5">
  <div className="row">
    {/* sidebar */}
   <CategoryPageList/>
    {/* product section */}
    <div className="card-section col-md-9 col container">
      <h6 className=" font-s-sm font-bolt prime-color px-3">Featured</h6>
      <hr />
      <div className="row">
      {data.map((item) => {
            if (item.category === name) {
              return <Product key={item.id} img={item.imageUrl} {...item} />;
            } 
            else if (name==="category") {
              return <Product key={item.id} img={item.imageUrl} {...item} />;
            }
            else {
              return null
            }
          })}
      
      </div>
    </div>
  </div>
</div>

      </>
    );
  }
  
  export default Categories;
  