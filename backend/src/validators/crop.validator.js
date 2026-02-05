import {z} from 'zod' ;

 const CropSeasonEnum = z.enum(["RABI", "KHARIF", "ZAID"]);
 const GrowthStageEnum = z.enum(["GERMINATION", "VEGETATIVE", "FLOWERING", "HARVEST"]);

export const createCropSchema = z.object({
    name : z.string()
                    .trim()
                    .min(2 , "Crop name must be at least 2 characters")
                    .max(50 , 'Crop name is too long') ,

    seasons : z.array(CropSeasonEnum)
                                     .min(1 , " At least one growing season is required") , 

    growthStages : z.array(GrowthStageEnum)
                                          .min(1 , 'At least one growth stage must be defined') ,

    regions : z.array(z.string().trim().min(1))
                                            .optional()
                                            .default([])

}) ;

export const updateCropSchema = createCropSchema.partial();
