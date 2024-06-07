namespace Backend.Contracts.Trip;

public record TripSaveDto(
    string Title,
    string Departure,
    int Price,
    string Transport
);