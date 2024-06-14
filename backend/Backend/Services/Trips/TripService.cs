using Backend.Models;

namespace Backend.Services.Trips;

public class TripService : ITripService
{
    private readonly AppDBContext _context;
    private readonly Dictionary<long, TripPreview> tmpTrips = [];

    public TripService(AppDBContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public async void CreateTrip(TripPreview trip)
    {
        await _context.tripPreviews.AddAsync(trip);
        await _context.SaveChangesAsync();
        // tmpTrips.Add(trip.Id, trip);
    }

    public TripPreview GetTrip(long id)
    {
        return tmpTrips[id];
    }

    public IEnumerable<TripPreview> GetAllTrips()
    {
        return _context.tripPreviews.ToList();
    }

    public long DeleteTrip(long id)
    {
        tmpTrips.Remove(id);
        return id;
    }

    public void NukeTrips()
    {
        var allTrips = _context.tripPreviews.ToList();
        _context.tripPreviews.RemoveRange(allTrips);
        _context.SaveChanges();
    }
}
