import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Navigation from "./components/navigation"
import Services from "./components/services";
import ServiceDetails from "./components/serviceDetails";

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Services} />
                <Route exact path="/:id/details" component={ServiceDetails}>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
