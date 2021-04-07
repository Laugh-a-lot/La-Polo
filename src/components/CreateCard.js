import React from "react";
import "../static/cardform.scss";

function CreateCard(props) {
  const handleCardCreation = (e) => {
    e.preventDefault();
    console.log(e.target.image.files)
    const imageLoader = e.target.image.files[0]
    const newlist = props.cardList.concat({
        name: e.target.name.value,
        jobTitle: e.target.jobTitle.value,
        skills: e.target.skills.value,
        image: URL.createObjectURL(imageLoader),
      });
      props.setCardList(newlist);
      console.log(newlist);
      props.setToggler(!props.toggler)
    }
  
  return (
    <>
      <div class="location">
<label for="cbToggleVisibility" class="toggle-label location" role="button">Create a new card here!</label>

  <div class="content-container">
  <input type="checkbox" id="cbToggleVisibility"/>

  <div class="target">
  <div className="section-form">
        <form action="" onSubmit={handleCardCreation}>
          <div className="intro">
            <h1>Create a new card here!</h1>
          </div>
          
          <input
            type="file"
            placeholder="Image Link"
            name="image"
            tabIndex="1"
          />
          <input type="text" placeholder="Name" name="name" tabIndex="2" />
          <input
            type="text"
            placeholder="Job Title"
            name="jobTitle"
            tabIndex="3"
          />
          <textarea
            placeholder="Skills"
            name="skills"
            tabIndex="5"
            rows="3"
          ></textarea>
          <button type="submit" tabIndex="6" placeholder="Create">
            Create
          </button>
        </form>
      </div>
  </div>
        </div>
        <label class="toggle-label location" role="button" onClick={() => props.setToggler(!props.toggler)}>Go zigzag!</label>
  </div>
    </>
  );
}

export default CreateCard;
