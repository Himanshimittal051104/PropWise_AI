from pydantic import BaseModel, Field, validator

class HouseInput(BaseModel):
    location: str = Field(..., min_length=1)
    bhk: int = Field(..., ge=1)
    bathroom: int = Field(..., ge=1)
    total_sqft: float = Field(..., ge=300)

    @validator("location")
    def location_must_not_be_blank(cls, v):
        v = v.strip().lower()
        if not v:
            raise ValueError("location cannot be empty or spaces")
        return v