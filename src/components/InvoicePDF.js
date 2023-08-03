// InvoicePDF.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: { margin: 'auto', flexDirection: 'row' },
  tableColHeader: {
    width: '50%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 8,
  },
  tableCol: {
    width: '50%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    padding: 8,
  },
});

const InvoicePDF = ({ invoiceId, totalPrice, cartItems }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}>INVOICE</Text>
          <Text style={styles.subheader}>Invoice ID: {invoiceId}</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Product</Text>
              <Text style={styles.tableColHeader}>Price</Text>
            </View>
            {cartItems.map((item) => (
              <View style={styles.tableRow} key={item.id}>
                <Text style={styles.tableCol}>{item.name}</Text>
                <Text style={styles.tableCol}>Kshs.{item.price}</Text>
              </View>
            ))}
          </View>
          <Text style={{ marginTop: 10 }}>Total Price: Kshs. {totalPrice}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;