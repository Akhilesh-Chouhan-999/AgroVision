import random

def predict_disease(image_path : str , crop : str) : 

    disease_map = {
        'SOYABEAN' : 'Yellow Mosaic Virus' ,
        'WHEAT' : 'Leaf Rust' ,
        'PADDY' : 'Blast Disease' ,
        'COTTON' : 'BollWorm'
    }

    confidence = round(random.uniform(0.7 , 0.95) , 2) 


    severity = (
        'HIGH' if confidence > 0.85
        else 'MEDIUM' if confidence > 0.75 
        else 'LOW'
    )

    return {
        'label': disease_map.get(crop, 'Unknown disease'),
        'confidence': confidence ,
        'severity' : severity
    }