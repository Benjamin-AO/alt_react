import React from "react";
import CardProfile from "./components/card component/CardProfile";



// function CarList () {
//   <li>

//   </li>
// }

const car = ['ford', 'Bmw', 'toyota', 'Honda'];
const CarListings = car.map(item => {
  return <li key={item}> {item} </li>
});

const App = () => {
  return (
    <div className="blue">
      <CardProfile />
    </div>
  );
}

export default App;