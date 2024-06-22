using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend;

public class AppDBContext : DbContext
{
    public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
    {
    }

    public DbSet<Trip> Trips { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Hotel> Hotels { get; set; }
}
