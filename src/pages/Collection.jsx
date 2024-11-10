import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assetsData";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { productData,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent');

  const toggleCategory = (e) => {

    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }else{
      setCategory(prev => [...prev,e.target.value]);
    }
    setSubCategory([]);
  };


  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }else{
      setSubCategory(prev => [...prev,e.target.value]);
    }
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const applyFilter = () => {
    let productDataCopy = productData.slice();

    if(showSearch && search){
        productDataCopy = productDataCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }


    if(category.length > 0){
      productDataCopy = productDataCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length > 0){
      productDataCopy = productDataCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productDataCopy);
  }

  // Sort
  const sortProduct = () => {
    let filterproductCopy = filterProducts.slice();
    
    switch (sortType){
      case 'low-high':
        setFilterProducts(filterproductCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(filterproductCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break; 
    }

  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch])
  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex item-center cursor-pointer gap-2" onClick={toggleFilter}>
          FILTER
          <img src={assets.dropList} alt="" className={`h-5 sm:hidden ${showFilter ? "rotate-90" : ""} self-center`} />
        </p>
        {/* Category */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Men"} onChange={toggleCategory}/>
              Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} onChange={toggleCategory}/>
              Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Kids"} onChange={toggleCategory}/>
              Kids
            </p>
          </div>
        </div>
        {/* Sub Category */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topwear"} onChange={toggleSubCategory}/>
              Top Wear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bottomwear"} onChange={toggleSubCategory}/>
              Bottom Wear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Suit"} onChange={toggleSubCategory}/>Suit
            </p>
          </div>
        </div>
      </div>

      {/* Product-RightSide */}
      <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"}/>
            {/* Sorting */}
            <select className="border border-gray-300 px-2 py-1 text-sm" onChange={(e)=>(setSortType(e.target.value))}>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          {/* Map Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Collection;