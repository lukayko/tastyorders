"use client";

import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import styles from "../../styles/AvailableMeals.module.css";

const AvailableMeals = () => {
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const fetchMealsListHandler = async () => {
      setIsError(false);
      setIsLoading(true);

      const response = await fetch(
        "https://tastyorders-8f5e9-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        setIsError(true);
        throw new Error("An error occurred, please try again.");
      }

      const responseData = await response.json();

      const fetchedMeals = [];

      for (const key in responseData) {
        fetchedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setLoadedMeals(fetchedMeals);
      setIsLoading(false);
    };

    fetchMealsListHandler().catch((error) => {
      setIsLoading(false);
      setIsError(error.message);
    });
  }, []);

  const mealsList = loadedMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content;

  if (isLoading) {
    content = (
      <section className={styles.meals__loading}>
        <p>Loading, please wait...</p>
      </section>
    );
  } else if (isError) {
    content(
      <section className={styles.meals__error}>
        <p>{isError}</p>
      </section>
    );
  } else {
    content = (
      <section className={styles.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
  }

  return <>{content}</>;
};

export default AvailableMeals;
