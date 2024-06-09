using Backend.Models;

namespace Backend.Services.Trips;

public class TripService : ITripService
{
    // TODO: Change to database
    private readonly Dictionary<long, TripPreview> tmpTrips = [];

    public void CreateTrip(TripPreview trip)
    {
        tmpTrips.Add(trip.Id, trip);
    }

    public TripPreview GetTrip(long id)
    {
        return tmpTrips[id];
    }

    public IEnumerable<TripPreview> GetAllTrips()
    {
        return tmpTrips.Values;
    }

    public long DeleteTrip(long id)
    {
        tmpTrips.Remove(id);
        return id;
    }

    public void NukeTrips()
    {
        tmpTrips.Clear();
    }
}
