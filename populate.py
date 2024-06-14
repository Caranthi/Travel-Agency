import json

import requests

BACKEND_ADDRESS = 'http://localhost:8080'
CREATE_TRIP_URL = BACKEND_ADDRESS + '/trips'
NUKE_TRIPS_URL = BACKEND_ADDRESS + '/trips/nuke'


class TripSaveDto:
    def __init__(self, title, location, departure, price, transport, bargain):
        self.title = title
        self.location = location
        self.departure = departure
        self.price = price
        self.transport = transport
        self.bargain = bargain


def create_trip(tripSaveDto):
    r = requests.post(CREATE_TRIP_URL, json=tripSaveDto.__dict__, headers={'Content-Type': 'application/json'})
    if r.status_code != 200:
        print(f'Something went wrong adding offer {json.dumps(tripSaveDto.__dict__)}')
        print('Got response:')
        print(r.status_code)
        print(r.text)
        exit(1)
    print(f'Successfully added offer {tripSaveDto.title}')
    return r.text


if __name__ == '__main__':
    # Nuke Database
    requests.delete(NUKE_TRIPS_URL)
    # Create Trips
    tripsList = []
    # Trip 1
    tripsList.append(TripSaveDto('Akacje pod gruszą', '(Zgierz, Polska)', 'Warszawa', 1500, 'Plane', False))
    # Trip 2
    tripsList.append(TripSaveDto('Cuda na kiju', '(Radom, Polska)', 'Łódź', 1000, 'Ship', True))
    # Trip 3
    tripsList.append(TripSaveDto('Wakacje z duchami', '(Walencja, Hiszpania)', 'Remiszewice', 2000, 'Plane', True))
    # Trip 4
    tripsList.append(TripSaveDto('Świetne wakacje', '(Porto, Portugalia)', 'Gdańsk', 2500, 'Bus', False))
    # Trip 5
    tripsList.append(TripSaveDto('Tu już nie mam pomysłu', '(Paryż, Francja)', 'Szczecin', 2000, 'Ship', False))
    # Trip 6
    tripsList.append(TripSaveDto('Prosimy o 5', '(Madryt, Hiszpania)', 'Warszawa', 1900, 'Bus', False))
    # Trip 7
    tripsList.append(TripSaveDto('Relaks & SPA', '(Londyn, Anglia)', 'Gdynia', 1400, 'Bus', True))

    for trip in tripsList:
        create_trip(trip)
