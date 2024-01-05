import { PLAN, ADD_ONS } from "../resources/constants";

export const formatCost = (number, isYearly = false, plus = false) => {
  const cost = isYearly ? `$${number}/yr` : `$${number}/mo`;
  return `${plus ? "+" : ""}` + cost;
};
export const formatPlanIdSummary = (formState) => {
  const { plan_id, isYearly } = formState;
  if (plan_id != undefined && isYearly != undefined) {
    const timeUnit = isYearly ? "Yearly" : "Monthly";
    return `${PLAN[plan_id].title} (${timeUnit})`;
  }
  return null;
};

const getPlanCost = (plan_id, isYearly) => {
  if (plan_id != undefined && isYearly != undefined) {
    const timeUnit = isYearly ? "yearly" : "monthly";
    const cost = PLAN[plan_id].cost[timeUnit];
    return cost;
  }
  return null;
};

export const formatPlanCostSummary = (formState) => {
  const { plan_id, isYearly } = formState;
  if (plan_id != undefined && isYearly != undefined) {
    const cost = getPlanCost(plan_id, isYearly);
    return formatCost(cost, isYearly);
  }
  return null;
};

export const getAddOnCost = (addOnEnum, isYearly) => {
  const { cost } = ADD_ONS[addOnEnum];
  const perCost = isYearly ? cost.yearly : cost.monthly;
  return perCost;
};

export const getTotalCost = (formState) => {
  const {
    isYearly,
    plan_id,
    add_on_multiplayer,
    add_on_storage,
    add_on_profile,
  } = formState;

  try {
    const planCost = getPlanCost(plan_id, isYearly);
    const multiplayerCost = add_on_multiplayer
      ? getAddOnCost("add_on_multiplayer", isYearly)
      : 0;
    const storageCost = add_on_storage
      ? getAddOnCost("add_on_storage", isYearly)
      : 0;
    const profileCost = add_on_profile
      ? getAddOnCost("add_on_profile", isYearly)
      : 0;
    return planCost + multiplayerCost + storageCost + profileCost;
  } catch (e) {
    console.error(e);
    return null;
  }
};
