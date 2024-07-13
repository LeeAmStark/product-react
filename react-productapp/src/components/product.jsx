import "../styles/global.css";
import "../styles/products.css";

export default function Products({ products }) {
  return (
    <div className="card">
      {products.map((eachProduct, index) => {
        return (
          <div key={index}>
            <img width="100%" height="100%" src={eachProduct.image} alt="" />
            <div>
              <h3 className="font-bold">{eachProduct.name}</h3>
              <h6>{eachProduct.price}</h6>
              <p>{eachProduct.description}</p>
              <a href="#" className="">Pick Card</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
