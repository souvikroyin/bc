import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <>
      <div className="">
        <Card
          className="text-center text-white"
          style={{ backgroundColor: "#6A064D" }}
        >
          <Card.Body>
            <Card.Text>
              <div className="main_container">
                <div className="social_liner">
                  <a href="https://www.facebook.com/vhoindia" target="_blank">
                    <ion-icon
                      name="logo-facebook"
                      role="img"
                      className="md hydrated"
                      aria-label="logo facebook"
                    ></ion-icon>
                  </a>
                  <a
                    href="https://www.youtube.com/@versatilehandicraftoversea5319/featured"
                    target="_blank"
                  >
                    <ion-icon
                      name="logo-youtube"
                      role="img"
                      className="md hydrated"
                      aria-label="logo youtube"
                    ></ion-icon>
                  </a>
                  <a
                    href="https://www.instagram.com/versatilehandicraftoverseas/"
                    target="_blank"
                  >
                    <ion-icon
                      name="logo-instagram"
                      role="img"
                      className="md hydrated"
                      aria-label="logo instagram"
                    ></ion-icon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vhoindia/"
                    target="_blank"
                  >
                    <ion-icon
                      name="logo-linkedin"
                      role="img"
                      className="md hydrated"
                      aria-label="logo linkedin"
                    ></ion-icon>
                  </a>
                  <a href="https://in.pinterest.com/vhoindia/" target="_blank">
                    <ion-icon
                      name="logo-pinterest"
                      role="img"
                      className="md hydrated"
                      aria-label="logo pinterest"
                    ></ion-icon>
                  </a>
                </div>
                <div className="disclaimer">
                  FREE SHIPPING ON ORDERS OF RS. 4000 AND ABOVE. CONDITION
                  APPLY*
                </div>
                <h6>
                  2023 All Rights Reserved. Design by{" "}
                  <a href="https://algosd.com/">ALGOSD</a>
                </h6>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Footer;
