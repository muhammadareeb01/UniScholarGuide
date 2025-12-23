const scholarshipsData = [
    // USA Scholarships
    {
        id: "upg-sustainability-usa",
        title: "UPG Sustainability Leadership Program 2026",
        country: "usa",
        university: "Hurricane Island Center",
        level: "Training/Leadership",
        funding: "fully-funded",
        deadline: "December 31, 2025",
        image: "https://scholarshipscorner.website/wp-content/uploads/2024/10/UPG-Sustainability-Leadership-Program-2025-in-USA.jpg", // Placeholder or generic
        description: "A fully funded leadership program in the USA. Covers flights, accommodation, and training materials. Open to all nationalities.",
        link: "https://scholarshipscorner.website/upg-sustainability-leadership-program-usa/"
    },
    {
        id: "reagan-fascell-usa",
        title: "Reagan-Fascell Democracy Fellowship 2026",
        country: "usa",
        university: "National Endowment for Democracy",
        level: "Fellowship",
        funding: "fully-funded",
        deadline: "December 31, 2025",
        image: "https://scholarshipscorner.website/wp-content/uploads/2024/09/Reagan-Fascell-Democracy-Fellowship-2025-2026-in-USA.jpg",
        description: "A fully funded 5-month fellowship in Washington D.C. for activists, journalists, and scholars. Includes monthly stipend and housing.",
        link: "https://scholarshipscorner.website/reagan-fascell-democracy-fellowship/"
    },

    {
        id: "gates-scholarship-usa",
        title: "The Gates Scholarship 2026",
        country: "usa",
        university: "US Universities",
        level: "bachelors",
        funding: "fully-funded",
        deadline: "September 15, 2025",
        image: "https://scholarshipscorner.website/wp-content/uploads/2023/07/The-Gates-Scholarship-2024-in-United-States.jpg",
        description: "Highly selective, fully funded scholarship for outstanding minority high school seniors in the US.",
        link: "https://www.thegatesscholarship.org/scholarship"
    },

    // Germany Scholarships
    {
        id: "raad-scholarship-germany",
        title: "DAAD Scholarship 2026",
        country: "germany",
        university: "German Universities",
        level: "masters",
        funding: "fully-funded",
        deadline: "Varies (Sep-Dec)",
        image: "https://scholarshipscorner.website/wp-content/uploads/2024/05/DAAD-Scholarship-2025-26-in-Germany.jpg",
        description: "Fully funded scholarships for Masters and PhD students from developing countries. Covers stipend, health insurance, and travel.",
        link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
    },
    {
        id: "konrad-adenauer-germany",
        title: "Konrad-Adenauer-Stiftung Scholarship",
        country: "germany",
        university: "German Universities",
        level: "masters",
        funding: "partial",
        deadline: "January 15, 2026",
        image: "https://scholarshipscorner.website/wp-content/uploads/2024/06/Konrad-Adenauer-Stiftung-Scholarship-in-Germany.jpg",
        description: "Scholarships for international students with €850 (Masters) or €1200 (PhD) monthly stipend. Requires political/social engagement.",
        link: "https://www.kas.de/en/web/begabtenfoerderung-und-kultur/foreign-students"
    },
    {
        id: "heinrich-boell-germany",
        title: "Heinrich Böll Foundation Scholarship",
        country: "germany",
        university: "German Universities",
        level: "masters",
        funding: "fully-funded",
        deadline: "March 1, 2026",
        image: "https://scholarshipscorner.website/wp-content/uploads/2024/01/Heinrich-Boll-Foundation-Scholarships-in-Germany.jpg",
        description: "Scholarships for all subjects. Values ecology, sustainability, and democracy. Monthly stipend included.",
        link: "https://www.boell.de/en/scholarships"
    },

    // UK Scholarships
    {
        id: "chevening-uk",
        title: "Chevening Scholarship 2026",
        country: "uk",
        university: "UK Universities",
        level: "masters",
        funding: "fully-funded",
        deadline: "November 5, 2025",
        image: "https://scholarshipscorner.website/wp-content/uploads/2024/08/Chevening-Scholarship-2025-in-UK.jpg",
        description: "UK Government's global scholarship program. Fully funded one-year master's degree at any UK university.",
        link: "https://www.chevening.org/"
    },
    {
        id: "gates-cambridge-uk",
        title: "Gates Cambridge Scholarship",
        country: "uk",
        university: "University of Cambridge",
        level: "masters",
        funding: "fully-funded",
        deadline: "December 5, 2025",
        image: "https://scholarshipscorner.website/wp-content/uploads/2024/09/Gates-Cambridge-Scholarship-2025-in-UK.jpg",
        description: "Prestigious fully funded scholarship for postgraduate study at the University of Cambridge.",
        link: "https://www.gatescambridge.org/"
    },
    {
        id: "commonwealth-uk",
        title: "Commonwealth Scholarship",
        country: "uk",
        university: "UK Universities",
        level: "masters",
        funding: "fully-funded",
        deadline: "October 17, 2025",
        image: "https://scholarshipscorner.website/wp-content/uploads/2024/09/Commonwealth-Masters-Scholarships-2025-in-UK.jpg",
        description: "For students from developing Commonwealth countries. Covers tuition, airfare, and living allowance.",
        link: "https://cscuk.fcdo.gov.uk/scholarships/"
    },

    // Canada
    {
        id: "vanier-canada",
        title: "Vanier Canada Graduate Scholarship",
        country: "canada",
        university: "Canadian Universities",
        level: "phd",
        funding: "fully-funded",
        deadline: "November 1, 2025",
        image: "https://scholarshipscorner.website/wp-content/uploads/2023/06/Vanier-Canada-Graduate-Scholarships-2024.jpg",
        description: "Valued at $50,000 per year for 3 years for doctoral students. Open to international students.",
        link: "https://vanier.gc.ca/en/home-accueil.html"
    },
    {
        id: "pearson-canada",
        title: "Lester B. Pearson Scholarship",
        country: "canada",
        university: "University of Toronto",
        level: "bachelors",
        funding: "fully-funded",
        deadline: "January 15, 2026",
        image: "https://scholarshipscorner.website/wp-content/uploads/2023/09/Lester-B.-Pearson-International-Scholarships-2024-in-Canada.jpg",
        description: "Fully funded scholarship for international students at UofT. Covers tuition, books, incidental fees, and full residence support.",
        link: "https://future.utoronto.ca/pearson/about/"
    },
    
    // Turkey
    {
        id: "turkiye-burslari",
        title: "Turkiye Burslari Scholarship 2026",
        country: "turkey",
        university: "Turkish Universities",
        level: "bachelors, masters, phd",
        funding: "fully-funded",
        deadline: "February 20, 2026",
        image: "https://scholarshipscorner.website/wp-content/uploads/2024/01/Turkiye-Burslari-Scholarship-2024.jpg",
        description: "Government-funded scholarship covering tuition, accommodation, stipend, and insurance for all degree levels. No IELTS required.",
        link: "turkey.html"
    },
    {
        id: "kadir-has-turkey",
        title: "Kadir Has University Scholarship 2026",
        country: "turkey",
        university: "Kadir Has University",
        level: "bachelors",
        funding: "partial",
        deadline: "June 30, 2026",
        image: "https://wiki.dint.upm.es/images/thumb/7/70/Kadir_Has_University.png/300px-Kadir_Has_University.png",
        description: "White Doves Scholarship Program for undergraduate students. Applications open until June 2026.",
        link: "turkey.html"
    },
    {
        id: "sabanci-university-turkey",
        title: "Sabanci University Scholarship 2026",
        country: "turkey",
        university: "Sabanci University",
        level: "bachelors, masters, phd",
        funding: "fully-funded",
        deadline: "Varies",
        image: "https://upload.wikimedia.org/wikipedia/tr/6/62/Sabanc%C4%B1_%C3%9Cniversitesi_logo.png",
        description: "Fully funded scholarships for international students at all degree levels. Merit-based.",
        link: "turkey.html"
    },
    {
        id: "bilkent-university-turkey",
        title: "Bilkent University Scholarship 2026",
        country: "turkey",
        university: "Bilkent University",
        level: "bachelors, masters, phd",
        funding: "fully-funded",
        deadline: "Varies",
        image: "https://w3.bilkent.edu.tr/logo/bilkent-logo-en.png",
        description: "Comprehensive scholarship for high-achieving international students. Covers tuition and accommodation.",
        link: "turkey.html"
    },
    {
        id: "koc-university-turkey",
        title: "Koc University Scholarship 2026",
        country: "turkey",
        university: "Koç University",
        level: "masters, phd",
        funding: "fully-funded",
        deadline: "June 30, 2026",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0N-i25T2D3Yv9H_G8Jt7b_z4U7g8k_X5lXw&s",
        description: "Premier Turkish university offering fully funded positions for graduate studies. No IELTS mandatory.",
        link: "turkey.html"
    },

    // Brunei
    {
        id: "brunei-government-scholarship",
        title: "Government of Brunei Darussalam Scholarship 2026",
        country: "brunei",
        university: "Brunei Universities",
        level: "diploma, bachelors, masters",
        funding: "fully-funded",
        deadline: "February 15, 2026",
        image: "https://images.unsplash.com/photo-1558285549-3fa446dce77d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Fully funded scholarship for Diploma, Undergraduate, and Master's degrees in Brunei. Covers tuition, airfare, accommodation, and allowances.",
        link: "brunei.html"
    },

    // Hungary
    {
        id: "hungary-carthage-scholarship",
        title: "University of Carthage Hungarian Scholarships 2026",
        country: "hungary",
        university: "Hungarian Public Universities",
        level: "bachelors, masters, phd",
        funding: "fully-funded",
        deadline: "January 15, 2026",
        image: "https://images.unsplash.com/photo-1549877452-9c3f8c01520b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Fully funded Stipendium Hungaricum scholarships for Bachelor, Master, and PhD degrees. Covers tuition, housing, and monthly stipend.",
        link: "hungary.html"
    },

    // Ireland
    {
        id: "hardiman-phd-ireland",
        title: "Hardiman PhD Scholarships 2026",
        country: "ireland",
        university: "University of Galway",
        level: "phd",
        funding: "fully-funded",
        deadline: "February 6, 2026",
        image: "https://images.unsplash.com/photo-1568803133646-e575bc8627eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Prestigious fully funded PhD scholarship in Ireland. Covers tuition fees + €25,000 annual stipend for 4 years.",
        link: "ireland.html"
    },

    // Korea
    {
        id: "korea-scholarships-2026",
        title: "Korean Scholarships 2026 | Fully Funded",
        country: "korea",
        university: "Top Korean Universities",
        level: "bachelors, masters, phd",
        funding: "fully-funded",
        deadline: "Varies (Sep-Nov)",
        image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Fully funded scholarships for international students in South Korea. Covers tuition, stipend, and airfare. Includes SNU, KAIST, UST.",
        link: "korea.html"
    },
    // Finland
    {
        id: "finland-scholarships-2026",
        title: "Finland Scholarships Without IELTS 2026",
        country: "finland",
        university: "Finnish Universities",
        level: "bachelors, masters, phd",
        funding: "fully-funded",
        deadline: "Varies (Jan-Mar)",
        image: "https://images.unsplash.com/photo-1548625361-987cb281895a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Fully funded scholarships for Bachelor’s, Master’s, and PhD programs in Finland. IELTS not mandatory for many programs.",
        link: "finland.html"
    },
    // Italy
    {
        id: "sapienza-university-2026",
        title: "Sapienza University of Rome Admission 2026-2027",
        country: "italy",
        university: "Sapienza University of Rome",
        level: "bachelors, masters",
        funding: "fully-funded",
        deadline: "May 15, 2026",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Admissions open for 2026-2027. English-taught programs in AI, Engineering, Business, and more. Regional scholarships available.",
        link: "sapienza.html"
    },
    // Malta
    {
        id: "university-of-malta-2026",
        title: "University of Malta Scholarships 2026 | Fully Funded",
        country: "malta",
        university: "University of Malta",
        level: "masters, phd",
        funding: "fully-funded",
        deadline: "April 30, 2026",
        image: "https://images.unsplash.com/photo-1552055620-cd04cc5c5d0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Study in Europe. Fully funded / Partially funded Tuition Waivers for Master by Research & PhD students at UoM.",
        link: "malta.html"
    },
    // Russia
    {
        id: "open-doors-russia-2026",
        title: "Russian Government & Open Doors Scholarship 2026",
        country: "russia",
        university: "Top Russian Universities",
        level: "bachelors, masters, phd",
        funding: "fully-funded",
        deadline: "Dec 2025 - Jan 2026",
        image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Fully funded scholarships by Russian Government and Open Doors Project. Covers tuition, accommodation and stipend.",
        link: "russia.html"
    }
];

// Function to render scholarships
function renderScholarships(data) {
    const grid = document.getElementById('scholarshipsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px;"><h3>No scholarships found matching your criteria.</h3></div>';
        return;
    }

    data.forEach(item => {
        // Determine badge color
        let badgeClass = 'card-tag';
        let badgeStyle = '';
        if (item.funding === 'fully-funded') {
            badgeStyle = 'background-color: #dcfce7; color: #166534;'; 
        } else {
            badgeStyle = 'background-color: #fef3c7; color: #d97706;'; 
        }
        
        // Formatting specific fields if arrays
        const levelDisplay = item.level.charAt(0).toUpperCase() + item.level.slice(1);

        const card = document.createElement('article');
        card.className = 'scholarship-card';
        card.innerHTML = `
            <div class="card-content">
                <span class="${badgeClass}" style="${badgeStyle}">${item.funding === 'fully-funded' ? 'Fully Funded' : 'Partially Funded'}</span>
                <h3>${item.title}</h3>
                <div class="university">
                    <i class="fas fa-university"></i> ${item.university}
                </div>
                <div class="scholarship-details">
                    <div class="detail-item"><i class="fas fa-graduation-cap"></i> ${levelDisplay}</div>
                    <div class="detail-item"><i class="far fa-clock"></i> Deadline: ${item.deadline}</div>
                    <div class="detail-item"><i class="fas fa-globe"></i> ${item.country.toUpperCase()}</div>
                </div>
                <p>${item.description}</p>
                <div class="card-actions">
                    <a href="${item.link}" target="_blank" class="btn btn-primary">Apply Now</a>
                    <!-- <a href="scholarship-detail.html?id=${item.id}" class="btn btn-outline">View Details</a> --> 
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Function to filter
function filterScholarships() {
    const searchInput = document.getElementById('scholarshipSearch').value.toLowerCase();
    const countryFilter = document.getElementById('countryFilter').value.toLowerCase();
    const degreeFilter = document.getElementById('degreeFilter').value.toLowerCase();
    const fundingFilter = document.getElementById('fundingFilter').value.toLowerCase();

    const filtered = scholarshipsData.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchInput) || 
                              item.university.toLowerCase().includes(searchInput) ||
                              item.country.toLowerCase().includes(searchInput);
        
        const matchesCountry = countryFilter === '' || item.country === countryFilter;
        
        // Simple degree matching (improve if levels become complex arrays)
        const matchesDegree = degreeFilter === '' || item.level.includes(degreeFilter) || (item.id === 'turkiye-burslari'); // Hack for mixed
        
        const matchesFunding = fundingFilter === '' || item.funding === fundingFilter;

        return matchesSearch && matchesCountry && matchesDegree && matchesFunding;
    });

    renderScholarships(filtered);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Attach listeners
    const searchInput = document.getElementById('scholarshipSearch');
    const countryFilter = document.getElementById('countryFilter');
    const degreeFilter = document.getElementById('degreeFilter');
    const fundingFilter = document.getElementById('fundingFilter');

    if (searchInput) searchInput.addEventListener('keyup', filterScholarships);
    if (countryFilter) countryFilter.addEventListener('change', filterScholarships);
    if (degreeFilter) degreeFilter.addEventListener('change', filterScholarships);
    if (fundingFilter) fundingFilter.addEventListener('change', filterScholarships);

    // Check URL Params
    const urlParams = new URLSearchParams(window.location.search);
    const countryParam = urlParams.get('country');
    const levelParam = urlParams.get('level');
    const fundingParam = urlParams.get('funding');

    if (countryParam && countryFilter) countryFilter.value = countryParam;
    if (levelParam && degreeFilter) degreeFilter.value = levelParam;
    if (fundingParam && fundingFilter) fundingFilter.value = fundingParam;

    // Initial Render (with filters applied if any)
    filterScholarships(); // This will read from the inputs we just set
});
