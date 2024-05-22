import styled from "styled-components";
import Footer from "../components/Common/Footer/footer";
import Header from "../components/Common/Header";


const Contact = () => {
  const Wrapper = styled.section`
    
    text-align: center;
    

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 25rem;
        margin: auto;
        

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          

          input[type="submit"] {
            cursor: pointer;
            background-color: #638ECB; 
            transition: all 0.2s;
          }
        }
      }
    }
  `;
  return (
    <div>
      <Header />
      <div>
      <Wrapper>
      <h2 className="common-heading">Contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.994739964839!2d77.38796623858747!3d28.630077393916554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceffacf1421e7%3A0x59cc8516d5c1faff!2sChhajarasi%20Post%20Office!5e0!3m2!1sen!2sin!4v1699082302624!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xrgndeqq"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
      </div>
      <br />
      <Footer />
    </div>
  );
  

  
};

export default Contact;
