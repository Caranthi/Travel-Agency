namespace Backend.Models;

public class Trip
{
    public long Id { get; init; }
    public string Title { get; set; }
    public string Country { get; set; }
    public string Departure { get; set; }
    public int Price { get; set; }
    public string Transport { get; set; }
    public bool Bargain { get; set; }
    public string Description { get; set; }
    public double TravelTime { get; set; }
    public long Hotel { get; init; }
}
