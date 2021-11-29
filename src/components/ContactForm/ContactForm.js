import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button, Container } from 'react-bootstrap';
import { init } from 'emailjs-com';

const ContactForm = () => {
  init('user_U10QAMP39rocWkl7rdhcM');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        'service_yuzwjoe',
        'template_0knu98q',
        form.current,
        'user_U10QAMP39rocWkl7rdhcM'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container style={{ color: 'white' }} className="mt-4">
      <div class="row mt-1">
        <div class="col-lg-4">
          <div class="info">
            <div class="address">
              <i class="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>Kalaroa,Satkhira</p>
            </div>

            <div class="email">
              <i class="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>saifbashar2021@gmail.com</p>
            </div>

            <div class="phone">
              <i class="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+8801704938941</p>
            </div>
          </div>
        </div>
        {/* Form */}
        <div class="col-lg-8 mt-5 mt-lg-0">
          {' '}
          <form ref={form} onSubmit={sendEmail}>
            <div class="row">
              <div class="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div class="text-center">
              <Button variant="primary" type="submit">
                <span>Send Message</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
