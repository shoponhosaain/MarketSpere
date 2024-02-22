import UpperNav from './../components/UpperNav';
import useFirestoreData from './../hooks/useFirestoreDoc';
import Product from '../components/Product';
import { useParams } from 'react-router-dom';

const Search = () => {
    const {data} = useFirestoreData("product")
    const {name} = useParams()
   
    return (
        <>
        <UpperNav/>
        
        <div class="list container mt-5 pt-5">
        <div class="card-section col-md-9 col container">
          <h6 class=" font-s-sm font-bolt prime-color px-3">Featured</h6>
          <hr />
          <div class="row">
          {data.map((item) => {
            if (item.title === name) {
              return <Product key={item.id} img={item.imageUrl} {...item} />;
            } 
            else {
                return null;
            }
          })}
       
          </div>
        </div>
      </div>
     
    </>
    );
};

export default Search;