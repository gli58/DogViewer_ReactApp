// Name: Gavin Li
// Course: WEBD-2013 (271014) Web Development 2
// Assignment 5: React
// Date: 2025-07-07

import React, { useState, useEffect } from "react";
import DogCard from "./DogCard";
import BreedSelector from "./BreedSelector";
import "mvp.css";
import "./styles.css";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [breedList, setBreedList] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => setBreedList(Object.keys(data.message)));
    fetchDog();
  }, []);

  const fetchDog = (breed) => {
    const url = breed
      ? `https://dog.ceo/api/breed/${breed}/images/random`
      : "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDogImage(data.message));
  };

  return (
    <main>
      <h1>Dog Viewer</h1>
      <BreedSelector
        breeds={breedList}
        onSelect={(breed) => {
          setSelectedBreed(breed);
          fetchDog(breed);
        }}
      />
      <DogCard image={dogImage} />
      <button onClick={() => fetchDog(selectedBreed)} className="button">
        Fetch New Dog
      </button>
    </main>
  );
}

export default App;
