namespace Backend.Contracts.Trip;

// record - immutable object
public record TripResponseDto(
    long ID,
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