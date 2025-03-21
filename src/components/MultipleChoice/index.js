import React, { useId, useState } from 'react';
import styles from "./styles.module.css";

export function Option(props) {
  return (
    <li className={styles.option}>
      <input 
        type="radio" 
        name={props.name} 
        id={props.id} 
        value={props.id}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label htmlFor={props.id} className={styles.optionLabel}>
        {props.children}
      </label>
    </li>
  );
}

export function MultipleChoice(props) {
  // Unique ID for this MultipleChoice instance
  const uniqueId = useId();
  // State to store the id of the selected option
  const [selected, setSelected] = useState(null);
  // State to track if the user has submitted the answer
  const [submitted, setSubmitted] = useState(false);

  // Reset submission state whenever a new choice is made
  const handleChange = (e) => {
    setSelected(e.target.value);
    setSubmitted(false);
  };

  // Process the children to assign unique names and ids
  const allOptions = React.Children.toArray(props.children);
  const options = allOptions.map((child, index) => {
    const optionId = `choice-${uniqueId}-${index}`;
    return React.cloneElement(child, {
      name: `choice-${uniqueId}`,
      id: optionId,
      onChange: handleChange,
      checked: selected === optionId,
    });
  });

  // Determine if the selected option is correct
  let isAnswerCorrect = false;
  if (selected) {
    const selectedIndex = allOptions.findIndex(
      (_child, index) => `choice-${uniqueId}-${index}` === selected
    );
    if (selectedIndex !== -1) {
      isAnswerCorrect = allOptions[selectedIndex].props.isCorrect;
    }
  }

  // On submit, mark the answer as submitted to trigger button styling
  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  // Build the button's class name based on submission and correctness
  let buttonClassName = styles.submitButton;
  if (submitted && selected) {
    buttonClassName += ` ${isAnswerCorrect ? styles.correct : styles.incorrect}`;
  }

  // Définir le texte du bouton en fonction de l'état
  const buttonText = submitted ? (isAnswerCorrect ? 'Correct!' : 'Réessayer!') : 'Soumettre';

  return (
    <>
      <ol className={styles.mcqOptions}>
        {options}
      </ol>
      <div>
        <button onClick={handleSubmit} className={buttonClassName}>
          {buttonText}
        </button>
      </div>
    </>
  );
}

export function MultipleChoiceSeparator() {
  return <div className={styles.multipleChoiceSeparator}>
  </div>;
}

export function ManyMultipleChoice(props) {
  const children = React.Children.toArray(props.children);
  return (
    <div>
      <ol>
        {children.map((child, index) => (
          <React.Fragment key={index}>
            <li>
              {child}
            </li>
            {index < children.length - 1 && <MultipleChoiceSeparator />}
          </React.Fragment>
        ))}
      </ol>
    </div>
  );
}
