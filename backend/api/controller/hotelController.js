import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js"

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)


    try{
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    }catch(err){
        next(err)
    }
}

export const updateHotel = async (req,res,next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate
        (req.params.id,{ $set: req.body}, {new: true})
        res.status(200).json(updatedHotel)
        //console.log("req.user:", req.user.id); // Check req.user content
        //console.log("admin", req.user.isAdmin); // Check req.params.id
 
    }catch(err){
        next(err)
    }
}

export const deleteHotel = async (req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Accomodation has been Deleted!!")
    }catch(err){
        next(err)
    }
}

export const getHotel = async (req,res,next)=>{
    
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
        next(err)
    }
}

export const getHotels = async (req, res, next) => {
    try {
        const { min, max, limit, ...filters } = req.query; // Extract min, max, and limit
        const minPrice = parseInt(min) || 1;
        const maxPrice = parseInt(max) || 999;
        const resultLimit = parseInt(limit) || 0;

        // Find hotels with filters and price range, then apply limit
        const hotels = await Hotel.find({
            ...filters,
            cheapestPrice: { $gt: minPrice, $lt: maxPrice }
        }).limit(resultLimit);

        //console.log('Limit:', resultLimit); // Log the limit for debugging
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};

export const countByCity = async (req,res,next)=>{
    const cities = req.query.cities.split(",")
   
    try{
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list);
    }catch(err){
        next(err)
    }
}

export const countByType = async (req,res,next)=>{
   try{
        const hotelcount = await Hotel.countDocuments({type:"hotel"});

        res.status(200).json({type:"hotel", count : hotelcount});
    }catch(err){
        next(err)
    }
}


export const getHotelRooms = async (req, res, next) => {
    try {
        // Fetch the hotel by ID to get the list of room IDs
        const hotel = await Hotel.findById(req.params.id);

        if (!hotel) {
            return next(createError(404, "Hotel not found"));
        }

        // Use Promise.all to fetch each room by its ID
        const roomList = await Promise.all(
            hotel.rooms.map(roomId => Room.findById(roomId))
        );

        res.status(200).json(roomList);
    } catch (err) {
        next(err);
    }
};