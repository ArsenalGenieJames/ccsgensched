const projectData = {
  'SIA 101': [
    { project: 'System Analysis Report', priority: 'High', week: 'Week 1', dueDate: '2024-03-15', status: 'Pending' },
    { project: 'Use Case Diagrams', priority: 'Medium', week: 'Week 2', dueDate: '2024-03-22', status: 'Not Started' }
  ],
  'GEC 8': [
    { project: 'Ethics Case Study', priority: 'Medium', week: 'Week 1', dueDate: '2024-03-14', status: 'Pending' }
  ],
  'PF 102': [
    { project: 'Programming Portfolio', priority: 'High', week: 'Week 2', dueDate: '2024-03-20', status: 'InProgress' }
  ],
  'GEC 9': [
    { project: 'Life and Works Research', priority: 'Medium', week: 'Week 1', dueDate: '2024-03-16', status: 'Not Started' }
  ],
  'GEC 7': [
    { project: 'Art Appreciation Essay', priority: 'Low', week: 'Week 2', dueDate: '2024-03-21', status: 'Not Started' }
  ],
  'IM 102': [
    { project: 'Database Design', priority: 'High', week: 'Week 1', dueDate: '2024-03-17', status: 'In Progress' }
  ],
  'NET 101': [
    { project: 'Network Configuration', priority: 'High', week: 'Week 2', dueDate: '2024-03-19', status: 'Pending' }
  ],
  'CC 106': [
    { project: 'Cloud Architecture Design', priority: 'Medium', week: 'Week 1', dueDate: '2024-03-18', status: 'Not Started' }
  ],
  'PATH-FIT 4': [
    { project: 'Fitness Progress Report', priority: 'Low', week: 'Week 2', dueDate: '2024-03-23', status: 'Not Started' }
  ]
};

function handleSubjectClick(subject) {
  const tableBody = document.querySelector('.md\\:w-1\\/2:last-child table.table-zebra tbody');
  const data = projectData[subject] || [];

  // Reset all subject headers to default state
  const subjectHeaders = document.querySelectorAll('.md\\:w-1\\/2:last-child th[onclick^="handleSubjectClick"]');
  subjectHeaders.forEach(header => {
    header.classList.remove('bg-primary', 'text-white');
    header.classList.add('hover:bg-primary', 'hover:text-white');
  });

  // Highlight selected subject
  const selectedHeader = document.querySelector(`.md\\:w-1\\/2:last-child th[onclick="handleSubjectClick('${subject}')"]`);
  if (selectedHeader) {
    selectedHeader.classList.add('bg-primary', 'text-white');
  }

  // Clear table content
  tableBody.innerHTML = '';

  // Show message if no data
  if (data.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `
      <td colspan="5" class="text-center text-gray-500 py-4 text-xs sm:text-sm md:text-base">
        No Projects or Activities found for ${subject}
      </td>
    `;
    tableBody.appendChild(emptyRow);
    return;
  }

  // Render project data
  data.forEach((item) => {
    const row = document.createElement('tr');
    row.className = 'hover:bg-base-200 transition-colors duration-150';
    
    const priorityClass = {
      'High': 'badge-error',
      'Medium': 'badge-warning',
      'Low': 'badge-info'
    }[item.priority] || 'badge-ghost';

    const statusClass = {
      'Pending': 'badge-warning',
      'In Progress': 'badge-info', 
      'Completed': 'badge-success',
      'Not Started': 'badge-ghost'
    }[item.status] || 'badge-ghost';

    row.innerHTML = `
      <td class="text-xs sm:text-sm md:text-base font-medium">${item.project}</td>
      <td>
        <span class="badge ${priorityClass} text-xs sm:text-sm">${item.priority}</span>
      </td>
      <td class="text-xs sm:text-sm md:text-base">${item.week}</td>
      <td class="text-xs sm:text-sm md:text-base">${item.dueDate}</td>
      <td>
        <span class="badge ${statusClass} text-xs sm:text-sm">${item.status}</span>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Initialize table with empty state message
document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.querySelector('.md\\:w-1\\/2:last-child table.table-zebra tbody');
  tableBody.innerHTML = `
    <tr>
      <td colspan="5" class="text-center text-gray-500 py-4 text-xs sm:text-sm md:text-base">
        Select a subject to view its projects and activities
      </td>
    </tr>
  `;
});