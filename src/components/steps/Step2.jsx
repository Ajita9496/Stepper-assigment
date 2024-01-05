import { PLAN } from "../resources/constants";
import { formatCost } from "../resources/Functions";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../../state-management/FormSlice";


export function Step2Form() {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);
  console.log(formState);
  const isYearly = formState.isYearly;

  const handleCheckmarkChange = (e) => {
    dispatch(updateInput({field: e.target.name, payload: e.target.checked}));
  };

  const handleRadioChange = (e) => {
    dispatch(updateInput({field: e.target.name, payload: e.target.value}));
  };

  return (
    <div className="form-container">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <p className="min-height-1 mb-1">
        {formState.errors.plan_id && (
          <span className="text-red font-medium">
            {formState.errors.plan_id}
          </span>
        )}
      </p>
      <div id="select-plan-id">
      <label>
          <input
            type="radio"
            name="plan_id"
            value={PLAN.arcade.value}
            checked={formState.plan_id === PLAN.arcade.value}
            onChange={handleRadioChange}
          />
          <div className="radio-button-container radio-desktop">
            {PLAN.arcade.logoSrc}
            <div>
              <h4>{PLAN.arcade.title}</h4>
              <p>
                {isYearly
                  ? formatCost(PLAN.arcade.cost.yearly, isYearly)
                  : formatCost(PLAN.arcade.cost.monthly, isYearly)}
              </p>
            </div>
          </div>
        </label>
        <label>
          <input
            type="radio"
            name="plan_id"
            value={PLAN.advanced.value}
            checked={formState.plan_id === PLAN.advanced.value}
            onChange={handleRadioChange}
          />
          <div className="radio-button-container radio-desktop">
          {PLAN.advanced.logoSrc}         
             <div>
              <h4>{PLAN.advanced.title}</h4>
              <p>
                {isYearly
                  ? formatCost(PLAN.advanced.cost.yearly, isYearly)
                  : formatCost(PLAN.advanced.cost.monthly, isYearly)}
              </p>
            </div>
          </div>
        </label>
        <label>
          <input
            type="radio"
            name="plan_id"
            value={PLAN.pro.value}
            checked={formState.plan_id === PLAN.pro.value}
            onChange={handleRadioChange}
          />
          <div className="radio-button-container radio-desktop">
          {PLAN.pro.logoSrc}            <div>
              <h4>{PLAN.pro.title}</h4>
              <p>
                {isYearly
                  ? formatCost(PLAN.pro.cost.yearly, isYearly)
                  : formatCost(PLAN.pro.cost.monthly, isYearly)}
              </p>
            </div>
          </div>
        </label>
      </div>
      <div className="switch-row">
        <p className="text-primary">Monthly</p>
        <label className="switch">
      <input
        type="checkbox"
        name="isYearly"
        checked={isYearly}
        onChange={handleCheckmarkChange}
      />
      <span className="slider round"></span>
    </label>
        <p>Yearly</p>
      </div>
    </div>
  );
}
