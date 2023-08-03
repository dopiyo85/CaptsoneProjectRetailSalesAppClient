import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReceiptPage = () => {
  const { invoiceId } = useParams();
  const [receiptData, setReceiptData] = useState(null);

  useEffect(() => {
    // Fetch the receipt data from the backend using the invoiceId
    const fetchReceiptData = async () => {
      try {
        const response = await fetch(`/api/receipt/${invoiceId}`);
        if (response.ok) {
          const data = await response.json();
          setReceiptData(data);
        } else {
          console.error('Error fetching receipt data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching receipt data:', error);
      }
    };

    fetchReceiptData();
  }, [invoiceId]);

  if (!receiptData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Receipt</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Date</th>
            <th>Agent</th>
            <th>Shop</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{receiptData.customerName}</td>
            <td>{receiptData.product}</td>
            <td>{receiptData.quantity}</td>
            <td>Kshs. {receiptData.totalPrice}</td>
            <td>{new Date(receiptData.date).toLocaleDateString()}</td>
            <td>{receiptData.agent}</td>
            <td>{receiptData.shop}</td>
            <td>{receiptData.companyName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReceiptPage;