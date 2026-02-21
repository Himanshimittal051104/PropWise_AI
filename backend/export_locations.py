from app.model import columns
import json

locations = []

for col in columns:
    if col.startswith("location_"):
        loc = col.replace("location_", "").replace("_", " ").title()
        locations.append(loc)

locations = sorted(locations)

with open("../frontend/constants/location.js", "w") as f:
    f.write("const locations = ")
    f.write(json.dumps(locations, indent=2))
    f.write(";\n\nexport default locations;")

print("✅ locations.js generated")