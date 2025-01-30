import { useState } from 'react'
import {
  Code2,
  Smartphone,
  Layout,
  Database,
  Download,
  Linkedin,
} from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import { ServiceCard } from './components/ServiceCard'
import { ProjectCard } from './components/ProjectCard'
import profilePicture from './assets/perfil2.jpg'
import iterative from './assets/pexels-questions.jpg'
import cnpjConsultation from './assets/consult-cnpj.jpg'
import passwordGenerator from './assets/password.jpg'
import todoApp from './assets/todo-app.jpg'
import beautyWebsite from './assets/aesthetics.jpg'
import travelWebsite from './assets/travels.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <>
      <div className="min-h-screen bg-gray-900" id="hero">
        {/* Seção Hero */}
        <div className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full">
            {/* Foto do perfil para desktop */}
            <img
              src={profilePicture}
              alt="Marcelo Luiz"
              className="w-full h-full object-cover hidden lg:block" // Exibe apenas em telas grandes
            />
            {/* Animação Lottie para dispositivos móveis */}
            <div className="flex justify-center items-center pt-72 h-full lg:hidden">
              <DotLottieReact
                src="https://lottie.host/81508527-fab9-4e06-b6c3-73c042520cd9/LFvos5bGZa.lottie"
                loop
                autoplay
                style={{ width: '400px', height: '300px' }}
              />
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20">
            <nav className="py-6 flex justify-between items-center">
              {/* Menu no Desktop */}
              <ul className="hidden lg:flex space-x-6 text-white">
                <li>
                  <a
                    href="#hero"
                    className="hover:text-amber-500 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-amber-500 cursor-pointer"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-amber-500 cursor-pointer"
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-amber-500 cursor-pointer"
                  >
                    Sobre Mim
                  </a>
                </li>
              </ul>

              {/* Botão do menu no Mobile */}
              <button
                onClick={toggleMenu}
                className="lg:hidden text-white hover:text-amber-500 transition-colors"
              >
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

            {/* Menu Mobile - Exibe quando o menu está aberto */}
            {isMenuOpen && (
              <div className="lg:hidden text-white py-1 px-4">
                <ul className="space-y-4">
                  <li>
                    <a href="#hero" className="block hover:text-amber-500">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="block hover:text-amber-500">
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="block hover:text-amber-500">
                      Projetos
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="block hover:text-amber-500">
                      Sobre Mim
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <div className="lg:mt-40 mt-10">
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                Sou Marcelo Luiz
              </h1>
              <h2 className="text-lg sm:text-xl text-gray-300 mb-8">
                Desenvolvedor Full Stack & Engenheiro de Software
              </h2>
              <a
                href="https://wa.me/5511977869073"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
              >
                CONTRATE-ME
              </a>
            </div>
          </div>
        </div>

        {/* Seção Sobre */}
        <section className="py-16 bg-gray-800" id="about">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative w-full">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
                  alt="Desenvolvedor profissional"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Sobre Mim
                </h2>
                <p className="text-gray-300 mb-6">
                  Sou um desenvolvedor full-stack apaixonado por tecnologia, com
                  mais de 2 anos de experiência na construção de aplicações
                  front-end, mobile e back-end escaláveis e resolução de
                  problemas complexos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.linkedin.com/in/marcelo-luiz-pereira-souza/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors flex items-center gap-2"
                  >
                    <Linkedin size={17} className="mb-2" />
                    LinkedIn
                  </a>

                  <a
                    href="/curriculo.pdf"
                    download
                    className="border-2 border-amber-500 text-amber-500 px-6 py-2 rounded-lg font-semibold hover:bg-amber-500 hover:text-gray-900 transition-colors flex items-center gap-2"
                  >
                    <Download size={20} className="mb-2" />
                    BAIXAR CURRÍCULO
                  </a>
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
                githubLink="https://github.com/Mlluiz39/frontend-todoapp"
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
    </>
  )
}

export default App
