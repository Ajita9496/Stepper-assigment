import { Step1Form } from "./Step1";
import { Step2Form } from "./Step2";
import { Step3Form } from "./Step3";
import { Step4Form } from "./Step4";
import { Footer } from "./Footer";
import { useDispatch, useSelector } from "react-redux";

function getStepform(step = 1) {
  switch (step) {
    case 1:
      return Step1Form;
    case 2:
      return Step2Form;
    case 3:
      return Step3Form;
    case 4:
      return Step4Form;
    default:
      return Step1Form;
  }
}


export const StepForm = () => {
  const formState = useSelector((state) => state.form);
  const step = formState.currentStep;
  const StepForm = getStepform(step);

  return (
    <>
      <StepForm />
      <Footer/>
    </>
  );
};
