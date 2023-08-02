import React from 'react';

const InvoicePage = ({ invoiceId, totalPrice }) => {
  // Display invoice details and payment button
  return (
    <div>
      <h2>Invoice</h2>
      {/* Display invoice details */}
      <p>Invoice ID: {invoiceId}</p>
      <p>Total Price: Ksh. {totalPrice}</p>

      {/* Display payment button */}
      <button>Make Payment</button>
    </div>
  );
};

export default InvoicePage;