
'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaSearch, FaGraduationCap, FaChevronDown } from 'react-icons/fa';
const Departments = () => {
  const departments = [
    {
      name: 'College of Arts and Sciences',
      icon: '🎨',
      topics: [
        'Investigating the impact of virtual reality in language learning',
        'Analyzing the role of storytelling in shaping cultural identities',
        'Examining the intersection of music and social justice movements',
        'The evolution of human language and cognitive development',
        'The impact of climate change on Arctic ecosystems',
      ],
    },
    {
      name: 'College of Engineering',
      icon: '⚙️',
      topics: [
        'Developing sustainable energy solutions through biomimicry',
        'Exploring the use of machine learning in traffic optimization',
        'Investigating the integration of drones in disaster relief efforts',
        'The future of quantum computing in cybersecurity',
        'Nanotechnology in medical device innovation',
      ],
    },
    {
      name: 'College of Business',
      icon: '💼',
      topics: [
        'Investigating the impact of social media on consumer behavior',
        'Analyzing the role of blockchain in supply chain transparency',
        'Exploring the use of data analytics in strategic decision-making',
        'The influence of global trade policies on emerging markets',
        'Corporate governance and ethical decision-making in business',
      ],
    },
    {
      name: 'Faculty of Education',
      icon: '📚',
      topics: [
        'Investigating the impact of technology on student learning and engagement',
        'Analyzing the effectiveness of alternative teaching methods in diverse classrooms',
        'Exploring the role of social-emotional learning in improving academic outcomes',
        'The impact of teacher diversity on student success',
        'Innovative approaches to lifelong learning and adult education',
        "Impact of Teacher Professional Development on Student Achievement",  
        "Effects of Classroom Size on Student Engagement",  
        "Influence of Technology Integration on Learning Outcomes", 
        "Role of Parental Involvement in Academic Success" , 
        "Impact of Bilingual Education on Language Proficiency" , 
        "Effects of Homework on Student Performance"  ,
        "Influence of Teacher Feedback on Student Motivation" , 
        "Impact of School Uniforms on Student Discipline" , 
        "Effects of Peer Tutoring on Academic Achievement" , 
        "Influence of Social Media on Student Social Skills",  
        "Impact of Standardized Testing on Curriculum Design",  
        "Effects of Differentiated Instruction on Diverse Learners" , 
        "Influence of Arts Education on Creativity Development" , 
        "Impact of School Leadership on Teacher Retention",  
        "Effects of Extracurricular Activities on Academic Performance",  
        "Influence of Online Learning Platforms on Student Engagement",  
        "Impact of Inclusive Education on Students with Disabilities",  
        "Effects of School Funding on Educational Quality",  
        "Influence of Teacher Expectations on Student Self-Esteem",  
        "Impact of Multicultural Education on Cultural Awareness",  
        "Effects of School Counseling on Student Mental Health",  
        "Influence of Reading Programs on Literacy Rates",  
        "Impact of Early Childhood Education on Long-term Academic Success",  
        "Effects of Teacher Diversity on Student Attitudes"  ,
        "Influence of Classroom Environment on Learning Motivation" , 
        "Impact of School Policies on Bullying Incidence"  ,
        "Effects of Educational Technology on Teaching Practices" , 
        "Influence of Teacher Collaboration on Instructional Effectiveness",  
        "Impact of Charter Schools on Student Achievement" , 
        "Effects of Block Scheduling on Student Learning"  ,
        "Influence of Teacher-Student Relationships on Academic Motivation"  ,
        "Impact of Project-Based Learning on Critical Thinking Skills"  ,
        "Effects of Gender-Specific Education on Student Confidence"  ,
        "Influence of School Climate on Student Academic Performance"  ,
        "Impact of Professional Learning Communities on Teacher Effectiveness" , 
        "Effects of Summer Learning Programs on Knowledge Retention"  ,
        "Influence of Teaching Assistant Support on Classroom Management",  
        "Impact of Curriculum Alignment on Student Learning Progress"  ,
        "Effects of Physical Education on Student Health and Academic Performance",  
        "Influence of Financial Literacy Education on Student Financial Behaviors" , 
        "Impact of Teacher Autonomy on Instructional Innovation"  ,
        "Effects of School-Community Partnerships on Educational Outcomes",  
        "Influence of Homework Feedback on Student Learning"  ,
        "Impact of Digital Storytelling on Student Writing Skills",  
        "Effects of Cooperative Learning on Interpersonal Skills"  ,
        "Influence of Curriculum Differentiation on Gifted Students",  
        "Impact of Teacher Stress on Classroom Environment"  ,
        "Effects of Educational Podcasts on Student Knowledge Acquisition",  
        "Influence of Student-Centered Learning on Academic Resilience"  ,
        "Impact of Virtual Reality Tools on Science Education"  ,
      ],
    },
    {
      name: 'College of Health Sciences',
      icon: '🩺',
      topics: [
        'The role of nutrition in chronic disease prevention',
        'Mental health interventions in underserved populations',
        'Advances in telemedicine and remote patient monitoring',
        'The impact of physical activity on aging and longevity',
        'Public health strategies for pandemic preparedness',
      ],
    },
    {
      name: 'Faculty of Law',
      icon: '⚖️',
      topics: [
        'The intersection of human rights and international law',
        'The role of legal frameworks in climate change mitigation',
        'Exploring the ethics of AI in legal decision-making',
        'Intellectual property rights in the digital age',
        'The evolution of criminal justice reform movements',
      ],
    },
    {
      name: 'Faculty of Science',
      icon: '⚖️',
      topics: [
        "Impact of Climate Change on Biodiversity", "Independent Variable: Climate change parameters", "Dependent Variable: Biodiversity levels",  
"Effects of Soil pH on Plant Growth", "Independent Variable: Soil pH levels", "Dependent Variable: Plant growth rate",  
"Influence of Light Intensity on Photosynthesis", "Independent Variable: Light intensity", "Dependent Variable: Photosynthesis rate",  
"Impact of Water Temperature on Fish Metabolism", "Independent Variable: Water temperature", "Dependent Variable: Fish metabolism rate",  
"Effects of Fertilizer Type on Crop Yield", "Independent Variable: Type of fertilizer", "Dependent Variable: Crop yield",  
"Influence of Air Pollution on Respiratory Health", "Independent Variable: Air pollution levels", "Dependent Variable: Respiratory health outcomes",  
"Impact of Genetic Modification on Plant Resistance", "Independent Variable: Genetic modification techniques", "Dependent Variable: Plant resistance to pests",  
"Effects of Antibiotics on Bacterial Resistance", "Independent Variable: Antibiotic type and dosage", "Dependent Variable: Bacterial resistance",  
"Influence of Exercise on Heart Rate", "Independent Variable: Exercise intensity", "Dependent Variable: Heart rate",  
"Impact of Temperature on Enzyme Activity", "Independent Variable: Temperature", "Dependent Variable: Enzyme activity",  
"Effects of Salinity on Aquatic Plant Growth", "Independent Variable: Salinity levels", "Dependent Variable: Aquatic plant growth",  
"Influence of Diet on Blood Sugar Levels", "Independent Variable: Type of diet", "Dependent Variable: Blood sugar levels",  
"Impact of Caffeine on Cognitive Performance", "Independent Variable: Caffeine intake", "Dependent Variable: Cognitive performance",  
"Effects of Noise Pollution on Bird Communication", "Independent Variable: Noise pollution levels", "Dependent Variable: Bird communication patterns",  
"Influence of Sleep Deprivation on Memory Retention", "Independent Variable: Duration of sleep deprivation", "Dependent Variable: Memory retention",  
"Impact of Drought on Soil Microbial Communities", "Independent Variable: Drought conditions", "Dependent Variable: Soil microbial diversity",  
"Effects of UV Radiation on Skin Cells", "Independent Variable: UV radiation exposure", "Dependent Variable: Skin cell damage",  
"Influence of Ocean Acidification on Coral Reefs", "Independent Variable: Ocean acidity levels", "Dependent Variable: Health of coral reefs",  
"Impact of Urbanization on Wildlife Habitats", "Independent Variable: Degree of urbanization", "Dependent Variable: Wildlife habitat availability",  
"Effects of Hydroelectric Dams on River Ecosystems", "Independent Variable: Presence of hydroelectric dams", "Dependent Variable: River ecosystem health",  
"Influence of Temperature on Battery Efficiency", "Independent Variable: Operating temperature", "Dependent Variable: Battery efficiency",  
"Impact of Pesticides on Bee Populations", "Independent Variable: Pesticide exposure", "Dependent Variable: Bee population size",  
"Effects of High Altitude on Oxygen Saturation", "Independent Variable: Altitude level", "Dependent Variable: Oxygen saturation in blood",  
"Influence of Magnetic Fields on Plant Growth", "Independent Variable: Magnetic field strength", "Dependent Variable: Plant growth rate",  
"Impact of Diet on Gut Microbiome Diversity", "Independent Variable: Type of diet", "Dependent Variable: Gut microbiome diversity",  
"Effects of Water Hardness on Soap Effectiveness", "Independent Variable: Water hardness", "Dependent Variable: Soap cleaning effectiveness",  
"Influence of Temperature on Chemical Reaction Rates", "Independent Variable: Temperature", "Dependent Variable: Rate of chemical reaction",  
"Impact of Nanoparticles on Water Filtration Systems", "Independent Variable: Type of nanoparticles", "Dependent Variable: Water filtration efficiency",  
"Effects of Exercise on Bone Density", "Independent Variable: Exercise regimen", "Dependent Variable: Bone density",  
"Influence of Carbon Dioxide Levels on Plant Growth", "Independent Variable: Carbon dioxide concentration", "Dependent Variable: Plant growth rate",  
"Impact of Microplastics on Marine Life", "Independent Variable: Microplastic concentration", "Dependent Variable: Health of marine organisms",  
"Effects of Acid Rain on Forest Ecosystems", "Independent Variable: Acid rain exposure", "Dependent Variable: Forest ecosystem health",  
"Influence of Soil Moisture on Seed Germination", "Independent Variable: Soil moisture levels", "Dependent Variable: Seed germination rate",  
"Impact of Noise Levels on Human Stress Response", "Independent Variable: Noise levels", "Dependent Variable: Human stress indicators",  
"Effects of Oil Spills on Marine Biodiversity", "Independent Variable: Oil spill occurrence", "Dependent Variable: Marine biodiversity",  
"Influence of Temperature on Fermentation Processes", "Independent Variable: Temperature", "Dependent Variable: Rate of fermentation",  
"Impact of Deforestation on Carbon Sequestration", "Independent Variable: Rate of deforestation", "Dependent Variable: Carbon sequestration capacity",  
"Effects of Artificial Light on Circadian Rhythms", "Independent Variable: Exposure to artificial light", "Dependent Variable: Circadian rhythm consistency",  
"Influence of Water pH on Fish Reproduction", "Independent Variable: Water pH levels", "Dependent Variable: Fish reproduction rates",  
"Impact of Salinity on Freshwater Fish", "Independent Variable: Salinity levels", "Dependent Variable: Health of freshwater fish",  
"Effects of Electromagnetic Fields on Human Health", "Independent Variable: Exposure to electromagnetic fields", "Dependent Variable: Human health outcomes",  
"Influence of Temperature on Ice Melting Rate", "Independent Variable: Ambient temperature", "Dependent Variable: Rate of ice melting",  
"Impact of Heavy Metals on Plant Nutrition", "Independent Variable: Heavy metal concentration", "Dependent Variable: Plant nutrient uptake",  
"Effects of Climate Change on Migration Patterns", "Independent Variable: Climate change variables", "Dependent Variable: Migration patterns of species",  
"Influence of Genetic Variation on Disease Resistance", "Independent Variable: Genetic variation", "Dependent Variable: Resistance to diseases",  
"Impact of Water Quality on Amphibian Populations", "Independent Variable: Water quality parameters", "Dependent Variable: Amphibian population health",  
"Effects of Soil Erosion on Agricultural Productivity", "Independent Variable: Rate of soil erosion", "Dependent Variable: Agricultural yield",  
"Influence of Wind Patterns on Pollination", "Independent Variable: Wind patterns", "Dependent Variable: Pollination success",  
"Impact of Temperature on Plant Transpiration", "Independent Variable: Ambient temperature", "Dependent Variable: Rate of plant transpiration"  
      ],
    },
  ];

  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTopics, setFilteredTopics] = useState(selectedDepartment.topics);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setFilteredTopics(
      selectedDepartment.topics.filter((topic) =>
        topic.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, selectedDepartment]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>University Departments</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <FaGraduationCap className="mr-2" /> University Departments
          </h1>
          <button
            className="lg:hidden bg-blue-700 p-2 rounded-md"
            onClick={toggleMenu}
          >
            <FaChevronDown className={`transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div
            className={`lg:w-64 bg-gray-800 text-gray-100 p-4 overflow-y-auto transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'w-full' : 'w-0'
            } lg:relative absolute z-10 h-full lg:h-auto`}
          >
            <h2 className="text-xl font-semibold mb-4">Departments</h2>
            <ul>
              {departments.map((department, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 rounded-md mb-2 transition-colors flex items-center ${
                    selectedDepartment.name === department.name
                      ? 'bg-gray-700'
                      : 'hover:bg-gray-700'
                  }`}
                  onClick={() => {
                    setSelectedDepartment(department);
                    setIsMenuOpen(false);
                  }}
                >
                  <span className="mr-2">{department.icon}</span>
                  {department.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search topics..."
                  className="w-full p-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">{selectedDepartment.icon}</span>
              {selectedDepartment.name}
            </h2>
            {filteredTopics.length > 0 ? (
              <ul className="space-y-4">
                {filteredTopics.map((topic, topicIndex) => (
                  <li
                    key={topicIndex}
                    className="p-4 bg-white rounded-lg shadow-md transition-all hover:bg-gray-100 hover:shadow-lg"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 italic">No topics found matching your search.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;