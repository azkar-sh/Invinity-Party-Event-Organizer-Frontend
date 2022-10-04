import React from "react";
import CardEvent from "../../components/cardEvent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";

export default function Landing() {
  const navigate = useNavigate();
  //   const data = [
  //     { id: 1, name: "Nutrisari", category: "drink" },
  //     { id: 2, name: "Croissant", category: "food" },
  //     { id: 3, name: "Milk", category: "drink" },
  //   ];

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    getDataProduct();
  }, []);

  useEffect(() => {
    getDataProduct();
  }, [page]);

  const getDataProduct = async () => {
    try {
      const result = await axios.get(`event?page=${page}&limit=&sort=&name=`);
      console.log(result);
      setData(result.data.data);
      setPagination(result.data.pagination);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetailEvent = () => {
    navigate("/detail/${id}");
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <main className="container d-flex gap-3">
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <CardEvent data={item} handleDetail={handleDetailEvent} />
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3>Data Not Found !</h3>
          </div>
        )}
      </main>

      <div className="d-flex gap-2 justify-content-center w-100 my-5">
        <button
          className="btn btn-primary"
          onClick={handlePrev}
          disabled={page !== pagination.totalPage ? true : false}
        >
          &lt;
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={page === pagination.totalPage ? true : false}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
