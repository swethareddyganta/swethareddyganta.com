import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import ProjectCard from "@/components/project-card"
import EducationCard from "@/components/education-card"

function SocialButton({ href, icon, label, download, target }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-gray-800 rounded-md transition-colors"
      target={target || (href.startsWith("mailto:") ? undefined : "_blank")}
      download={download}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  )
}

function ResearchInterest({ title, description }) {
  return (
    <div className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

function ExperienceCard({ title, company, companyLink, period, description, achievements, image }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-1">
        <div className="card overflow-hidden">
          <img
            src={image || "/placeholder.svg?height=200&width=300"}
            alt={company}
            className="w-full h-24 object-cover"
          />
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="card p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              <h3 className="text-xl font-medium mb-1">{title}</h3>
              <Link
                href={companyLink}
                target="_blank"
                className="text-purple-400 text-sm mb-1 hover:text-purple-300 transition-colors"
              >
                {company}
              </Link>
            </div>
            <p className="text-gray-400 text-sm whitespace-nowrap">{period}</p>
          </div>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          <h4 className="text-lg font-medium mb-3">Key Achievements</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function SkillCard({ category, skills }) {
  return (
    <div className="card p-6 h-full">
      <h3 className="text-xl font-medium mb-6">{category}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center grid-pattern pb-20 md:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full bg-purple-600/10 blur-[120px] top-[10%] left-[50%] transform -translate-x-1/2"></div>
          <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[100px] top-[40%] left-[30%]"></div>
        </div>
        <div className="container-xl relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="headline mb-6">
                <span className="text-4xl md:text-5xl lg:text-6xl">
                  <span className="text-3xl md:text-4xl font-medium mt-2 block"> Hi there!</span>{" "}
                  <span className="gradient-text">I'm Swetha Reddy Ganta.</span>
                </span>
                <br />
                <span className="text-3xl md:text-4xl font-medium mt-2 block">AI Engineer from New York, USA</span>
              </h1>
              <p className="subheadline mb-10">
                Specialized in Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision with
                published research.
              </p>
              <div className="flex flex-wrap gap-4">
                <SocialButton href="mailto:sganta3@buffalo.edu" icon={<Mail className="h-5 w-5" />} label="Email" />
                <SocialButton
                  href="https://www.linkedin.com/in/swetha-reddy-ganta"
                  icon={<Linkedin className="h-5 w-5" />}
                  label="LinkedIn"
                />
                <SocialButton
                  href="https://github.com/swethareddyganta"
                  icon={<Github className="h-5 w-5" />}
                  label="GitHub"
                />
                <SocialButton
                  href="https://drive.google.com/file/d/162NDszyZMwPT-aK3AtVyJd3-CgMHHJv_/view?usp=sharing"
                  icon={<FileText className="h-5 w-5" />}
                  label="Resume"
                  target="_blank"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <div className="card p-2 relative overflow-hidden rounded-3xl">
                <img
                  src="/images/profile.jpeg"
                  alt="Swetha Reddy Ganta"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="section bg-black border-t border-gray-800">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
                About Me
              </div>
              <h2 className="headline">
                Pushing the boundaries of
                <span className="gradient-text"> Artificial Intelligence</span>
              </h2>
              <p className="subheadline mb-6">
                AI Engineer with comprehensive experience in Machine Learning, Deep Learning, Natural Language
                Processing, and Computer Vision. Demonstrated expertise in developing intelligent systems with published
                research.
              </p>
              <p className="text-gray-400 mb-8">
                Passionate about leveraging AI to solve complex problems at scale, with strong technical foundation in
                Python, TensorFlow, PyTorch, and data analysis. Seeking to apply research experience and technical
                skills to develop innovative AI solutions.
              </p>
              <Link href="/about" className="button-primary inline-flex items-center">
                More about me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="card p-8">
                <h3 className="text-xl font-medium mb-6">Research Interests</h3>
                <div className="space-y-4">
                  <ResearchInterest
                    title="Natural Language Processing"
                    description="Multilingual models, tokenization optimization, and efficient language understanding"
                  />
                  <ResearchInterest
                    title="Computer Vision"
                    description="Object detection, image segmentation, and multimodal vision-language models"
                  />
                  <ResearchInterest
                    title="Reinforcement Learning"
                    description="Strategic decision making, game AI, and multi-agent systems"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section bg-black border-t border-gray-800">
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
              Education
            </div>
            <h2 className="headline">Academic Background</h2>
            <p className="subheadline mx-auto">Foundation in Artificial Intelligence and computer science</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <EducationCard
              institution="University at Buffalo, State University of New York"
              degree="Master of Science in Engineering Science"
              specialization="Artificial Intelligence"
              period="Aug. 2023 – Dec. 2024"
              location="Buffalo, NY"
              image="/images/university-at-buffalo.jpeg"
              link="https://www.buffalo.edu/"
            />
            <EducationCard
              institution="Kakatiya Institute of Technology and Science, Warangal"
              degree="Bachelor of Technology"
              specialization="Computer Science"
              period="Aug. 2019 – May 2023"
              location="Warangal, India"
              image="/images/kakatiya-university.jpeg"
              link="https://www.kitsw.ac.in/"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-black border-t border-gray-800">
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
              Projects
            </div>
            <h2 className="headline">Featured Work</h2>
            <p className="subheadline mx-auto">Innovative AI solutions I've developed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Intelli-Chat"
              subtitle="AI-Powered Conversational System"
              description="Architected scalable chatbot system processing 60,000+ documents with hybrid retrieval-augmented generation approach."
              image="/images/project-1.png"
              tags={["NLP", "LLMs", "OpenAI API"]}
              githubLink="https://github.com/swethareddyganta/intelli-chat"
            />
            <ProjectCard
              title="Tokenization Challenges in Multilingual GPT"
              subtitle="NLP Research & Implementation"
              description="Researched and implemented optimized tokenization for multilingual language models, improving efficiency by 60% for non-English languages."
              image="/images/project-2.png"
              tags={["NLP", "Multilingual", "GPT"]}
              githubLink="https://github.com/swethareddyganta/teluguGPT"
              paperLink="http://proceeding.conferenceworld.in/ICIIRS-2023/10.pdf"
            />
            <ProjectCard
              title="Multi-Language Translation System"
              subtitle="Neural Machine Translation"
              description="Built production-ready neural translation system supporting 5+ language pairs with 85% BLEU score using sequence-to-sequence architecture."
              image="/images/project-3.png"
              tags={["Seq2Seq", "LSTM", "Attention Mechanism"]}
              githubLink="https://github.com/swethareddyganta/Language-Translation"
            />
            <ProjectCard
              title="Meme Persuasion Detection"
              subtitle="Multimodal Content Analysis"
              description="Developed multimodal classification system for detecting persuasion techniques in internet memes with 78% accuracy using BERT and ResNet-50."
              image="/images/project-4.png"
              tags={["Multimodal ML", "Computer Vision", "NLP"]}
              githubLink="https://github.com/swethareddyganta/MemePersuasionDetection"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="button-secondary inline-flex items-center">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section bg-black border-t border-gray-800">
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
              Experience
            </div>
            <h2 className="headline">Professional Journey</h2>
            <p className="subheadline mx-auto">My experience in AI research and development</p>
          </div>
          <div className="space-y-12">
            <ExperienceCard
              title="Artificial Intelligence Research Intern"
              company="Kakatiya Institute of Technology and Science"
              companyLink="https://www.kitsw.ac.in/"
              period="Feb 2023 – Jun 2023"
              description="Optimized tokenization in multilingual language models, improving efficiency by 60% for non-English languages. Developed language-specific preprocessing pipelines, reducing token usage per prompt from 70-100 to 18-25."
              achievements={[
                "Published research paper 'Tokenization Challenges in Multilingual GPT' at ICIIRS-23 conference",
                "Reduced token usage by 75% for non-English languages",
                "Enhanced response speed using transliteration-based preprocessing",
                "Implemented preprocessing pipeline used by 200+ students",
              ]}
              image="/images/experience-1.png"
            />
            <ExperienceCard
              title="Machine Learning Research Intern"
              company="Kakatiya Institute of Technology and Science"
              companyLink="https://www.kitsw.ac.in/"
              period="Mar 2023 – Jul 2023"
              description="Engineered ML pipeline for fraud detection achieving 78% accuracy and 81% AUC using ensemble methods. Implemented data balancing and feature engineering techniques to optimize model performance on imbalanced datasets."
              achievements={[
                "Published research paper 'Fraud Detection in Automobile Insurance Claims using Machine Learning Algorithms' at ICIIRS-23",
                "Developed ML models (RF, KNN, DT, SVM) for fraud detection, selecting Random Forest as optimal",
                "Conducted extensive evaluation despite data imbalance, demonstrating RF's superior performance",
                "Created reusable feature engineering pipeline for insurance data",
              ]}
              image="/images/experience-2.png"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/experience" className="button-secondary inline-flex items-center">
              View full experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-black border-t border-gray-800">
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
              Skills
            </div>
            <h2 className="headline">Technical Expertise</h2>
            <p className="subheadline mx-auto">Core competencies and technologies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              category="AI & Machine Learning"
              skills={[
                { name: "TensorFlow", level: 90 },
                { name: "PyTorch", level: 85 },
                { name: "Scikit-learn", level: 95 },
                { name: "NLP", level: 90 },
                { name: "Computer Vision", level: 85 },
                { name: "Reinforcement Learning", level: 80 },
              ]}
            />
            <SkillCard
              category="Programming"
              skills={[
                { name: "Python", level: 95 },
                { name: "C/C++", level: 80 },
                { name: "Java", level: 75 },
                { name: "SQL", level: 85 },
                { name: "MATLAB", level: 70 },
              ]}
            />
            <SkillCard
              category="Data & Analytics"
              skills={[
                { name: "NumPy", level: 95 },
                { name: "Pandas", level: 90 },
                { name: "Matplotlib", level: 85 },
                { name: "Seaborn", level: 80 },
                { name: "Tableau", level: 75 },
                { name: "Statistical Analysis", level: 85 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="text-lg font-medium text-white">
                SRG
              </Link>
            </div>
            <div className="flex space-x-8 mb-6 md:mb-0">
              <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/experience" className="text-sm text-gray-400 hover:text-white transition-colors">
                Experience
              </Link>
            </div>
            <div className="flex space-x-6">
              <Link href="mailto:sganta3@buffalo.edu" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/swetha-reddy-ganta"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/swethareddyganta"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Swetha Reddy Ganta. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

