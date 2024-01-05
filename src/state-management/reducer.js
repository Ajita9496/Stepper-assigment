const initialFormState = {
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
  
  const formReducer = (state = initialFormState, action) => {
    switch (action.type) {
      case "UPDATE_INPUT":
        return {
          ...state,
          [action.field]: action.payload,
        };
      case "SET_ERROR":
        return {
          ...state,
          errors: {
            ...state.errors,
            ...action.payload,
          },
        };
      case "SET_STEP":
        return {
          ...state,
          currentStep: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  