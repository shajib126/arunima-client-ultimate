import React from "react";
import Nav from "../navbar/Nav";

const cartDetails = [
  {
    image:
      "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448792.jpg?w=740&t=st=1694938023~exp=1694938623~hmac=5d2413ab67aae7334e9376d3eb4e673b84b91c7916a250ac7775b5e8b4d49031",
    name: "Basic Tee",
    price: "32.00",
    count: 1,
  },
  {
    image:
      "https://img.freepik.com/free-photo/young-adult-wearing-blank-shirt_23-2149321742.jpg?w=740&t=st=1694938039~exp=1694938639~hmac=ed50fbacf4a59b433d69c3abc499eb2273a68db51d24de1c6a060bc97b129e05",
    name: "Basic Tee",
    price: "32.00",
    count: 1,
  },
  {
    image:
      "https://img.freepik.com/free-photo/tattooed-biker-hand-holds-hang-with-blank-black-t-shirt-from-premium-thin-cotton-isolated-white_346278-1809.jpg?w=740&t=st=1694938052~exp=1694938652~hmac=febac51d3f210344d5c087256e4c81b9e6b6fee173830ae86584135ee109a6c2",
    name: "Basic Tee",
    price: "32.00",
    count: 1,
  },
];
const page = () => {
  return (
    <div>
      <Nav />
      <h1 className="text-2xl text-center font-bold p-2 border-b-2 mb-4">Shopping Cart</h1>
      <div className="w-[80%] mx-auto flex">
        

        <div >
          {cartDetails.map((detail, i) => (
            <div key={i} className="flex gap-3 mb-2">
              <img className="w-[15%]" src={detail.image} alt={detail.name} />
              <div>
                <h1>{detail.name}</h1>
                <p>${detail.price}</p>
              </div>
              <select className="select select-bordered select-sm w-[100px] max-w-xs">
                <option disabled selected>
                  1
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          ))}
        </div>
        <div>
            <h1 className="font-bold text-2xl border-b-2">Order summary</h1>
            <span className="flex justify-between">
                <p>subtotal</p>
                <p>$99.0</p>
            </span>
            <br/>
            <span className="flex justify-between">
                <p>Delevary charge</p>
                <p>$2.0</p>
            </span>
            <br/>
            <span className="flex justify-between">
                <p>Tax</p>
                <p>$1</p>
            </span>
            <br/>
            <span className="flex justify-between">
                <p>Order total</p>
                <p>$99.0</p>
            </span>
            <br/>
            <button className="btn btn-success w-full hover:scale-[1.1]">Checkout</button>

        </div>
      </div>
    </div>
  );
};

export default page;
