const keyFindings = [{
        heading: 'Improved communication',
        percentage: 83,
        summary: 'Patitent communication was enhanced',
        image: {
            src: 'https://res.cloudinary.com/obscura-limited/image/upload/v1618668971/postscript-medical/marketing-website/improved-communication_wwposz.jpg',
            alt: ''
        }
    },
    {
        percentage: 81,
        summary: 'My patients were more engaged'
    },
    {
        percentage: 89,
        summary: 'Explaining complex terminology was made easier'
    },
    {
        heading: 'Time well spent',
        percentage: 72,
        summary: 'Use of time during consultation was more efficient',
        image: {
            src: 'https://res.cloudinary.com/obscura-limited/image/upload/v1618668971/postscript-medical/marketing-website/time-well-spent_juws9t.jpg',
            alt: ''
        }
    },
    {
        percentage: 66,
        summary: 'Helped in patients with language barriers'
    },
    {
        percentage: 89,
        summary: 'Improved patient knowledge of their condition'
    },
    {
        percentage: 74,
        summary: 'Patients have a better understanding of their medications'
    },
    {
        percentage: 85,
        summary: 'Patients have a better understanding of surgery'
    },
    {
        percentage: 53,
        summary: 'Improves adherence to medications'
    },
    {
        heading: 'Unanimous positive feedback',
        percentage: 100,
        summary: 'Would use our Illustrative Guide in routine practice',
        image: {
            src: 'https://res.cloudinary.com/obscura-limited/image/upload/v1618951887/postscript-medical/marketing-website/positive-feedback_zvuqdy.jpg',
            alt: ''
        }
    },
]

module.exports = {
    homePage: [
        keyFindings[0],
        keyFindings[1],
        keyFindings[2]
    ],
    researchPage1: [
        keyFindings[2],
        keyFindings[4],
        keyFindings[5],
    ],
    researchPage2: [
        keyFindings[6],
        keyFindings[7],
        keyFindings[8]
    ],
    cardContent1: keyFindings[9],
    cardContent2: keyFindings[0],
    cardContent3: keyFindings[3],
}