interface ContactInfo {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
}

interface Education {
    period: string;
    institution: string;
    degree: string;
}

interface Skill {
    name: string;
    level: string;
}

interface WorkExperience {
    position: string;
    company: string;
    period: string;
    responsibilities: string[];
}

interface Project {
    name: string;
    description: string;
}

interface CVData {
    name: string;
    title: string;
    contactInfo: ContactInfo;
    education: Education[];
    skills: Skill[];
    workExperience: WorkExperience[];
    projects: Project[];
}

document.addEventListener('DOMContentLoaded', () => {
    // Tu código para manipular el DOM aquí
});

async function loadCVData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Rellenar el HTML con los datos del JSON
        document.getElementById('name')!.textContent = data.name;
        document.getElementById('title')!.textContent = data.title;

        document.getElementById('naoto')!.innerHTML = `<img src="${'naoto.gif'}" alt="">`

        const contactInfo = data.contactInfo;
        document.getElementById('phone')!.textContent = contactInfo.phone;
        document.getElementById('email')!.textContent = contactInfo.email;
        document.getElementById('location')!.textContent = contactInfo.location;
        document.getElementById('linkedin')!.innerHTML = `<a href="${contactInfo.linkedin}">LinkedIn</a>`;

        const educationDetails = data.education.map((ed: any) => `
            ${ed.period} - ${ed.institution} - ${ed.degree}
        `).join('<br>');
        document.getElementById('education-details')!.innerHTML = educationDetails;

        const skillsList = data.skills.map((skill: any) => `<li>${skill.name}</li>`).join('');
        document.getElementById('skills-list')!.innerHTML = skillsList;

        const experienceList = data.workExperience.map((exp: any) => `
            <div>
                <h4>${exp.position}</h4>
                <p>${exp.company} - ${exp.period}</p>
                <ul>${exp.responsibilities.map((res: string) => `<li>${res}</li>`).join('')}</ul>
            </div>
        `).join('');
        document.getElementById('experience-list')!.innerHTML = experienceList;

        const projectsList = data.projects.map((proj: any) => `<li>${proj.name}: ${proj.description}</li>`).join('');
        document.getElementById('projects-list')!.innerHTML = projectsList;

        const form = document.getElementById('contact-form') as HTMLFormElement;
        form.action = data.contact.formAction;

    } catch (error) {
        console.error('Failed to load CV data:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadCVData);

console.log("hola mundo")