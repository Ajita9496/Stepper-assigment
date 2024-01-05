import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentStep: 1,
  name: "",
  email: "",
  phone: "",
  isYearly: false,
  plan_id: undefined,
  add_on_multiplayer: false,
  add_on_storage: false,
  add_on_profile: false,
  errors: {
    name: undefined,
    email: undefined,
    phone: undefined,
    plan_id: undefined,
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { field, payload } = action.payload;
      state[field] = payload;
    },
    setError: (state, action) => {
      state.errors = { ...state.errors, ...action.payload };
    },
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
    resetForm: () => {
      return initialState;
    },

    saveFormData: (state) => {
      const formDataArray = JSON.parse(localStorage.getItem("formData")) || [];
      formDataArray.push(state);
      localStorage.setItem("formData", JSON.stringify(formDataArray));
    },
  },
});

export const { updateInput, setError,saveFormData, setStep, resetForm } = formSlice.actions;
export default formSlice.reducer;