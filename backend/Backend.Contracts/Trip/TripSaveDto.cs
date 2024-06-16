namespace Backend.Contracts.Trip;

public record TripSaveDto(
    string Title,
    string City,
    string Country,
    string Departure,
    int Price,
    string Transport,
    bool Bargain,
    string Description,
    int ChildrenPrice,
    double TravelTime
);