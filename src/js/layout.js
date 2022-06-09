import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/home";
import { Categories } from "./views/categories";
import { Breeds } from "./views/breeds";
import { Imagecategories } from "./views/imagecategories";
import { Breedsdescription } from "./views/breedsdescription";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/breeds">
            <Breeds />
          </Route>
          <Route exact path="/categories/:id">
            <Imagecategories />
          </Route>
          <Route exact path="/breeds/:id">
            <Breedsdescription />
          </Route>
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
