import React from 'react'
import "./footer.css";



const Footer = () => {

  const year =new Date().getFullYear();
  return (
    <footer>
        <div className="footer_container">
            <div className="footer_details_one">

                <h3>Get to know Us</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon cares</p>
            </div>

            <div className="footer_details_one">

            <h3>Connect with Us</h3>
            <p>instagram</p>
            <p>facebook</p>
            <p>you tube</p>
            <p>Email</p>
            </div>

            <div className="footer_details_one forres">

            <h3>Make mone y with Us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon cares</p>
            </div>

            <div className="footer_details_one">

            <h3>Get to know Us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon cares</p>
            </div>
        </div>
        <div className="lastdetails">
          <img src ="./assets/amazon_PNG25.png" alt=""/>
          <p>conditions of use and sale &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; prvacy Notice  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; Intrest based Ads  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp; @ 04-02-2023-{year} </p>
        </div>
    </footer>
  )
}

export default Footer