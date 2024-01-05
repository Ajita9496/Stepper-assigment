import React from 'react';
import { ADD_ONS } from '../resources/constants';
import { useDispatch, useSelector } from 'react-redux';
import { updateInput } from '../../state-management/FormSlice';
import { formatCost } from '../resources/Functions';
import checkmark from "../../assets/images/icon-checkmark.svg";

export function Step3Form() {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);
  const isYearly = formState.isYearly;
  const HAS_PLUS = true;

  const handleCheckmarkChange = (e) => {
    dispatch(updateInput({ field: e.target.name, payload: e.target.checked }));
  };

  return (
    <div className="form-container">
      <h2>Pick add-ons</h2>
      <p className="mb-1">Add-ons help enhance your gaming experience</p>
      <div id="select-add-ons">
        <label> 
        <input
            className='pick-checkbox'
            type="checkbox"
            name="add_on_multiplayer"
            checked={formState.add_on_multiplayer}
            onChange={handleCheckmarkChange}
          />
          <div className="radio-button-container">    
          <img className="checkmark-logo" src={checkmark} alt={`add_on_multiplayer logo`} />

            <div>
              <h4>{ADD_ONS.add_on_multiplayer.title}</h4>
              <p>{ADD_ONS.add_on_multiplayer.description}</p>
            </div>
            <div className="checkmark-cost">
              {isYearly
                ? formatCost(
                    ADD_ONS.add_on_multiplayer.cost.yearly,
                    isYearly,
                    HAS_PLUS
                  )
                : formatCost(
                    ADD_ONS.add_on_multiplayer.cost.monthly,
                    isYearly,
                    HAS_PLUS
                  )}
            </div>
          </div>
        </label>
        <label>
          <input
            type="checkbox"
            name="add_on_storage"
            checked={formState.add_on_storage}
            onChange={handleCheckmarkChange}
          />
          <div className="radio-button-container">
          <img className="checkmark-logo" src={checkmark} alt={`add_on_storage logo`} />

            <div>
              <h4>{ADD_ONS.add_on_storage.title}</h4>
              <p>{ADD_ONS.add_on_storage.description}</p>
            </div>
            <div className="checkmark-cost">
              {isYearly
                ? formatCost(
                    ADD_ONS.add_on_storage.cost.yearly,
                    isYearly,
                    HAS_PLUS
                  )
                : formatCost(
                    ADD_ONS.add_on_storage.cost.monthly,
                    isYearly,
                    HAS_PLUS
                  )}
            </div>
          </div>
        </label>
        <label>
          <input
            type="checkbox"
            name="add_on_profile"
            checked={formState.add_on_profile}
            onChange={handleCheckmarkChange}
          />
          <div className="radio-button-container">
          <img className="checkmark-logo" src={checkmark} alt={`add_on_profile logo`} />
            <div>
              <h4>{ADD_ONS.add_on_profile.title}</h4>
              <p>{ADD_ONS.add_on_profile.description}</p>
            </div>
            <div className="checkmark-cost">
              {isYearly
                ? formatCost(
                    ADD_ONS.add_on_profile.cost.yearly,
                    isYearly,
                    HAS_PLUS
                  )
                : formatCost(
                    ADD_ONS.add_on_profile.cost.monthly,
                    isYearly,
                    HAS_PLUS
                  )}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
