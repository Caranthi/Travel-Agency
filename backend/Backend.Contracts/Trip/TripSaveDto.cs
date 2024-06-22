namespace Backend.Contracts.Trip;

public record TripSaveDto(
    string Title,
    string Country,
    string Departure,
    int Price,
    string Transport,
    bool Bargain,
    string Description,
    double TravelTime,
    long Hotel
);