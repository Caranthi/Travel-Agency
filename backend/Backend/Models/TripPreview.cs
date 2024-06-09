namespace Backend.Models;

public class TripPreview(long id, string title, string location, string departure, int price, string transport, bool bargain)
{
    public long Id { get; init; } = id;
    public string Title { get; set; } = title;
    public string Location { get; set; } = location;
    public string Departure { get; set; } = departure;
    public int Price { get; set; } = price;
    public string Transport { get; set; } = transport;
    public bool Bargain { get; set; } = bargain;
}
