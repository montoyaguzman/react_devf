import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "Montoya"
    };
  }

  componentDidMount() {
    console.log("En did mount...");
    // Recomendado para peticiones a servicios
    axios
      .get("https://swapi.co/api/people/4")
      .then(response => {
        this.setState({
          nombre: response.data.name
        });
      })
      .catch(err => console.log("Error.."));

    this.advertencia();
  }

  componentWillMount() {
    console.log("En will mount");
  }

  updatedComponent() {
    if (this.state.nombre === "Montoya") {
      return <h3> Cargando... </h3>;
    } else {
      return <h3> Desde la funcion... </h3>;
    }
  }

  advertencia() {
    console.log("Soy una WARN...");
  }

  prueba() {
    axios
      .get("http://localhost:3000/permisos?userID=cpbast93")
      .then(response => {
        response.data;
        console.log(response.data);
      })
      .catch(err => console.log("Error.."));
  }

  render() {
    // Se ejecuta cada que hay cambios de estado
    console.log("En render...");
    return (
      <div>
        <button onClick={this.prueba}>Prueba Axios</button>
        <h1>Home works!</h1>
        <h1>Hola {this.state.nombre} !</h1>
        {this.updatedComponent()}
      </div>
    );
  }
}

export default Home;
