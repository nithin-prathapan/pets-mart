import React from "react";
import PetCard from "./PetCard";
export const PetData = [
  {
    id: "111",
    name: "Purrsloud",
    species: "Cat",
    favFoods: "wet foods",
    birthYear: 2016,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
  },
  {
    id: "7",
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg",
  },
  {
    id: "77",
    name: "Meowsalot",
    species: "Cat",
    favFoods: "Tuna",
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
  },
  {
    id: "55",
    name: "Purrsloud",
    species: "Cat",
    favFoods: "wet foods",
    birthYear: 2016,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
  },
  {
    id: "66",
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg",
  },
  {
    id: "5555",
    name: "Meowsalot",
    species: "Cat",
    favFoods: "Tuna",
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
  },
  {
    id: "56454",
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg",
  },
  {
    id: "54545",
    name: "Meowsalot",
    species: "Cat",
    favFoods: "Tuna",
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
  },
];
const Petlist = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-x-4 sm:gap-1">
      {PetData.map((pet, index) => (
        <PetCard pet={pet} key={index} />
      ))}
    </div>
  );
};

export default Petlist;