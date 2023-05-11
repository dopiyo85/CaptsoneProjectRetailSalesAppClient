import React from "react";
//import { Link } from 'react-router-dom';
import "./styles/faqs.css";

const Faqs = () => {
  return (
    <div className="FAQs">
      <div className="banner">
        <h1>Retail Sales FAQs</h1>
        <ol>
          <li>
            <p>
              What is Retail sales App?
              <br /> Retail sales App is an online marketplace that gives you a
              wide variety of phones and accessories which can be shopped from
              the comfort of your house, office or even on transit. Items bought
              are delivered at your doorstep or picked up at any designated pick
              up point countrywide.
            </p>
          </li>
          <br />
          <li>
            <p>
              When can I place my order? <br />
              You can place your order at any time. Deliveries however will be
              done as per the timelines noted on the check-out page.
            </p>
            <br />
            <p>
              Do I have to create a new account if I already have an existing
              account? <br/> No, you don’t. You can however edit your account
              information such as your ‘Shipping’ and ‘Billing’ addresses,
              update your email address and password by following the steps
              below:<br/> 
              <ol>
              <li>Log in to your account:</li>
              <li>Click ‘My Account’ and then </li>
              <li>select‘Account Information’</li>
              </ol>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Faqs;
