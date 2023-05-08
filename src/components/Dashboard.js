import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import axios from 'axios';
import './styles/dashboard.css';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSales: 0,
      totalCustomers: 0,
      totalProducts: 0,
      isLoading: true,
      products: [],
      cartItems: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5005/api/dashboard', {timeout: 5000})
      .then(res => {
        this.setState({
          totalSales: res.data.totalSales,
          totalCustomers: res.data.totalCustomers,
          totalProducts: res.data.totalProducts,
          isLoading: false,
        });
      })
      .catch(err => console.log(err));
      
    axios.get('http://localhost:5005/api/products', {timeout: 5000})
      .then(res => {
        this.setState({
          products: res.data,
        });
      })
      .catch(err => console.log(err));
  }
  
  addToCart = (product) => {
    this.setState({
      cartItems: [...this.state.cartItems, product],
    });
  }

  render() {
    const { totalSales, totalCustomers, totalProducts, isLoading, products, cartItems } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <Card>
              <CardBody>
                <CardTitle>Total Sales</CardTitle>
                <h2>{totalSales}</h2>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <CardBody>
                <CardTitle>Total Customers</CardTitle>
                <h2>{totalCustomers}</h2>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <CardBody>
                <CardTitle>Total Products</CardTitle>
                <h2>{totalProducts}</h2>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <h2>Products</h2>
            <ProductList products={products} addToCart={this.addToCart} />
          </div>
          <div className="col-md-4">
            <h2>Shopping Cart</h2>
            <ShoppingCart cartItems={cartItems} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

// import React from 'react';
// import { Card, CardBody, CardTitle } from 'reactstrap';
// import axios from 'axios';
// import './styles/dashboard.css';
// import ProductList from './ProductList';
// import ShoppingCart from './ShoppingCart';

// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       totalSales: 0,
//       totalCustomers: 0,
//       totalProducts: 0,
//       isLoading: true,
//       products: [],
//       cartItems: [],
//     };
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5005/api/dashboard')
//       .then(res => {
//         this.setState({
//           totalSales: res.data.totalSales,
//           totalCustomers: res.data.totalCustomers,
//           totalProducts: res.data.totalProducts,
//           isLoading: false,
//         });
//       })
//       .catch(err => console.log(err));
      
//     axios.get('http://localhost:5005/api/products')
//       .then(res => {
//         this.setState({
//           products: res.data,
//         });
//       })
//       .catch(err => console.log(err));
//   }
  
//   addToCart = (product) => {
//     this.setState({
//       cartItems: [...this.state.cartItems, product],
//     });
//   }

//   render() {
//     const { totalSales, totalCustomers, totalProducts, isLoading, products, cartItems } = this.state;

//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     return (
//       <div>
//         <div className="row">
//           <div className="col-md-4">
//             <Card>
//               <CardBody>
//                 <CardTitle>Total Sales</CardTitle>
//                 <h2>{totalSales}</h2>
//               </CardBody>
//             </Card>
//           </div>
//           <div className="col-md-4">
//             <Card>
//               <CardBody>
//                 <CardTitle>Total Customers</CardTitle>
//                 <h2>{totalCustomers}</h2>
//               </CardBody>
//             </Card>
//           </div>
//           <div className="col-md-4">
//             <Card>
//               <CardBody>
//                 <CardTitle>Total Products</CardTitle>
//                 <h2>{totalProducts}</h2>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-8">
//             <h2>Products</h2>
//             <ProductList products={products} addToCart={this.addToCart} />
//           </div>
//           <div className="col-md-4">
//             <h2>Shopping Cart</h2>
//             <ShoppingCart cartItems={cartItems} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Dashboard;

// // import React from 'react';
// // import { Card, CardBody, CardTitle } from 'reactstrap';
// // import axios from 'axios';
// // import './styles/dashboard.css';

// // class Dashboard extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       totalSales: 0,
// //       totalCustomers: 0,
// //       totalProducts: 0,
// //       isLoading: true,
// //     };
// //   }

// //   componentDidMount() {
// //     axios.get('http://localhost:5000/dashboard')
// //       .then(res => {
// //         this.setState({
// //           totalSales: res.data.totalSales,
// //           totalCustomers: res.data.totalCustomers,
// //           totalProducts: res.data.totalProducts,
// //           isLoading: false,
// //         });
// //       })
// //       .catch(err => console.log(err));
// //   }

// //   render() {
// //     const { totalSales, totalCustomers, totalProducts, isLoading } = this.state;

// //     if (isLoading) {
// //       return <p>Loading...</p>;
// //     }

// //     return (
// //       <div className="row">
// //         <div className="col-md-4">
// //           <Card>
// //             <CardBody>
// //               <CardTitle>Total Sales</CardTitle>
// //               <h2>{totalSales}</h2>
// //             </CardBody>
// //           </Card>
// //         </div>
// //         <div className="col-md-4">
// //           <Card>
// //             <CardBody>
// //               <CardTitle>Total Customers</CardTitle>
// //               <h2>{totalCustomers}</h2>
// //             </CardBody>
// //           </Card>
// //         </div>
// //         <div className="col-md-4">
// //           <Card>
// //             <CardBody>
// //               <CardTitle>Total Products</CardTitle>
// //               <h2>{totalProducts}</h2>
// //             </CardBody>
// //           </Card>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default Dashboard;
