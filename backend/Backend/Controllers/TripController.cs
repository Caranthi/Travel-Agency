using Backend.Contracts.Trip;
using Backend.Models;
using Backend.Services.Trips;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController] // [] = @
[Route("trips")]
public class TripController(ITripService tripService) : ControllerBase
{
    private readonly ITripService _tripService = tripService;

    [HttpPost()]
    // IActionResult = Response<Object>
    public IActionResult CreateTrip(TripSaveDto trip)
    {
        var newTrip = new Trip(trip.Id, trip.Title, trip.Departure, trip.Price, trip.Transport);
        _tripService.CreateTrip(newTrip);

        var tripResponseDto = new TripResponseDto(newTrip.Id, newTrip.Title, newTrip.Departure, newTrip.Price, newTrip.Transport);
        return Ok(tripResponseDto);
    }

    [HttpGet("getAll")]
    public IActionResult GetAllTrips()
    {
        var trips = _tripService.GetAllTrips();
        var tripResponseDtoList = new List<TripResponseDto>();

        foreach (Trip trip in trips)
        {
            tripResponseDtoList.Add(new TripResponseDto(trip.Id, trip.Title, trip.Departure, trip.Price, trip.Transport));
        }
        return Ok(tripResponseDtoList);
    }

    [HttpGet("get/{id:long}")]
    public IActionResult GetTrip(long id)
    {
        var trip = _tripService.GetTrip(id);
        var tripResponseDto = new TripResponseDto(trip.Id, trip.Title, trip.Departure, trip.Price, trip.Transport);
        return Ok(tripResponseDto);
    }

    [HttpDelete("{id:long}")]
    public IActionResult DeleteTrip(long id)
    {
        return Ok(_tripService.DeleteTrip(id));
    }
}