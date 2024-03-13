import React, { useState, useEffect, useContext } from "react";
import AddStore from "../components/AddStore";
import AuthContext from "../AuthContext";

function Store() {
  const [showModal, setShowModal] = useState(false);
  const [stores, setAllStores] = useState([]);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetching all stores data
  const fetchData = () => {
    fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllStores(data);
      });
  };

  const modalSetting = () => {
    setShowModal(!showModal);
  };

  return (
    <>
    <br></br>
    <div className="col-span-12 lg:col-span-10 flex justify-center">
      <div className="w-11/12 border rounded-lg shadow-lg p-6">
        <div className="flex justify-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Manage Stores</h2>
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-emerald-700  text-white font-bold py-2 px-4 rounded-lg"
            onClick={modalSetting}
          >
            Add Store
          </button>
        </div>
        {showModal && <AddStore />}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((element, index) => (
            <div
              className="bg-white rounded-lg overflow-hidden shadow-md"
              key={element._id}
            >
              <img
                alt="store"
                className="h-60 w-full object-cover"
                src={element.image}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {element.name}
                </h3>
                <p className="text-gray-600">
                  {element.address}, {element.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Store;
