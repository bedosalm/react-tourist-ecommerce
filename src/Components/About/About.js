import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Title from "../Title/Title";

const About = () => {
    return (
        <>
        <Header backGr="AboutHeader">
            <Banner title="About US" subTitle="ILEXA is a multi-feature luxury tourist resort">
                <Link to="/" className="btn-primary">
                Back Home
                </Link>
            </Banner>
        </Header>
        <div className="about-us">
        <Title title="title">About</Title>
          <div className="content">
              <p>Tourism Tiger designs tourism websites that are effective from day one, and our ongoing updates ensure they stay effective. As dedicated tourism specialists, our focus has allowed us to develop the best possible website features for tour and activity businesses, creating websites that look great and work for our clients and their own customers. Our support service allows companies to update their website, react to new technologies, and make practical changes without having to build a new website each time.

The concept is simple: Tourism Tiger specializes in intelligently designed tour company websites. Our websites are responsive, user-friendly, and great looking. If you’d like to see more, take a look at our website portfolio for several examples of our work.

Our tourism websites have a proven track record of increasing sales for our clients and we never lose sight of why people come to us: they need their website to sell more tours and activities. To learn more about our tourism website design service, get in touch today.</p>
          </div>
        </div>
        </>
   )
}

export default About