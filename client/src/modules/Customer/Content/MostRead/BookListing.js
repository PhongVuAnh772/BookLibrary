import { React, useState, useEffect } from "react";
import axios from "axios";

function BookListing() {
  const [multiData, setMultiData] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "http://localhost:5000/api/purchaseorder"
      );
      setMultiData(response.data.slice(0, 8));
    }
    fetchUsers();
  }, []);
  //   const limitedArray = multiData

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {multiData.map((item) => (
        <div
          style={{ textAlign: "center", marginLeft: "-44px", width: "240px" }}
        >
          <img
            className="multi__image"
            src={item.cover_book}
            alt=""
            style={{
              width: "120px",
              height: "121px",
              objectFit: "contain",
              marginBottom: "10px",
            }}
          />
          <p
            style={{
              fontSize: "14px",
              padding: "2px 0",
              color: "black",
              textAlign: "center",
            }}
          >
            {item.book_name}
          </p>
          <p
            style={{
              fontSize: "16px",
              padding: "5px 0",
              color: "green",
              textAlign: "center",
            }}
          >
            {item.book_author}
          </p>
          <p
            style={{
              fontSize: "13px",
              padding: "0px 0",
              color: "gray",
              textAlign: "center",
            }}
          >
            {item.book_category}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BookListing;
