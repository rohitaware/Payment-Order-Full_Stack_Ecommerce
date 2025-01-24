import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import momemt from "moment";
import displayINRCurrency from "../helpers/displayCurrency";

const OrderPage = () => {
  const [data, setData] = useState([]);

  const fetchOrderDetails = async () => {
    const response = await fetch(SummaryApi.getOrder.url, {
      method: SummaryApi.getOrder.method,
      credentials: "include",
    });

    const responseData = await response.json();
    setData(responseData.data)

    console.log("order list", responseData);
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div>
      {!data[0] && <p>No Order available</p>}

      <div className="p-4 w-full">
        {data.map((item, index) => {
          return (
            <div key={item.userId + index} className="">
              <p className="font-medium text-lg ">
                {momemt(item.createdAt).format("LL")}
              </p>

              <div className="border rounded">
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="grid gap-1">
                    {item?.productDetails.map((product, index) => {
                      return (
                        <div
                          key={product.productId + index}
                          className="flex gap-3 bg-slate-100"
                        >
                          <img
                            src={product?.image[0]}
                            className="w-28 h-28 bg-slate-200 object-scale-down p-2"
                          />
                          <div>
                            <div className="font-medium text-lg text-ellipsis line-clamp-1">
                              {product?.name}
                            </div>
                            <div className="flex items-center gap-5 mt-1">
                              <div className="text-lg text-red-500">
                                {displayINRCurrency(product?.price)}
                              </div>
                              <p>Quantity : {product?.quantity}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col min-w-[300px] gap-4 p-2">
                    <div>
                      <div className="text-lg font-medium">
                        Payment Details :
                      </div>
                      <p className="ml-1">
                        Payment Method :{" "}
                        {item.paymentdetails.payment_method_types[0]}
                      </p>

                      <p className="ml-1">
                        Payment status : {item.paymentdetails.payment_status}
                      </p>
                    </div>
                    <div>
                      <div className="text-lg font-medium">
                        Shipping Details:
                      </div>
                      {item.shipping_options.map((shipping, index) => {
                        return (
                          <div
                            key={shipping.shipping_rate}
                            className="ml-1"
                          >
                            Shipping Charge: {shipping.shipping_amount}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="font-semibold ml-auto w-fit lg:text-lg mt-5 mb-4 mr-2">
                  Total Amount : {item.totalAmount}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderPage;
