$(document).ready(function() {
    // Sample employee data (replace with your actual data)
    const employees = [
        { id: 1, name: 'John Doe', department: 'IT', position: 'Developer', salary: 60000 },
        // Add more employee objects...
    ];

    const tableBody = $('#employees-table tbody');
    const searchInput = $('#search');

    // Populate table rows
    function renderTable() {
        tableBody.empty();
        employees.forEach(employee => {
            const row = `
                <tr>
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.position}</td>
                    <td>${employee.salary}</td>
                    <td><button onclick="openModal(${employee.id})">Details</button></td>
                </tr>
            `;
            tableBody.append(row);
        });
    }

    // Sort table by column
    function sortTable(column) {
        // Implement sorting logic here
        // Update the table with sorted data
    }

    // Open modal with employee details
    function openModal(employeeId) {
        // Implement modal logic here
        // Show employee details in the modal
    }

    // Search functionality
    searchInput.on('input', function() {
        const searchTerm = searchInput.val().toLowerCase();
        const filteredEmployees = employees.filter(employee =>
            employee.name.toLowerCase().includes(searchTerm)
        );
        renderTable(filteredEmployees);
    });

    // Initial rendering
    renderTable();
});
