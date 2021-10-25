import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking/Booking';
import ManageServices from './Pages/Booking/Booking/ManageServices';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivetRoute from './Pages/Login/PrivetRoute/PrivetRoute';
import Notfound from './Pages/NotFound/Notfound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
          <Switch>   
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivetRoute>
            <Route path="/addservice">
              <AddService></AddService>
            </Route>
            <Route path='/manageservice'>
              <ManageServices></ManageServices>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
