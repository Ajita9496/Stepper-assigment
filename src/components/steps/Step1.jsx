import { useDispatch, useSelector } from "react-redux";
import { updateInput, } from "../../state-management/FormSlice";

export function Step1Form() {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);

  const handleTextChange = (e) => {
    dispatch(updateInput({ field: e.target.name, payload: e.target.value }));
  };
  

  return (
    <div className="form-container">
      <h2>Personal info</h2>
      <p className="mb-1">
        Please provide your name, email, address, and phone number
      </p>
      <div className="input-container">
      <label className="flex-between">
        Name
        {formState.errors.name && <span className="text-red font-medium">{formState.errors.name}</span>}
      </label>
      <input 
      type="text"
      name="name"
      placeholder="e.g. Stephen King"
      onChange={(e) => handleTextChange(e)}
      value={formState.name}
      className={formState.errors.name ? "border-red" : ""} />
    </div>
    <div className="input-container">
      <label className="flex-between">
        Email Address
        {formState.errors.email && <span className="text-red font-medium">{formState.errors.email}</span>}
      </label>
      <input 
      type="email"
      name="email"
      placeholder="e.g. stephenking@lorem.com"
      onChange={(e) => handleTextChange(e)}
      value={formState.email}
      className={formState.errors.email ? "border-red" : ""} />
    </div>
    <div className="input-container">
      <label className="flex-between">
      Phone Number
        {formState.errors.phone && <span className="text-red font-medium">{formState.errors.phone}</span>}
      </label>
      <input 
      type="tel"
      name="phone"
      placeholder="e.g. +919876543210"
      onChange={(e) => handleTextChange(e)}
      value={formState.phone}
      className={formState.errors.phone ? "border-red" : ""} />
    </div>
    </div>
  );
}
