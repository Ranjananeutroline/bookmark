import React from "react";
import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import AboutHelpTerms from "../AboutHelpTerms/AboutHelpTerms";
import SideBarBookmark from "../BookMark/SideBarBookmark";


import ViewAll from "../ViewBookMark/ViewAll";
import AppContainer from "./AppContainer";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={AppContainer} />
          <Route path="/view-bookmark" component={ViewAll} />
          <Route path="/bookmark/sidebar" component={SideBarBookmark} />
          <Route path="/info/:type" component={AboutHelpTerms} />
        
        
        </Switch>
       
      </Router>
    </div>
  );
};

export default Routes;
