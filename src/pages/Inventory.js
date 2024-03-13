import React, { useState, useEffect, useContext } from "react";
import AddProduct from "../components/AddProduct";
import UpdateProduct from "../components/UpdateProduct";
import AuthContext from "../AuthContext";

function Inventory() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateProduct, setUpdateProduct] = useState([]);
  const [products, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const [updatePage, setUpdatePage] = useState(true);
  const [stores, setAllStores] = useState([]);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchProductsData();
    fetchSalesData();
  }, [updatePage]);

  const fetchProductsData = () => {
    fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => console.log(err));
  };

  const fetchSearchData = () => {
    fetch(`http://localhost:4000/api/product/search?searchTerm=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => console.log(err));
  };

  const fetchSalesData = () => {
    fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllStores(data);
      });
  };

  const addProductModalSetting = () => {
    setShowProductModal(!showProductModal);
  };

  const updateProductModalSetting = (selectedProductData) => {
    setUpdateProduct(selectedProductData);
    setShowUpdateModal(!showUpdateModal);
  };

  const deleteItem = (id) => {
    fetch(`http://localhost:4000/api/product/delete/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUpdatePage(!updatePage);
      });
  };

  const handlePageUpdate = () => {
    setUpdatePage(!updatePage);
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    fetchSearchData();
  };

  return (
    <>
      <br />
      <br />
      <div className="col-span-12 lg:col-span-10  flex justify-center">
        <div className=" flex flex-col gap-5 w-11/12">
          <div className="bg-white rounded p-3  shadow-lg">
            <span className="font-semibold text-lg text-center text-gray-900 px-4">
              Overall Inventory
            </span>
            <div className="flex flex-col md:flex-row justify-center items-center">
              {/* Inventory Summary  */}
            </div>
          </div>

          {showProductModal && (
            <AddProduct
              addProductModalSetting={addProductModalSetting}
              handlePageUpdate={handlePageUpdate}
            />
          )}
          {showUpdateModal && (
            <UpdateProduct
              updateProductData={updateProduct}
              updateModalSetting={updateProductModalSetting}
            />
          )}

          {/* Table  */}
          <div className=" rounded-lg border bg-white border-gray-200">
            <div className="flex justify-between items-center p-3">
              <div className="flex gap-4 items-center">
                <h2 className="font-bold text-lg">Products</h2>
                <div className="flex items-center border border-gray-300 rounded-md px-2">
                  <input
                    className="border-none outline-none text-sm"
                    type="text"
                    placeholder="Search here"
                    value={searchTerm}
                    onChange={handleSearchTerm}
                  />
                </div>
              </div>
              <button
                className="bg-emerald-700  text-white font-bold py-2 px-4 rounded"
                onClick={addProductModalSetting}
              >
                Add Product
              </button>
            </div>
            <div className="overflow-auto overflow-x-auto  overflow-y-auto">
              <table className="w-full divide-y divide-gray-200 text-sm border border-gray-300">
                <thead className="bg-slate-300 text-base">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Serial No.
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Products
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Manufacturer
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Stock
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Description
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Availability
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((element, index) => (
                    <tr key={element._id}>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-900 border-b">
                        {index + 1}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-900 border-b">
                        {element.name}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-700 border-b">
                        {element.manufacturer}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-700 border-b">
                        {element.stock}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-700 border-b">
                        {element.description}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-700 border-b">
                        {element.stock > 0 ? "In Stock" : "Not in Stock"}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-700 border-b">
                        <button
                          className="text-green-700 hover:text-green-900 mr-2 focus:outline-none"
                          onClick={() => updateProductModalSetting(element)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900 focus:outline-none"
                          onClick={() => deleteItem(element._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Inventory;

//