
let allOpportunities = [];
let currentFilteredData = [];
let currentPage = 1;
const itemsPerPage = 15;

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch('japan_data.json');
        const data = await response.json();
        allOpportunities = data;
        currentFilteredData = data; // Initialize filtered data
        renderTable();
        console.log("Data loaded:", allOpportunities.length);
    } catch (error) {
        console.error('Error fetching japan data:', error);
        document.getElementById('tableBody').innerHTML = '<tr><td colspan="10" style="text-align:center; color:red;">Failed to load data. Please try again later.</td></tr>';
    }
}

function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    if (currentFilteredData.length === 0) {
        document.getElementById('noResults').style.display = 'block';
        document.getElementById('paginationControls').innerHTML = '';
    } else {
        document.getElementById('noResults').style.display = 'none';
        
        // Paginaton Logic
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = currentFilteredData.slice(startIndex, endIndex);

        pageData.forEach((item, index) => {
            const tr = document.createElement('tr');
            
            // Determine status class
            const statusClass = item.status.toLowerCase() === 'open' ? 'status-open' : 'status-closed';
            
            // Calculate overall index for display
            const overallIndex = startIndex + index + 1;

            tr.innerHTML = `
                <td data-label="#">${overallIndex}</td>
                <td data-label="Organization" style="font-weight:600;">${item.university}</td>
                <td data-label="Type">${item.program_levels.join(', ')}</td>
                <td data-label="Deadline">${item.deadline}</td>
                <td data-label="Status"><span class="status-badge ${statusClass}">${item.status}</span></td>
                <td data-label="Action"><a href="scholarship-detail.html?id=${item.id}&country=japan" class="btn-view-details">Read More</a></td>
            `;

            tbody.appendChild(tr);
        });

        renderPagination();
    }
}

function renderPagination() {
    const paginationContainer = document.getElementById('paginationControls');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(currentFilteredData.length / itemsPerPage);

    if (totalPages <= 1) return;

    // Previous Button
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.classList.add('btn', 'btn-outline');
    prevBtn.disabled = currentPage === 1;
    prevBtn.style.padding = '5px 10px';
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
            window.scrollTo({ top: document.querySelector('.table-responsive').offsetTop - 100, behavior: 'smooth' });
        }
    };
    paginationContainer.appendChild(prevBtn);

    // Page Numbers logic
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    
    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.innerText = i;
        pageBtn.classList.add('btn', i === currentPage ? 'btn-primary' : 'btn-outline');
        pageBtn.style.padding = '5px 12px';
        pageBtn.style.margin = '0 2px';
        pageBtn.onclick = () => {
            currentPage = i;
            renderTable();
            window.scrollTo({ top: document.querySelector('.table-responsive').offsetTop - 100, behavior: 'smooth' });
        };
        paginationContainer.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.classList.add('btn', 'btn-outline');
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.style.padding = '5px 10px';
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
            window.scrollTo({ top: document.querySelector('.table-responsive').offsetTop - 100, behavior: 'smooth' });
        }
    };
    paginationContainer.appendChild(nextBtn);
}

function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    
    currentFilteredData = allOpportunities.filter(item => 
        item.university.toLowerCase().includes(filter)
    );
    
    currentPage = 1; // Reset to first page
    renderTable();
}

function filterData(level) {
    // Update active button state
    const buttons = document.querySelectorAll('.filter-buttons .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // We assume the event target is the button or child of button
    let target = event.target;
    if(target.tagName !== 'BUTTON') target = target.closest('button');
    if(target) target.classList.add('active');

    if (level === 'all') {
        currentFilteredData = allOpportunities;
    } else {
        currentFilteredData = allOpportunities.filter(item => 
            item.program_levels.includes(level)
        );
    }
    
    currentPage = 1; // Reset to first page
    renderTable();
}
