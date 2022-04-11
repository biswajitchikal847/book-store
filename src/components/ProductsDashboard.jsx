import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getproductsData, sortProducts } from "../Redux/actions";
import "./Navbar.css"
export const Products = () => {
  // const data = useSelector((state) => state.products);
  const data = useSelector((state) => state.sortedProds);

  const nav = useNavigate();
  // to get all products list on component mounts
  const dispatch = useDispatch();
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData());
  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
    // console.log(e.target.value)
    dispatch(sortProducts(e.target.value.trim()));
  };
  return (
    <>
      <h2 id="heading">Products</h2>
      <select className="filter" onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
     
      <div  className="products-div">
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((el) => {
            return (
              <div key={el.rank}
                onClick={() => nav(`/products/${el.rank}`)}
              >
                <img src={el.book_image} alt=""  />
               <div>
                 {el.title}
               </div>
               <div>Author-
                 {el.author}
               </div>
               <p>price- {el.book_image_width}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};