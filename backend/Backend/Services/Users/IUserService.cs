using Backend.Models;

namespace Backend.Services.Users;

public interface IUserServie
{
    public Task<User> CreateUser(string login, string password);
    public void NukeUsers();
    public Task<User> LogIn(string login, string password);
}