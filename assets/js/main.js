class Vehicle {
	constructor(demensions, brand, model, manufactureYear) {
		this._demensions = demensions
		this._brand = brand
		this._model = model
		this._manufactureYear = manufactureYear
	}

	get Year() {
		return new Date().getFullYear() - this._manufactureYear
	}

	getFullInfo() {
		return `${this._brand} ${this._model} (${this._manufactureYear}) - Year: ${this.Year}, `
	}
}

const vehicles = [
	new Vehicle(
		{ width: 1.8, height: 1.4, length: 4.5 },
		'Toyota',
		'Corolla',
		2015
	),
	new Vehicle(
		{ width: 2.0, height: 1.5, length: 4.8 },
		'Ford',
		'Mustang',
		2018
	),
	new Vehicle({ width: 1.9, height: 1.6, length: 4.7 }, 'Honda', 'Civic', 2020),
]

for (const vehicle of vehicles) {
	console.log(vehicle.getFullInfo())
}

class PassengerTransport extends Vehicle {
	constructor(
		demensions,
		brand,
		model,
		manufactureYear,
		passengerLimit,
		passengerCount
	) {
		super(demensions, brand, model, manufactureYear)
		this._passengerLimit = passengerLimit
		this._passengerCount = passengerCount
	}

	addPassenger() {
		if (this._passengerCount < this._passengerLimit) {
			this._passengerCount++
			return true
		}
		return false
	}

	getFullInfo() {
		return `${super.getFullInfo()}, Passenger Limit: ${this._passengerLimit}`
	}
}

const passengerVehicles = [
	new PassengerTransport(
		{ width: 1.8, height: 1.5, length: 4.6 },
		'Volkswagen',
		'Transporter',
		2017,
		9,
		5
	),
	new PassengerTransport(
		{ width: 2.0, height: 1.6, length: 4.9 },
		'Mercedes-Benz',
		'Sprinter',
		2019,
		12,
		12
	),
]

for (const vehicle of passengerVehicles) {
	console.log(vehicle.getFullInfo())
	if (vehicle.addPassenger()) {
		console.log('Passenger added successfully.')
	} else {
		console.log('Cannot add passenger, limit reached.')
	}
}

class FreightTransport extends Vehicle {
	constructor(demensions, brand, model, manufactureYear, capacity) {
		super(demensions, brand, model, manufactureYear)
		this._capacity = capacity
		this._currentLoad = 0
	}
	checkLoadingPossibility(weight) {
		return this._currentLoad + weight <= this._capacity
	}
	getFullInfo() {
		return `${super.getFullInfo()}, Capacity: ${this._capacity} tons`
	}
}

const freightVehicles = [
	new FreightTransport(
		{ width: 2.5, height: 3.0, length: 7.0 },
		'Scania',
		'R-Series',
		2016,
		20
	),
	new FreightTransport(
		{ width: 2.6, height: 3.2, length: 8.0 },
		'Volvo',
		'FH',
		2018,
		25
	),
]
for (const vehicle of freightVehicles) {
	console.log(vehicle.getFullInfo())
	if (vehicle.checkLoadingPossibility(15)) {
		console.log('Loading is possible.')
	} else {
		console.log('Loading exceeds capacity.')
	}
}
