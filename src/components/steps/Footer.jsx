import { onValidate } from "../resources/validations";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setError, setStep, saveFormData } from "../../state-management/FormSlice";

export const Footer = () => {

  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);
  const currentStep = formState.currentStep;


  const updateError = (errors) => {
    dispatch(setError(errors))
  };

  const setSteps = (step) => {
    dispatch( setStep(step));
  }

  const onNextStep = () => {
    const { errors, hasError } = onValidate(currentStep, formState);
    updateError(errors);
  
    if (!hasError) {
      if (currentStep === 4) {
        alert("Form submitted successfully!");

        dispatch(saveFormData(formState));

        dispatch(resetForm());

        dispatch(setStep(1));
      } else {
        setSteps(Math.min(currentStep + 1, 4));
      }
    }
  };
  
  const onBackStep = () => {
    setSteps(Math.max(currentStep - 1, 1));
  };


  if (currentStep <= 4) {
    return (
      <footer className="footer pr-2">
         <>
      <button
        className={currentStep === 4 ? "bg-color-secondary" : undefined}
        type="submit"
        onClick={onNextStep}
      >
        {currentStep < 4 ? "Next Step" : "Confirm"}
      </button>
      {currentStep > 1 && (
        <button className="back-button" onClick={onBackStep}>
          Go Back
        </button>
      )}
    </>
      </footer>
    );
  }

  return undefined;
};