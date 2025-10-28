import React from "react";
import ipoData from "../Components/JSON/ipoData.json"
import '../App.css'

// import { useNavigate } from "react-router-dom"; 

const IpoTable = () => {
//   const navigate = useNavigate();

//   const handleReadMore = () => {
//     navigate("/more"); 
//   };

  return (
    <div className="container mt-4 table-responsive border border-primary rounded p-3">
      {/* Table data------------------ */}
      <table className="table table-hover custom-table align-middle">
        <thead className="table-light">
          <tr>
            <th>IPO / Stock</th>
            <th>Date</th>
            <th>IPO Type</th>
            <th>IPO Size</th>
            <th>IPO Price Band</th>
          </tr>
        </thead>
        <tbody>
          {ipoData.map((row, idx) => (
            <tr key={idx}>
              <td>{row.IPO_Stock}</td>
              <td>{row.Date}</td>
              <td>{row.IPO_Type}</td>
              <td>{row.IPO_Size}</td>
              <td>{row.IPO_Price_Band}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button---------------------- */}
      <div className="text-center my-3">
        <button
          className="read-more-btn"
          type="button"
          //   onClick={handleReadMore}
        >
          Read More &gt;
        </button>
      </div>
    </div>
  );
};

export default IpoTable;
