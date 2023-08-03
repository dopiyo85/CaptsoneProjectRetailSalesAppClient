import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from './InvoicePDF';

const styles = StyleSheet.create({
  // Define your styles for the PDF (same as in InvoicePDF.js)
});

const InvoicePage = ({ invoiceId, totalPrice, cartItems }) => {
  return (
    <div className="invoice-page" style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'orange', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', fontWeight: 'bold' }}>INVOICE</h2>
      <p>Invoice ID: {invoiceId}</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd', textAlign: 'left' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Product</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Kshs.{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: '10px' }}>Total Price: Ksh. {totalPrice}</p>

      {/* Link to download the PDF invoice */}
      <PDFDownloadLink
        document={<InvoicePDF invoiceId={invoiceId} totalPrice={totalPrice} cartItems={cartItems} />}
        fileName={`Invoice_${invoiceId}.pdf`}
      >
        {({ loading }) => (loading ? 'Loading...' : 'Download Invoice')}
      </PDFDownloadLink>
    </div>
  );
};

export default InvoicePage;