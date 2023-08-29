import { About, Projects, Contacts } from "../components/Sections/section"

const sectionsData = [
    {
        "sectionName": "Name",
        "sectionType": "brand",
        "sectionValue": "Prerana Chakraborty",
        "sectionTo": "top",
    },
    {
        "sectionName": "About",
        "sectionType": "item",
        "sectionTo": "about",
        "sectionComponent": About,
        "sectionValue": {
            "info": {
                "name": "Prerana Chakraborty",
                "about": "Short text with details about you, what you do or your professional career. You can add more information on the about page.",
                "profession": "Data Scientist | Author | Singer | Baker | Horse Rider"
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
        "sectionName": "Contacts",
        "sectionType": "item",
        "sectionTo": "contacts",
        "sectionComponent": Contacts
    }
]

export default sectionsData