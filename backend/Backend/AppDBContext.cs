using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend;

public class AppDBContext : DbContext
{
    public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
    {
    }

    public DbSet<TripPreview> tripPreviews { get; set; }
}
