import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {/* Header */}
      <section className="section pt-8 pb-6">
        <div className="container-xl">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="max-w-4xl mb-4">
            <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
              Projects
            </div>
            <h1 className="headline">
              <span className="gradient-text">My Projects</span>
            </h1>
            <p className="subheadline">
              Exploring the intersection of AI, Machine Learning, and real-world applications
            </p>
          </div>
        </div>
      </section>

      {/* Projects Categories */}
      <section className="section pt-0 mt-[-1rem]">
        <div className="container-xl">
          {/* All Projects */}
          <div>
            <h2 className="text-2xl font-medium mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Intelli-Chat"
                subtitle="AI-Powered Conversational System"
                description="Deployed an AI chatbot on GCP processing 60,000+ documents with hybrid retrieval-augmented generation approach."
                image="/images/project-1.png"
                tags={["NLP", "LLMs", "OpenAI API"]}
                year="2023"
                githubLink="https://github.com/swethareddyganta/intelli-chat"
              />
              <ProjectCard
                title="Multi-Language Translation System"
                subtitle="Neural Machine Translation"
                description="Built production-ready neural translation system supporting 5+ language pairs with 85% BLEU score using sequence-to-sequence architecture."
                image="/images/project-3.png"
                tags={["Seq2Seq", "LSTM", "Attention Mechanism"]}
                year="2022"
                githubLink="https://github.com/swethareddyganta/Language-Translation"
              />
              <ProjectCard
                title="Tokenization Challenges in Multilingual GPT"
                subtitle="NLP Research & Implementation"
                description="Researched and implemented optimized tokenization for multilingual language models, improving efficiency by 60% for non-English languages."
                image="/images/project-2.png"
                tags={["NLP", "Multilingual", "GPT"]}
                year="2023"
                githubLink="https://github.com/swethareddyganta/teluguGPT"
                paperLink="http://proceeding.conferenceworld.in/ICIIRS-2023/10.pdf"
              />
              <ProjectCard
                title="Meme Persuasion Detection"
                subtitle="Multimodal Content Analysis"
                description="Developed multimodal classification system for detecting persuasion techniques in internet memes with 78% accuracy using BERT and ResNet-50."
                image="/images/project-4.png"
                tags={["Multimodal ML", "Computer Vision", "NLP"]}
                year="2023"
                githubLink="https://github.com/swethareddyganta/MemePersuasionDetection"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="section bg-black border-t border-gray-800">
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-medium text-purple-400 mb-4 px-3 py-1 bg-purple-400/10 rounded-full">
              Research
            </div>
            <h2 className="headline">Research Projects</h2>
            <p className="subheadline mx-auto">Published academic research in AI and machine learning</p>
          </div>
          <div className="space-y-12">
            <ProjectDetailCard
              title="Tokenization Challenges in Multilingual GPT"
              subtitle="Guide: Prof. Rohini Srihari"
              description="Optimized tokenization in multilingual language models, improving efficiency by 60% for non-English languages. Developed language-specific preprocessing pipelines, reducing token usage per prompt from 70-100 to 18-25. Conducted comparative analysis between native script and transliterated text, demonstrating significant computational advantages. Created a specialized preprocessing framework for Telugu language that can be extended to other Indic languages, enhancing the accessibility of large language models for non-English users."
              image="/images/experience-1.png"
              tags={["Python", "NLP", "GPT", "Tokenization", "Multilingual", "Preprocessing"]}
              year="2023"
              githubLink="https://github.com/swethareddyganta/teluguGPT"
              paperLink="http://proceeding.conferenceworld.in/ICIIRS-2023/10.pdf"
            />
            <ProjectDetailCard
              title="Fraud Detection in Automobile Insurance Claims using Machine Learning Algorithms"
              subtitle="Guide: Prof. Nasrin Akhter"
              description="Engineered ML pipeline for fraud detection achieving 78% accuracy and 81% AUC using ensemble methods. Implemented data balancing and feature engineering techniques to optimize model performance on imbalanced datasets. Developed ML models (RF, KNN, DT, SVM) for fraud detection, selecting Random Forest as optimal. Conducted extensive evaluation despite data imbalance, demonstrating RF's superior performance over other models."
              image="/images/experience-2.png"
              tags={["Machine Learning", "Random Forest", "Data Analysis", "Model Evaluation", "Python"]}
              year="2023"
              githubLink="#"
              paperLink="http://proceeding.conferenceworld.in/ICIIRS-2023/13.pdf"
            />
            <ProjectDetailCard
              title="A Quantitative Analysis of Basic vs. Deep Learning-based Image Data Augmentation Techniques"
              subtitle="Guide: Prof. Rohini Srihari"
              description="Conducted research on deep learning-based image augmentation techniques, achieving 98.57% accuracy on MNIST dataset. Implemented and evaluated various data augmentation strategies to improve model robustness and generalization. Evaluated computational burden, storage requirements, and performance to recommend cost-effective augmentation strategies. Published findings in IEEE ICSES 2021, contributing to enhanced robustness in deep learning pipelines."
              image="/images/experience-4.png"
              tags={["Computer Vision", "Deep Learning", "TensorFlow", "Image Augmentation", "Model Optimization"]}
              year="2021"
              githubLink="#"
              paperLink="https://ieeexplore.ieee.org/abstract/document/9633781"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section gradient-bg">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline">Interested in Collaboration?</h2>
            <p className="subheadline mx-auto mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link href="mailto:sganta3@buffalo.edu" className="button-primary">
              Get in Touch
            </Link>
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
                <span className="text-sm">Email</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/swetha-reddy-ganta"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
              >
                <span className="text-sm">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/swethareddyganta"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
              >
                <span className="text-sm">GitHub</span>
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

function ProjectCard({ title, subtitle, description, image, tags, year, githubLink, paperLink }) {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">{year}</span>
            {tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-800 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-medium mb-1">{title}</h3>
          <p className="text-purple-400 text-sm mb-3">{subtitle}</p>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <Link
            href={githubLink}
            className="inline-flex items-center text-sm text-white hover:text-purple-400 transition-colors"
            target="_blank"
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Link>
          {paperLink && (
            <Link
              href={paperLink}
              className="inline-flex items-center text-sm text-white hover:text-purple-400 transition-colors"
              target="_blank"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Research Paper
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectDetailCard({ title, subtitle, description, image, tags, year, githubLink, paperLink }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-1">
        <div className="card overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2 py-1 bg-purple-400/20 text-purple-400 rounded-md">Research</span>
            <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">{year}</span>
          </div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-purple-400 text-sm mb-4">{subtitle}</p>
          <p className="text-gray-300 text-sm mb-6">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-800 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {githubLink && githubLink !== "#" && (
              <Link
                href={githubLink}
                className="inline-flex items-center text-sm text-white hover:text-purple-400 transition-colors"
                target="_blank"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            )}
            {paperLink && (
              <Link
                href={paperLink}
                className="inline-flex items-center text-sm text-white hover:text-purple-400 transition-colors"
                target="_blank"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Research Paper
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

