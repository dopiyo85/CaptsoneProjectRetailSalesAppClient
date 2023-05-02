import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const Invoice = () => {
  const [products, setProducts] = useState([{ name: '', price: '', quantity: 1 }]);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [total, setTotal] = useState(0);

  const handleProductChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...products];
    list[index][name] = value;
    setProducts(list);
  };

  const handleProductRemove = (index) => {
    const list = [...products];
    list.splice(index, 1);
    setProducts(list);
  };

  const handleAddProduct = () => {
    setProducts([...products, { name: '', price: '', quantity: 1 }]);
  };

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleCustomerEmailChange = (event) => {
    setCustomerEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let tempTotal = 0;
    for (const product of products) {
      tempTotal += product.price * product.quantity;
    }
    setTotal(tempTotal);
  };

  return (
    <div>
      <h1>Invoice</h1>
      <Form onSubmit={handleFormSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="customerName">Customer Name</Label>
              <Input type="text" name="customerName" id="customerName" value={customerName} onChange={handleCustomerNameChange} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="customerEmail">Customer Email</Label>
              <Input type="email" name="customerEmail" id="customerEmail" value={customerEmail} onChange={handleCustomerEmailChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>Products</Label>
              {products.map((product, index) => (
                <div key={index}>
                  <Input type="text" name="name" placeholder="Product Name" value={product.name} onChange={(event) => handleProductChange(event, index)} />
                  <Input type="number" name="price" placeholder="Price" value={product.price} onChange={(event) => handleProductChange(event, index)} />
                  <Input type="number" name="quantity" placeholder="Quantity" value={product.quantity} onChange={(event) => handleProductChange(event, index)} />
                  <Button type="button" onClick={() => handleProductRemove(index)}>
                    Remove Product
                  </Button>
                </div>
              ))}
              <Button type="button" onClick={handleAddProduct}>
                Add Product
              </Button>
            </FormGroup>
          </Col>
        </Row>
        <Button type="submit">Generate Invoice</Button>
      </Form>
      <h3>Total: {total}</h3>
    </div>
  );
};

export default Invoice;
