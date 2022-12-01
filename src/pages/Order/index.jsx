import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";
import { useState, useEffect } from "react";
import SeatPosition from "../../components/orderEvent";
import ticketREG from "../../assets/img/Order/ticketReg.png";
import ticketVIP from "../../assets/img/Order/ticketVIP.png";
import ticketVVIP from "../../assets/img/Order/ticketVVIP.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDataEventById } from "../../stores/actions/event";

export default function Order() {
  const [fullSeat, setFullSeat] = useState([]); // DI GUNAKAN UNTUK MENAMPUNG SEAT YANG FULL
  const [activeSeat, setActiveSeat] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SEDANG DIPILIH
  const [dataOrder, setDataOrder] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SUDAH TERPILIH
  const [listBooking, setListBooking] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG LIST DATA SEAT YANG SUDAH DI BOOKING
  const [dataEvent, setDataEvent] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG DATA EVENT
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { eventId } = useParams();

  useEffect(() => {
    getDataBooking();
    getDataEvent();
  }, []);

  const getDataBooking = () => {
    // https://www.notion.so/Modul-Booking-293a2b5a8f2b4d09a8e1f25304592c22
    const DATADUMMY = {
      status: 200,
      message: "Success Get Data Section By Event Id",
      data: [
        {
          section: "REG1-1",
          booked: 20,
          available: 10,
          statusFull: false,
        },
        {
          section: "REG1-2",
          booked: 15,
          available: 15,
          statusFull: false,
        },
        {
          section: "REG1-3",
          booked: 0,
          available: 30,
          statusFull: false,
        },
        {
          section: "REG1-4",
          booked: 30,
          available: 0,
          statusFull: true,
        },
      ],
    };
    let dataFullSeat = DATADUMMY.data.filter((item) => item.statusFull);
    dataFullSeat = dataFullSeat.map((item) => item.section);
    setFullSeat(dataFullSeat);
    setListBooking(listBooking);
  };

  const getDataEvent = () => {
    dispatch(getDataEventById(eventId)).then((response) => {
      setDataEvent(response.value.data.data);
    });
  };

  const handleSelectSeat = (seat) => {
    // PROSES PEMILIHAN SEAT
    const data = seat.split("-");
    if (!fullSeat.includes(seat)) {
      if (activeSeat.includes(seat)) {
        const deleteSeat = activeSeat.filter((item) => item !== seat);
        const deleteDataOrder = dataOrder.filter((item) => item.seat !== seat);
        setActiveSeat(deleteSeat);
        setDataOrder(deleteDataOrder);
      } else {
        setActiveSeat([...activeSeat, seat]);
        setDataOrder([
          ...dataOrder,
          {
            seat,
            qty: 1,
            price: data[0].includes("VVIP")
              ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
              : data[0].includes("VIP")
              ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
              : dataEvent[0].price, // HARGA TIDAK BERUBAH UNTUK REGULAR
          },
        ]);
      }
    }
  };

  const handleOrderSeat = () => {
    navigate("/payment", {
      state: { dataOrder, dataEvent },
    });
  };

  const clearOrderSeat = () => {
    setActiveSeat([]);
    setDataOrder([]);
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Start Content */}
      <div
        className="container-fluid bg-light pt-5 pb-5"
        style={{ marginTop: "75px" }}
      >
        <div className="container card bg-white rounded-5 border-0 pt-5 pb-5">
          <div className="row m-5">
            <div className="col-sm-12 col-md-7 p-0 p-md-4">
              <div className="rotate-seat-order">
                <SeatPosition
                  width="100%" // MEMBERIKAN BESARAN PADA POLA SEAT
                  height="100%" // MEMBERIKAN TINGGI PADA POLA SEAT
                  fullSeat={fullSeat}
                  activeSeat={activeSeat}
                  handleSelectSeat={handleSelectSeat}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-5 p-0 p-md-4 mt-2">
              <div className="row">
                <div className="col-sm-6 h4">Tickets</div>
                <div className="col-sm-4 h4 text-end">Price</div>
              </div>

              {activeSeat.length > 0 ? (
                <div className="ticket-scrolling-order">
                  {dataOrder.map((item, index) => {
                    const data = item.seat.split("-");
                    return (
                      <div className="my-3" key={index}>
                        <div className="row">
                          <div className="col-sm-2">
                            <img
                              src={
                                data[0].includes("VVIP")
                                  ? ticketVVIP
                                  : data[0].includes("VIP")
                                  ? ticketVIP
                                  : ticketREG
                              }
                              className="ticket-icon-order"
                              alt="ticket icon"
                            />
                          </div>
                          <div className="col-sm-5">
                            Section {data[0]} <br />
                            Row {data[1]}
                          </div>
                          <div className="col-sm-4 text-end">
                            IDR {item.price}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="d-flex align-items-center justify-content-center h-50">
                  <h6>Select Seat</h6>
                </div>
              )}
              <hr />
              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary"
                  onClick={handleOrderSeat}
                  disabled={activeSeat.length > 0 ? false : true}
                >
                  Checkout
                </button>
                <button className="btn btn-danger" onClick={clearOrderSeat}>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
