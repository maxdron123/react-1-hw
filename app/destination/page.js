"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetCard from "./components/PlanetCard.jsx";
import { planets } from "./components/planets.js";
import { PlanetWishlistItem } from "./components/PlanetWishlistItem.jsx";

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const numberOfPlanets = selectedPlanets.length;
  const handleAddWishlistItem = (name) => {
    if (selectedPlanets.includes(name)) {
      setSelectedPlanets(selectedPlanets.filter((planet) => planet !== name));
    } else {
      setSelectedPlanets([...selectedPlanets, name]);
    }
  };

  const onAddOrRemovePlanet = (name, index) => {
    if (selectedPlanets.some((planet) => planet.name === name)) {
      setSelectedPlanets(
        selectedPlanets.filter((planet) => planet.name !== name)
      );
    } else {
      const planetObj = planets.find((p) => p.name === name);
      if (planetObj) {
        setSelectedPlanets([
          ...selectedPlanets,
          { name: planetObj.name, thumbnail: planetObj.thumbnail },
        ]);
      }
    }
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

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          <AddWishlistItem onAddWishlistItem={handleAddWishlistItem} />
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}

          <h3>Your current wishlist</h3>
          <div>
            {selectedPlanets.length === 0 ? (
              <p>No planets in wishlist</p>
            ) : (
              <ul className={styles.wishlistList}>
                {selectedPlanets.map((planet) => (
                  <PlanetWishlistItem
                    key={planet.name}
                    name={planet.name}
                    onRemove={() => onAddOrRemovePlanet(planet.name)}
                    thumbnail={planet.thumbnail}
                  />
                ))}
              </ul>
            )}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          <div className={styles.planetsGrid}>
            {planets.map((planet, idx) => (
              <PlanetCard
                key={planet.name}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={selectedPlanets.some((p) => p.name === planet.name)}
                onAddOrRemovePlanet={() =>
                  onAddOrRemovePlanet(planet.name, idx)
                }
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Destinations;
