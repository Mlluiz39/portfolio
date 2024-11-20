import { Github, Globe } from 'lucide-react'

interface ProjectCardProps {
  image: string
  title: string
  description: string
  tags: string[]
}

export function ProjectCard({
  image,
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-amber-500 bg-opacity-10 text-amber-500 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
          >
            <Github size={16} />
            <span className="text-sm">Código</span>
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
          >
            <Globe size={16} />
            <span className="text-sm">Demo</span>
          </a>
        </div>
      </div>
    </div>
  )
}
