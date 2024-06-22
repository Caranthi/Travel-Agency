using System;
using System.Security.Cryptography;
using System.Text;
using Backend.Models;
using Backend.Exceptions;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services.Users;

public class UserService : IUserServie
{
    private readonly AppDBContext _context;
    private readonly string HashKey = "123";

    public UserService(AppDBContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public async Task<User> CreateUser(string login, string password)
    {
        var user = new User
        {
            Login = login,
            PasswordHash = CreatePasswordHash(password)
        };

        if (Validator.ValidateUser(user))
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }
        else
        {
            throw new InvalidModelException("User is not valid!");
        }
    }

    public async Task<User?> LogIn(string login, string password)
    {
        var user = await _context.Users.SingleOrDefaultAsync(user => user.Login == login);
        if (user == null)
        {
            return null;
        }

        if (!VerifyPassword(password, user.PasswordHash))
        {
            return null;
        }

        return user;
    }

    public void NukeUsers()
    {
        var allUsers = _context.Users.ToList();
        _context.Users.RemoveRange(allUsers);
        _context.SaveChanges();
    }

    private string CreatePasswordHash(string password)
    {
        if (!password.Equals(""))
        {
            using var hash = new HMACSHA256(Encoding.UTF8.GetBytes(HashKey));
            var hashedPassword = hash.ComputeHash(Encoding.UTF8.GetBytes(password));
            return Convert.ToBase64String(hashedPassword);
        }
        else
        {
            return "";
        }
    }

    private bool VerifyPassword(string password, string passwordHash)
    {
        var enteredPasswordHash = CreatePasswordHash(password);
        return enteredPasswordHash == passwordHash;
    }
}