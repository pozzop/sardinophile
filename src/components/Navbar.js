import React, { useState } from "react";
import NavbarContainer from "./NavbarContainer";
import { Link, useRouter } from "./../util/router.js";
import { useAuth } from "./../util/auth.js";

function Navbar(props) {
  const auth = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link className="has-text-black is-size-5" to="/">
              SARDINOPHILE
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/comparatif">
              Panorama
            </Link>
            <Link className="navbar-item" to="/degustation">
              Dégustation
            </Link>
            <Link className="navbar-item" to="/sardine">
              La Sardine
            </Link>
<Link className="navbar-item" to="/pack-sardinophile">
              Boutique
            </Link>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
