using Backend.Exceptions;
using Backend.Models;

namespace Backend.Services.Trips;

public class TripService : ITripService
{
    private readonly AppDBContext _context;

    public TripService(AppDBContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public async Task CreateTrip(Trip trip)
    {
        if (Validator.ValidateTrip(trip))
        {
            await _context.Trips.AddAsync(trip);
            await _context.SaveChangesAsync();
        }
        else
        {
            throw new InvalidModelException("Trip is invalid!");
        }
    }

    public Trip GetTrip(long id)
    {
        return _context.Trips.Find(id);
    }

    public IEnumerable<Trip> GetAllTrips()
    {
        return _context.Trips.ToList();
    }

    public long DeleteTrip(long id)
    {
        var tripToDelete = _context.Trips.Find(id);
        _context.Trips.RemoveRange(tripToDelete);
        _context.SaveChanges();
        return id;
    }

    public void NukeTrips()
    {
        var allTrips = _context.Trips.ToList();
        _context.Trips.RemoveRange(allTrips);
        _context.SaveChanges();
    }
}
