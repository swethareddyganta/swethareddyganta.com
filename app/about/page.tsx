import Link from "next/link"
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {/* Header */}
      <section className="section pt-12">
        <div className="container-xl">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="max-w-4xl">
            <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
              About
            </div>
            <h1 className="headline">
              <span className="gradient-text">Swetha Reddy Ganta</span>
            </h1>
            <p className="subheadline">AI Engineer with expertise in Machine Learning and Computer Vision</p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section pt-0">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="card p-8 sticky top-24">
                <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border border-gray-800">
                  <img
                    src="/images/profile-about.jpeg"
                    alt="Swetha Reddy Ganta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-medium text-center mb-2">Swetha Reddy Ganta</h2>
                <p className="text-purple-400 text-center mb-6 text-sm">AI Engineer</p>
                <div className="space-y-6">
                  <div className="flex flex-col gap-4">
                    <SocialLink
                      href="mailto:sganta3@buffalo.edu"
                      icon={<Mail className="h-4 w-4" />}
                      label="sganta3@buffalo.edu"
                    />
                    <SocialLink
                      href="https://linkedin.com/in/swetha-reddy-ganta"
                      icon={<Linkedin className="h-4 w-4" />}
                      label="linkedin.com/in/swetha-reddy-ganta"
                    />
                    <SocialLink
                      href="https://github.com/swethareddyganta"
                      icon={<Github className="h-4 w-4" />}
                      label="github.com/swethareddyganta"
                    />
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <h3 className="text-lg font-medium mb-3">Location</h3>
                    <p className="text-gray-400 text-sm">Buffalo, New York, USA</p>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <h3 className="text-lg font-medium mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">English (Professional)</span>
                      <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">Hindi (Native)</span>
                      <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">Telugu (Native)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://drive.google.com/file/d/162NDszyZMwPT-aK3AtVyJd3-CgMHHJv_/view?usp=sharing"
                    className="button-primary w-full block text-center"
                    target="_blank"
                  >
                    Download Resume
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-12">
                <div className="card p-8">
                  <h2 className="text-2xl font-medium mb-6">Professional Summary</h2>
                  <p className="text-gray-300 mb-4">
                    AI Engineer with comprehensive experience in Machine Learning, Deep Learning, Natural Language
                    Processing, and Computer Vision. Demonstrated expertise in developing intelligent systems with
                    published research in multilingual NLP, fraud detection, and Computer Vision.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Passionate about leveraging AI to solve complex problems at scale, with strong technical foundation
                    in Python, TensorFlow, PyTorch, and data analysis. Seeking to apply research experience and
                    technical skills to develop innovative AI solutions.
                  </p>
                  <p className="text-gray-300">
                    My journey in AI began during my undergraduate studies where I developed a keen interest in how
                    machines can learn from data. This fascination led me to pursue specialized research in multilingual
                    NLP and Computer Vision, resulting in multiple published papers and practical applications that
                    solve real-world problems.
                  </p>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-medium mb-6">Research Experience</h2>
                  <div className="space-y-8">
                    <ResearchExperience
                      title="Artificial Intelligence Research Intern"
                      project="Tokenization Challenges in Multilingual GPT"
                      company="Kakatiya Institute of Technology and Science"
                      period="Feb 2023 – Jun 2023"
                      description="Optimized tokenization in multilingual language models, improving efficiency by 60% for non-English languages. Developed language-specific preprocessing pipelines, reducing token usage per prompt from 70-100 to 18-25."
                      paperLink="http://proceeding.conferenceworld.in/ICIIRS-2023/10.pdf"
                    />
                    <ResearchExperience
                      title="Machine Learning Research Intern"
                      project="Fraud Detection in Automobile Insurance Claims using Machine Learning Algorithms"
                      company="Kakatiya Institute of Technology and Science"
                      period="Mar 2023 – Jul 2023"
                      description="Engineered ML pipeline for fraud detection achieving 78% accuracy and 81% AUC using ensemble methods. Implemented data balancing and feature engineering techniques to optimize model performance on imbalanced datasets."
                      paperLink="http://proceeding.conferenceworld.in/ICIIRS-2023/13.pdf"
                    />
                    <ResearchExperience
                      title="Computer Vision Research Intern"
                      project="A Quantitative Analysis of Basic vs. Deep Learning-based Image Data Augmentation Techniques"
                      company="Kakatiya Institute of Technology and Science"
                      period="Jan 2021 – Aug 2021"
                      description="Conducted research on deep learning-based image augmentation techniques, achieving 98.57% accuracy on MNIST dataset. Implemented and evaluated various data augmentation strategies to improve model robustness and generalization."
                      paperLink="https://ieeexplore.ieee.org/abstract/document/9633781"
                    />
                  </div>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-medium mb-6">Education Details</h2>
                  <div className="space-y-8">
                    <EducationDetail
                      institution="University at Buffalo, State University of New York"
                      degree="Master of Science in Engineering Science"
                      specialization="Artificial Intelligence"
                      period="Aug. 2023 – Dec. 2024"
                      location="Buffalo, NY"
                      courses={[
                        "Advanced Machine Learning",
                        "Deep Learning",
                        "Natural Language Processing",
                        "Computer Vision",
                        "Reinforcement Learning",
                      ]}
                      image="/images/university-at-buffalo.jpeg"
                    />
                    <EducationDetail
                      institution="Kakatiya Institute of Technology and Science, Warangal"
                      degree="Bachelor of Technology"
                      specialization="Computer Science"
                      period="Aug. 2019 – May 2023"
                      location="Warangal, India"
                      courses={[
                        "Data Structures and Algorithms",
                        "Database Management Systems",
                        "Artificial Intelligence",
                        "Machine Learning",
                        "Computer Networks",
                      ]}
                      image="/images/kakatiya-university.jpeg"
                    />
                  </div>
                </div>

                <div className="card p-8">
                  <h2 className="text-2xl font-medium mb-6">Additional Information</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-medium mb-3">Open Source Contributions</h3>
                      <p className="text-gray-300 mb-4">
                        Active contributor to ML/AI projects on GitHub with 500+ commits, focusing on improving
                        accessibility and performance of open-source AI tools.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-gray-800 rounded-md p-4">
                          <h4 className="text-lg font-medium mb-2">TensorFlow Contributions</h4>
                          <p className="text-gray-400 text-sm">
                            Contributed to documentation and example notebooks for TensorFlow's NLP modules.
                          </p>
                        </div>
                        <div className="border border-gray-800 rounded-md p-4">
                          <h4 className="text-lg font-medium mb-2">PyTorch Ecosystem</h4>
                          <p className="text-gray-400 text-sm">
                            Developed custom datasets and data loaders for computer vision applications.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">AI Ethics</span>
                        <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">Explainable AI</span>
                        <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">Inclusive ML Systems</span>
                        <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">Computational Linguistics</span>
                        <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">Quantum Computing</span>
                        <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">Robotics</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Certifications</h3>
                      <div className="space-y-4">
                        <div className="border border-gray-800 rounded-md p-4">
                          <h4 className="text-lg font-medium mb-1">Deep Learning Specialization</h4>
                          <p className="text-purple-400 text-sm mb-2">Coursera - deeplearning.ai</p>
                          <p className="text-gray-400 text-sm">
                            Completed 5-course specialization covering neural networks, CNN, RNN, and ML project
                            structuring.
                          </p>
                        </div>
                        <div className="border border-gray-800 rounded-md p-4">
                          <h4 className="text-lg font-medium mb-1">TensorFlow Developer Certificate</h4>
                          <p className="text-purple-400 text-sm mb-2">Google</p>
                          <p className="text-gray-400 text-sm">
                            Professional certification demonstrating proficiency in building TensorFlow models.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section gradient-bg">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline">Let's Connect</h2>
            <p className="subheadline mx-auto mb-10">Interested in collaborating or discussing AI innovations?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="mailto:sganta3@buffalo.edu" className="button-primary inline-flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Link>
              <Link
                href="https://linkedin.com/in/swetha-reddy-ganta"
                className="button-secondary inline-flex items-center"
                target="_blank"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Link>
            </div>
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
                href="https://linkedin.com/in/swetha-reddy-ganta"
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

function SocialLink({ href, icon, label }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
      target={href.startsWith("mailto:") ? undefined : "_blank"}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  )
}

function ResearchExperience({ title, project, company, period, description, paperLink }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 border-b border-gray-800 pb-8 last:border-0 last:pb-0">
      <div className="md:w-1/3">
        <h4 className="text-lg font-medium mb-2">{title}</h4>
        <p className="text-purple-400 mb-1 text-sm">{company}</p>
        <p className="text-gray-400 mb-3 text-sm">{period}</p>
      </div>
      <div className="md:w-2/3">
        <h3 className="text-xl font-medium text-white mb-2">{project}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <Link
          href={paperLink}
          target="_blank"
          className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
        >
          View Research Paper →
        </Link>
      </div>
    </div>
  )
}

function EducationDetail({ institution, degree, specialization, period, location, courses, image }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 border-b border-gray-800 pb-8 last:border-0 last:pb-0">
      <div className="md:w-1/3">
        <img
          src={image || "/placeholder.svg?height=200&width=300"}
          alt={institution}
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="md:w-2/3">
        <h3 className="text-xl font-medium mb-2">{institution}</h3>
        <p className="text-purple-400 text-sm mb-1">{degree}</p>
        <p className="text-blue-400 text-sm mb-4">{specialization}</p>
        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <span>{period}</span>
          <span>{location}</span>
        </div>
        <h4 className="text-lg font-medium mb-2">Key Courses</h4>
        <div className="flex flex-wrap gap-2">
          {courses.map((course, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-gray-800 rounded-md">
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

