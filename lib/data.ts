// School news and content data for a K12 education website
export interface NewsItem {
  id: string
  title: string
  summary: string
  content: string
  image: string
  date: string
  author: string
  category: string
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Zeno School Launches Future Makers STEAM Week for Grades 1-9",
    summary:
      "Hands-on robotics, coding, science labs, and design challenges are bringing curiosity to life across our K12 campus.",
    content: `
      <p>Zeno School has launched its new Future Makers STEAM Week, a cross-grade learning experience designed to help students connect classroom knowledge with real-world creativity. Throughout the week, learners from primary and middle school are rotating through robotics labs, coding mini-studios, science experiments, engineering builds, and collaborative art challenges.</p>
      <p>Each activity has been tailored to age level. Younger students are exploring patterns, simple machines, and storytelling through making, while older students are building prototypes, testing hypotheses, and presenting team solutions to authentic design problems.</p>
      <p>Teachers designed the program to strengthen confidence, communication, and problem-solving alongside academic skills. Families have also been invited to a Friday showcase where students will share projects, reflect on what they learned, and demonstrate how inquiry-based learning supports long-term growth.</p>
      <p>The initiative is part of Zeno School's wider commitment to joyful, future-ready education, where children are encouraged to ask better questions, take thoughtful risks, and learn by doing.</p>
    `,
    image: "/news-default11.svg?height=400&width=600",
    date: "2026-04-08",
    author: "Curriculum Office",
    category: "Learning Programs",
  },
  {
    id: "2",
    title: "Family Open Day Highlights Safe, Caring, and Bilingual Learning Environment",
    summary:
      "Prospective families explored classrooms, met teachers, and experienced how the school blends academic rigor with wellbeing.",
    content: `
      <p>Zeno School welcomed dozens of families to its spring Open Day, giving parents and children the chance to experience the campus community firsthand. Visitors toured early years classrooms, primary learning hubs, specialist rooms, and student activity spaces while speaking directly with school leaders and homeroom teachers.</p>
      <p>During the event, the school shared its K12 learning pathway, student support model, and approach to bilingual communication. Families were particularly interested in the balance between strong academics, social-emotional learning, and a structured yet warm daily routine.</p>
      <p>Interactive demo lessons helped children feel part of the experience. From phonics games and guided reading to science discovery tables and visual arts stations, the day gave a practical sense of what learning looks and feels like at Zeno School.</p>
      <p>The admissions team noted that families consistently asked about safety, teacher partnership, and student happiness, three areas the school continues to prioritize in both campus planning and daily school life.</p>
    `,
    image: "/news-default22.svg?height=400&width=600",
    date: "2026-03-24",
    author: "Admissions Team",
    category: "Community",
  },
  {
    id: "3",
    title: "Student Wellbeing Program Expands with Advisory, Counseling, and Parent Workshops",
    summary:
      "The new wellbeing framework supports emotional growth, healthy routines, and strong home-school partnership from kindergarten through middle school.",
    content: `
      <p>Zeno School has expanded its student wellbeing program to provide more consistent support across all grade levels. The updated framework includes weekly advisory sessions, age-appropriate social-emotional learning, regular counselor check-ins, and a stronger referral system for students who need additional care.</p>
      <p>Teachers are also receiving additional training in classroom belonging, restorative conversations, and developmental support. The goal is to ensure that every child feels known, safe, and ready to learn.</p>
      <p>For families, the school has introduced a new series of parent workshops on topics such as digital balance, emotional regulation, positive routines, and supporting children during academic transitions.</p>
      <p>By investing in wellbeing alongside academics, Zeno School aims to help students grow not only as learners, but also as kind, confident, and resilient young people.</p>
    `,
    image: "/news-default33.svg?height=400&width=600",
    date: "2026-03-10",
    author: "Student Support Center",
    category: "Wellbeing",
  },
]

export interface FacultyMember {
  id: string
  name: string
  title: string
  department: string
  bio: string
  image: string
}

export const facultyData: FacultyMember[] = [
  {
    id: "1",
    name: "Sofia Lin",
    title: "Head of School",
    department: "School Leadership",
    bio: "Sofia Lin brings more than 18 years of K12 leadership experience in bilingual and international learning environments. She is passionate about building schools where high expectations, strong relationships, and child-centered systems work together.",
    image: "/news-default2.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Daniel Wu",
    title: "Director of Primary Years",
    department: "Primary Education",
    bio: "Daniel Wu specializes in inquiry-driven literacy and numeracy programs for elementary learners. He partners closely with teachers to create classrooms that are structured, joyful, and deeply responsive to student growth.",
    image: "/news-default1.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Maya Chen",
    title: "Director of Student Wellbeing",
    department: "Counseling and Support",
    bio: "Maya Chen leads the school's wellbeing and safeguarding systems, with a focus on advisory, social-emotional learning, and family partnership. Her work helps students develop resilience, empathy, and healthy habits for school life.",
    image: "/news-default3.svg?height=300&width=300",
  },
  {
    id: "4",
    name: "Owen Park",
    title: "STEAM Innovation Coordinator",
    department: "Innovation Lab",
    bio: "Owen Park designs interdisciplinary learning experiences in robotics, coding, engineering, and applied science. He believes children learn best when they build, test, revise, and share meaningful ideas.",
    image: "/news-default4.svg?height=300&width=300",
  },
  {
    id: "5",
    name: "Emma Zhao",
    title: "Head of Admissions and Family Experience",
    department: "Admissions Office",
    bio: "Emma Zhao supports families through every stage of the admissions journey, from school tours to onboarding. She focuses on clarity, warmth, and helping parents find the right learning environment for their child.",
    image: "/news-default5.svg?height=300&width=300",
  },
  {
    id: "6",
    name: "Leo Hart",
    title: "Activities and Athletics Coordinator",
    department: "Student Life",
    bio: "Leo Hart leads co-curricular programming that helps students discover interests, build teamwork, and stay active. His programs include clubs, house events, performing arts showcases, and inclusive sports opportunities.",
    image: "/news-default6.svg?height=300&width=300",
  },
]

export interface SchoolStats {
  students: number
  faculty: number
  gradeLevels: number
  clubs: number
  languages: number
  familySatisfaction: number
}

export const schoolStats: SchoolStats = {
  students: 1280,
  faculty: 96,
  gradeLevels: 13,
  clubs: 28,
  languages: 2,
  familySatisfaction: 98,
}

export interface AdmissionRequirement {
  division: string
  requirements: string[]
  deadlines: {
    priority: string
    rolling: string
  }
}

export const admissionRequirements: AdmissionRequirement[] = [
  {
    division: "Early Years",
    requirements: [
      "Child interview or play-based observation",
      "Birth certificate or passport copy",
      "Immunization and health records",
      "Parent questionnaire",
      "Previous school or nursery report if available",
    ],
    deadlines: {
      priority: "March 15",
      rolling: "Open until places are filled",
    },
  },
  {
    division: "Primary School",
    requirements: [
      "Recent school report cards or transcripts",
      "Student readiness assessment in literacy and numeracy",
      "Parent interview",
      "Passport copy and student photo",
      "Health and vaccination records",
    ],
    deadlines: {
      priority: "April 1",
      rolling: "Open until places are filled",
    },
  },
  {
    division: "Middle School",
    requirements: [
      "Recent transcripts from the last two academic years",
      "English and math placement assessment",
      "Student interview",
      "One teacher recommendation",
      "Passport copy and health records",
    ],
    deadlines: {
      priority: "April 1",
      rolling: "Open until places are filled",
    },
  },
]
