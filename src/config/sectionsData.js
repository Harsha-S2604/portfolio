import { About, Projects, Contacts, Experience } from "../components/Sections/section"

const sectionsData = [
    {
        "sectionName": "Name",
        "sectionType": "brand",
        "sectionValue": "Harsha",
        "sectionTo": "top",
    },
    {
        "sectionName": "About",
        "sectionType": "item",
        "sectionTo": "about",
        "sectionComponent": About,
        "sectionValue": {
            "info": {
                "name": "Harsha",
                "about": "Short text with details about you, what you do or your professional career. You can add more information on the about page.",
                "profession": "Software Engineer"
            }
        }
    },
    {
        "sectionName": "Projects",
        "sectionType": "item",
        "sectionTo": "projects",
        "sectionComponent": Projects,
        "sectionValue": [
            {
                "projectName": 'Project 1',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                "projectImage": "Project_1.jpeg"
            },
            {
                "projectName": 'Project 2',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                "projectImage": "Project_2.jpeg"
            },
            {
                "projectName": 'Project 3',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                "projectImage": "Project_3.jpeg"
            },
            {
                "projectName": 'Project 4',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                "projectImage": "Project_3.jpeg"
            },
            {
                "projectName": 'Project 5',
                "projectDescription": "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
                "projectSource": "https://www.example.com",
                "projectImage": "Project_3.jpeg"
            },
            

        ]
    },
    {
        "sectionName": "Experience",
        "sectionType": "item",
        "sectionTo": "experience",
        "sectionValue": [
            {
                "companyName": 'Sivi.ai',
                "experienceDesc": "Turn your text into visual content instantly with Sivi. Using artificial intelligence, you can auto-generate editable banners, social posts, google display ads, and more from your story, webpage, article, etc.",
                "companyImage": "experience-1.png"
            }
        ],
        "sectionComponent": Experience,
    },
    {
        "sectionName": "Education",
        "sectionType": "item",
        "sectionTo": "contacts",
        "sectionComponent": Contacts
    },
    {
        "sectionName": "Awards",
        "sectionType": "item",
        "sectionTo": "contacts",
        "sectionComponent": Contacts
    },
    {
        "sectionName": "Hobbies",
        "sectionType": "item",
        "sectionTo": "contacts",
        "sectionComponent": Contacts
    },
    {
        "sectionName": "Volunteering",
        "sectionType": "item",
        "sectionTo": "contacts",
        "sectionComponent": Contacts
    },
    {
        "sectionName": "Contacts",
        "sectionType": "item",
        "sectionTo": "contacts",
        "sectionComponent": Contacts
    }
]

export default sectionsData