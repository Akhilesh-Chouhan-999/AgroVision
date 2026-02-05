import os 

ALLOWED_CROPS = ['SOYABEAN' , 'WHEAT' , 'PADDY' , 'COTTON']


def validate_request(data : dict) :
    if 'image_path' not in data :
        return False , 'Image_Path is required'
    
    if 'crop' not in data :
        return False , 'Crop is required' 
    
    if not isinstance(data['image_path'] , str) :
        return False , 'image_path must be a string'
    
    if not os.path.exists(data['image_path']) :
        return False , 'image file does not exit'
    
    if data['crop'] not in ALLOWED_CROPS :
        return False , f'Crop must be one of {ALLOWED_CROPS}'
    

    return True , None 