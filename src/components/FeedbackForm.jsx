import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");

  const [rating, setRating] = useState(10);

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("There must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log("You have submitted the form");

    const newFeedback = {
      text,
      rating,
    };
    handleAdd(newFeedback);
  };

  return (
    <Card>
      <form onSubmit={handleSumbit}>
        <h2>How you would rate your sevice with us?</h2>
        {/* @todo - rating select component */}

        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
          />
          <Button type={"submit"} isDisabled={btnDisabled} version="primary">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
