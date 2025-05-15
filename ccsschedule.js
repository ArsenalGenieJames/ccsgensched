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
    ],
    Sunday: []
  };

  function handleClick(day) {
    const tableBody = document.querySelector('table.table-zebra tbody');
    const data = scheduleData[day] || [];

    tableBody.innerHTML = '';

    data.forEach((item, index) => {
      const row = document.createElement('tr');
      row.className = 'hover:bg-base-200 transition-colors duration-150';
      row.innerHTML = `
        <td class="font-medium text-sm md:text-base">${item.subject}</td>
        <td class="text-xs md:text-sm">${item.offer}</td>
        <td class="text-xs md:text-sm">${day}</td>
        <td class="text-xs md:text-sm">${item.time}</td>
        <td class="text-xs md:text-sm">${item.room}</td>
      `;
      tableBody.appendChild(row);
    });

    if (data.length === 0) {
      const row = document.createElement('tr');
      row.innerHTML = `<td colspan="7" class="text-center text-gray-500 py-4 md:py-6 text-sm md:text-base">No classes scheduled for ${day}.</td>`;
      tableBody.appendChild(row);
    }
  }

  // Live clock and greeting
  document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.querySelector('.greeting');

    function updateTime() {
      const now = new Date();
      const hours = now.getHours();

      // Greeting
      let greetingMessage = 
        hours < 12 ? 'Good Morning Programmer!' :
        hours < 18 ? 'Good Afternoon Programmer!' :
        'Good Evening Programmer!';

      greetingElement.className = 'greeting text-sm md:text-base lg:text-lg';
      greetingElement.textContent = greetingMessage;
    }

    updateTime();
    setInterval(updateTime, 1000);

    // Set initial day to current day
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[new Date().getDay()];
    handleClick(today);
  });