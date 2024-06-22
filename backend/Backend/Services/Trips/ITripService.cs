using Backend.Models;

namespace Backend.Services.Trips;

public interface ITripService
{
    Task CreateTrip(Trip trip);
    IEnumerable<Trip> GetAllTrips();
    Trip GetTrip(long id);
    long DeleteTrip(long id);
    void NukeTrips();
}