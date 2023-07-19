const keyFindings = [
  {
    heading: 'Improved communication',
    percentage: 83,
    summary: 'Patient communication was enhanced',
    image: {
        src: 'https://res.cloudinary.com/postscript-medical/image/upload/v1622576446/marketing-website/improved-communication.jpg',
        alt: '',
        width: 1280,
        height: 904,
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
        src: 'https://res.cloudinary.com/postscript-medical/image/upload/v1622576446/marketing-website/time-well-spent.jpg',
        alt: '',
        width: 1280,
        height: 904,
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
    summary: 'Patients have a better understanding of their medications'
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
        src: 'https://res.cloudinary.com/postscript-medical/image/upload/v1622576446/marketing-website/positive-feedback.jpg',
        alt: '',
        width: 1280,
        height: 904,
    }
  },
]

export default {
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