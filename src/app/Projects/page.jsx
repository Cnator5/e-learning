"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
      id: 1,
      title: "AI-Powered Personalized Learning",
      category: "Educational Technology",
      description: "Developing an AI system that adapts to individual student needs and learning styles.",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Virtual Reality Field Trips",
      category: "Immersive Learning",
      description: "Creating VR experiences for students to explore historical sites and natural wonders.",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Gamification of STEM Education",
      category: "Game-Based Learning",
      description: "Designing educational games to enhance engagement in science, technology, engineering, and mathematics.",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Mindfulness in the Classroom",
      category: "Social-Emotional Learning",
      description: "Implementing mindfulness practices to improve student focus and emotional regulation.",
      color: "bg-red-500",
    },
    {
      id: 5,
      title: "Project-Based Learning Assessment",
      category: "Alternative Assessment",
      description: "Developing new methods to evaluate student progress in project-based learning environments.",
      color: "bg-purple-500",
    },
    {
      id: 6,
      title: "Adaptive E-textbooks",
      category: "Digital Learning Materials",
      description: "Creating electronic textbooks that adjust content based on student performance and preferences.",
      color: "bg-indigo-500",
    },
    {
      id: 7,
      title: "Peer-to-Peer Tutoring Platforms",
      category: "Collaborative Learning",
      description: "Designing online platforms to facilitate effective peer tutoring and knowledge sharing.",
      color: "bg-cyan-500",
    },
    {
      id: 8,
      title: "Inclusive Classroom Design",
      category: "Special Education",
      description: "Researching optimal classroom layouts and tools to support students with diverse needs.",
      color: "bg-teal-500",
    },
    {
      id: 9,
      title: "Early Childhood Literacy Interventions",
      category: "Early Childhood Education",
      description: "Developing targeted interventions to boost literacy skills in preschool and kindergarten.",
      color: "bg-pink-500",
    },
    {
      id: 10,
      title: "Cultural Competence in Teaching",
      category: "Multicultural Education",
      description: "Training programs to enhance teachers' cultural awareness and inclusive teaching practices.",
      color: "bg-orange-500",
    },
    {
      id: 11,
      title: "Data-Driven School Improvement",
      category: "Educational Leadership",
      description: "Utilizing big data analytics to inform school policy and improve educational outcomes.",
      color: "bg-lime-500",
    },
    {
      id: 12,
      title: "Augmented Reality in Science Labs",
      category: "STEM Education",
      description: "Implementing AR technology to enhance hands-on learning in science laboratory settings.",
      color: "bg-emerald-500",
    },
    {
      id: 13,
      title: "Trauma-Informed Teaching Practices",
      category: "Educational Psychology",
      description: "Developing strategies to support students who have experienced trauma or adverse childhood experiences.",
      color: "bg-sky-500",
    },
    {
      id: 14,
      title: "Computational Thinking Integration",
      category: "Computer Science Education",
      description: "Incorporating computational thinking skills across various subjects in K-12 curriculum.",
      color: "bg-violet-500",
    },
    {
      id: 15,
      title: "Flipped Classroom Effectiveness",
      category: "Instructional Strategies",
      description: "Evaluating the impact of flipped classroom models on student engagement and achievement.",
      color: "bg-rose-500",
    },
    {
      id: 16,
      title: "Multilingual Education Approaches",
      category: "Language Education",
      description: "Researching effective methods for teaching in multilingual classrooms and promoting language diversity.",
      color: "bg-amber-500",
    },
    {
      id: 17,
      title: "Student Voice in School Governance",
      category: "Educational Policy",
      description: "Exploring ways to meaningfully incorporate student perspectives in school decision-making processes.",
      color: "bg-fuchsia-500",
    },
    {
      id: 18,
      title: "Growth Mindset Interventions",
      category: "Cognitive Psychology",
      description: "Developing and testing interventions to foster growth mindset in students across grade levels.",
      color: "bg-lime-600",
    },
    {
      id: 19,
      title: "Neurodiversity-Affirming Pedagogy",
      category: "Inclusive Education",
      description: "Creating teaching strategies that support and celebrate neurodiversity in the classroom.",
      color: "bg-cyan-600",
    },
    {
      id: 20,
      title: "Outdoor Education Programs",
      category: "Environmental Education",
      description: "Designing curriculum that integrates outdoor experiences to enhance learning and environmental awareness.",
      color: "bg-purple-600",
    },
    {
      id: 21,
      title: "Artificial Intelligence Teaching Assistants",
      category: "Educational Technology",
      description: "Developing AI-powered virtual teaching assistants to support personalized learning.",
      color: "bg-blue-600",
    },
    {
      id: 22,
      title: "Restorative Justice in Schools",
      category: "School Climate",
      description: "Implementing and evaluating restorative practices to improve school discipline and community building.",
      color: "bg-green-600",
    },
    {
      id: 23,
      title: "Cross-Generational Learning Programs",
      category: "Lifelong Learning",
      description: "Creating educational initiatives that bring together learners of different ages for mutual benefit.",
      color: "bg-indigo-600",
    },
    {
      id: 24,
      title: "Virtual Lab Simulations",
      category: "Science Education",
      description: "Developing realistic virtual laboratory experiences for remote and resource-limited learning environments.",
      color: "bg-red-600",
    },
    {
      id: 25,
      title: "Culturally Responsive STEM Teaching",
      category: "Equity in Education",
      description: "Integrating cultural relevance and responsiveness into STEM curriculum and instruction.",
      color: "bg-yellow-600",
    },
    {
      id: 26,
      title: "Embodied Learning Techniques",
      category: "Kinesthetic Education",
      description: "Exploring the use of movement and physical activity to enhance cognitive learning across subjects.",
      color: "bg-pink-600",
    },
    {
      id: 27,
      title: "Blockchain for Educational Credentials",
      category: "Educational Technology",
      description: "Implementing blockchain technology for secure, verifiable academic credentials and transcripts.",
      color: "bg-teal-600",
    },
    {
      id: 28,
      title: "Universal Design for Learning",
      category: "Accessible Education",
      description: "Applying UDL principles to create flexible learning environments that accommodate all learners.",
      color: "bg-violet-600",
    },
    {
      id: 29,
      title: "Teacher Well-being and Retention",
      category: "Teacher Education",
      description: "Investigating factors affecting teacher well-being and developing strategies to improve retention.",
      color: "bg-emerald-600",
    },
    {
      id: 30,
      title: "Makerspaces in Education",
      category: "Hands-on Learning",
      description: "Evaluating the impact of makerspaces on creativity, problem-solving, and STEM skills.",
      color: "bg-orange-600",
    },
    {
      id: 31,
      title: "Intergenerational Digital Literacy",
      category: "Adult Education",
      description: "Developing programs where students teach digital skills to older adults, benefiting both groups.",
      color: "bg-sky-600",
    },
    {
      id: 32,
      title: "Neuroeducation Strategies",
      category: "Educational Neuroscience",
      description: "Applying neuroscience findings to develop more effective teaching and learning strategies.",
      color: "bg-rose-600",
    },
    {
      id: 33,
      title: "Personalized Learning Algorithms",
      category: "Adaptive Learning",
      description: "Creating advanced algorithms to tailor educational content and pacing to individual learners.",
      color: "bg-fuchsia-600",
    },
    {
      id: 34,
      title: "Climate Change Education",
      category: "Environmental Education",
      description: "Developing comprehensive curriculum to educate students about climate change and sustainability.",
      color: "bg-amber-600",
    },
    {
      id: 35,
      title: "Arts Integration in STEM",
      category: "STEAM Education",
      description: "Exploring methods to meaningfully integrate arts education into STEM subjects.",
      color: "bg-lime-700",
    },
    {
      id: 36,
      title: "Micro-credentialing for Teachers",
      category: "Professional Development",
      description: "Implementing a system of micro-credentials to recognize specific skills and knowledge in teaching.",
      color: "bg-cyan-700",
    },
    {
      id: 37,
      title: "Ethical AI in Education",
      category: "Educational Technology",
      description: "Developing frameworks for the ethical use of AI in educational settings and decision-making.",
      color: "bg-purple-700",
    },
    {
      id: 38,
      title: "Global Competence Education",
      category: "Global Education",
      description: "Creating curriculum to develop students' global awareness and cross-cultural communication skills.",
      color: "bg-blue-700",
    },
    {
      id: 39,
      title: "Cognitive Load Optimization",
      category: "Instructional Design",
      description: "Researching methods to optimize cognitive load in instructional materials and activities.",
      color: "bg-green-700",
    },
    {
      id: 40,
      title: "Gamified Behavior Management",
      category: "Classroom Management",
      description: "Developing game-based systems to encourage positive behavior and engagement in the classroom.",
      color: "bg-indigo-700",
    },
    {
      id: 41,
      title: "Adaptive Physical Education",
      category: "Inclusive Education",
      description: "Creating inclusive physical education programs that adapt to diverse physical abilities.",
      color: "bg-red-700",
    },
    {
      id: 42,
      title: "Parent Engagement Platforms",
      category: "Family Involvement",
      description: "Designing digital platforms to enhance communication and collaboration between schools and families.",
      color: "bg-yellow-700",
    },
    {
      id: 43,
      title: "Critical Media Literacy",
      category: "Digital Citizenship",
      description: "Developing curriculum to enhance students' ability to critically analyze and create media.",
      color: "bg-pink-700",
    },
    {
      id: 44,
      title: "Competency-Based Progression",
      category: "Educational Assessment",
      description: "Implementing systems that allow students to progress based on demonstrated competencies rather than time spent.",
      color: "bg-teal-700",
    },
    {
      id: 45,
      title: "Emotional Intelligence Curriculum",
      category: "Social-Emotional Learning",
      description: "Creating comprehensive programs to develop students' emotional intelligence and self-awareness.",
      color: "bg-violet-700",
    },
    {
      id: 46,
      title: "Augmented Reality Textbooks",
      category: "Educational Technology",
      description: "Developing textbooks with AR features to provide interactive, 3D content for enhanced learning.",
      color: "bg-emerald-700",
    },
    {
      id: 47,
      title: "Peer Feedback Systems",
      category: "Collaborative Learning",
      description: "Creating structured systems for effective peer-to-peer feedback and assessment.",
      color: "bg-orange-700",
    },
    {
      id: 48,
      title: "Cognitive Flexibility Training",
      category: "Cognitive Skills",
      description: "Developing programs to enhance students' cognitive flexibility and adaptive thinking skills.",
      color: "bg-sky-700",
    },
    {
      id: 49,
      title: "Intergenerational Learning Spaces",
      category: "Community Education",
      description: "Designing physical and virtual spaces that facilitate learning interactions across generations.",
      color: "bg-rose-700",
    },
    {
      id: 50,
      title: "Holographic Telepresence for Remote Learning",
      category: "Distance Education",
      description: "Implementing holographic technology to create more immersive remote learning experiences.",
      color: "bg-fuchsia-700",
    },
  {
    id: 51,
    title: "AI-Powered Personalized Learning",
    category: "Artificial Intelligence",
    description: "Developing an AI system that adapts to individual student needs and learning styles.",
    color: "bg-blue-500",
  },
  {
    id: 52,
    title: "Virtual Reality Historical Reenactments",
    category: "Virtual Reality",
    description: "Creating immersive VR experiences for students to participate in historical events.",
    color: "bg-green-500",
  },
  {
    id: 53,
    title: "Blockchain for Academic Credentials",
    category: "Blockchain",
    description: "Implementing a secure, decentralized system for verifying and sharing academic achievements.",
    color: "bg-yellow-500",
  },
  {
    id: 54,
    title: "Neurofeedback for Enhanced Learning",
    category: "Neuroscience",
    description: "Utilizing brain-computer interfaces to optimize learning states and improve retention.",
    color: "bg-red-500",
  },
  {
    id: 55,
    title: "Gamified Collaborative Problem-Solving",
    category: "Game-Based Learning",
    description: "Designing multiplayer educational games that foster teamwork and critical thinking.",
    color: "bg-purple-500",
  },
  {
    id: 56,
    title: "IoT-Enabled Smart Classrooms",
    category: "Internet of Things",
    description: "Creating interconnected learning environments that adapt to student needs in real-time.",
    color: "bg-indigo-500",
  },
  {
    id: 57,
    title: "Quantum Computing in Cryptography",
    category: "Computer Science",
    description: "Exploring the implications of quantum computing on current encryption methods and developing new algorithms.",
    color: "bg-cyan-500",
  },
  {
    id: 58,
    title: "Sustainable Urban Planning",
    category: "Environmental Science",
    description: "Designing eco-friendly city models that integrate green spaces, renewable energy, and efficient transportation.",
    color: "bg-teal-500",
  },
  {
    id: 59,
    title: "Gene Therapy for Rare Diseases",
    category: "Genetics",
    description: "Developing targeted gene therapies for treating previously incurable genetic disorders.",
    color: "bg-pink-500",
  },
  {
    id: 60,
    title: "Cultural Preservation through AR",
    category: "Anthropology",
    description: "Using Augmented Reality to document and preserve endangered cultural practices and artifacts.",
    color: "bg-orange-500",
  },
  {
    id: 61,
    title: "Nano-robots for Cancer Treatment",
    category: "Nanotechnology",
    description: "Engineering microscopic robots to target and eliminate cancer cells with minimal side effects.",
    color: "bg-lime-500",
  },
  {
    id: 62,
    title: "Ethical AI Decision Making",
    category: "Philosophy",
    description: "Developing frameworks for implementing ethical decision-making processes in AI systems.",
    color: "bg-emerald-500",
  },
  {
    id: 63,
    title: "Fusion Energy Breakthrough",
    category: "Physics",
    description: "Advancing nuclear fusion technology to create a sustainable and clean energy source.",
    color: "bg-sky-500",
  },
  {
    id: 64,
    title: "Microbiome-Based Mental Health Treatments",
    category: "Psychology",
    description: "Investigating the gut-brain connection to develop novel therapies for mental health disorders.",
    color: "bg-violet-500",
  },
  {
    id: 65,
    title: "3D-Printed Organs for Transplants",
    category: "Bioengineering",
    description: "Creating functional human organs using 3D bioprinting technology to address organ shortages.",
    color: "bg-rose-500",
  },
  {
    id: 66,
    title: "Space Debris Removal System",
    category: "Aerospace Engineering",
    description: "Designing a satellite system to clean up orbital debris and prevent collisions in space.",
    color: "bg-amber-500",
  },
  {
    id: 67,
    title: "Universal Language Translation Device",
    category: "Linguistics",
    description: "Developing a real-time translation device that breaks down language barriers globally.",
    color: "bg-fuchsia-500",
  },
  {
    id: 68,
    title: "Algae-based Biofuel Production",
    category: "Biotechnology",
    description: "Optimizing algae strains and cultivation methods for large-scale, sustainable biofuel production.",
    color: "bg-lime-600",
  },
  {
    id: 69,
    title: "Emotion Recognition in Autism",
    category: "Cognitive Science",
    description: "Creating AI-powered tools to help individuals with autism spectrum disorders recognize and interpret emotions.",
    color: "bg-cyan-600",
  },
  {
    id: 70,
    title: "Quantum Entanglement Communication",
    category: "Quantum Physics",
    description: "Developing secure, instantaneous communication systems based on quantum entanglement principles.",
    color: "bg-purple-600",
  },
  {
    id: 71,
    title: "Adaptive Learning Materials",
    category: "Education Technology",
    description: "Creating textbooks and learning resources that dynamically adapt to individual student progress and preferences.",
    color: "bg-blue-600",
  },
  {
    id: 72,
    title: "Oceanic Carbon Sequestration",
    category: "Marine Biology",
    description: "Investigating methods to enhance the ocean's natural ability to absorb and store atmospheric carbon dioxide.",
    color: "bg-green-600",
  },
  {
    id: 73,
    title: "Robotic Elderly Care Assistants",
    category: "Robotics",
    description: "Designing empathetic robotic companions to assist in the care and social engagement of elderly individuals.",
    color: "bg-indigo-600",
  },
  {
    id: 74,
    title: "Synthetic Food Production",
    category: "Food Science",
    description: "Developing lab-grown food alternatives to reduce environmental impact and address global food shortages.",
    color: "bg-red-600",
  },
  {
    id: 75,
    title: "Holographic Data Storage",
    category: "Information Technology",
    description: "Creating high-capacity, long-lasting data storage systems using holographic technology.",
    color: "bg-yellow-600",
  },
  {
    id: 76,
    title: "Personalized Cancer Vaccines",
    category: "Immunology",
    description: "Developing tailored cancer vaccines based on individual patient's tumor genetic profiles.",
    color: "bg-pink-600",
  },
  {
    id: 77,
    title: "Autonomous Urban Farming",
    category: "Agriculture",
    description: "Creating AI-driven vertical farming systems for efficient food production in urban environments.",
    color: "bg-teal-600",
  },
  {
    id: 78,
    title: "Dark Matter Detection",
    category: "Astrophysics",
    description: "Designing new experiments and technologies to directly observe and study dark matter.",
    color: "bg-violet-600",
  },
  {
    id: 79,
    title: "Plastic-Eating Bacteria",
    category: "Microbiology",
    description: "Engineering bacteria capable of efficiently breaking down plastic waste for environmental remediation.",
    color: "bg-emerald-600",
  },
  {
    id: 80,
    title: "Brain-Computer Music Interface",
    category: "Music Technology",
    description: "Developing systems that allow people to compose and perform music using only their thoughts.",
    color: "bg-orange-600",
  },
  {
    id: 81,
    title: "Quantum Cryptography Networks",
    category: "Network Security",
    description: "Implementing quantum key distribution for unbreakable encrypted communication networks.",
    color: "bg-sky-600",
  },
  {
    id: 82,
    title: "AI-Driven Drug Discovery",
    category: "Pharmacology",
    description: "Using machine learning to predict drug interactions and accelerate the development of new medications.",
    color: "bg-rose-600",
  },
  {
    id: 83,
    title: "Exoskeleton for Paralysis Patients",
    category: "Biomedical Engineering",
    description: "Creating advanced exoskeletons to restore mobility for individuals with spinal cord injuries.",
    color: "bg-fuchsia-600",
  },
  {
    id: 84,
    title: "Sustainable Concrete Alternatives",
    category: "Materials Science",
    description: "Developing eco-friendly building materials to replace traditional carbon-intensive concrete.",
    color: "bg-amber-600",
  },
  {
    id: 85,
    title: "Haptic Feedback for Virtual Objects",
    category: "Human-Computer Interaction",
    description: "Creating devices that allow users to feel and manipulate virtual objects as if they were real.",
    color: "bg-lime-700",
  },
  {
    id: 86,
    title: "Gravitational Wave Astronomy",
    category: "Cosmology",
    description: "Advancing detection methods for gravitational waves to study cosmic phenomena and test general relativity.",
    color: "bg-cyan-700",
  },
  {
    id: 87,
    title: "Neuromorphic Computing",
    category: "Computer Engineering",
    description: "Designing computer architectures that mimic the structure and function of the human brain.",
    color: "bg-purple-700",
  },
  {
    id: 88,
    title: "Artificial Photosynthesis",
    category: "Chemical Engineering",
    description: "Developing systems that replicate plant photosynthesis to produce clean energy and reduce carbon emissions.",
    color: "bg-blue-700",
  },
  {
    id: 89,
    title: "Mycelium-based Materials",
    category: "Sustainable Design",
    description: "Exploring the use of fungal networks to create biodegradable alternatives to plastics and building materials.",
    color: "bg-green-700",
  },
  {
    id: 90,
    title: "Quantum Machine Learning",
    category: "Data Science",
    description: "Developing quantum algorithms to enhance machine learning capabilities and solve complex optimization problems.",
    color: "bg-indigo-700",
  },
  {
    id: 91,
    title: "Bionic Eye Implants",
    category: "Ophthalmology",
    description: "Creating advanced retinal implants to restore vision for individuals with severe eye diseases.",
    color: "bg-red-700",
  },
  {
    id: 92,
    title: "Self-Healing Infrastructure",
    category: "Civil Engineering",
    description: "Developing smart materials and systems for roads and bridges that can detect and repair damage autonomously.",
    color: "bg-yellow-700",
  },
  {
    id: 93,
    title: "Programmable Matter",
    category: "Nanoscience",
    description: "Creating materials that can change their physical properties on command for various applications.",
    color: "bg-pink-700",
  },
  {
    id: 94,
    title: "Biosynthetic Organ Regeneration",
    category: "Regenerative Medicine",
    description: "Developing techniques to stimulate the body's own regenerative capabilities to heal damaged organs.",
    color: "bg-teal-700",
  },
  {
    id: 95,
    title: "Swarm Robotics for Disaster Response",
    category: "Emergency Management",
    description: "Creating coordinated robot swarms for efficient search and rescue operations in disaster zones.",
    color: "bg-violet-700",
  },
  {
    id: 96,
    title: "Quantum Sensors for Navigation",
    category: "Geospatial Technology",
    description: "Developing ultra-precise quantum sensors for GPS-free navigation and Earth observation.",
    color: "bg-emerald-700",
  },
  {
    id: 97,
    title: "Digital Twins for Urban Planning",
    category: "Urban Studies",
    description: "Creating detailed virtual replicas of cities to simulate and optimize urban development and resource management.",
    color: "bg-orange-700",
  },
  {
    id: 98,
    title: "Memristor-based AI Hardware",
    category: "Electrical Engineering",
    description: "Designing neuromorphic computing hardware using memristors for efficient AI processing.",
    color: "bg-sky-700",
  },
  {
    id: 99,
    title: "Atmospheric Water Harvesting",
    category: "Environmental Engineering",
    description: "Developing efficient technologies to extract water from air in arid regions to address water scarcity.",
    color: "bg-rose-700",
  },
  {
    id: 100,
    title: "Epigenetic Reversal of Aging",
    category: "Gerontology",
    description: "Investigating methods to reset the epigenetic markers associated with aging to extend healthy lifespan.",
    color: "bg-fuchsia-700",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Innovative Educational Research Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`${project.color} rounded-lg shadow-lg overflow-hidden cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-white text-opacity-80 mb-4">{project.category}</p>
                <p className="text-white">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={`${selectedProject.color} rounded-lg p-8 max-w-md w-full`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
            <p className="text-white text-opacity-80 mb-4">{selectedProject.category}</p>
            <p className="text-white mb-6">{selectedProject.description}</p>
            <button 
              className="bg-white text-gray-800 font-bold py-2 px-4 rounded"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

