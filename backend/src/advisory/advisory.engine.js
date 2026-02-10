import { tomatoRules } from "./tomato.rules.js";

export const generateAdvisory = ({ crop, disease, severity }) => {

  let rules;

  if (crop === "TOMATO") {
    rules = tomatoRules;
  } else {
    return {
      advisory: {},
      explanation: "No advisory rules available for this crop"
    };
  }

  const diseaseRules = rules[disease];

  if (!diseaseRules || !diseaseRules[severity]) {
    return {
      advisory: {},
      explanation: "No advisory found for given disease and severity"
    };
  }

  let explanation = "";

  if (severity === "LOW") {
    explanation =
      "Low infection detected. Preventive measures are sufficient.";
  } else if (severity === "MEDIUM") {
    explanation =
      "Moderate infection detected. Control measures are recommended.";
  } else {
    explanation =
      "High severity detected (>30% leaf damage). Immediate action required.";
  }

  return {
    advisory: diseaseRules[severity],
    explanation
  };
};
