namespace Backend.Contracts.TripPreview;

// record - immutable object
public record TripPreviewResponseDto(
    long ID,
    string Title,
    string Location,
    string Departure,
    int Price,
    string Transport,
    bool Bargain
);