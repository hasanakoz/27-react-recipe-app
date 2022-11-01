import React from "react";
import { Button, Card, Header, MainContainer, Image } from "./Cards.style";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../assets/default-image.jpg";

const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  console.log(recipes);
  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => {
        return (
          <Card key={index}>
            <Header>{recipe.label}</Header>
            <Image src={recipe.image || defaultImage} alt="" />
            <Button
              onClick={() =>
                navigate("detail", { state: recipe, replace: false })
              }
            >
              View More
            </Button>
          </Card>
        );
      })}
    </MainContainer>
  );
};

export default Cards;
