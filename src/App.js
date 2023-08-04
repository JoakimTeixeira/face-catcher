import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import FaceRecognition from "./components/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Rank from "./components/Rank";
import Register from "./components/Register";
import SignIn from "./components/SignIn";

const particlesOptions = {
  particles: {
    links: {
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    number: {
      value: 100,
      density: {
        enable: true,
        area: 700,
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  route: "signIn",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

const App = () => {
  const [userState, setUserState] = useState(initialState);

  const loadUser = useCallback((data) => {
    setUserState((prevState) => ({
      ...prevState,
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    }));
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const calculateFaceLocation = useCallback((data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  }, []);

  const displayFaceBox = useCallback((box) => {
    setUserState((prevState) => ({
      ...prevState,
      box: box,
    }));
  }, []);

  const onInputChange = useCallback((event) => {
    setUserState((prevState) => ({
      ...prevState,
      input: event.target.value,
    }));
  }, []);

  const onPictureSubmit = useCallback(() => {
    setUserState((prevState) => ({
      ...prevState,
      imageUrl: prevState.input,
    }));

    fetch("https://face-catcher-api.herokuapp.com/imageUrl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: userState.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch("https://face-catcher-api.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: userState.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              setUserState((prevState) => ({
                ...prevState,
                user: { ...prevState.user, entries: count },
              }));
            })
            .catch((err) => console.log(err));
        }
        displayFaceBox(calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  }, [calculateFaceLocation, displayFaceBox]);

  const onRouteChange = useCallback((route) => {
    if (route === "signOut") {
      setUserState(initialState);
    } else if (route === "home") {
      setUserState((prevState) => ({
        ...prevState,
        isSignedIn: true,
      }));
    }

    setUserState((prevState) => ({
      ...prevState,
      route: route,
    }));
  }, []);

  const { isSignedIn, imageUrl, route, box } = userState;

  return (
    <div className="app">
      <Particles
        style={{
          width: "100%",
        }}
        className="particles"
        options={particlesOptions}
        init={particlesInit}
      />
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      {route === "home" ? (
        <>
          <Logo />
          <Rank name={userState.user.name} entries={userState.user.entries} />
          <ImageLinkForm onInputChange={onInputChange} onPictureSubmit={onPictureSubmit} />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </>
      ) : route === "signIn" ? (
        <SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;
