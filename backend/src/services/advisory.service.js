import Advisory from "../models/advisory.model.js";

export const getAdvisoryForDisease = async ({
  diseaseId,
  severity,
}) => {
 
 
const advisory = await Advisory.findOne({ 
                        disease: diseaseId
                       });

  if (!advisory) {
    return {
      message: "No advisory available for this disease.",
    };
  }

  
  if (severity === "LOW") {

    return {
      level: "LOW",
        recommendations: {
        homeRemedies: advisory.homeRemedies,
        organicMethods: advisory.organicMethods,
        preventiveMeasures: advisory.preventiveMeasures,
      },
      note: "Chemical treatment not recommended at low severity.",
    };

    
  }

  if (severity === "MEDIUM") {
    return {
      level: "MEDIUM",
      recommendations: {
        organicMethods: advisory.organicMethods,
        preventiveMeasures: advisory.preventiveMeasures,
      },
      note: "Monitor crop. Use chemicals only if condition worsens.",
    };
  }

  if (severity === "HIGH") {
    return {
      level: "HIGH",
      recommendations: {
        chemicalSolutions: advisory.chemicalSolutions,
        preventiveMeasures: advisory.preventiveMeasures,
      },
      note: "Immediate action required to prevent yield loss.",
    };
  }

  return {
    message: "Invalid severity level.",
  };
};
