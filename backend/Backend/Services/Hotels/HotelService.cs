using Backend.Exceptions;
using Backend.Models;

namespace Backend.Services.Hotels;

public class HotelService : IHotelService
{
    private readonly AppDBContext _context;
    public HotelService(AppDBContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public async Task CreateHotel(Hotel hotel)
    {
        if (Validator.ValidateHotel(hotel))
        {
            await _context.Hotels.AddAsync(hotel);
            await _context.SaveChangesAsync();
        }
        else
        {
            throw new InvalidModelException("Hotel is not valid!");
        }
    }
    public Hotel GetHotel(long id)
    {
        return _context.Hotels.Find(id);
    }
    public IEnumerable<Hotel> GetAllHotels()
    {
        return _context.Hotels.ToList();
    }
    public void DeleteHotel(long id)
    {
        var hotelToDelete = _context.Hotels.Find(id);
        _context.Hotels.RemoveRange(hotelToDelete);
        _context.SaveChanges();
    }
    public void NukeHotels()
    {
        var allHotels = _context.Hotels.ToList();
        _context.Hotels.RemoveRange(allHotels);
    }
}