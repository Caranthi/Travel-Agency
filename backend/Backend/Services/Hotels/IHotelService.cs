using Backend.Models;

namespace Backend.Services.Hotels;

public interface IHotelService
{
    Task CreateHotel(Hotel hotel);
    Hotel GetHotel(long id);
    IEnumerable<Hotel> GetAllHotels();
    void DeleteHotel(long id);
    void NukeHotels();
}