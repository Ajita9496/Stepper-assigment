import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../state-management/FormSlice";

const STEPS = {
  step1: {
    number: 1,
    title: "STEP 1",
    description: "YOUR INFO",
  },
  step2: {
    number: 2,
    title: "STEP 2",
    description: "SELECT PLAN",
  },
  step3: {
    number: 3,
    title: "STEP 3",
    description: "ADD-ONS",
  },
  step4: {
    number: 4,
    title: "STEP 4",
    description: "SUMMARY",
  },
};

const STEPS_ARRAY = [STEPS.step1, STEPS.step2, STEPS.step3, STEPS.step4];
const MAX_STEP = STEPS_ARRAY.length;

export function Sidebar() {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);
  const activeStep = Math.min(formState.currentStep, MAX_STEP);

  const handleClick = (stepNumber) => {
    if (stepNumber <= activeStep) {
      dispatch(setStep(stepNumber));
    }  };

  return (
    <div className="step-container">
      {STEPS_ARRAY.map((step) => {
        const classString = step.number === activeStep ? "step active" : "step";
        return (
          <div key={step.number} className="flex gap-1 desktop-sidebar">
            <div
              key={step.number}
              className={classString}
              onClick={() => handleClick(step.number)}
            >
              {step.number}
            </div>
            <div className="step-title flex-col">
              <p>{step.title}</p>
              <p className="text-white font-semibold">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
