const addTrip = async() => {
    const response = await fetch("/api/users/addTrip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }
};

document.querySelector("#addTrip").addEventListener("click", addTrip);


// Datepicker
$(function() {
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true
    });
});