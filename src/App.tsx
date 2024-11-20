import { Code2, Smartphone, Layout, Database, Download } from 'lucide-react'
import { ServiceCard } from './components/ServiceCard'
import { ProjectCard } from './components/ProjectCard'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900" id="hero">
        {/* Seção Hero */}
        <div className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-amber-500 hidden lg:block"></div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20">
            <nav className="py-6 flex justify-between items-center">
              <div className="text-amber-500 text-xl font-bold">
                Marcelo Luiz
              </div>
              <button className="lg:hidden text-white hover:text-amber-500 transition-colors">
                <span className="sr-only">Menu</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </nav>

            <div className="flex flex-col items-center text-center lg:text-left lg:items-start min-h-[80vh]">
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                Sou Marcelo Luiz
              </h1>
              <h2 className="text-lg sm:text-xl text-gray-300 mb-8">
                Desenvolvedor Full Stack & Engenheiro de Software
              </h2>
              <button className="bg-amber-500 text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
                CONTRATE-ME
              </button>
            </div>
          </div>
        </div>

        {/* Seção Sobre */}
        <section className="py-16 bg-gray-800" id="about">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative w-full">
                <div className="hidden lg:block absolute -top-4 -left-4 w-full h-full border-2 border-amber-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
                  alt="Desenvolvedor profissional"
                  className="w-full relative z-10 rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Sobre Mim
                </h2>
                <p className="text-gray-300 mb-6">
                  Sou um desenvolvedor full-stack apaixonado com mais de 4 anos
                  de experiência na construção de aplicações web escaláveis e
                  resolução de problemas complexos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-amber-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
                    CONTRATE-ME
                  </button>
                  <button className="border-2 border-amber-500 text-amber-500 px-6 py-2 rounded-lg font-semibold hover:bg-amber-500 hover:text-gray-900 transition-colors flex items-center gap-2">
                    <Download size={20} />
                    BAIXAR CURRÍCULO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Serviços */}
        <section className="py-16 bg-gray-900" id="services">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
              Serviços
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={<Code2 size={24} />}
                title="Desenvolvimento Web"
                color="bg-amber-500"
                description="Desenvolvimento full-stack com frameworks modernos e melhores práticas"
              />
              <ServiceCard
                icon={<Layout size={24} />}
                title="Desenvolvimento Frontend"
                color="bg-cyan-500"
                description="Interfaces responsivas e interativas com React"
              />
              <ServiceCard
                icon={<Smartphone size={24} />}
                title="Desenvolvimento Mobile"
                color="bg-pink-500"
                description="Aplicativos multiplataforma usando React Native"
              />
              <ServiceCard
                icon={<Database size={24} />}
                title="Desenvolvimento Backend"
                color="bg-green-500"
                description="Soluções escaláveis com Node.js e serviços em nuvem"
              />
            </div>
          </div>
        </section>

        {/* Seção Projetos */}
        <section className="py-20 bg-gray-800" id="projects">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Projetos em Destaque
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                image="https://images.unsplash.com/photo-1551650975-87deedd944c3"
                title="Plataforma E-Commerce"
                description="Uma solução completa de e-commerce construída com React, Node.js e MongoDB. Inclui inventário em tempo real, processamento de pagamentos e painel administrativo."
                tags={['React', 'Node.js', 'MongoDB', 'Stripe']}
              />
              <ProjectCard
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                title="Painel de Analytics"
                description="Dashboard de análise em tempo real para acompanhamento de métricas de negócios. Construído com React, D3.js e WebSocket para atualizações ao vivo."
                tags={['React', 'D3.js', 'WebSocket', 'Redux']}
              />
              <ProjectCard
                image="https://images.unsplash.com/photo-1526498460520-4c246339dccb"
                title="App de Gestão de Tarefas"
                description="Um aplicativo colaborativo de gestão de tarefas com atualizações em tempo real, compartilhamento de arquivos e chat em equipe."
                tags={['React Native', 'Firebase', 'Redux', 'Node.js']}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Logo e Descrição */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Marcelo Luiz</h3>
                <p>
                  Desenvolvedor Full Stack focado em criar soluções tecnológicas
                  que impulsionam negócios e transformam ideias em realidade.
                </p>
              </div>

              {/* Links Rápidos */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#hero"
                      className="hover:text-amber-500 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-amber-500 transition-colors"
                    >
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="hover:text-amber-500 transition-colors"
                    >
                      Projetos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-amber-500 transition-colors"
                    >
                      Sobre Mim
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contato e Redes Sociais */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contato</h4>
                <ul className="space-y-2">
                  <li>
                    Email:{' '}
                    <a
                      href="mailto:mlluizpereira39@gmail.com"
                      className="hover:text-amber-500 transition-colors"
                    >
                      mlluizpereira39@gmail.com
                    </a>
                  </li>
                  <li>
                    LinkedIn:{' '}
                    <a
                      href="https://www.linkedin.com/in/marcelo-luiz-39"
                      className="hover:text-amber-500 transition-colors"
                    >
                      linkedin.com/in/marcelo-luiz-39
                    </a>
                  </li>
                  <li>
                    GitHub:{' '}
                    <a
                      href="https://github.com/marcelo-luiz"
                      className="hover:text-amber-500 transition-colors"
                    >
                      github.com/marcelo-luiz
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
