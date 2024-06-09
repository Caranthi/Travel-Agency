using Backend.Services.Trips;

var builder = WebApplication.CreateBuilder(args);
{
    // builder.WebHost.UseUrls("http://localhost:5027");
    builder.Services.AddControllers();
    builder.Services.AddSingleton<ITripService, TripService>();
    builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});
}

var app = builder.Build();
{
    app.UseHttpsRedirection();
    app.MapControllers();
    app.UseCors("AllowAll");
    app.Run();
}