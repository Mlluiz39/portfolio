import { ExternalLink } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export function ServiceCard({
  icon,
  title,
  description,
  color,
}: ServiceCardProps) {
  return (
    <div
      className={`${color} bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all cursor-pointer group`}
    >
      <div className={`${color} p-3 rounded-lg inline-block mb-4`}>
        <div className="text-gray-900">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <div className="mt-4 flex items-center text-white/60 group-hover:text-white transition-colors">
        <span className="text-sm mr-2">Saiba mais</span>
        <ExternalLink size={16} />
      </div>
    </div>
  )
}
