import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import slider1 from "../assets/css/images/slider1.jpg";
import slider2 from "../assets/css/images/slider2.jpg";
import slider3 from "../assets/css/images/slider3.jpg";
import Client from "../components/Client";

const FullPageScroll = () => {
  // const SectionStyle = {
  //   height: "100vh",
  //   width: "100%",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // };
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection
        // style={{
        //   ...SectionStyle,
        //   backgroundImage: `url(${slider1})`,
        //   height: "50vh",
        // }}
        >
          <MDBCarousel showControls>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={1}
              src="https://vhoindia.com/storage/banners/JsV6YFWNSCxqPSYahXctyl0YVydWRvont9Ecdbcg.jpg"
              alt="..."
            />
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src="https://vhoindia.com/storage/banners/E2iClqBHhi76AQftHGWYML1wuMOGnZ2MAfn2TXFM.jpg"
              alt="..."
            />
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={3}
              src="https://vhoindia.com/storage/banners/AUqY1IYdQUxYhEdYwWkO5zKI8vzOxMPcHvfQEbBU.jpg"
              alt="..."
            />
          </MDBCarousel>
          {/* <h1>Screen 1</h1> */}
        </FullpageSection>
        <FullpageSection
        // style={{
        //   ...SectionStyle,
        //   backgroundImage: `url(${slider2})`,
        //   height: "50vh",
        // }}
        >
          <MDBCarousel showControls showIndicators>
            <MDBCarouselItem
              className="w-100vh d-block"
              itemId={1}
              src="https://vhoindia.com/storage/banners/nR5mNCbaTvZLqgH01qLkfPemQNAsOrDbI4SdU3bx.jpg"
              alt="..."
            />
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src="https://vhoindia.com/storage/banners/FxQYlYlWAvHilsjIsT8nS1SiS2CbxBIPkuFZKUcn.jpg"
              alt="..."
            />
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={3}
              src="https://vhoindia.com/storage/banners/Zmmrhh95xpnNhXqJQnmUFDuDdSI1PrEQTcvqjHRJ.jpg"
              alt="..."
            />
          </MDBCarousel>
          {/* <h1>Screen 2</h1> */}
        </FullpageSection>
        <FullpageSection
        // style={{
        //   ...SectionStyle,
        //   backgroundImage: `url(${slider3})`,
        //   height: "50vh",
        // }}
        >
          <MDBCarousel showControls dealy={3000}>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={1}
              src="https://vhoindia.com/storage/banners/ynMwDJhr1y3avAaDORYdmXoJTpup8Aof4noFmFpi.jpg"
              alt="..."
            />
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src="https://vhoindia.com/storage/banners/fhW5W7pB1wmkdEu5EkNttsVIHKGWliTBpoNoKwc6.jpg"
              alt="..."
            />
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={3}
              src="https://vhoindia.com/storage/banners/fhW5W7pB1wmkdEu5EkNttsVIHKGWliTBpoNoKwc6.jpg"
              alt="..."
            />
          </MDBCarousel>
          {/* <h1>Screen 3</h1> */}
        </FullpageSection>
        +-
        <FullpageSection
        // style={{
        //   ...SectionStyle,
        //   backgroundImage: `url(${slider3})`,
        //   height: "50vh",
        // }}
        >
          <Client />
          {/* <h1>Screen 3</h1> */}
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
