import React, { useState } from "react";
import "./App.css";
import Card from "./components/Cards";
import CardForm from "./components/CreateCard";

function App() {
  const cardData = [
    {
      name: "Satyam Kumar",
      jobTitle: "LA POLO Intern",
      skills: "Full Stack Web Developer",
      image:
        "https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
    },
    {
      name: "Mr. Hr",
      jobTitle: "Hr",
      skills: "Getting Things Done",
      image:
        "https://images.unsplash.com/photo-1616179054043-7570cd0d47d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
  ];
  const [cardList, setCardList] = useState(cardData);
  const [toggler, setToggler] = useState(true)
  const renderCard = (card, index) => {
    return (
      <Card
        name={card.name}
        jobTitle={card.jobTitle}
        skills={card.skills}
        image={card.image}
        key={index}
        isOdd={toggler ?(index%2===1 ? true:false) :(index%2===1? false: true) }
      />
    );
  };

  return (
    <div className="App">
      <CardForm
        cardData={cardData}
        cardList={cardList}
        setCardList={setCardList}
        toggler={toggler}
        setToggler={setToggler}
      />
      {cardList.map(renderCard)}
    </div>
  );
}

export default App;
