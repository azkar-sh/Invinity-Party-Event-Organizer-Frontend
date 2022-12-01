import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import currency from "../../utils/currency";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../../stores/actions/booking";
import "./index.css";

import cardIcon from "../../assets/img/card-icon.png";
import bankIcon from "../../assets/img/bank-icon.png";
import retailIcon from "../../assets/img/retail-icon.png";
import emoneyIcon from "../../assets/img/emoney-icon.png";
import debitCard from "../../assets/img/debit-card.png";

export default function Payment() {
  const { state } = useLocation();
  const userData = useSelector((state) => state.user.userData);
  const [checked, setChecked] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let quantity;
  let price;
  // let seat;

  const handleQuantity = (state) => {
    let result = 0;
    state.dataOrder.filter((e) => {
      if (e.seat.includes("REG")) {
        result = result + e.qty;
      }
      if (e.seat.includes("VIP")) {
        result = result + e.qty;
      }
    });
    return result;
  };
  const handlePrice = (state) => {
    let result = 0;
    state.dataOrder.filter((e) => {
      if (e.seat.includes("REG")) {
        result = result + e.price;
      }
      if (e.seat.includes("VIP")) {
        result = result + e.price;
      }
    });
    return result;
  };

  // const handleSeatDetail = (state) => {
  //   let result = "";
  //   state.dataOrder.filter((e) => {
  //     if (e.seat.includes("REG")) {
  //       result = result + e.seat + " ";
  //     }
  //     if (e.seat.includes("VIP")) {
  //       result = result + e.seat + " ";
  //     }
  //   });
  //   return result;
  // };

  quantity = handleQuantity(state);
  price = handlePrice(state);
  // seat = handleSeatDetail(state);

  // console.log(seat);

  const form = useState({
    userId: userData.userId,
    eventId: state.dataEvent[0].eventId,
    totalTicket: quantity,
    totalPayment: price,
    paymentMethod: "ATM",
  });

  const handlePayment = () => {
    dispatch(createBooking(form[0]))
      .then((response) => {
        window.open(
          `${response.value.data.data.redirectUrl.redirect_url}`,
          "_blank"
        );

        navigate("/");
      })
      .catch(() => {
        alert("Payment Failed");
      });
  };

  console.log(checked);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Start Content */}
      <div className="container py-5">
        <div className="d-flex flex-row justify-content-between">
          <div className="col-6">
            <h3>Payment Method</h3>

            <form className="d-flex flex-column mt-4">
              <label className="d-flex flex-column justify-content-start">
                <div className="d-flex flex-row align-items-center gap-2 mb-3">
                  <input
                    type="radio"
                    name="editList"
                    value="card"
                    onClick={() => setChecked("card")}
                  />
                  <img src={cardIcon} alt="" />
                  Card
                </div>
                <img src={debitCard} alt="credit-card" className="w-50 mb-3" />
              </label>

              <label className="d-flex flex-column justify-content-start">
                <div className="d-flex flex-row align-items-center gap-2 mb-3">
                  <input
                    type="radio"
                    name="editList"
                    value="bank"
                    onClick={() => setChecked("bank")}
                  />
                  <img src={bankIcon} alt="" />
                  Bank Transfer
                </div>
              </label>

              <label className="d-flex flex-column justify-content-start">
                <div className="d-flex flex-row align-items-center gap-2 mb-3">
                  <input
                    type="radio"
                    name="editList"
                    value="retail"
                    onClick={() => setChecked("retail")}
                  />
                  <img src={retailIcon} alt="" />
                  Retail
                </div>
              </label>

              <label className="d-flex flex-column justify-content-start">
                <div className="d-flex flex-row align-items-center gap-2 mb-3">
                  <input
                    type="radio"
                    name="editList"
                    value="emoney"
                    onClick={() => setChecked("emoney")}
                  />
                  <img src={emoneyIcon} alt="" />
                  E-Money
                </div>
              </label>
            </form>
          </div>
          <div className="col-6">
            <h3>Ticket Detail</h3>
            <div className="d-flex flex-row my-4">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>Event</td>
                    <td>:</td>
                    <td className="payment-detail">
                      {state.dataEvent[0].name}
                    </td>
                  </tr>
                  <tr>
                    <td>Ticket Section</td>
                    <td>:</td>
                    <td className="payment-detail">
                      {state.dataOrder.map((item) => (
                        <div key={item.id}>
                          <p>{item.seat}</p>
                        </div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Quantity</td>
                    <td>:</td>
                    <td className="payment-detail">{quantity}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>:</td>
                    <td className="payment-detail">{currency.format(price)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              className="btn btn-primary w-50"
              onClick={handlePayment}
              disabled={checked !== "card" ? true : false}
            >
              Payment
            </button>
          </div>
        </div>
      </div>
      {/* End Content */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
