import React, { useState } from 'react'; 
import './Metas.css';

const Metas = () => {
  const [completedMetas, setCompletedMetas] = useState([]);

  const metas = [
    { id: "1", title: "Conscientizar sobre Autismo", description: "Compartilhar informações sobre o autismo nas redes sociais e em grupos de apoio para aumentar a conscientização." },
    { id: "2", title: "Apoiar a Inclusão", description: "Promover a inclusão de pessoas autistas em atividades sociais e educacionais." },
    { id: "3", title: "Desenvolver Empatia", description: "Participar de cursos e leituras que ajudem a entender melhor os desafios enfrentados por pessoas com autismo." },
    { id: "4", title: "Criar Espaços Acessíveis", description: "Ajudar a desenvolver ou melhorar espaços que sejam sensoriais e socialmente acessíveis para pessoas no espectro." },
    { id: "5", title: "Aprender Linguagem Simples", description: "Praticar a comunicação com uso de linguagem simples e direta para facilitar a interação com pessoas autistas." },
    { id: "6", title: "Participar de Grupos de Apoio", description: "Engajar-se em grupos que apoiam famílias e indivíduos autistas para aprender mais e oferecer suporte." },
    { id: "7", title: "Sensibilizar nas Escolas", description: "Ajudar a organizar palestras e atividades educacionais em escolas para promover a aceitação e inclusão." },
    { id: "8", title: "Apoiar Terapias", description: "Incentivar o acesso a terapias como fonoaudiologia, terapia ocupacional e outras formas de suporte terapêutico." },
    { id: "9", title: "Participar de Campanhas", description: "Envolver-se em campanhas de arrecadação de fundos para apoiar ONGs e instituições que ajudam no tratamento e apoio ao autismo." },
    { id: "10", title: "Autocuidado", description: "Cuidar da saúde mental e física de si mesmo para ser um melhor suporte para a comunidade autista." },
    { id: "11", title: "Participar de Grupos de Apoio", description: "Conecte-se com outros pais para compartilhar experiências." },
    { id: "12", title: "Aprender sobre Autismo", description: "Dedique um tempo para ler e estudar sobre o autismo." },
    { id: "13", title: "Promover a Inclusão Escolar", description: "Converse com a escola sobre a inclusão do seu filho." },
    { id: "14", title: "Agendar Avaliações Profissionais", description: "Certifique-se de que seu filho faça as avaliações necessárias." },
    { id: "15", title: "Participar de Oficinas", description: "Participe de oficinas sobre autismo e suas abordagens." },
    { id: "16", title: "Fomentar Habilidades Sociais", description: "Crie oportunidades para seu filho interagir com outras crianças." },
    { id: "17", title: "Incentivar Hobbies e Interesses", description: "Ajude seu filho a explorar atividades que ele goste." },
    { id: "18", title: "Estabelecer Rotinas Consistentes", description: "Crie e mantenha rotinas para ajudar na previsibilidade." },
    { id: "19", title: "Criar um Grupo de Leitura sobre Autismo", description: "Formar um grupo de leitura com pais e profissionais para discutir livros e recursos sobre autismo, promovendo a troca de experiências e conhecimentos." },
    { id: "20", title: "Realizar Atividades Sensoriais", description: "Planejar e implementar atividades sensoriais que ajudem crianças autistas a explorar diferentes texturas, sons e ambientes, promovendo o desenvolvimento sensorial e social." },
];

  const handleCompleteMeta = (id) => {
    if (!completedMetas.includes(id)) {
      setCompletedMetas([...completedMetas, id]);
    }
  };

  return (
    <div className="metas-container">
      <h2>Metas para Pais e Todos - Apoie Seus Filhos e os autistas !</h2>
      <div className="grid-container">
        {metas.map((meta) => (
          <div key={meta.id} className={`meta-bloco ${completedMetas.includes(meta.id) ? 'completed' : ''}`}>
            <h3>{meta.title}</h3>
            <p>{meta.description}</p>
            {!completedMetas.includes(meta.id) ? (
              <button onClick={() => handleCompleteMeta(meta.id)} className="complete-btn">Concluir Meta!</button>
            ) : (
              <span className="completed-text">Meta Completa! 🎉</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metas;
