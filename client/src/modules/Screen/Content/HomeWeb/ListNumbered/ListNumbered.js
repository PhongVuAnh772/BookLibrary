import { React, useEffect, useState } from "react";
import axios from "axios";
import "./ListNumbered.css";

function ListNumbered() {
  const [InVoice, setInVoice] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "http://localhost:5000/api/arinvoice-list"
      );
      setInVoice(response.data);
    }
    fetchUsers();
  }, []);
  return (
    <div className="ListNumbered-block">
      <div className="ListNumbered-block-child">
        <p>Tổng phiếu đã lập</p>
        <div className="ListNumbered-block-child-number">
          <h3>{InVoice.length}</h3>
        </div>
      </div>
      <div
        className="ListNumbered-block-child"
        style={{ border: "3px solid #98ebe1", color: "#4d5ce8" }}
      >
        <p>Tổng tiền thu được</p>
        <div className="ListNumbered-block-child-number">
          <h3>745,000</h3>
        </div>
      </div>
      <div className="ListNumbered-block-child">
        <p>Số khách hàng đã mượn</p>
        <div className="ListNumbered-block-child-number">
          <h3>15</h3>
        </div>
      </div>
    </div>
  );
}

export default ListNumbered;
