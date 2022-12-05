import React from "react";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section/Section";
import FaqItem from "./FaqItem";

const items = [
  {
    question: "How can one join Seedify IGOs and INOs?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. , but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "What does IGO and INO mean?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. , but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "What are the utilities of SFUND?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. , but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const FAQ = () => {
  return (
    <Section id="faq">
      <div className="main">
        <GridContainer>
          <div className="col-lg-6">
            <div className="left">
              <h2>
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="mt-5">
                Lorem Ipsum is simply dummy text of the printing & typesetting
                industry lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            {items.map((el, idx) => {
              return <FaqItem question={el.question} answer={el.answer} />;
            })}
          </div>
        </GridContainer>
      </div>
    </Section>
  );
};

export default FAQ;
