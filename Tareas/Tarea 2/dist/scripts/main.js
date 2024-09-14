var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    // Tu código para manipular el DOM aquí
});
function loadCVData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = yield response.json();
            // Rellenar el HTML con los datos del JSON
            document.getElementById('name').textContent = data.name;
            document.getElementById('title').textContent = data.title;
            document.getElementById('naoto').innerHTML = `<img src="${'naoto.gif'}" alt="">`;
            const contactInfo = data.contactInfo;
            document.getElementById('phone').textContent = contactInfo.phone;
            document.getElementById('email').textContent = contactInfo.email;
            document.getElementById('location').textContent = contactInfo.location;
            document.getElementById('linkedin').innerHTML = `<a href="${contactInfo.linkedin}">LinkedIn</a>`;
            const educationDetails = data.education.map((ed) => `
            ${ed.period} - ${ed.institution} - ${ed.degree}
        `).join('<br>');
            document.getElementById('education-details').innerHTML = educationDetails;
            const skillsList = data.skills.map((skill) => `<li>${skill.name}</li>`).join('');
            document.getElementById('skills-list').innerHTML = skillsList;
            const experienceList = data.workExperience.map((exp) => `
            <div>
                <h4>${exp.position}</h4>
                <p>${exp.company} - ${exp.period}</p>
                <ul>${exp.responsibilities.map((res) => `<li>${res}</li>`).join('')}</ul>
            </div>
        `).join('');
            document.getElementById('experience-list').innerHTML = experienceList;
            const projectsList = data.projects.map((proj) => `<li>${proj.name}: ${proj.description}</li>`).join('');
            document.getElementById('projects-list').innerHTML = projectsList;
        }
        catch (error) {
            console.error('Failed to load CV data:', error);
        }
    });
}
document.addEventListener('DOMContentLoaded', loadCVData);
console.log("hola mundo");