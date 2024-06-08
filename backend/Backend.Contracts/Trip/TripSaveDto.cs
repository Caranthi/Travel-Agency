namespace Backend.Contracts.Trip;

public record TripSaveDto(
    long Id,
    string Title,
    string Departure,
    int Price,
    string Transport
);