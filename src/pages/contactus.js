import React from 'react';

const ContactPage = () => {
  return (
    <div className="container">
      <style>
        {`
          hr {
            border-top: 1px solid #000;
            width: 100%;
          }
          
          a {
            color: #000;
          }
          
          #contact2 {
            letter-spacing: 2px;
          }
          
          #author a {
            color: #fff;
            text-decoration: none;
          }
        `}
      </style>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <div className="text-start mt-5">
        <a className="btn btn-success" href="/">Home</a>
      </div>
      <div>
        <h1 className="text-center">Contact Address</h1>
        <hr />
        <div className="row">
          <div className="col-sm-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977"
              width="100%"
              height="320"
              frameBorder="0"
              style={{ border: '0' }}
              allowFullScreen
            ></iframe>
          </div>

          <div className="col-sm-4" id="contact2">
            <h3>SIMS</h3>
            <hr align="left" width="50%" />
            <h4 className="pt-2">Reach Us!</h4>
            <i className="fas fa-globe" style={{ color: '#000' }}></i> someware around the globe.<br />
            <h4 className="pt-2">Contatti</h4>
            <i className="fas fa-phone" style={{ color: '#000' }}></i> <a href="tel:+"> 999999999 </a><br />
            <i className="fab fa-whatsapp" style={{ color: '#000' }}></i><a href="tel:+"> 999999999 </a><br />
            <h4 className="pt-2">Email</h4>
            <i className="fa fa-envelope" style={{ color: '#000' }}></i> <a href="">info@sims.com</a><br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
