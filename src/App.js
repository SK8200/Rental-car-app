import "./App.css";
// import NavBar from "./ui-components/NavBar";
import { NewCarsCollection, NavBar, AddCar } from "./ui-components";
import { withAuthenticator, Divider } from "@aws-amplify/ui-react";
import { useState } from "react";
import { DataStore } from "aws-amplify";
import { RentalCar } from "./models";

function App({ user, signOut }) {
  const [addCar, setAddCar] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });

  const saveRentalCar = async () => {
    try {
      await DataStore.save(new RentalCar(addCar));
      setAddCar({
        name: "",
        price: "",
        description: "",
        imageUrl: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addCarOverrides = {
    TextField29766922: {
      value: addCar.name,
      onChange: (e) => {
        setAddCar({ ...addCar, name: e.target.value });
      },
    },

    TextField29766923: {
      value: addCar.price,
      onChange: (e) => {
        setAddCar({ ...addCar, price: e.target.value });
      },
    },
    TextField29766924: {
      value: addCar.description,
      onChange: (e) => {
        setAddCar({ ...addCar, description: e.target.value });
      },
    },
    TextField36462711: {
      value: addCar.imageUrl,
      onChange: (e) => {
        setAddCar({ ...addCar, imageUrl: e.target.value });
      },
    },
    Button: {
      onClick: saveRentalCar,
    },
  };

  const navbarOverrides = {
    "image 1": {
      src: "https://media.istockphoto.com/id/165677538/vector/black-white-1969-chevelle-ss.jpg?s=1024x1024&w=is&k=20&c=zYzQlOq25Z2Zceepws2SfXnhoNLMEjJeaxUd2aNl6QM=",
    },
    image: {
      src: user?.attributes?.profile,
    },
    Button: {
      onClick: signOut,
    },
  };
  return (
    <div className="App">
      <NavBar overrides={navbarOverrides} />
      <header className="App-header">
        <AddCar
          style={{ textAlign: "left", margin: "1rem" }}
          overrides={addCarOverrides}
        />
        <Divider />
        <NewCarsCollection />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
