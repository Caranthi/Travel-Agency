using Backend.Models;

namespace Backend.Services.Trips;

public class TripService : ITripService
{
    // TODO: Change to database
    private readonly Dictionary<long, Trip> tmpTrips = [];

    public void CreateTrip(Trip trip)
    {
        tmpTrips.Add(trip.Id, trip);
    }

    public Trip GetTrip(long id)
    {
        return tmpTrips[id];
    }

    public IEnumerable<Trip> GetAllTrips()
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
