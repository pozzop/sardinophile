import React from "react";
import "./../styles/global.scss";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import PackSardinophilePage from "./packsardinophile";
import DegustationPage from "./degustation";
import ComparatifPage from "./comparatif";
import SardinePage from "./sardine";
import ContactPage from "./contact";
import { Switch, Route, Router } from "./../util/router.js";
import NewsletterSection from "./../components/NewsletterSection";
import Footer2 from "./../components/Footer2";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar color="light" spaced={false} logo=""></Navbar>

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route
              exact
              path="/pack-sardinophile"
              component={PackSardinophilePage}
            />

            <Route exact path="/degustation" component={DegustationPage} />

            <Route exact path="/comparatif" component={ComparatifPage} />

            <Route exact path="/sardine" component={SardinePage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <NewsletterSection
            color="light"
            size="normal"
            backgroundImage=""
            backgroundImageOpacity={1}
            title="la lettre du  sardinophile"
            subtitle="→ s'abonner par email"
            buttonText=""
            inputPlaceholder=""
            subscribedMessage=""
          ></NewsletterSection>
          <Footer2
            color="light"
            size="normal"
            backgroundImage=""
            backgroundImageOpacity={1}
            copyright="2020 - Sardinophile.com"
            logo=""
          ></Footer2>
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
