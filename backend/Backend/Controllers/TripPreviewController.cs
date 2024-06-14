using Backend.Contracts.TripPreview;
using Backend.Models;
using Backend.Services.Trips;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController] // [] = @
[Route("trips")]
public class TripPreviewController(ITripService tripService) : ControllerBase
{
    private readonly ITripService _tripService = tripService;

    [HttpPost()]
    // IActionResult = Response<Object>
    public IActionResult CreateTrip(TripSaveDto trip)
    {
        var newTrip = new TripPreview()
        {
            Title = trip.Title,
            Location = trip.Location,
            Departure = trip.Departure,
            Price = trip.Price,
            Transport = trip.Transport,
            Bargain = trip.Bargain
        };
        _tripService.CreateTrip(newTrip);

        return Ok("Successfully added new Trip!");
    }

    [HttpGet("getAll")]
    public IActionResult GetAllTrips()
    {
        var trips = _tripService.GetAllTrips();
        var tripResponseDtoList = new List<TripPreviewResponseDto>();

        foreach (TripPreview trip in trips)
        {
            tripResponseDtoList.Add(new TripPreviewResponseDto(trip.Id, trip.Title, trip.Location, trip.Departure, trip.Price, trip.Transport, trip.Bargain));
        }
        return Ok(tripResponseDtoList);
    }

    [HttpGet("get/{id:long}")]
    public IActionResult GetTrip(long id)
    {
        var trip = _tripService.GetTrip(id);
        var tripResponseDto = new TripPreviewResponseDto(trip.Id, trip.Title, trip.Location, trip.Departure, trip.Price, trip.Transport, trip.Bargain);
        return Ok(tripResponseDto);
    }

    [HttpDelete("{id:long}")]
    public IActionResult DeleteTrip(long id)
    {
        return Ok(_tripService.DeleteTrip(id));
    }

    [HttpDelete("nuke")]
    public IActionResult DeleteAllTrips()
    {
        _tripService.NukeTrips();
        return Ok("DELETED ALL TRIPS");
    }
}