import { useState } from 'react'
import {
  Code2,
  Smartphone,
  Layout,
  Database,
  Download,
  Linkedin,
  Menu,
  X,
} from 'lucide-react'
import Lottie from 'lottie-react'
import dev from './assets/dev.json'
import { ServiceCard } from './components/ServiceCard'
import { ProjectCard } from './components/ProjectCard'
import iterative from './assets/pexels-questions.jpg'
import cnpjConsultation from './assets/consult-cnpj.jpg'
import passwordGenerator from './assets/password.jpg'
import todoApp from './assets/todo-app.jpg'
import beautyWebsite from './assets/aesthetics.jpg'
import travelWebsite from './assets/travels.jpg'

// Simple ModernAnimation component as a placeholder
function ModernAnimation() {
  return (
    <div className="w-full max-w-[500px] aspect-square">
      <Lottie animationData={dev} loop={true} className="w-full h-full" />
    </div>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-muted"
        id="hero"
      >
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-10 w-20 h-20 bg-secondary/10 rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-secondary/5 rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20">
          {/* Navigation */}
          <nav className="py-6 flex justify-between items-center">
            <div className="text-2xl font-bold text-foreground">
              <span className="text-primary text-yellow-600">Marcelo</span> Luiz
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-8 text-foreground">
              <li>
                <a
                  href="#hero"
                  className="hover:text-primary transition-colors cursor-pointer font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors cursor-pointer font-medium"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary transition-colors cursor-pointer font-medium"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors cursor-pointer font-medium"
                >
                  Sobre Mim
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-card border border-border rounded-lg p-4 mb-8">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#hero"
                    className="block text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="block text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre Mim
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-12 lg:pt-0">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl font-bold text-foreground leading-tight">
                  Sou{' '}
                  <span className="text-primary text-yellow-600">
                    Marcelo Luiz
                  </span>
                </h1>
                <h2 className="text-xl sm:text-2xl text-muted-foreground font-light">
                  Desenvolvedor{' '}
                  <span className="text-secondary font-semibold text-blue-400">
                    Full Stack
                  </span>{' '}
                  & Engenheiro de Software
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Transformo ideias em soluções digitais inovadoras, criando
                experiências web que impulsionam negócios e conectam pessoas.
              </p>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors"
                onClick={() =>
                  window.open('https://wa.me/5511977869073', '_blank')
                }
              >
                Vamos conversar
              </button>
            </div>

            {/* Modern CSS Animation */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <ModernAnimation />
                {/* Additional decorative elements */}
                <div className="absolute -top-8 -right-8 w-12 h-12 bg-primary/10 rounded-2xl rotate-12 animate-float"></div>
                <div className="absolute -bottom-8 -left-8 w-10 h-10 bg-secondary/10 rounded-full animate-float-delayed"></div>
                <div className="absolute top-1/4 -right-12 w-6 h-6 bg-primary/15 rotate-45 animate-pulse"></div>
                <div
                  className="absolute bottom-1/4 -left-12 w-8 h-8 bg-secondary/15 rounded-full animate-pulse"
                  style={{ animationDelay: '1s' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card" id="about">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
                alt="Desenvolvedor profissional"
                className="w-full h-[400px] object-cover rounded-2xl shadow-[var(--shadow-card)]"
              />
              {/* Geometric overlay */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-2xl rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Sobre Mim
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Sou um desenvolvedor full-stack apaixonado por tecnologia, com
                  uma vasta experiência na construção de aplicações front-end,
                  mobile, back-end todas escaláveis e com uma boa resolução de
                  problemas complexos.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded shadow-[var(--shadow-blue)] flex items-center justify-center"
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/marcelo-luiz-pereira-souza/',
                      '_blank'
                    )
                  }
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </button>

                <button
                  className="hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded shadow-[var(--shadow-blue)] flex items-center justify-center"
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/curriculo.pdf'
                    link.download = 'curriculo.pdf'
                    link.click()
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar CV
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
              description="Desenvolvimento full-stack com frameworks modernos"
              detailedInfo={{
                description:
                  'Desenvolvimento completo de aplicações web, desde o design visual até a implementação back-end. Utilizamos tecnologias como React, Node.js e bancos de dados modernos para garantir alta performance e escalabilidade.',
                highlights: [
                  'Sites rápidos e responsivos',
                  'Melhorias de SEO e acessibilidade',
                  'Integrações com APIs externas',
                ],
                technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
                example: '',
              }}
            />
            <ServiceCard
              icon={<Layout size={24} />}
              title="Desenvolvimento Frontend"
              color="bg-cyan-500"
              description="Interfaces responsivas e interativas com React e TypeScript"
              detailedInfo={{
                description:
                  'Criação de interfaces modernas que combinam design atraente e funcionalidade. Garantindo usabilidade intuitiva para proporcionar uma experiência única aos usuários.',
                highlights: [
                  'Design responsivo (mobile-first)',
                  'Animações e transições suaves',
                  'Adaptação para diferentes navegadores',
                ],
                technologies: [
                  'React',
                  'TypeScript',
                  'Tailwind CSS',
                  'Framer Motion',
                ],
                example: '',
              }}
            />
            <ServiceCard
              icon={<Smartphone size={24} />}
              title="Desenvolvimento Mobile"
              color="bg-pink-500"
              description="Aplicativos multiplataforma usando React Native"
              detailedInfo={{
                description:
                  'Construção de aplicativos para Android e iOS, garantindo um design consistente e performance otimizada. Oferecendo suporte a funcionalidades nativas e cross-platform.',
                highlights: [
                  'Integração com APIs nativas do dispositivo (câmera, localização, notificações)',
                  'Compatibilidade com iOS e Android',
                  'Desempenho nativo e fluidez de animações',
                  'Publicação na App Store e Google Play',
                ],
                technologies: [
                  'React Native',
                  'Expo',
                  'TypeScript',
                  'SQLite',
                  'Firebase',
                ],
                example: '',
              }}
            />
            <ServiceCard
              icon={<Database size={24} />}
              title="Desenvolvimento Backend"
              color="bg-green-500"
              description="Soluções escaláveis com Node.js e serviços em nuvem"
              detailedInfo={{
                description:
                  'Estruturação de sistemas robustos e escaláveis para atender grandes volumes de dados e tráfego. Suporte para autenticação, autorização e armazenamento seguro.',
                highlights: [
                  'APIs seguras e performáticas',
                  'Integração com bancos de dados SQL e NoSQL',
                  'Autenticação e autorização de usuários',
                ],
                technologies: [
                  'Node.js',
                  'Express',
                  'Docker',
                  'Firebase',
                  'MongoDB',
                  'PostgreSQL',
                ],
                example: '',
              }}
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
              image={iterative}
              title="Quiz interativo"
              description="Um quiz interativo com perguntas e respostas, para quem quer testar seus conhecimentos sobre o covid-19."
              tags={['HTML5', 'CSS3', 'JavaScript']}
              githubLink="https://github.com/Mlluiz39/quiz_interactive"
              demoLink="https://quiz-v2.vercel.app/"
            />
            <ProjectCard
              image={cnpjConsultation}
              title="Consultor de CNPJ"
              description="Uma solução completa para consultar informações de CNPJ, como razão social, endereço, telefone e situação cadastral, sociedade tudo sem sair de casa e sem custo."
              tags={['HTML5', 'JavaScript', 'bootstrap', 'API']}
              githubLink="https://github.com/Mlluiz39/Teste-Vaga-Desenvolvedor-Front-End"
              demoLink="https://cnpj-website-test.netlify.app/"
            />
            <ProjectCard
              image={passwordGenerator}
              title="Gerador de Senhas"
              description="Gerador de senhas aleatórias com opções personalizadas, como comprimento, letras maiúsculas, números e símbolos especiais para maior segurança."
              tags={['React', 'Tailwind CSS']}
              githubLink="https://github.com/Mlluiz39/password-generator"
              demoLink="https://password-generate2.netlify.app/"
            />
            <ProjectCard
              image={todoApp}
              title="App de Gestão de Tarefas"
              description="Um aplicativo de gestão de tarefas, onde voce pode ter uma visão geral de suas tarefas e também pode filtrar por data de cadastro, data de conclusão e status"
              tags={['React', 'Tailwind', 'Fastify', 'Postgres', 'Prisma']}
              githubLink="https://github.com/Mlluiz39/front-end-todo-app"
              demoLink="https://todo-mlluiz.netlify.app/"
            />
            <ProjectCard
              image={beautyWebsite}
              title="Site institucional clínica de estética"
              description="Site institucional de uma clínica de estética, com informações sobre os serviços oferecidos, equipe, depoimentos e contato."
              tags={['React', 'Tailwind CSS', 'Node.js']}
              githubLink="https://github.com/Mlluiz39/paula-clinica"
              demoLink="https://paula-esthetics.netlify.app/"
            />
            <ProjectCard
              image={travelWebsite}
              title="Site de viagens"
              description="Site para sugestões de viagens com informações sobre destinos, pacotes, hospedagem e contato."
              tags={['React', 'Tailwind CSS', 'consumo de API', 'Uso de IA']}
              githubLink="https://github.com/Mlluiz39/travel-mlluiz2"
              demoLink="https://travel-mlluiz2.vercel.app/"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-500 transition-colors"
                  >
                    mlluizpereira39@gmail.com
                  </a>
                </li>
                <li>
                  LinkedIn:{' '}
                  <a
                    href="https://www.linkedin.com/in/marcelo-luiz-pereira-souza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-500 transition-colors"
                  >
                    linkedin.com/in/marcelo-luiz-pereira-souza
                  </a>
                </li>
                <li>
                  GitHub:{' '}
                  <a
                    href="https://github.com/Mlluiz39"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-500 transition-colors"
                  >
                    github.com/Mlluiz39
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
