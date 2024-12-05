// Dynamically create the form
const formContainer = document.getElementById("form-container");
const form = document.createElement("form");
form.id = "booking-form";

// Create and append form fields
const createNode = (type, attributes, parent) => {
    const element = document.createElement(type);
    for (const key in attributes) {
        element[key] = attributes[key];
    }
    parent.appendChild(element);
    return element;
};

// User Name
createNode("label", { textContent: "User Name:" }, form);
createNode("input", { type: "text", id: "user-name", name: "userName", required: true }, form);

// Mobile Number
createNode("label", { textContent: "Mobile Number:" }, form);
createNode("input", { type: "tel", id: "mobile-number", name: "mobileNumber", required: true }, form);

// Email
createNode("label", { textContent: "Email:" }, form);
createNode("input", { type: "email", id: "email", name: "email", required: true }, form);

// Number of Persons
createNode("label", { textContent: "Number of Persons:" }, form);
createNode("input", { type: "number", id: "no-of-persons", name: "noOfPersons", min: 1, required: true }, form);

// Choice of Booking
createNode("label", { textContent: "Choice of Booking:" }, form);
const bookingChoice = createNode("select", { id: "booking-choice", name: "bookingChoice", required: true }, form);
["Select", "Full Day Booking", "Half Day Booking", "Hourly Booking"].forEach(optionText => {
    createNode("option", { value: optionText, textContent: optionText }, bookingChoice);
});

// Date
createNode("label", { textContent: "Date:", className: "hidden", id: "date-label" }, form);
createNode("input", { type: "date", id: "date", name: "date", className: "hidden" }, form);

// Slot
createNode("label", { textContent: "Slot:", className: "hidden", id: "slot-label" }, form);
const slot = createNode("select", { id: "slot", name: "slot", className: "hidden" }, form);
["Select Slot", "Breakfast", "Lunch", "Dinner"].forEach(optionText => {
    createNode("option", { value: optionText, textContent: optionText }, slot);
});

// Time
createNode("label", { textContent: "Time:", className: "hidden", id: "time-label" }, form);
createNode("input", { type: "time", id: "time", name: "time", className: "hidden" }, form);

// Submit Button
createNode("button", { type: "submit", textContent: "Submit Booking" }, form);

// Append form to container
formContainer.appendChild(form);

// Event listener for dynamic field visibility
bookingChoice.addEventListener("change", (e) => {
    const value = e.target.value;
    const dateField = document.getElementById("date");
    const dateLabel = document.getElementById("date-label");
    const slotField = document.getElementById("slot");
    const slotLabel = document.getElementById("slot-label");
    const timeField = document.getElementById("time");
    const timeLabel = document.getElementById("time-label");

    // Reset visibility
    dateField.classList.add("hidden");
    dateLabel.classList.add("hidden");
    slotField.classList.add("hidden");
    slotLabel.classList.add("hidden");
    timeField.classList.add("hidden");
    timeLabel.classList.add("hidden");

    if (value === "Full Day Booking") {
        dateField.classList.remove("hidden");
        dateLabel.classList.remove("hidden");
    } else if (value === "Half Day Booking") {
        dateField.classList.remove("hidden");
        dateLabel.classList.remove("hidden");
        slotField.classList.remove("hidden");
        slotLabel.classList.remove("hidden");
    } else if (value === "Hourly Booking") {
        dateField.classList.remove("hidden");
        dateLabel.classList.remove("hidden");
        timeField.classList.remove("hidden");
        timeLabel.classList.remove("hidden");
    }
});
