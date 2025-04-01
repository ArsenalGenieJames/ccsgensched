const scheduleData = {
    Monday: [
        { subject: "SIA 101", offer: "83638", time: "04:30 PM - 07:30 PM", room: "A202" }
    ],
    Tuesday: [
        { subject: "GEC 8", offer: "52519", time: "10:30 AM - 12:00 PM", room: "VR4" },
        { subject: "PF 102", offer: "83634", time: "01:00 PM - 02:00 PM", room: "A203" },
        { subject: "GEC 9", offer: "52533", time: "02:30 PM - 04:00 PM", room: "E303(VR4)" },
        { subject: "GEC 7", offer: "52506", time: "04:00 PM - 05:30 PM", room: "E206" },
        { subject: "IM 102", offer: "83637", time: "05:30 PM - 06:30 PM", room: "A203" }
    ],
    Wednesday: [
        { subject: "CC 106", offer: "83636", time: "07:30 PM - 08:30 PM", room: "A203" },
        { subject: "NET 101", offer: "83635", time: "01:00 PM - 03:00 PM", room: "A203" },
        { subject: "IM 102", offer: "83637", time: "03:30 PM - 04:30 PM", room: "A203" },
        { subject: "SIA 101", offer: "83638", time: "05:00 PM - 07:00 PM", room: "LR1" }
    ],
    Thursday: [
        { subject: "NET 101", offer: "83635", time: "07:30 AM - 10:30 AM", room: "A202" },
        { subject: "GEC 8", offer: "52519", time: "10:30 AM - 12:00 PM", room: "VR4" },
        { subject: "PF 102", offer: "83634", time: "01:00 PM - 02:00 PM", room: "A203" },
        { subject: "GEC 9", offer: "52533", time: "02:30 PM - 04:00 PM", room: "E303(VR4)" },
        { subject: "GEC 7", offer: "52506", time: "04:00 PM - 05:30 PM", room: "E206" }
    ],
    Friday: [
        { subject: "PF 102", offer: "83634", time: "07:30 AM - 10:30 AM", room: "A202" },
        { subject: "CC 106", offer: "83636", time: "07:30 PM - 08:30 PM", room: "A203" }
    ],
    Saturday: [
        { subject: "CC 106", offer: "83636", time: "07:30 PM - 10:30 PM", room: "A204" },
        { subject: "PATH-FIT 4", offer: "52608", time: "01:00 PM - 03:00 PM", room: "Field 3" },
        { subject: "IM 102", offer: "83637", time: "03:00 PM - 06:00 PM", room: "A204" }
    ]
};

document.getElementById('day-select').addEventListener('change', function () {
    const selectedDay = this.value;
    const scheduleBody = document.getElementById('schedule-body');
    scheduleBody.innerHTML = '';

    if (scheduleData[selectedDay]) {
        scheduleData[selectedDay].forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.subject}</td>
                <td>${item.offer}</td>
                <td>${selectedDay}</td>
                <td>${item.time}</td>
                <td>${item.room}</td>
            `;
            scheduleBody.appendChild(row);
        });
    }
});