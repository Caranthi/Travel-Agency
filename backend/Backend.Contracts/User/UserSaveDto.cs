namespace Backend.Contracts.User;

public record UserSaveDto(
    string Login,
    string Password
);