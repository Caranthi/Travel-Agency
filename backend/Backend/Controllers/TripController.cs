using Backend.Contracts.Trip;
using Backend.Exceptions;
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
    public async Task<IActionResult> CreateTrip(TripSaveDto trip)
    {
        var newTrip = new Trip()
        {
            Title = trip.Title,
            Country = trip.Country,
            Departure = trip.Departure,
            Price = trip.Price,
            Transport = trip.Transport,
            Bargain = trip.Bargain,
            Description = trip.Description,
            TravelTime = trip.TravelTime,
            Hotel = trip.Hotel
        };

        try
        {
            await _tripService.CreateTrip(newTrip);

            return Ok("Successfully added new Trip!");
        }
        catch (InvalidModelException e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet("getAll")]
    public IActionResult GetAllTrips()
    {
        var trips = _tripService.GetAllTrips();
        var tripResponseDtoList = new List<TripResponseDto>();

        foreach (Trip trip in trips)
        {
            tripResponseDtoList.Add(new TripResponseDto(trip.Id,
            trip.Title,
            trip.Country,
            trip.Departure,
            trip.Price,
            trip.Transport,
            trip.Bargain,
            trip.Description,
            trip.TravelTime,
            trip.Hotel
            ));
        }
        return Ok(tripResponseDtoList);
    }

    [HttpGet("get/{id:long}")]
    public IActionResult GetTrip(long id)
    {
        var trip = _tripService.GetTrip(id);
        var tripResponseDto = new TripResponseDto(trip.Id,
            trip.Title,
            trip.Country,
            trip.Departure,
            trip.Price,
            trip.Transport,
            trip.Bargain,
            trip.Description,
            trip.TravelTime,
            trip.Hotel
            );
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