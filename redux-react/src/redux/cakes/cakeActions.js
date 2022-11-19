import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (value = 1) => ({
  type: BUY_CAKE,
  payload: value,
});
