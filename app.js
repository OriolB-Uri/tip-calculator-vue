// Tu código aquí.

import {
    createApp,
    ref,
  } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
  
  createApp({
    setup() {
      const billAmount = ref("");
      const percentageTip = ref("");
      const tipAmount = ref("");
      const totalAmount = ref("");

      const calculateTip = () => {
        tipAmount.value = (billAmount.value * percentageTip.value) / 100;
        totalAmount.value = billAmount.value + tipAmount.value;
      }
  
      return { calculateTip, billAmount, percentageTip, tipAmount, totalAmount };
    },
  }).mount("#app");
  