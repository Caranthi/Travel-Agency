using Backend.Contracts.User;
using Backend.Exceptions;
using Backend.Services.Users;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("users")]
public class UserController(IUserServie userServie) : ControllerBase
{
    private readonly IUserServie _userService = userServie;

    [HttpPost("register")]
    public async Task<IActionResult> RegisterUser(UserSaveDto userSaveDto)
    {
        try
        {
            var user = await _userService.CreateUser(userSaveDto.Login, userSaveDto.Password);

            return Ok(new { user.Id, user.Login });
        }
        catch (InvalidModelException e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost("login")]
    public async Task<IActionResult> AuthenticateUser(UserSaveDto userSaveDto)
    {
        var user = await _userService.LogIn(userSaveDto.Login, userSaveDto.Password);

        if (user == null)
        {
            return Unauthorized(new { message = "Invalid login or password!" });
        }

        return Ok(new { user.Id, user.Login });
    }

    [HttpDelete]
    public IActionResult deleteAllUsers()
    {
        _userService.NukeUsers();
        return Ok("DELETED ALL USERS");
    }
}