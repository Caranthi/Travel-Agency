using Backend;
using Backend.Services.Hotels;
using Backend.Services.Trips;
using Backend.Services.Users;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddControllers();
    builder.Services.AddScoped<ITripService, TripService>();
    builder.Services.AddScoped<IUserServie, UserService>();
    builder.Services.AddScoped<IHotelService, HotelService>();
    builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    builder.Services.AddDbContext<AppDBContext>(options =>
        options.UseNpgsql(connectionString));
}

var app = builder.Build();
{
    app.UseHttpsRedirection();
    app.MapControllers();
    app.UseCors("AllowAll");
    app.Run();
}