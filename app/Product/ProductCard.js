import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProductCard = ({ productData, category, price, search }) => {
  const { products, allProduct,addToCart } = useStore((state) => state);
  const router = useRouter();
  let filter = productData;

  const cartHandler = async(product)=>{
  
    addToCart({product:product._id,productCount:1})

    
  }
  useEffect(() => {
    allProduct();
  }, []);
  products?.map((product) => console.log(product));
  if (category) {
    filter = products.filter((product) => product.category.includes(category));
  }
  console.log(filter);
  if (price) {
    if (price === "lower") {
      filter = filter.sort((a, b) => a.price - b.price);
    } else if (price == "higher") {
      filter = filter.sort((a, b) => b.price - a.price);
    }
  }

  if (search) {
    filter = filter.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  const detailsHandle = (product) => {
    router.push(`/details/?id=${product._id}`)
   
  };

  return (
    <>
    {!products ? <span className="loading loading-bars loading-lg"></span> :(
      
      <>
        {products?.map((product)=>(
          <div className="card w-96 bg-base-100 shadow-xl mb-6 mx-auto">
          <figure>
            
            <img src={product?.imageUrl[0]} alt="Shoes" className="h-[200px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product?.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{product?.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{product?.category.name}</div>
              <div className="badge badge-outline">" "</div>
            </div>
    
            <h1 className="text-center text-green-800">Price: ৳{product?.price}</h1>
    
            <div className="card-actions justify-end">
              <button
                onClick={() => detailsHandle(product)}
                className="btn btn-secondary"
              >
                Details
              </button>
              <button onClick={()=>cartHandler(product)} className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        ))}
      </>
    )}
    
    </>
  );
};

export default ProductCard;
