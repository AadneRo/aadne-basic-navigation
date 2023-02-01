import { Step } from "../../types";
import { useState } from "react";
import { Button } from "@mui/material";

function DirectionDescription({ steps }: { steps: Step[] }) {
  console.log(steps);
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function onNextStepClick() {
    if (index === steps.length - 1) setIsFinished(true);

    setIndex(index + 1);
  }

  function onBackStepClick() {
    setIndex(index - 1);
  }

  function getText() {
    if (isFinished) return "You have arrived at your destination 🎉";

    const currentStep = steps[index];

    return `${currentStep.instruction} in ${Math.round(
      currentStep.distance
    )} meters`;
  }

  return (
    <div className="direction-guide-container">
      <p>{getText()}</p>
      <div className="direction-guide-buttons">
        <Button disabled={index === 0} onClick={onBackStepClick}>
          Back
        </Button>
        <Button disabled={index === steps.length} onClick={onNextStepClick}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default DirectionDescription;
