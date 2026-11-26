// All editable content lives here.
export const DATA = {
  email: 'dharshusenthil2006@gmail.com',
  github: 'https://github.com/Dhars17',
  linkedin: 'https://www.linkedin.com/in/dharshini-s-559a03325',
  leetcode: 'https://leetcode.com/u/Dharshini_Senthil',
  resume: `${import.meta.env.BASE_URL}Dharshini_S_Resume.pdf`, // file lives in /public
  // Update these when your LeetCode profile changes (set a value to null to hide it).
  leetcodeStats: { total: 232, easy: 179, medium: 51, hard: 2 },
  // Shown as a "Learning now" row in Skills. Move to a normal row once comfortable.
  learning: ['Spring Boot', 'Node.js'],
};

export const skills = [
  ['Languages', 'Java, Python'],
  ['Frontend', 'HTML, CSS'],
  ['Backend', 'Java, user authentication, Gmail API, Google Drive API'],
  ['Databases', 'MySQL'],
  ['Tools', 'Git and GitHub'],
  ['Core areas', 'Object-oriented programming (OOP), data structures and algorithms, CRUD operations'],
];

export const projects = [
  {
    title: 'Smart Personal Document Management System',
    meta: '2025. Gmail API, Google Drive API',
    visual: 'diagram',
    facts: [
      ['Problem', 'Personal documents end up spread across several services, so finding one means checking each service separately.'],
      ['What it does', 'Stores, searches and retrieves personal documents from one place, using the Gmail and Google Drive APIs for centralized search.'],
      ['Technologies', 'Gmail API, Google Drive API, user authentication.'],
      ['What I did', 'Built the system by integrating both APIs for centralized search and access, and implemented user authentication to keep documents secure.'],
    ],
  },
  {
    title: 'Student Management System',
    meta: '2025. Java, MySQL',
    visual: 'crud',
    facts: [
      ['Problem', 'Student records need to be stored so they last and can be added to, looked up, corrected and removed.'],
      ['What it does', 'A Java console application to add, view, update and delete student records, saved in a MySQL database.'],
      ['Technologies', 'Java, MySQL, SQL.'],
      ['What I did', 'Developed the application with full CRUD operations and connected it to MySQL so records are stored persistently.'],
    ],
  },
];

export const timeline = [
  ['Internship', 'Intern, ISquare DataSystems (P) Ltd.', 'Learned HTML and CSS and built simple static websites, which gave me my first grounding in web fundamentals.'],
  ['Hackathon', 'Intra-college hackathon', 'Presented my projects, which strengthened both my technical explanation and my communication.', true],
  ['Award', 'Third prize, quiz competition', 'Organised by the ISTE Student Chapter at Kongunadu College of Engineering and Technology.'],
  ['Award', 'First prize, intra-college chess competition', 'Chess is where I first practised thinking several moves ahead.'],
  ['Certification', 'IIT Spoken Tutorial: Java Programming', 'Structured training that backs up the Java I use in projects.'],
  ['Certification', 'IIT Spoken Tutorial: RDBMS', 'Training in relational database concepts, applied in my MySQL work.'],
];
