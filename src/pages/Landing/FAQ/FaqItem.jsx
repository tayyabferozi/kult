import React from "react";
import $ from "jquery";

const FaqItem = ({ question, answer }) => {
  const toggleShow = (e) => {
    const $this = $(e.target);

    $this.siblings(".answer").slideToggle();
    $this.parents(".faq-item").toggleClass("active");
  };

  return (
    <div className="faq-item">
      <h5 className="question" onClick={toggleShow}>
        {question}
      </h5>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default FaqItem;
