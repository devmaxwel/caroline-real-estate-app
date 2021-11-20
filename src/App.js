import React from "react";
import { Switch, Route} from 'react-router-dom';
import Layout from "./Components/Layout/Layout";
import HomesData from '../src/Web/Homes/HomesData';
import ContactForm from "./Components/Contact/ContacForm";
import Slider from './Home/Slder';
import Profile from "./Web/RealtorProfile/Profile.jsx";




function App() {
  return (

    <Layout>

    <Switch>

    <Route path='/' exact={true}>

        <Slider />
        
      </Route>  

     <Route path='/realtor-profile' >

         <Profile />
         </Route>

         <Route path='/rentals'>

           <HomesData />
         </Route>

         <Route path='/contact'>

           <ContactForm />
         </Route>

    
    </Switch>
  
    </Layout>
  );
}

export default App;
