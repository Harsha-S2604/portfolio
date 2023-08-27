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
                "projectDescription": "This is the short description for project 1",
                "projectLink": "some link",
                "projectImage": "project1.jpg"
            },
            {
                "projectName": 'Project 2',
                "projectDescription": "This is the short description for project 2",
                "projectLink": "some link",
                "projectImage": "project2.jpg"
            },
            {
                "projectName": 'Project 3',
                "projectDescription": "This is the short description for project 3",
                "projectLink": "some link",
                "projectImage": "project3.jpg"
            }
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