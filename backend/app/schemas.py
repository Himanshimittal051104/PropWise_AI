from pydantic import BaseModel
class HouseInput(BaseModel):
    location: str
    bhk: int
    bathroom: int
    total_sqft: float