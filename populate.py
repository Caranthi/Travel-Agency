import json

import requests

BACKEND_ADDRESS = 'http://localhost:5027'
CREATE_TRIP_URL = BACKEND_ADDRESS + '/trips'


class TripSaveDto:
    def __init__(self, id, title, departure, price, transport):
        self.id = id
        self.title = title
        self.departure = departure
        self.price = price
        self.transport = transport


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
    # Create Trips
    tripsList = []
    # Trip 1
    tripsList.append(TripSaveDto(1, 'Akacje pod gruszą (Zgierz, Polska)', 'Warszawa', 1500, 'Plane'))
    # Trip 2
    tripsList.append(TripSaveDto(2, 'Cuda na kiju (Radom, Polska)', 'Łódź', 1000, 'Ship'))
    # Trip 3
    tripsList.append(TripSaveDto(3, 'Wakacje z kucharzami (Barcelona, Katalonia)', 'Remiszewice', 2000, 'Plane'))

    for trip in tripsList:
        create_trip(trip)