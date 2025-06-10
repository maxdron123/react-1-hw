"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetCard from "./components/PlanetCard.jsx";
const planets = [
  {
    name: "Europa",
    description:
      "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
    thumbnail: "/destination/image-europa.png",
  },
  {
    name: "Mars",
    description:
      "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
    thumbnail: "/destination/image-mars.png",
  },
  {
    name: "Moon",
    description:
      "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
    thumbnail: "/destination/image-moon.png",
  },
  {
    name: "Titan",
    description:
      "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
    thumbnail: "/destination/image-titan.png",
  },
];
export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const numberOfPlanets = selectedPlanets.length;
  const isPlanetSelected = false;
  const onAddOrRemovePlanet = (name, index) => {
    // TASK - React 1 week 2
    // Implement this function
    // If you press the "ADD PLANET" the selected planet should display "SELECTED"
    // And the counter should update, how many planets are selected (numberOfPlanets)
    const onAddOrRemovePlanet = (name) => {
      if (selectedPlanets.includes(name)) {
        setSelectedPlanets(selectedPlanets.filter((planet) => planet !== name));
      } else {
        setSelectedPlanets([...selectedPlanets, name]);
      }
    };
    console.log(
      `You seleceted the following planet: ${name}, with the index of ${index}`
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {/* TASK - React 1 week 2 */}
          {/* Display the number Of selected planets */}
          {/* Display the "no planets" message if it is empty! */}
          <p>
            {numberOfPlanets === 0
              ? "No planets in wishlist :("
              : `You have ${numberOfPlanets} in your wishlist`}
          </p>
          <b>List coming soon after lesson 3!</b>

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>

          <div className={styles.planetCard}>
            <img
              className={styles.planetThumbnail}
              src="/destination/image-europa.png"
              alt=""
            />
            <div className={styles.planetDescription}>
              <h2>EUROPA {isPlanetSelected ? "- SELECTED" : ""}</h2>
              <p>Lorem ipsum...</p>
            </div>
            <button
              className="roundButton"
              onClick={() => onAddOrRemovePlanet("Pluto", 0)}
            >
              {isPlanetSelected ? "REMOVE" : "ADD PLANET"}
            </button>
          </div>
          <div className={styles.planetCard}>
            <img
              className={styles.planetThumbnail}
              src="/destination/image-europa.png"
              alt=""
            />
            <div className={styles.planetDescription}>
              <h2>EUROPA {isPlanetSelected ? "- SELECTED" : ""}</h2>
              <p>Lorem ipsum...</p>
            </div>
            <button
              className="roundButton"
              onClick={() => onAddOrRemovePlanet("Pluto", 0)}
            >
              {isPlanetSelected ? "REMOVE" : "ADD PLANET"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Destinations;
