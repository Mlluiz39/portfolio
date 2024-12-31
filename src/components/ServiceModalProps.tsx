interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  highlights: string[]
  technologies: string[]
  example: string
  modalClass?: string;  
  modalOpenClass?: string;
}

export function ServiceModal({
  isOpen,
  onClose,
  title,
  description,
  highlights,
  technologies,
  example,
}: ServiceModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 w-11/12 max-w-lg">
        <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white">Destaques:</h3>
          <ul className="list-disc pl-5 text-gray-400">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white">Tecnologias:</h3>
          <p className="text-gray-400">{technologies.join(', ')}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">
            Exemplo de Projeto:
          </h3>
          <p className="text-gray-400">{example}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-amber-500 px-4 py-2 rounded text-white font-medium hover:bg-amber-600 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  )
}
