namespace Backend.Models;

public class TripPreview
{
    public long Id { get; init; }
    public string Title { get; set; }
    public string Location { get; set; }
    public string Departure { get; set; }
    public int Price { get; set; }
    public string Transport { get; set; }
    public bool Bargain { get; set; }
}
