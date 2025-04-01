function showContent(type) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = ''; // Clear previous content

    if (type === 'image') {
        contentArea.innerHTML = `
        <div id="image-slider" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="./img/firstyear_deanslist.jpg" class="d-block w-100" alt="Image 1">
            </div>
            
            <div class="carousel-item">
                <img src="./img/ici_panelist.jpg" class="d-block w-100 icipanel" alt="Image 2">
            </div>
            <div class="carousel-item">
                <img src="./img/ui_champion.jpg" class="d-block w-100" alt="Image 3">
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#image-slider" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#image-slider" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        `;
    } else if (type === 'achievement') {
        contentArea.innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Dean's Lister - First Semester (First Year)</li>
            <li class="list-group-item">UI Design Champion (CCS Days 2024)</li>
            <li class="list-group-item">Layout Artist (CCS Days 2024)</li>
            <li class="list-group-item">First Year Panelist 2024</li>
            <li class="list-group-item">Iligan Computer Institute - Iligan (ICI- Iligan) Panelist 2025</li>
        </ul>
        `;
    }
    }

    function showGradeGPA() {
    const gradeSelect = document.getElementById('grade-select');
    const selectedGrade = gradeSelect.value;
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = ''; // Clear previous content

    if (selectedGrade) {
        const gpaData = {
        "First": { firstSem: 1.5, secondSem: 1.7 },
        "Second": { firstSem: 0, secondSem: 0 },
        "Third": { firstSem: 0, secondSem: 0 },
        "Fourth": { firstSem: 0 , secondSem: 0 }
        };

        const gpa = gpaData[selectedGrade];
        contentArea.innerHTML = `
        <h3>${selectedGrade} Year GPA</h3>
        <ul class="list-group">
            <li class="list-group-item">First Semester GPA: ${gpa.firstSem}</li>
            <li class="list-group-item">Second Semester GPA: ${gpa.secondSem}</li>
        </ul>
        `;
    }
    }