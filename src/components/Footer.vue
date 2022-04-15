<template>
  <footer>
    <div class="footer-head">
      <div class="message">
        <b>Get conected with us on social networks:</b>
      </div>
      <div class="brands">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>
    <div class="footer-body">
      <div class="content">
        <h3>COMPANY NAME</h3>
        <p>
          Meta Platforms, Inc., doing business as Meta and formerly known as
          Facebook, Inc., and TheFacebook, Inc., is an American multinational
          technology conglomerate based in Menlo Park, California. The company
          is the parent organization of Facebook, Instagram, and WhatsApp, among
          other subsidiaries.
        </p>
      </div>

      <div class="content">
        <h3>PRODUCTS</h3>
        <a href="#">Sports Clothes</a>
        <a href="#">Sports Shoes</a>
        <a href="#">Sports Shorts</a>
        <a href="#">Sports Materials</a>
      </div>

      <div class="content">
        <h3>CONTACT US</h3>
        <a href="#"
          ><i class="fa-solid fa-building"></i> New York, NY 10012, US</a
        >
        <a href="#"><i class="fa-solid fa-envelope"></i>sample@example.com</a>
        <a href="#"><i class="fa-solid fa-phone"></i>+01 235 456 78</a>
      </div>

      <div class="content">
        <h3>MESSAGE US</h3>
        <form action="">
          <input type="text" name="email" id="emailAdd" placeholder="Email" />
          <textarea
            type="text"
            id="emailMessage"
            name="message"
            placeholder="Message"
          />
          <input type="submit" id="submitButton" />
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy;Copyright 2022 Paul Jor - All Rights Reserved</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;

  list-style: none;
  font-family: "Open Sans", sans-serif;
}

footer {
  width: 100%;
}

footer .footer-head {
  overflow: hidden;
  background-color: #39b1f1;
  padding: 10px;
}

footer .footer-head .message {
  color: white;
  margin-left: 25px;
  float: left;
}

footer .footer-head .brands {
  float: right;
  margin-right: 25px;
}

footer .footer-head .brands a {
  color: white;
  padding: 15px;
}

footer .footer-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.2fr;
  background-color: #0073b0;
  border-bottom: 2px solid #64b9ff;
  padding-right: 30px;
}

footer .footer-body .content {
  padding: 40px 40px 40px 40px;
  color: white;
  text-align: left;
}

footer .footer-body .content h3 {
  margin-bottom: 30px;
}

footer .footer-body .content #emailAdd {
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
}

footer .footer-body .content #emailMessage {
  padding: 10px;
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}

footer .footer-body .content #submitButton {
  width: 100px;
  padding: 5px;
  float: right;
  margin-right: -24px;
}

footer .footer-body .content a {
  display: block;
  color: white;
  margin-top: 20px;
}

footer .footer-body .content i {
  margin-right: 10px;
}

footer .footer-bottom {
  width: 100%;
  background-color: #253759;
}

footer .footer-bottom div {
  padding: 20px;
  color: white;
}
</style>
