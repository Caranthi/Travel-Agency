using Backend.Contracts.Hotel;
using Backend.Exceptions;
using Backend.Models;
using Backend.Services.Hotels;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("hotels")]
public class HotelController(IHotelService hotelService) : ControllerBase
{
    private readonly IHotelService _hotelService = hotelService;

    [HttpPost]
    public async Task<IActionResult> CreateHotel(HotelSaveDto dto)
    {
        var newHotel = new Hotel()
        {
            Name = dto.Name,
            Country = dto.Country,
            City = dto.City,
            Capacity = dto.Capacity,
            Price = dto.Price,
            Stars = dto.Stars
        };

        try
        {
            await _hotelService.CreateHotel(newHotel);

            return Ok("Successfully added new hotel!");
        }
        catch (InvalidModelException e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet("get/{id:long}")]
    public IActionResult GetHotel(long id)
    {
        var hotel = _hotelService.GetHotel(id);
        var hotelResponseDto = new HotelResponseDto(
        hotel.Id,
        hotel.Name,
        hotel.Country,
        hotel.City,
        hotel.Capacity,
        hotel.Price,
        hotel.Stars
        );

        return Ok(hotelResponseDto);
    }

    [HttpGet("getAll")]
    public IActionResult GetAllHotels()
    {
        var hotels = _hotelService.GetAllHotels();
        var hotelResponseDtoList = new List<HotelResponseDto>();

        foreach (Hotel hotel in hotels)
        {
            hotelResponseDtoList.Add(new HotelResponseDto(
                hotel.Id,
                hotel.Name,
                hotel.Country,
                hotel.City,
                hotel.Capacity,
                hotel.Price,
                hotel.Stars
            ));
        }
        return Ok(hotelResponseDtoList);
    }

    [HttpDelete("{id:long}")]
    public IActionResult DeleteHotel(long id)
    {
        _hotelService.DeleteHotel(id);
        return Ok("Deleted hotel with id: " + id);
    }

    [HttpDelete("nuke")]
    public IActionResult DeleteAllHotels()
    {
        _hotelService.NukeHotels();
        return Ok("DELETED ALL HOTELS");
    }
}