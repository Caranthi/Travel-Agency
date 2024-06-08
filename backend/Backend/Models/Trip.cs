namespace Backend.Models;

public class Trip(long id, string title, string departure, int price, string transport)
{
    public long Id { get; init; } = id;
    public string Title { get; set; } = title;
    public string Departure { get; set; } = departure;
    public int Price { get; set; } = price;
    public string Transport { get; set; } = transport;
}
