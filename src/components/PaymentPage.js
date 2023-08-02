import React, { useEffect, useState } from 'react';

const PaymentPage = ({ invoiceId }) => {
  const [paymentURL, setPaymentURL] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the payment URL from the backend for the specified invoiceId
    const fetchPaymentURL = async () => {
      try {
        // Replace '/api/mpesa-payment' with the actual backend API endpoint to fetch the payment URL
        const response = await fetch('/api/mpesa-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ invoiceId }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch payment URL');
        }

        const data = await response.json();
        setPaymentURL(data.paymentURL);
      } catch (error) {
        setError('Error fetching payment URL');
      }
    };

    fetchPaymentURL();
  }, [invoiceId]);

  const handlePayment = () => {
    // Redirect the user to the M-Pesa payment URL
    window.location.href = paymentURL;
  };

  return (
    <div>
      <h2>Payment Instructions</h2>
      <p>
        Please click the "Pay Now with M-Pesa" button below to proceed with the payment using M-Pesa.
      </p>
      <button onClick={handlePayment}>Pay Now with M-Pesa</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default PaymentPage;