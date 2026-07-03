// Mock data for ACM Student Chapter website
export const CLUB = {
    name: 'ACM',
    fullName: 'ACM Student Chapter',
    institution: 'Amrita School of Computing, Amritapuri',
    tagline: 'we build. we break. we compute.',
    founded: 2014,
    established: 'Est. 2014 — Amritapuri Campus',
    logo: 'https://customer-assets.emergentagent.com/job_8a22ed13-d9c9-4c10-8a87-d1a546c1ea4b/artifacts/6vwglkzs_amritalogo.png'
};

export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'SIGs', href: '#sigs' },
    { label: 'Events', href: '#events' },
    { label: 'Projects', href: '#projects' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' }
];

export const MARQUEE_WORDS = [
    'code', 'build', 'ship', 'learn', 'break', 'iterate', 'open-source', 'hack', 'compute', 'create'
];

export const ABOUT_CARDS = [
    {
        title: 'About the Chapter',
        body: 'As the official ACM Student Chapter at Amrita School of Computing, Amritapuri, we are a community of curious builders, researchers and designers. Since our founding we have hosted workshops, hackathons and open-source cycles that turn ideas into working software.',
        tag: 'CHAPTER'
    },
    {
        title: 'About Amrita',
        body: 'Amrita Vishwa Vidyapeetham is one of India\'s premier research universities, and the School of Computing at Amritapuri is home to a vibrant community of computer scientists, engineers and researchers pushing the frontiers of technology.',
        tag: 'INSTITUTION'
    },
    {
        title: 'About ACM',
        body: 'The Association for Computing Machinery (ACM) is the world\'s largest scientific and educational computing society. Founded in 1947, ACM connects computing educators, researchers and professionals worldwide to inspire dialogue and share resources.',
        tag: 'GLOBAL'
    }
];

export const SIGS = [
    {
        id: 'dev',
        code: 'SIG.DEV',
        name: 'Development',
        tagline: 'Ship code that matters.',
        color: '#22d3ee',
        desc: 'Full-stack builders. From robust APIs to snappy React UIs, this SIG explores modern web, mobile and systems development through hands-on project cycles.'
    },
    {
        id: 'ai',
        code: 'SIG.AI',
        name: 'AI & Research',
        tagline: 'Teach machines. Ask better questions.',
        color: '#38bdf8',
        desc: 'Applied ML, LLMs, computer vision and research. Members read papers, reproduce results and publish blogs on the frontiers of intelligent systems.'
    },
    {
        id: 'cp',
        code: 'SIG.CP',
        name: 'Competitive Coding',
        tagline: 'Sharpen the algorithm.',
        color: '#67e8f9',
        desc: 'Weekly contests, editorial breakdowns and mock interviews. Codeforces, Leetcode and ICPC-style problem solving in a focused community.'
    },
    {
        id: 'cyber',
        code: 'SIG.SEC',
        name: 'Cybersecurity',
        tagline: 'Break it. Then patch it.',
        color: '#0ea5e9',
        desc: 'CTFs, reverse engineering, exploit dev and blue-team defense. We treat security as a craft — playful, rigorous, community-driven.'
    },
    {
        id: 'design',
        code: 'SIG.DES',
        name: 'Design & Creative',
        tagline: 'Design is how it works.',
        color: '#a5f3fc',
        desc: 'Product thinking, visual identity, motion and branding. The design SIG shapes every artifact the chapter releases into the wild.'
    }
];

export const EVENTS = [
    { id: '01', code: '#zx1q-0001/07', name: 'HackAmrita', desc: '48-hour flagship hackathon. Students ship end-to-end products with mentors from industry.' },
    { id: '02', code: '#kt2m-0002/07', name: 'Reverse Coding', desc: 'Look at the output. Write the code. A wild, backwards take on the coding challenge.' },
    { id: '03', code: '#nb5r-0003/07', name: 'Cryptic Hunt', desc: 'A 24-hour cipher-fueled treasure hunt across the web and campus. Logic + lore.' },
    { id: '04', code: '#f4wu-0004/07', name: 'Neural Sprint', desc: 'ML challenge weekend — build a model, ship a demo, defend it in front of the panel.' },
    { id: '05', code: '#g8ax-0005/07', name: 'ForkFest', desc: 'A month-long open-source celebration. Ship PRs, get reviewed, get merged.' },
    { id: '06', code: '#p3vc-0006/07', name: 'Code2Create', desc: 'Beginner-friendly build sprint. From your first HTML page to your first deployed app.' },
    { id: '07', code: '#dq7l-0007/07', name: 'CTF Night', desc: 'Overnight capture-the-flag. Web, crypto, pwn, forensics — bring caffeine.' }
];

export const PROJECTS = [
    {
        name: 'ExamPrep',
        tagline: 'Notes, papers, community — one place.',
        desc: 'A student-first exam preparation platform that centralizes lecture notes, past question papers and a peer discussion forum. Built with Next.js, Postgres and Prisma.',
        image: 'https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2Rpbmd8ZW58MHx8fHwxNzgzMDgxMzExfDA&ixlib=rb-4.1.0&q=85',
        link: '#'
    },
    {
        name: 'CampusPool',
        tagline: 'Carpooling that actually works.',
        desc: 'A ride-sharing platform for the Amrita community. Real-time notifications, group chats and a route-matching algorithm tuned for campus and intercity trips.',
        image: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHxoYWNrYXRob24lMjBjb2Rpbmd8ZW58MHx8fHwxNzgzMDgxMzExfDA&ixlib=rb-4.1.0&q=85',
        link: '#'
    },
    {
        name: 'ACM-One',
        tagline: 'Chapter operations, unified.',
        desc: 'Internal platform for the 80+ organizing committee. Event planning, task tracking, attendance and communication — one clean dashboard.',
        image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        link: '#'
    },
    {
        name: 'CLI-Quest',
        tagline: 'Text-based adventure in your terminal.',
        desc: 'A Rust + Ratatui RPG that runs entirely in the terminal. Branching narrative, ASCII art, integrated audio visualizer — a love letter to the command line.',
        image: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwzfHxoYWNrYXRob24lMjBjb2Rpbmd8ZW58MHx8fHwxNzgzMDgxMzExfDA&ixlib=rb-4.1.0&q=85',
        link: '#'
    },
    {
        name: 'InductionOS',
        tagline: 'Recruitment reimagined.',
        desc: 'Our 2025 induction portal — a macOS-inspired desktop experience featuring interactive mini-games, project showcases and the application flow itself.',
        image: 'https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHw0fHxoYWNrYXRob24lMjBjb2Rpbmd8ZW58MHx8fHwxNzgzMDgxMzExfDA&ixlib=rb-4.1.0&q=85',
        link: '#'
    }
];

export const TEAM = [
    { name: 'Dr. A. Nair', role: 'Faculty Coordinator', img: 'https://i.pravatar.cc/300?img=51' },
    { name: 'Aditya Menon', role: 'Chairperson', img: 'https://i.pravatar.cc/300?img=12' },
    { name: 'Priya Krishnan', role: 'Vice Chair', img: 'https://i.pravatar.cc/300?img=45' },
    { name: 'Rahul Varma', role: 'Secretary', img: 'https://i.pravatar.cc/300?img=15' },
    { name: 'Ananya Iyer', role: 'Technical Lead', img: 'https://i.pravatar.cc/300?img=47' },
    { name: 'Karthik R.', role: 'Projects Lead', img: 'https://i.pravatar.cc/300?img=33' },
    { name: 'Divya Pillai', role: 'Design Lead', img: 'https://i.pravatar.cc/300?img=44' },
    { name: 'Harish S.', role: 'Research Lead', img: 'https://i.pravatar.cc/300?img=68' },
    { name: 'Meera N.', role: 'Events Lead', img: 'https://i.pravatar.cc/300?img=48' },
    { name: 'Sanjay P.', role: 'Competitions Lead', img: 'https://i.pravatar.cc/300?img=59' }
];

export const STATS = [
    { value: '10+', label: 'Years running' },
    { value: '80+', label: 'Active members' },
    { value: '40+', label: 'Events hosted' },
    { value: '25+', label: 'Projects shipped' }
];
