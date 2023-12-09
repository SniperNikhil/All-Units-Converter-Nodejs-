const socket = io();

function reset() {
    location.reload()
}

function printSelectedContent() {
    var selectedOption = document.getElementById("enteredWordOutput");
    var selectedIndex = selectedOption.selectedIndex;

    var selectedContent = selectedOption.options[selectedIndex].text;

    function addOptions(selectedContent) {
        // Get all elements with the specified class
        var selectElements = document.getElementsByClassName("SIdrop");

        // Clear existing options in all select elements
        Array.from(selectElements).forEach(function (selectElement) {
            while (selectElement.options.length > 0) {
                selectElement.remove(0);
            }
        });
        function selectedContent1(selectedContent) {
            var newOptions;
            if (selectedContent == "Length") {
                var newOptions = [
                    "mm (Millimeter)",
                    "cm (Centimeter)",
                    "m (Meter)",
                    "in (Inch)",
                    "ft-us (Foot)",
                    "ft (Foot)",
                    "mi (Mile)"
                ];
            } else if (selectedContent == "Area") {
                var newOptions = [
                    "mm2 (Square Millimeter)",
                    "cm2 (Square Centimeter)",
                    "m2 (Square Meter)",
                    "ha (Hectare)",
                    "km2 (Square Kilometer)",
                    "in2 (Square Inch)",
                    "ft2 (Square Foot)",
                    "ac (Acre)",
                    "mi2 (Square Mile)"
                ];
            } else if (selectedContent == "Mass") {
                var newOptions = [
                    "mcg (Microgram)",
                    "mg (Milligram)",
                    "g (Gram)",
                    "kg (Kilogram)",
                    "oz (Ounce)",
                    "lb (Pound)",
                    "mt (Metric Ton)",
                    "t (Ton)"
                ];
            } else if (selectedContent == "Volume") {
                var newOptions = [
                    "mm3 (Cubic Millimeter)",
                    "cm3 (Cubic Centimeter)",
                    "ml (Milliliter)",
                    "l (Liter)",
                    "kl (Kiloliter)",
                    "m3 (Cubic Meter)",
                    "km3 (Cubic Kilometer)",
                    "tsp (Teaspoon)",
                    "Tbs (Tablespoon)",
                    "in3 (Cubic Inch)",
                    "fl-oz (Fluid Ounce)",
                    "cup (Cup)",
                    "pnt (Pint)",
                    "qt (Quart)",
                    "gal (Gallon)",
                    "ft3 (Cubic Foot)",
                    "yd3 (Cubic Yard)"
                ];
            } else if (selectedContent == "Volume Flow Rate") {
                var newOptions = [
                    "mm3/s (Cubic Millimeter per Second)",
                    "cm3/s (Cubic Centimeter per Second)",
                    "ml/s (Milliliter per Second)",
                    "cl/s (Centiliter per Second)",
                    "dl/s (Deciliter per Second)",
                    "l/s (Liter per Second)",
                    "l/min (Liter per Minute)",
                    "l/h (Liter per Hour)",
                    "kl/s (Kiloliter per Second)",
                    "kl/min (Kiloliter per Minute)",
                    "kl/h (Kiloliter per Hour)",
                    "m3/s (Cubic Meter per Second)",
                    "m3/min (Cubic Meter per Minute)",
                    "m3/h (Cubic Meter per Hour)",
                    "km3/s (Cubic Kilometer per Second)",
                    "tsp/s (Teaspoon per Second)",
                    "Tbs/s (Tablespoon per Second)",
                    "in3/s (Cubic Inch per Second)",
                    "in3/min (Cubic Inch per Minute)",
                    "in3/h (Cubic Inch per Hour)",
                    "fl-oz/s (Fluid Ounce per Second)",
                    "fl-oz/min (Fluid Ounce per Minute)",
                    "fl-oz/h (Fluid Ounce per Hour)",
                    "cup/s (Cup per Second)",
                    "pnt/s (Pint per Second)",
                    "pnt/min (Pint per Minute)",
                    "pnt/h (Pint per Hour)",
                    "qt/s (Quart per Second)",
                    "gal/s (Gallon per Second)",
                    "gal/min (Gallon per Minute)",
                    "gal/h (Gallon per Hour)",
                    "ft3/s (Cubic Foot per Second)",
                    "ft3/min (Cubic Foot per Minute)",
                    "ft3/h (Cubic Foot per Hour)",
                    "yd3/s (Cubic Yard per Second)",
                    "yd3/min (Cubic Yard per Minute)",
                    "yd3/h (Cubic Yard per Hour)"
                ];
            } else if (selectedContent == "Temperature") {
                var newOptions = [
                    "C (Celsius)",
                    "F (Fahrenheit)",
                    "K (Kelvin)",
                    "R (Rankine)"
                ];
            } else if (selectedContent == "Time") {
                var newOptions = [
                    "ns (Nanosecond)",
                    "mu (Microsecond)",
                    "ms (Millisecond)",
                    "s (Second)",
                    "min (Minute)",
                    "h (Hour)",
                    "d (Day)",
                    "week (Week)",
                    "month (Month)",
                    "year (Year)"
                ];
            } else if (selectedContent == "Frequency") {
                var newOptions = [
                    "Hz (Hertz)",
                    "mHz (Millihertz)",
                    "kHz (Kilohertz)",
                    "MHz (Megahertz)",
                    "GHz (Gigahertz)",
                    "THz (Terahertz)",
                    "rpm (Revolutions per Minute)",
                    "deg/s (Degrees per Second)",
                    "rad/s (Radians per Second)"
                ];
            } else if (selectedContent == "Speed") {
                var newOptions = [
                    "m/s (Meters per Second)",
                    "km/h (Kilometers per Hour)",
                    "m/h (Meters per Hour)",
                    "knot (Knot)",
                    "ft/s (Feet per Second)"
                ];
            } else if (selectedContent == "Pace") {
                var newOptions = [
                    "s/m (Seconds per Meter)",
                    "min/km (Minutes per Kilometer)",
                    "s/ft (Seconds per Foot)"
                ];
            } else if (selectedContent == "Pressure") {
                var newOptions = [
                    "Pa (Pascal)",
                    "hPa (Hectopascal)",
                    "kPa (Kilopascal)",
                    "MPa (Megapascal)",
                    "bar (Bar)",
                    "torr (Torr)",
                    "psi (Pound per Square Inch)",
                    "ksi (Kip per Square Inch)"
                ];
            } else if (selectedContent == "Digital") {
                var newOptions = [
                    "b (Bit)",
                    "Kb (Kilobit)",
                    "Mb (Megabit)",
                    "Gb (Gigabit)",
                    "Tb (Terabit)",
                    "B (Byte)",
                    "KB (Kilobyte)",
                    "MB (Megabyte)",
                    "GB (Gigabyte)",
                    "TB (Terabyte)"
                ];
            } else if (selectedContent == "Illuminance") {
                var newOptions = [
                    "lx (Lux)",
                    "ft-cd (Foot-candle)"
                ];
            } else if (selectedContent == "Parts-Per") {
                var newOptions = [
                    "ppm (Parts Per Million)",
                    "ppb (Parts Per Billion)",
                    "ppt (Parts Per Trillion)",
                    "ppq (Parts Per Quadrillion)"
                ];
            } else if (selectedContent == "Voltage") {
                var newOptions = [
                    "V (Volt)",
                    "mV (Millivolt)",
                    "kV (Kilovolt)"
                ];
            } else if (selectedContent == "Current") {
                var newOptions = [
                    "A (Ampere)",
                    "mA (Milliampere)",
                    "kA (Kiloampere)"
                ];
            } else if (selectedContent == "Power") {
                var newOptions = [
                    "W (Watt)",
                    "mW (Milliwatt)",
                    "kW (Kilowatt)",
                    "MW (Megawatt)",
                    "GW (Gigawatt)"
                ];
            } else if (selectedContent == "Apparent Power") {
                var newOptions = [
                    "VA (Volt-Ampere)",
                    "mVA (Millivolt-Ampere)",
                    "kVA (Kilovolt-Ampere)",
                    "MVA (Megavolt-Ampere)",
                    "GVA (Gigavolt-Ampere)"
                ];
            } else if (selectedContent == "Reactive Power") {
                var newOptions = [
                    "VAR (Volt-Ampere Reactive)",
                    "mVAR (Millivolt-Ampere Reactive)",
                    "kVAR (Kilovolt-Ampere Reactive)",
                    "MVAR (Megavolt-Ampere Reactive)",
                    "GVAR (Gigavolt-Ampere Reactive)"
                ];
            } else if (selectedContent == "Energy") {
                var newOptions = [
                    "Wh (Watt-Hour)",
                    "mWh (Milliwatt-Hour)",
                    "kWh (Kilowatt-Hour)",
                    "MWh (Megawatt-Hour)",
                    "GWh (Gigawatt-Hour)",
                    "J (Joule)",
                    "kJ (Kilojoule)"
                ];
            } else if (selectedContent == "Reactive Energy") {
                var newOptions = [
                    "VARh (Volt-Ampere Reactive Hour)",
                    "mVARh (Millivolt-Ampere Reactive Hour)",
                    "kVARh (Kilovolt-Ampere Reactive Hour)",
                    "MVARh (Megavolt-Ampere Reactive Hour)",
                    "GVARh (Gigavolt-Ampere Reactive Hour)"
                ];
            } else if (selectedContent == "Angle") {
                var newOptions = [
                    "deg (Degree)",
                    "rad (Radian)",
                    "grad (Gradian)",
                    "arcmin (Arcminute)",
                    "arcsec (Arcsecond)"
                ];
            } else {
                alert("Please Select a Unit from DropDown")
            }

            function Alll() {
                var allElements = document.getElementsByClassName("All");

                Array.from(allElements).forEach(function (allElement) {
                    var op = document.createElement("option");
                    op.value = "All";
                    op.text = "All";
                    allElement.appendChild(op);
                });
            }
            Alll();

            // Loop through each select element
            Array.from(selectElements).forEach(function (selectElement) {
                // Loop through the array and create options
                newOptions.forEach(function (optionText) {
                    var option = document.createElement("option");
                    option.value = optionText.replace(/\s+/g, ""); // Set a value (e.g., lowercase with no spaces)
                    option.text = optionText;
                    selectElement.add(option);
                });
            });
        }
        selectedContent1(selectedContent);
    }
    addOptions(selectedContent);
}

document.getElementById("Calculate").addEventListener("click", function () {
    var selectedOption = document.getElementById("enteredWordOutput");
    var selectedIndex = selectedOption.selectedIndex;
    var selectedContent = selectedOption.options[selectedIndex].text;

    if (selectedContent === "Select") {
        alert("Please Select a Unit")
    } else {
        const inputvalue = document.getElementById("inputvalue");
        if (inputvalue.value == "") {
            alert("Please Enter Some Value in Input Field")
        } else {
            function extractTextBeforeUnit(text) {
                if (typeof text !== 'string') {
                    console.error('Input is not a string');
                    return null;
                }

                const regex = /(.+?)\s*\([^\)]+\)/;

                const match = text.match(regex);

                if (match) {
                    const textBeforeUnit = match[1].trim();

                    return textBeforeUnit;
                } else {
                    return null; // Return null if no match is found
                }
            }

            const inputunit = document.getElementById("inputunit");
            const outputunit = document.getElementById("outputunit");

            const textinputunit = extractTextBeforeUnit(inputunit.value);
            const textoutputunit = extractTextBeforeUnit(outputunit.value);

            socket.emit('calculate', inputvalue.value, textinputunit, textoutputunit, selectedContent.toLowerCase());
        }
    }
});

socket.on("conversionResultOfAll", (result, description,textoutputunit) => {
    console.log(Object.keys(result).length);

    const outputContainer = document.getElementById('outputdisplay');
    outputContainer.innerHTML = '';

    if (Object.keys(result).length > 1) {
        var i = 0;
        for (const unit in result) {
            if (result.hasOwnProperty(unit)) {
                const outputValue = result[unit];

                const div = document.createElement('div');
                // div.innerHTML = `<strong>${unit}:</strong> ${outputValue}`;

                div.innerHTML = `<strong>${outputValue} ${unit} (${description[i].singular})</strong> `;
                div.id = "categoryOutput"
                outputContainer.appendChild(div);
            }
            i++;
        }
    } else {
        const outputValue = result;
        const div = document.createElement('div');
        div.innerHTML = `<strong>${outputValue} ${textoutputunit} (${description.singular})</strong> `;
        div.id = "categoryOutput";
        outputContainer.appendChild(div);
    }
});
 

socket.on("Error",(error) => {
    alert(error)
})

function validateInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}