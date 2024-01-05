import React, { useEffect } from "react";
import {
  formatCost,
  formatPlanIdSummary,
  formatPlanCostSummary,
  getTotalCost,
} from "../resources/Functions";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../state-management/FormSlice";
import { ADD_ONS } from "../resources/constants";
import { getAddOnCost, formatCost as formatAddOnCost } from "../resources/Functions";

export function Step4Form() {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);
  const planIdSummary = formatPlanIdSummary(formState);
  const planCost = formatPlanCostSummary(formState);
  const { add_on_multiplayer, add_on_storage, add_on_profile } = formState;
  const totalCost = formatCost(
    getTotalCost(formState),
    formState.isYearly,
    true
  );

  const onChangePlan = () => {
    setStepNumber(2);
  };

  const setStepNumber = (step) => {
    dispatch(setStep(step));
  };

  useEffect(() => {
    if (planIdSummary === null) {
      console.log("redirecting: user has not selected planId or isYearly yet ");
      setStepNumber(2);
    }
  }, [planIdSummary]);

  return (
    <div className="form-container">
      <h2>Finishing up</h2>
      <p className="mb-1">Double-check everything looks OK before confirming</p>
      <div className="summary">
        <div className="summary-row border-b">
          <div>
            <p className="text-primary font-semibold">{planIdSummary}</p>
            <p className="internal-link" onClick={() => onChangePlan()}>
              change
            </p>
          </div>
          <div className="text-primary font-semibold">{planCost}</div>
        </div>

        {add_on_multiplayer && (
          <div className="summary-row">
            <p>{ADD_ONS.add_on_multiplayer.title}</p>
            <div className="summary-cost">
              {formatAddOnCost(
                getAddOnCost("add_on_multiplayer", formState.isYearly),
                formState.isYearly,
                true
              )}
            </div>
          </div>
        )}

        {add_on_storage && (
          <div className="summary-row">
            <p>{ADD_ONS.add_on_storage.title}</p>
            <div className="summary-cost">
              {formatAddOnCost(
                getAddOnCost("add_on_storage", formState.isYearly),
                formState.isYearly,
                true
              )}
            </div>
          </div>
        )}

        {add_on_profile && (
          <div className="summary-row">
            <p>{ADD_ONS.add_on_profile.title}</p>
            <div className="summary-cost">
              {formatAddOnCost(
                getAddOnCost("add_on_profile", formState.isYearly),
                formState.isYearly,
                true
              )}
            </div>
          </div>
        )}
      </div>
      <div className="summary-row">
        <p className="font-semibold">{`Total (per ${
          formState.isYearly ? "year" : "month"
        })`}</p>
        <p className="text-secondary font-semibold">{totalCost}</p>
      </div>
    </div>
  );
}
