using Backend.Models;

namespace Backend.Services.Trips;

public interface ITripService
{
    void CreateTrip(TripPreview trip);
    IEnumerable<TripPreview> GetAllTrips();
    public TripPreview GetTrip(long id);
    public long DeleteTrip(long id);
    public void NukeTrips();
}