import React, { useState, useEffect, useContext } from "react";
import AddPurchaseDetails from "../components/AddPurchaseDetails";
import AuthContext from "../AuthContext";
import Footer from "./Footer";

function PurchaseDetails() {
  const [showPurchaseModal, setPurchaseModal] = useState(false);
  const [purchase, setAllPurchaseData] = useState([]);
  const [products, setAllProducts] = useState([]);
  const [updatePage, setUpdatePage] = useState(true);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchPurchaseData();
    fetchProductsData();
  }, [updatePage]);

  // Fetching Data of All Purchase items
  const fetchPurchaseData = () => {
    fetch(`http://localhost:4000/api/purchase/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllPurchaseData(data);
      })
      .catch((err) => console.log(err));
  };

  // Fetching Data of All Products
  const fetchProductsData = () => {
    fetch(`http://localhost:4000/api/product/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((err) => console.log(err));
  };

  // Modal for Sale Add
  const addSaleModalSetting = () => {
    setPurchaseModal(!showPurchaseModal);
  };

  // Handle Page Update
  const handlePageUpdate = () => {
    setUpdatePage(!updatePage);
  };

  return (
    <>
    <br></br>
      <div className="col-span-12 lg:col-span-10  flex justify-center">
        <div className=" flex flex-col gap-5 w-11/12 h-full">
          {showPurchaseModal && (
            <AddPurchaseDetails
              addSaleModalSetting={addSaleModalSetting}
              products={products}
              handlePageUpdate={handlePageUpdate}
              authContext={authContext}
            />
          )}
          {/* Table  */}
          <div className="overflow-x-auto rounded-lg border bg-white border-gray-300 h-full shadow-2xl">
            <div className="flex justify-between items-center pt-5 pb-3 px-3">
              <div className="flex items-center">
                <h2 className="font-bold text-lg  text-gray-900" style={{alignItems: "center",fontSize: "22px"}}>
                  Purchase Details
                </h2>
              </div>
              <br></br>
              <div className="flex gap-4">
                <button
                  className="bg-emerald-700  text-white font-bold py-2 px-4 text-lg rounded"
                  onClick={addSaleModalSetting}
                >
                   Purchase Product
                </button>
              </div>
            </div>
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm border border-gray-300 rounded-lg overflow-hidden h-full">
              <thead className="bg-slate-300  text-base">
                <tr>
                <th className="px-4 py-2 text-left font-medium">
                    Product No.
                  </th>
                  <th className="px-4 py-2 text-left font-medium">
                    Product Name
                  </th>
                  <th className="px-4 py-2 text-left font-medium">
                    Quantity Purchased
                  </th>
                  <th className="px-4 py-2 text-left font-medium">
                    Purchase Date
                  </th>
                  <th className="px-4 py-2 text-left font-medium">
                    Total Purchase Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {purchase.map((element, index) => (
                  <tr key={element._id} className="bg-white">
                     <td className="px-4 py-2 text-gray-900">
                      {index+1}
                    </td>
                    <td className="px-4 py-2 text-gray-900">
                      {element.ProductID?.name}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {element.QuantityPurchased}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {new Date(element.PurchaseDate).toLocaleDateString() ==
                      new Date().toLocaleDateString()
                        ? "Today"
                        : element.PurchaseDate}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      ${element.TotalPurchaseAmount}
                    </td>
                  
                  </tr>
                  
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PurchaseDetails;

