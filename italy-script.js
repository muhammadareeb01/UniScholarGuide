
let allUniversities = [];

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch('italy_data.json');
        const data = await response.json();
        allUniversities = data;
        renderTable(allUniversities);
        console.log("Data loaded:", allUniversities.length);
    } catch (error) {
        console.error('Error fetching university data:', error);
        document.getElementById('tableBody').innerHTML = '<tr><td colspan="10" style="text-align:center; color:red;">Failed to load data. Please try again later.</td></tr>';
    }
}

function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    if (data.length === 0) {
        document.getElementById('noResults').style.display = 'block';
    } else {
        document.getElementById('noResults').style.display = 'none';
        
        data.forEach((uni, index) => {
            const tr = document.createElement('tr');
            
            // Determine status class
            const statusClass = uni.status.toLowerCase() === 'open' ? 'status-open' : 'status-closed';
            
            // Determine Fee highlighting
            const feeDisplay = (uni.admission_fees && uni.admission_fees.toLowerCase().includes('no fee')) ? `<span class="fee-badge" style="background:#dcfce7; color:#166534;">${uni.admission_fees}</span>` : (uni.admission_fees || 'N/A');

            tr.innerHTML = `
                <td>${index + 1}</td>
                <td style="font-weight:600;">${uni.university}</td>
                <td>${feeDisplay}</td>
                <td>${uni.deadline}</td>
                <td><span class="status-badge ${statusClass}">${uni.status}</span></td>
                <td><a href="scholarship-detail.html?id=${uni.id}&country=italy" class="btn-view-details">Read More</a></td>
            `;

            tbody.appendChild(tr);
        });
    }
}

function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    
    const filtered = allUniversities.filter(uni => 
        uni.university.toLowerCase().includes(filter)
    );
    
    renderTable(filtered);
}

function filterData(level) {
    // Update active button state
    const buttons = document.querySelectorAll('.filter-buttons .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Find the button that was clicked (based on text content or onclick attribution) - simpler to pass 'this' but strict mode etc.
    // We'll simplisticly just iterate to find text match or rely on user knowing which is active visually.
    // Let's just set active based on the call.
    event.target.classList.add('active');

    if (level === 'all') {
        renderTable(allUniversities);
    } else {
        const filtered = allUniversities.filter(uni => 
            uni.program_levels.includes(level)
        );
        renderTable(filtered);
    }
}
