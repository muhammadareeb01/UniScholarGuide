document.addEventListener('DOMContentLoaded', async function() {
    await loadHeaderAndFooter();

    // Mobile menu initialization is handled in loadHeaderAndFooter() wrapper

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Advanced Search & Filter functionality
    const searchInput = document.getElementById('scholarshipSearch');
    const countrySelect = document.querySelector('select:nth-of-type(1)');
    const degreeSelect = document.querySelector('select:nth-of-type(2)');
    const fundingSelect = document.querySelector('select:nth-of-type(3)');
    const scholarshipCards = document.querySelectorAll('.scholarship-card');

    function filterScholarships() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const countryFilter = countrySelect ? countrySelect.value.toLowerCase() : '';
        const degreeFilter = degreeSelect ? degreeSelect.value.toLowerCase() : '';
        const fundingFilter = fundingSelect ? fundingSelect.value.toLowerCase() : '';

        scholarshipCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const university = card.querySelector('.university').textContent.toLowerCase();
            const textContent = card.textContent.toLowerCase();
            const tags = card.querySelector('.card-tag').textContent.toLowerCase();

            // Check matches
            const matchesSearch = title.includes(searchTerm) || university.includes(searchTerm) || textContent.includes(searchTerm);
            
            // For demo purposes, we are checking text content for filters as we don't have data attributes on cards in this static version.
            // In a real app, use data-country="usa" etc.
            const matchesCountry = countryFilter === '' || textContent.includes(countryFilter);
            const matchesDegree = degreeFilter === '' || textContent.includes(degreeFilter); 
            // Mapping for funding might need loose matching or specific data attributes
            const matchesFunding = fundingFilter === '' || tags.includes(fundingFilter) || textContent.includes(fundingFilter);

            if (matchesSearch && matchesCountry && matchesDegree && matchesFunding) {
                card.style.display = 'block';
                // Add animation class for smooth appearance
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (searchInput) searchInput.addEventListener('keyup', filterScholarships);
    if (countrySelect) countrySelect.addEventListener('change', filterScholarships);
    if (degreeSelect) degreeSelect.addEventListener('change', filterScholarships);
    if (fundingSelect) fundingSelect.addEventListener('change', filterScholarships);

    // Check for URL parameters (e.g. from Home page specific country links)
    const urlParams = new URLSearchParams(window.location.search);
    const countryParam = urlParams.get('country');
    if (countryParam && countrySelect) {
        countrySelect.value = countryParam;
        filterScholarships(); // Apply filter immediately
    }

    // Dynamic Copyright Year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Simple Form Validation (Contact Form)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate form submission
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // Dynamic Detail Page Population (Italy & others)
    const detailHeader = document.querySelector('.detail-header');
    if (detailHeader) {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const country = urlParams.get('country');

        if (id && country === 'italy') {
            fetch('italy_data.json')
                .then(response => response.json())
                .then(data => {
                    const uni = data.find(item => item.id == id);
                    if (uni) {
                        // Update Header
                        document.querySelector('.detail-header h1').textContent = uni.university + ' Admission 2025';
                        document.querySelector('.detail-header .card-tag').textContent = uni.status === 'Open' ? 'Open for Admission' : 'Closed';
                        // Update Meta
                        const metaSpans = document.querySelectorAll('.detail-meta span');
                        if (metaSpans.length >= 4) {
                            metaSpans[0].innerHTML = '<i class="fas fa-flag"></i> Italy';
                            metaSpans[1].innerHTML = '<i class="fas fa-university"></i> ' + uni.university;
                            metaSpans[2].innerHTML = '<i class="far fa-clock"></i> Deadline: ' + uni.deadline;
                            metaSpans[3].innerHTML = '<i class="fas fa-dollar-sign"></i> Fee: ' + uni.admission_fees;
                        }
                        
                        // Update Link
                        const applyLink = document.querySelector('.detail-header .btn-primary');
                        if (applyLink) {
                            applyLink.href = uni.application_link;
                            applyLink.textContent = 'Apply Now';
                        }


                        // Update Description
                        const descSection = document.querySelector('.main-content .content-block p');
                        if (descSection) {
                            descSection.textContent = uni.description || `Apply now to ${uni.university}. This prestigious Italian university offers various Bachelors, Masters, and PhD programs. Check the official website for specific course details and requirements.`;
                        }
                        
                        // Inject Additional Details (English & Regional Scholarship)
                        const mainContent = document.querySelector('.main-content');
                        
                        // Remove existing appended sections if any (to prevent duplicates on re-render if we were using a SPA approach, though here it is a page load)
                        const existingExtra = document.getElementById('italy-extra-info');
                        if (existingExtra) existingExtra.remove();
                        
                        const extraInfoDiv = document.createElement('div');
                        extraInfoDiv.id = 'italy-extra-info';
                        extraInfoDiv.innerHTML = `
                            <div class="content-block" style="margin-top: 30px;">
                                <h2 style="color: var(--secondary-color);">English Language Requirements</h2>
                                <p><i class="fas fa-language" style="color: var(--primary-color); margin-right: 8px;"></i> <strong>Status:</strong> ${uni.english_certificate}</p>
                                <p style="margin-top: 10px; background: #f8fafc; padding: 15px; border-left: 4px solid var(--primary-color); border-radius: 4px;">
                                    ${uni.english_requirement_detail || 'Check the specific admission call. Generally, a B2 level certificate is required.'}
                                </p>
                            </div>

                            <div class="content-block" style="margin-top: 30px;">
                                <h2 style="color: var(--secondary-color);">Regional Scholarship (Fully Funded)</h2>
                                <p>After securing admission, you can apply for the <strong>Regional Scholarship</strong> (DSU/EDISU/ER.GO etc.) based on the university's region.</p>
                                
                                <div style="margin-top: 15px; background: #fffbe6; padding: 15px; border: 1px solid #ffe58f; border-radius: 6px;">
                                    <h4 style="margin-bottom: 10px; color: #b76e00;"><i class="fas fa-coins"></i> Scholarship Benefits</h4>
                                    <ul style="list-style-type: disc; padding-left: 20px;">
                                        <li>Free Accommodation (Hostel)</li>
                                        <li>Free Meals (University Canteen)</li>
                                        <li>Tuition Fee Waiver (100% Free)</li>
                                        <li>Annual Stipend (approx. €6,000 - €7,000)</li>
                                    </ul>
                                </div>

                                <div style="margin-top: 15px;">
                                    <p><strong>Specific Agency:</strong> ${uni.regional_scholarship_info ? uni.regional_scholarship_info.split('.')[0] : 'Regional DSU Office'}</p>
                                    <p><strong>Income Requirement:</strong> To be eligible for the maximum benefit, your family annual income (ISEE Parificato) should typically be less than <strong>€25,000</strong> (Approx. 25-27 Lac PKR).</p>
                                </div>
                            </div>

                            ${uni.popular_courses ? `
                            <div class="content-block" style="margin-top: 30px;">
                                <h2 style="color: var(--secondary-color);">Popular Master's Programs</h2>
                                <p>This university offers English-taught Master's degrees in various fields:</p>
                                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px;">
                                    ${uni.popular_courses.map(course => `<span style="background: #e0f2fe; color: #0369a1; padding: 5px 12px; border-radius: 20px; font-size: 0.9rem; font-weight: 500;">${course}</span>`).join('')}
                                </div>
                            </div>
                            ` : ''}
                            
                            <div class="content-block" style="margin-top: 30px;">
                                <h2 style="color: var(--secondary-color);">Italy Admission Process Roadmap</h2>
                                <div class="timeline" style="border-left: 2px solid #e2e8f0; margin-left: 10px; padding-left: 20px;">
                                    <div style="margin-bottom: 20px; position: relative;">
                                        <div style="position: absolute; left: -26px; top: 5px; width: 12px; height: 12px; background: var(--primary-color); border-radius: 50%;"></div>
                                        <h4 style="margin-bottom: 5px;">1. Secure Admission</h4>
                                        <p style="font-size: 0.9rem; color: #64748b;">Apply to the university and get the acceptance letter.</p>
                                    </div>
                                    <div style="margin-bottom: 20px; position: relative;">
                                        <div style="position: absolute; left: -26px; top: 5px; width: 12px; height: 12px; background: var(--primary-color); border-radius: 50%;"></div>
                                        <h4 style="margin-bottom: 5px;">2. Pre-Enrollment (Universitaly)</h4>
                                        <p style="font-size: 0.9rem; color: #64748b;">Apply for pre-enrollment on the Universitaly portal for Visa processing.</p>
                                    </div>
                                    <div style="margin-bottom: 20px; position: relative;">
                                        <div style="position: absolute; left: -26px; top: 5px; width: 12px; height: 12px; background: var(--primary-color); border-radius: 50%;"></div>
                                        <h4 style="margin-bottom: 5px;">3. Apply for Regional Scholarship</h4>
                                        <p style="font-size: 0.9rem; color: #64748b;">Apply to the regional agency (e.g. ER.GO, EDISU) with family income documents.</p>
                                    </div>
                                    <div style="position: relative;">
                                        <div style="position: absolute; left: -26px; top: 5px; width: 12px; height: 12px; background: var(--primary-color); border-radius: 50%;"></div>
                                        <h4 style="margin-bottom: 5px;">4. Visa & Departure</h4>
                                        <p style="font-size: 0.9rem; color: #64748b;">Submit visa application to the embassy and fly to Italy!</p>
                                    </div>
                                </div>
                            </div>
                        `;
                        
                        mainContent.appendChild(extraInfoDiv);

                        // Inject Popular Courses Section
                        const coursesDiv = document.createElement('div');
                        coursesDiv.id = 'italy-courses-info';
                        coursesDiv.innerHTML = `
                            <div class="content-block" style="margin-top: 30px;">
                                <h2 style="color: var(--secondary-color);">Popular Courses Available</h2>
                                <p style="margin-bottom: 15px;">Italian universities offer a wide range of degrees taught in English. Here are the most popular fields of study for international students:</p>
                                
                                <div class="course-category" style="margin-bottom: 20px;">
                                    <h4 style="color: var(--primary-color); border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;"><i class="fas fa-graduation-cap"></i> Bachelors Programs</h4>
                                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                        <span class="course-tag">Fashion & Design</span>
                                        <span class="course-tag">Business Admin</span>
                                        <span class="course-tag">Engineering (Civil/Mech/Auto)</span>
                                        <span class="course-tag">Computer Science</span>
                                        <span class="course-tag">Medicine (IMAT)</span>
                                        <span class="course-tag">Architecture</span>
                                        <span class="course-tag">International Relations</span>
                                        <span class="course-tag">Tourism Management</span>
                                    </div>
                                </div>

                                <div class="course-category" style="margin-bottom: 20px;">
                                    <h4 style="color: var(--primary-color); border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;"><i class="fas fa-user-graduate"></i> Masters Programs</h4>
                                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                        <span class="course-tag">Data Science & AI</span>
                                        <span class="course-tag">Management Engineering</span>
                                        <span class="course-tag">Global MBA</span>
                                        <span class="course-tag">Luxury Brand Management</span>
                                        <span class="course-tag">Automotive Engineering</span>
                                        <span class="course-tag">Economics & Finance</span>
                                        <span class="course-tag">Molecular Biology</span>
                                        <span class="course-tag">Cybersecurity</span>
                                    </div>
                                </div>

                                <div class="course-category">
                                    <h4 style="color: var(--primary-color); border-bottom: 2px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;"><i class="fas fa-microscope"></i> PhD & Research</h4>
                                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                        <span class="course-tag">Advanced Physics</span>
                                        <span class="course-tag">Nanotechnology</span>
                                        <span class="course-tag">Economics</span>
                                        <span class="course-tag">Cultural Heritage</span>
                                        <span class="course-tag">Molecular Medicine</span>
                                        <span class="course-tag">Aerospace Engineering</span>
                                    </div>
                                </div>
                            </div>
                            
                            <style>
                                .course-tag {
                                    background: #f1f5f9;
                                    color: #334155;
                                    padding: 5px 12px;
                                    border-radius: 20px;
                                    font-size: 0.9rem;
                                    font-weight: 500;
                                    border: 1px solid #cbd5e1;
                                }
                            </style>
                        `;
                        mainContent.appendChild(coursesDiv);

                        document.title = `${uni.university} Admission | UniScholarGuide`;
                    }
                })
                .catch(err => console.error('Error loading detail data:', err));
        }

        if (id && country === 'japan') {
            fetch('japan_data.json')
                .then(response => response.json())
                .then(data => {
                    const uni = data.find(item => item.id == id);
                    if (uni) {
                        // Update Header
                        document.querySelector('.detail-header h1').textContent = uni.university;
                        document.querySelector('.detail-header .card-tag').textContent = uni.status === 'Open' ? 'Open for Application' : 'Closed';
                        // Update Meta
                        const metaSpans = document.querySelectorAll('.detail-meta span');
                        if (metaSpans.length >= 4) {
                            metaSpans[0].innerHTML = '<i class="fas fa-flag"></i> Japan';
                            metaSpans[1].innerHTML = '<i class="fas fa-university"></i> ' + uni.university;
                            metaSpans[2].innerHTML = '<i class="far fa-clock"></i> Deadline: ' + uni.deadline;
                            metaSpans[3].innerHTML = '<i class="fas fa-dollar-sign"></i> Fee: ' + uni.admission_fees;
                        }
                        
                        // Update Link
                        const applyLink = document.querySelector('.detail-header .btn-primary');
                        if (applyLink) {
                            applyLink.href = uni.application_link;
                            applyLink.textContent = 'Apply Now';
                        }


                        // Update Description
                        const descSection = document.querySelector('.main-content .content-block p');
                        if (descSection) {
                            descSection.textContent = uni.description;
                        }
                        
                        // Inject Additional Details
                        const mainContent = document.querySelector('.main-content');
                        
                        const extraInfoDiv = document.createElement('div');
                        extraInfoDiv.id = 'japan-extra-info';
                        extraInfoDiv.innerHTML = `
                            <div class="content-block" style="margin-top: 30px;">
                                <h2 style="color: var(--secondary-color);">Language Requirements</h2>
                                <p><i class="fas fa-language" style="color: var(--primary-color); margin-right: 8px;"></i> <strong>Status:</strong> ${uni.english_certificate}</p>
                                <p style="margin-top: 10px; background: #f8fafc; padding: 15px; border-left: 4px solid var(--primary-color); border-radius: 4px;">
                                    ${uni.english_requirement_detail}
                                </p>
                            </div>

                            <div class="content-block" style="margin-top: 30px;">
                                <h2 style="color: var(--secondary-color);">Program Benefits (Fully Funded)</h2>
                                <p>This fellowship covers all major expenses and provides a handsome salary.</p>
                                
                                <div style="margin-top: 15px; background: #fffbe6; padding: 15px; border: 1px solid #ffe58f; border-radius: 6px;">
                                    <h4 style="margin-bottom: 10px; color: #b76e00;"><i class="fas fa-coins"></i> Fellowship Perks</h4>
                                    <ul style="list-style-type: disc; padding-left: 20px;">
                                        <li><strong>Monthly Salary:</strong> JPY 220,000 (Approx. $1,500)</li>
                                        <li><strong>Accommodation:</strong> Free Room included</li>
                                        <li><strong>Utilities:</strong> Electricity & Wi-Fi covered</li>
                                        <li><strong>Meals:</strong> Provided throughout the program</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="content-block" style="margin-top: 30px;">
                                <h2 style="color: var(--secondary-color);">Application Roadmap</h2>
                                <div class="timeline" style="border-left: 2px solid #e2e8f0; margin-left: 10px; padding-left: 20px;">
                                    <div style="margin-bottom: 20px; position: relative;">
                                        <div style="position: absolute; left: -26px; top: 5px; width: 12px; height: 12px; background: var(--primary-color); border-radius: 50%;"></div>
                                        <h4 style="margin-bottom: 5px;">1. Online Application</h4>
                                        <p style="font-size: 0.9rem; color: #64748b;">Submit your resume and project proposal on the official portal.</p>
                                    </div>
                                    <div style="margin-bottom: 20px; position: relative;">
                                        <div style="position: absolute; left: -26px; top: 5px; width: 12px; height: 12px; background: var(--primary-color); border-radius: 50%;"></div>
                                        <h4 style="margin-bottom: 5px;">2. Interview Stage</h4>
                                        <p style="font-size: 0.9rem; color: #64748b;">Shortlisted candidates will be invited for an online interview.</p>
                                    </div>
                                    <div style="position: relative;">
                                        <div style="position: absolute; left: -26px; top: 5px; width: 12px; height: 12px; background: var(--primary-color); border-radius: 50%;"></div>
                                        <h4 style="margin-bottom: 5px;">3. Visa & Arrival</h4>
                                        <p style="font-size: 0.9rem; color: #64748b;">Apply for the CoE (Certificate of Eligibility) and Visa.</p>
                                    </div>
                                </div>
                            </div>
                        `;
                        
                        mainContent.appendChild(extraInfoDiv);

                        document.title = `${uni.university} | UniScholarGuide`;
                    }
                })
                .catch(err => console.error('Error loading japan detail data:', err));
        }
    }
});

async function loadHeaderAndFooter() {
    // Load Header
    try {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            const headerRes = await fetch('header.html');
            const headerHtml = await headerRes.text();
            
            // Inject header inside the placeholder, or replace the placeholder with header content?
            // Usually easier to inject into a wrapper tag, like <header id="header-placeholder">
            // But if the HTML file has <div id="header-placeholder">, we want the result to be <header>...</header>
            // The header.html content is <div class="container navbar">...</div> because I removed the <header> tag? 
            // Wait, let's allow flexibility.
            
            headerPlaceholder.innerHTML = headerHtml;

            // Highlight Active Link
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = headerPlaceholder.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                if (linkHref === currentPage) {
                    link.classList.add('active');
                }
            });

            // Initialize Menu
            if (typeof initializeMobileMenu === 'function') {
                initializeMobileMenu();
            } else {
                 // Fallback if defined inside the other closure, we might need to expose it or move it out. 
                 // Actually, initializeMobileMenu is defined inside the DOMContentLoaded scope in previous step.
                 // loadHeaderAndFooter is separate function outside?
                 // Let's check scope. loadHeaderAndFooter is defined at bottom. initializeMobileMenu was defined inside DOMContentLoaded.
                 // We will need to move initializeMobileMenu OUT to global scope or pass it.
                 // Easier fix: Move initializeMobileMenu to global scope in next step or redefine logic here.
                 // Wait, I can't call a function defined inside another function.
            }
        }
    } catch (e) {
        console.error('Error loading header:', e);
    }

    // Load Footer
    try {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            const footerRes = await fetch('footer.html');
            const footerHtml = await footerRes.text();
            footerPlaceholder.innerHTML = footerHtml;

            // Update Year
            const yearSpan = document.getElementById('currentYear');
            if (yearSpan) {
                yearSpan.textContent = new Date().getFullYear();
            }
        }
    } catch (e) {
        console.error('Error loading footer:', e);
    }
}

function initializeMobileMenu() {
    console.log('Initializing Mobile Menu interactions...');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.nav-links li');

    if (hamburger && navLinks) {
        hamburger.onclick = () => {
             navLinks.classList.toggle('active');
        };
    }

    // Mobile Dropdown Toggle
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const menu = dropdown.querySelector('.dropdown-menu');
            if (menu) {
                // Prevent link navigation for dropdown parents on mobile
                const link = dropdown.querySelector('a');
                if (link) {
                    link.onclick = (e) => {
                        // Only prevent default if it's mobile view
                        if (window.innerWidth <= 768) {
                            console.log('Dropdown toggled');
                            e.preventDefault(); // Stop navigation
                            e.stopPropagation();
                            
                            // Close other dropdowns
                            dropdowns.forEach(d => {
                                if (d !== dropdown && d.classList.contains('active')) {
                                    d.classList.remove('active');
                                }
                            });

                            dropdown.classList.toggle('active');
                        }
                    };
                }
            }
        });
    }
}
