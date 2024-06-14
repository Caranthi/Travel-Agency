using Backend.Models;

namespace Backend.Services.Trips;

public class TripService : ITripService
{
    private readonly AppDBContext _context;

    public TripService(AppDBContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public async void CreateTrip(TripPreview trip)
    {
        await _context.tripPreviews.AddAsync(trip);
        await _context.SaveChangesAsync();
    }

    public TripPreview GetTrip(long id)
    {
        return _context.tripPreviews.Find(id);
    }

    public IEnumerable<TripPreview> GetAllTrips()
    {
        return _context.tripPreviews.ToList();
    }

    public long DeleteTrip(long id)
    {
        var tripToDelete = _context.tripPreviews.Find(id);
        _context.tripPreviews.RemoveRange(tripToDelete);
        _context.SaveChanges();
        return id;
    }

    public void NukeTrips()
    {
        var allTrips = _context.tripPreviews.ToList();
        _context.tripPreviews.RemoveRange(allTrips);
        _context.SaveChanges();
    }
}
