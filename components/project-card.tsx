"use client"

import Link from "next/link"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function ProjectCard({ title, subtitle, description, image, tags, year, githubLink, paperLink }) {
  const [imgSrc, setImgSrc] = useState(image || "/placeholder.svg?height=200&width=300")

  const handleImageError = () => {
    setImgSrc("/placeholder.svg?height=200&width=300")
  }

  return (
    <div className="card group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imgSrc || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={handleImageError}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-auto">
          <div className="flex items-center gap-2 mb-3">
            {year && <span className="text-xs px-2 py-1 bg-gray-800 rounded-md">{year}</span>}
            {tags &&
              tags.slice(0, 2).map((tag, index) => (
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
              {paperLink.includes("ieeexplore") ? (
                <ExternalLink className="mr-2 h-4 w-4" />
              ) : (
                <ArrowRight className="mr-2 h-4 w-4" />
              )}
              Research Paper
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

