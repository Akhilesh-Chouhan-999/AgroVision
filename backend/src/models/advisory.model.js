import mongoose from "mongoose";

const advisorySchema = new mongoose.Schema({

    disease: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Disease",
      required: true,
      unique: true,
    },

    homeRemedies: {
      type: [String],
      default: [],
    },

    organicMethods: {
      type: [String],
      default: [],
    },

    chemicalSolutions: {
      type: [String],
      default: [],
    },

    preventiveMeasures: {
      type: [String],
      default: [],
    },
  },
  
  { timestamps: true }
);

const Advisory = mongoose.model("Advisory", advisorySchema);
export default Advisory;
