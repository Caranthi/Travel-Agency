using Backend.Models;

namespace Backend.Services.Trips;

public interface ITripService
{
    void CreateTrip(Trip trip);
    IEnumerable<Trip> GetAllTrips();
    public Trip GetTrip(long id);
    public long DeleteTrip(long id);
    public void NukeTrips();
}