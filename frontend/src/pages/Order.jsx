import React, { useEffect } from "react";
import axios from "axios";
import { getData } from "@/context/userContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const Order = () => {
  const { user } = getData();
  const { courseId } = useParams();
  const navigate = useNavigate();

  console.log(courseId);

  useEffect(() => {
    const paymentHandler = async () => {
      if (!user) {
        return navigate("/login");
      }

      const amount = 500;
      const currency = "INR";
      const receipt = "receipt_order_123";

      try {
        // 1. Create Order on Backend
        const response = await axios.post("http://localhost:8080/order", {
          amount,
          currency,
          receipt,
        });

        const order = response.data.order;

        const options = {
          key: "rzp_test_SJYylOAtwlxOas",
          amount: order.amount,
          currency: order.currency,
          name: "Study Era",
          description: "Course Enrollment Fee",
          image: "https://your-logo-url.com/logo.png",
          order_id: order.id,
          handler: async function (response) {
            try {
              const verifyRes = await axios.post(
                "http://localhost:8080/verify-payment",
                {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  userEmail: user.email,
                  courseId: courseId,
                },
              );

              if (verifyRes.data.success) {
                toast("Payment Successful! Course Unlocked");
                navigate("/mybatch");
              }
            } catch (err) {
              console.error("Verification Failed", err);
            }
          },
          prefill: {
            name: "User Name", // Use userData.user.name from context
            email: "user@example.com",
          },
          theme: {
            color: "#6a5acd", // Matches your Study Era theme
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error(
          "Payment Handler Error:",
          error.response?.data || error.message,
        );
      }
    };
    paymentHandler();
  }, [user, courseId, navigate]);
  return <div></div>;
};

export default Order;
