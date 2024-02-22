
import useFirestoreData from './../hooks/useFirestoreDoc';

const OrderList = (props) => {
    const {data} = useFirestoreData("product")
    return (
       <>
       {data.map((item)=>{
        
        if(item.id===props.productId){
            return   <div key={Math.random()} className="container my-4 border p-2">
            <div className="row">
              <div className="col d-flex justify-content-between">
                <div className="content d-flex align-items-center">
                  <div className="Orderimage">
                    <img
                      src={item.imageUrl}
                      alt="images"
                     className='orderimg'
                    />
                  </div>
                  <h4 className="mx-3 font-bolt font-vsm mt-2 prime-color">{item.title}</h4>
                </div>
                <div className="buttons">
                  <button className="login-btn font-bolt">Order Pending...</button>
                </div>
              </div>
            </div>
          </div>
        }
       })}
       </>
    );
};

export default OrderList;