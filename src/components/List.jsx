import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([]);

  const LoadEdit = (id) => {
    navigate("/edit/" + id);
  };

  const Remove = (id) => {
    axios
      .delete("http://localhost:8000/data/" + id)
      .then((res) => {
        setMyData(myData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/data")
      .then((res) => {
        setMyData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-6">
        <h2 className="font-bold text-center text-cyan-400 text-2xl">
          Details
        </h2>
      </div>

      <div className="mb-4 flex justify-end">
        <button
          onClick={() => navigate("/create")}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Create New
        </button>
      </div>

      {myData.length > 0 ? (
        myData.map((item) => (
          <div
            key={item.id}
            className="mb-4 p-4 bg-gray-200 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <span className="font-medium text-gray-700 px-2">
                Name: {item.name}
              </span>
              <span className="font-medium text-gray-700 px-2">
                Email: {item.email}
              </span>
              <span className="font-medium text-gray-700 px-2">
                Phone: {item.phone}
              </span>
            </div>
            <div className="flex space-x-2 ">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
                onClick={() => LoadEdit(item.id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                onClick={() => Remove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No data available</p>
      )}
    </div>
  );
};

export default List;
