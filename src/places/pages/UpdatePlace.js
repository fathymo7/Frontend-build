import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world! 2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identefiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identefiedPlace) {
    <h2 className="center">Could not find a place!</h2>;
  }

  const [formState, inputHandler] = useForm({
    title: {
      value: identefiedPlace.title,
      isValid: identefiedPlace.valid,
    },
    description: {
      value: identefiedPlace.description,
      isValid: identefiedPlace.valid,
    },
  });

  return (
    <form>
      <Input
        id="text"
        element="input"
        label="Title"
        type="text"
        validators={VALIDATOR_REQUIRE()}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        valid={formState.inputs.title.isValid}
        value={formState.inputs.title.value}
      />
      <Input
        id="description"
        element="input"
        label="Description"
        validators={VALIDATOR_MINLENGTH(5)}
        errorText="Please enter a valid description (min. 5 characters)"
        onInput={inputHandler}
        valid={formState.inputs.description.isValid}
        value={formState.inputs.description.value}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
