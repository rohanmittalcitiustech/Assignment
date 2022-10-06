const vehicle = {
    vehicleid: 42069,
    brand: 'bmw',
    model: 'M5',
    variant: 'sport',

    specifications: {
        firstGear: function () {
            console.log('vehicle is in the first gear');
        },

        secondGear: function () {
            console.log('vehicle is the second gear');
        },

        maxSpeed: function () {
            console.log('current speed is 100');
        },

        changeGear: function () {
            this.firstGear();
            this.secondGear();
        },
    },
}


vehicleDetails = (vehicle) => {
    console.log(`The Vehicle brand is:  ${vehicle.brand}`);
    console.log(`The Vehicle variant is: ${vehicle.variant}`);
    console.log(`The Vehicle model is: ${vehicle.model}`);
    console.log(`The Vehicle  variant is: ${vehicle.variant}`);
    vehicle.specifications.changeGear();

}

vehicleDetails(vehicle);
