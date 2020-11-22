export default function EstatesEngine() {
    var _estates;
    var _uniqueEstateNames;
    var _offers;

    function initialize() {
        _estates = [];
        _uniqueEstateNames = {};
        _offers = [];
    }

    function executeCommand(command) {
        var cmdParts = command.split(' ');
        var cmdName = cmdParts[0];
        var cmdArgs = cmdParts.splice(1);
        switch (cmdName) {
            case 'create':
                return executeCreateCommand(cmdArgs);
            case 'status':
                return executeStatusCommand();
            case 'find-sales-by-location':
                return executeFindSalesByLocationCommand(cmdArgs[0]);
            case 'find-rents-by-location':
                return executeFindRentsByLocationCommand(cmdArgs[0]);
            case 'find-rents-by-price':
                return executeFindRentsByPriceCommand(
                    Number(cmdArgs[0]), Number(cmdArgs[1]));
            default:
                throw new Error('Unknown command: ' + cmdName);
        }
    }

    function executeCreateCommand(cmdArgs) {
        var objType = cmdArgs[0];
        switch (objType) {
            case 'Apartment':
                var apartment = new Apartment(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                addEstate(apartment);
                break;
            case 'Office':
                var office = new Office(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                addEstate(office);
                break;
            case 'House':
                var house = new House(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]));
                addEstate(house);
                break;
            case 'Garage':
                var garage = new Garage(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), Number(cmdArgs[6]));
                addEstate(garage);
                break;
            case 'RentOffer':
                var estate = findEstateByName(cmdArgs[1]);
                var rentOffer = new RentOffer(estate, Number(cmdArgs[2]));
                addOffer(rentOffer);
                break;
            case 'SaleOffer':
                estate = findEstateByName(cmdArgs[1]);
                var saleOffer = new SaleOffer(estate, Number(cmdArgs[2]));
                addOffer(saleOffer);
                break;
            default:
                throw new Error('Unknown object to create: ' + objType);
        }
        return objType + ' created.';
    }

    function parseBoolean(value) {
        switch (value) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                throw new Error("Invalid boolean value: " + value);
        }
    }

    function findEstateByName(estateName) {
        for (var i = 0; i < _estates.length; i++) {
            if (_estates[i].getName() == estateName) {
                return _estates[i];
            }
        }
        return undefined;
    }

    function addEstate(estate) {
        if (_uniqueEstateNames[estate.getName()]) {
            throw new Error('Duplicated estate name: ' + estate.getName());
        }
        _uniqueEstateNames[estate.getName()] = true;
        _estates.push(estate);
    }

    function addOffer(offer) {
        _offers.push(offer);
    }

    function executeStatusCommand() {
        var result = '', i;
        if (_estates.length > 0) {
            result += 'Estates:\n';
            for (i = 0; i < _estates.length; i++) {
                result += "  " + _estates[i].toString() + '\n';
            }
        } else {
            result += 'No estates\n';
        }

        if (_offers.length > 0) {
            result += 'Offers:\n';
            for (i = 0; i < _offers.length; i++) {
                result += "  " + _offers[i].toString() + '\n';
            }
        } else {
            result += 'No offers\n';
        }

        return result.trim();
    }

    function executeFindSalesByLocationCommand(location) {
        if (!location) {
            throw new Error("Location cannot be empty.");
        }
        var selectedOffers = _offers.filter(function (offer) {
            return offer.getEstate().getLocation() === location &&
                offer instanceof SaleOffer;
        });
        selectedOffers.sort(function (a, b) {
            return a.getEstate().getName().localeCompare(b.getEstate().getName());
        });
        return formatQueryResults(selectedOffers);
    }


    function executeFindRentsByLocationCommand(location) {
        return executeFindOffersByLocationCommand(location, RentOffer);
    }

    function executeFindOffersByLocationCommand(location, offerType) {
        if (!location) {
            throw new Error("Location cannot be empty.");
        }
        var selectedOffers = _offers
            .filter(function (offer) {
                return offer.getEstate().getLocation() === location &&
                    offer instanceof offerType;
            })
            .sort(function (a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });
        return formatQueryResults(selectedOffers);
    }

    function executeFindRentsByPriceCommand(minPrice, maxPrice) {
        Validators.validateIntegerRange(
            minPrice, "minPrice", Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
        Validators.validateIntegerRange(maxPrice, "maxPrice",
            Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
        var selectedOffers = _offers.filter(function (offer) {
            return offer.getPrice() >= minPrice &&
                offer.getPrice() <= maxPrice &&
                offer instanceof RentOffer;
        }).sort(function (a, b) {
            var result = a.getPrice() - b.getPrice();
            if (result == 0) {
                result = a.getEstate().getName().localeCompare(b.getEstate().getName());
            }
            return result;
        });
        return formatQueryResults(selectedOffers);
    }

    function formatQueryResults(offers) {
        var result = '';
        if (offers.length == 0) {
            result += 'No Results\n';
        } else {
            result += 'Query Results:\n';
            for (var i = 0; i < offers.length; i++) {
                var offer = offers[i];
                result += '  [Estate: ' + offer.getEstate().getName() +
                    ', Location: ' + offer.getEstate().getLocation() +
                    ', Price: ' + offer.getPrice() + ']\n';
            }
        }
        return result.trim();
    }

    return {
        initialize: initialize,
        executeCommand: executeCommand
    };
}

