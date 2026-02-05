import {z} from 'zod' ; 

export const createDiseaseSchema = z.object({
    name : z.string()
                .trim()
                .min(3 , 'Disease name must be at least 3 characters')
                .max(100) , 


     crop : z.string()
            .regex(/^[0-9a-fA-F]{24}$/, "Invalid Crop ID format"),


    diseaseType : z.enum(["FUNGAL", "BACTERIAL", "VIRAL", "PEST", "DEFICIENCY"]) ,


    affectedStages: z.array(z.string()),


    symptoms: z.array(z.string().min(3)),

}) ; 

export const updateDiseaseSchema = createDiseaseSchema.partial();