const internshipsData = [
    {
        id: "nestle-internships-2026",
        title: "Nestle Internships 2026 – Worldwide Openings",
        country: "Worldwide",
        company: "Nestle",
        level: "Internship",
        funding: "fully-funded", // Paid
        deadline: "Varies",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Nestl%C3%A9_textlogo.svg/1200px-Nestl%C3%A9_textlogo.svg.png", 
        description: "Applications are open for the NESTLE Internships 2026. Paid 6-month internship for students & graduates in various fields like Marketing, IT, HR, Finance.",
        link: "nestle-internship.html"
    },
    {
        id: "lpi-summer-usa",
        title: "LPI Summer Internship in USA 2026",
        country: "usa",
        company: "Lunar and Planetary Institute",
        level: "Internship",
        funding: "fully-funded",
        deadline: "December 12, 2025",
        image: "https://scholarshipscorner.website/wp-content/uploads/2024/10/LPI-Summer-Internship-in-United-States.jpg",
        description: "10-week summer internship program for undergraduates in science/engineering. Fully funded with stipend.",
        link: "https://scholarshipscorner.website/lpi-summer-internship-united-states/"
    },
    {
        id: "nus-amgen-scholars-2026",
        title: "NUS Amgen Scholars Program 2026 in Singapore",
        country: "Singapore",
        company: "National University of Singapore (NUS)",
        level: "Internship",
        funding: "fully-funded",
        deadline: "February 1, 2026",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/1200px-NUS_coat_of_arms.svg.png",
        description: "Fully funded 8-week summer research internship at NUS Singapore. Open to undergraduates in Asia. Includes stipend, airfare, and accommodation.",
        link: "nus-amgen-scholars-program-2026.html"
    }
];

function renderInternships(data) {
    const grid = document.getElementById('internshipsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px;"><h3>No internships found matching your criteria.</h3></div>';
        return;
    }

    data.forEach(item => {
        let badgeClass = 'card-tag';
        let badgeStyle = '';
        if (item.funding === 'fully-funded') {
            badgeStyle = 'background-color: #dcfce7; color: #166534;'; 
        } else {
            badgeStyle = 'background-color: #fef3c7; color: #d97706;'; 
        }
        
        const card = document.createElement('article');
        card.className = 'scholarship-card'; // Reuse style
        card.innerHTML = `
            <div class="card-content">
                <span class="${badgeClass}" style="${badgeStyle}">${item.funding === 'fully-funded' ? 'Paid / Fully Funded' : 'Unpaid / Partial'}</span>
                <h3>${item.title}</h3>
                <div class="university">
                    <i class="fas fa-building"></i> ${item.company}
                </div>
                <div class="scholarship-details">
                    <div class="detail-item"><i class="fas fa-briefcase"></i> ${item.level}</div>
                    <div class="detail-item"><i class="far fa-clock"></i> Deadline: ${item.deadline}</div>
                    <div class="detail-item"><i class="fas fa-globe"></i> ${item.country.toUpperCase()}</div>
                </div>
                <p>${item.description}</p>
                <div class="card-actions">
                    <a href="${item.link}" ${item.link.startsWith('http') ? 'target="_blank"' : ''} class="btn btn-primary">Apply Now</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterInternships() {
    const searchInput = document.getElementById('internshipSearch').value.toLowerCase();
    const countryFilter = document.getElementById('countryFilter').value.toLowerCase();

    const filtered = internshipsData.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchInput) || 
                              item.company.toLowerCase().includes(searchInput) ||
                              item.country.toLowerCase().includes(searchInput);
        
        const matchesCountry = countryFilter === '' || item.country.toLowerCase().includes(countryFilter); // Loose match for 'Worldwide' vs 'usa'
        
        return matchesSearch && matchesCountry;
    });

    renderInternships(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('internshipSearch');
    const countryFilter = document.getElementById('countryFilter');

    if (searchInput) searchInput.addEventListener('keyup', filterInternships);
    if (countryFilter) countryFilter.addEventListener('change', filterInternships);

    const urlParams = new URLSearchParams(window.location.search);
    const countryParam = urlParams.get('country');

    if (countryParam && countryFilter) {
        countryFilter.value = countryParam;
    }

    // Initial Render
    filterInternships();
});
