using Backend.Contracts.Trip;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController] // [] = @
public class TripController : ControllerBase
{
    [HttpPost("/trip")]
    // IActionResult = Response<Object>
    public IActionResult CreateTrip(TripSaveDto trip)
    {
        return Ok(trip);
    }

    [HttpGet("/trip/{id:long}")]
    public IActionResult GetTrip(long id)
    {
        return Ok(id);
    }
}