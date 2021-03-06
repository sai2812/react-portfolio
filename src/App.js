import "./App.css";
import { Container, Grid } from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// style={{ backgroundColor: 'red' }}
function App() {
  return (
    <Container className="app_container">
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main_content container_shadow">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          {/* <Button /> */}
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
