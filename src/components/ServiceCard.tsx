import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { ServiceModal } from './ServiceModalProps'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  detailedInfo: {
    description: string
    highlights: string[]
    technologies: string[]
    example: string
  }
}

export function ServiceCard({
  icon,
  title,
  description,
  color,
  detailedInfo,
}: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div
      className={`${color} bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all cursor-pointer group`}
    >
      <div className={`${color} p-3 rounded-lg inline-block mb-4`}>
        <div className="text-gray-900">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>

      <div className="flex items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center mt-6 gap-2 px-4 py-1 text-gray-900 font-semibold rounded-lg shadow transition-transform transform hover:scale-110"
        >
          <span className='text-white'>Saiba mais</span>
          <ExternalLink size={18} className='text-white' />
        </button>
      </div>
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={detailedInfo.description}
        highlights={detailedInfo.highlights}
        technologies={detailedInfo.technologies}
        example={detailedInfo.example}
        modalClass="transition-all duration-300 ease-in-out opacity-0 transform scale-95"
        modalOpenClass="opacity-100 transform scale-100"
      />
    </div>
  )
}
