import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  addSharp,
  checkboxSharp,
  createSharp,
  logOutSharp,
  readerOutline,
  searchCircleSharp,
  searchSharp,
  settingsSharp,
  trailSign,
} from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/Login";
import Selection from "./pages/Selection";
import Inspection from "./pages/Inspection";
import Assign from "./pages/Assign";
import Repairs from "./pages/Repairs";
import Reports from "./pages/Reports";
import Test from "./pages/test";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  const hideForMechs = () => {
    if (isAuthenticated && user.name === "Rukshan") {
      return true;
    } else return false;
  };

  return (
    <>
      <React.Fragment>
        <IonApp>
          <IonMenu side="start" menuId="first" contentId="premiere">
            <IonHeader>
              <IonToolbar color="danger">
                <IonTitle>
                  <h2>MARTIS</h2>
                </IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem hidden={hideForMechs()}>
                  <IonIcon slot="start" icon={trailSign} />
                  Create Asset
                </IonItem>
                <IonItem hidden={hideForMechs()}>
                  <IonIcon slot="start" icon={addSharp} />
                  Create Test
                </IonItem>
                <IonItem href="selection">
                  <IonIcon slot="start" icon={checkboxSharp} />
                  Select Test
                </IonItem>
                <IonItem href="/assign" hidden={hideForMechs()}>
                  <IonIcon slot="start" icon={createSharp} />
                  Assign Test
                </IonItem>
                <IonItem href="/inspection">
                  <IonIcon slot="start" icon={searchSharp} />
                  Search Inspections
                </IonItem>
                <IonItem href="/repairs">
                  <IonIcon slot="start" icon={searchCircleSharp} />
                  Report Repairs
                </IonItem>
                <IonItem href="/test">
                  <IonIcon slot="start" icon={readerOutline} />
                  Create Test
                </IonItem>
                <IonItem href="/reports" /*hidden={hideForMechs()}*/>
                  <IonIcon slot="start" icon={addSharp} />
                  View Reports
                </IonItem>
                <IonItem>
                  <IonIcon slot="start" icon={settingsSharp} />
                  Settings
                </IonItem>
                <IonItem onClick={() => logout()}>
                  <IonIcon slot="start" icon={logOutSharp} />
                  Logout
                </IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
          <IonReactRouter>
            <IonRouterOutlet id="premiere">
              <Route path="/login" component={Login} />
              <Route path="/selection" component={Selection} />
              <Route path="/inspection" component={Inspection} />
              <Route path="/assign" component={Assign} />
              <Route path="/repairs" component={Repairs} />
              <Route path="/test" component={Test} />
              <Route path="/reports" component={Reports} />

              <Redirect exact from="/" to="/login" />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </React.Fragment>
    </>
  );
};

export default App;
