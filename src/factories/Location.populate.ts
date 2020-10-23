import { Location } from "../entities/Location";
import { LocationData } from "../../data/Location.data";

const LocationPopulate = async (): Promise<void> => {
    LocationData.map(async (item) => {
        const location = Location.create(
            new Location(item.location, item.description)
        );
        await location.save();
    });
};

export default LocationPopulate;