import React from "react";
import { PDFViewer, Document, Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer";

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
  },
  value: {
    fontSize: 14,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

const QuotationPDF = ({ quotationData }) => {
  const { customerName, product, quantity, companyName, salesAgent, shopName } = quotationData;

  // Calculate the total amount
  const totalAmount = quotationData.price * quantity;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {/* Replace the image src with the path to your Safaricom logo */}
          <Image src="/path/to/safaricom-logo.png" style={styles.logo} />
          <Text style={styles.title}>Quotation</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Customer Name:</Text>
          <Text style={styles.value}>{customerName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Product:</Text>
          <Text style={styles.value}>{product}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Quantity:</Text>
          <Text style={styles.value}>{quantity}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Company Name:</Text>
          <Text style={styles.value}>{companyName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Sales Agent:</Text>
          <Text style={styles.value}>{salesAgent}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Shop Name:</Text>
          <Text style={styles.value}>{shopName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Tax VAT:</Text>
          <Text style={styles.value}>10%</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Total Amount:</Text>
          <Text style={styles.totalAmount}>KES {totalAmount}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default QuotationPDF;