import React, { useState, useEffect, useContext } from "react";
import AddSale from "../components/AddSale";
import AuthContext from "../AuthContext";

function Sales() {
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [sales, setAllSalesData] = useState([]);
  const [products, setAllProducts] = useState([]);
  const [stores, setAllStores] = useState([]);
  const [updatePage, setUpdatePage] = useState(true);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchData();
  }, [updatePage]);

  // Fetching Data of All Sales, Products, and Stores
  const fetchData = async () => {
    try {
      const salesResponse = await fetch(
        `http://localhost:4000/api/sales/get/${authContext.user}`
      );
      const productsResponse = await fetch(
        `http://localhost:4000/api/product/get/${authContext.user}`
      );
      const storesResponse = await fetch(
        `http://localhost:4000/api/store/get/${authContext.user}`
      );

      const salesData = await salesResponse.json();
      const productsData = await productsResponse.json();
      const storesData = await storesResponse.json();

      setAllSalesData(salesData);
      setAllProducts(productsData);
      setAllStores(storesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Modal for Sale Add
  const addSaleModalSetting = () => {
    setShowSaleModal(!showSaleModal);
  };

  // Handle Page Update
  const handlePageUpdate = () => {
    setUpdatePage(!updatePage);
  };

  return (
    <>
      <br />
      <div className="col-span-12 lg:col-span-10 flex justify-center">
        <div className="flex flex-col gap-5 w-11/12">
          {showSaleModal && (
            <AddSale
              addSaleModalSetting={addSaleModalSetting}
              products={products}
              stores={stores}
              handlePageUpdate={handlePageUpdate}
              authContext={authContext}
            />
          )}
          {/* Table  */}
          <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
            <div className="flex justify-between pt-5 pb-3 px-3">
              <div className="flex gap-4 justify-center items-center">
                <span className="font-bold text-lg"> Product Sales</span>
              </div>
              <div className="flex gap-4">
                <button
                  className="bg-emerald-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={addSaleModalSetting}
                >
                  Add Sales
                </button>
              </div>
            </div>
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
              <thead className="bg-slate-300 text-base">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    SN
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Product Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Store Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Stock Sold
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Sales Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Total Sale Amount
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {sales.map((element, index) => {
                  return (
                    <tr key={element._id}>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        {element.ProductID?.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {element.StoreID?.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {element.StockSold}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {element.SaleDate}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        ${element.TotalSaleAmount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sales;
