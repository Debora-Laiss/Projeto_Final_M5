import React, { useState, useEffect } from 'react';
import api from '../../services/apiService';
import "./Metas.css";

export class Goal {
  constructor(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

const GoalPage = () => {
  const [goals, setGoals] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newCompleted, setNewCompleted] = useState(false);
  const [completedMetas, setCompletedMetas] = useState([]);


  const handleCompleteMeta = (id) => {
    if (!completedMetas.includes(id)) {
      setCompletedMetas([...completedMetas, id]);
    }
  };

  // Função para obter todas as metas
  const getAllGoals = async () => {
    try {
      const response = await api.get('/goal/goal/all');
      setGoals(response.data); 
    } catch (error) {
      console.error("Erro ao buscar metas:", error);
    }
  };

  useEffect(() => {
    getAllGoals();
  }, []);

  // Função para criar uma nova meta
  const createGoal = async () => {
    try {
      const newGoal = {
        title: newTitle,
        description: newDescription,
        completed: newCompleted,
      };
  
      const response = await api.post('/goal/goal/new', newGoal);
      setGoals([...goals, response.data.novaMeta]);
      setNewTitle(''); // Limpar campo
      setNewDescription(''); // Limpar campo
      setNewCompleted(false); // Resetar estado
      console.log("Meta criada com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao criar nova meta:", error);
    }
  };

  const editAndUpdateGoal = async (goalId) => {
    const updatedGoal = {
      title: newTitle, // Certifique-se de que newTitle está sendo preenchido corretamente
      description: newDescription, // Certifique-se de que newDescription está sendo preenchido corretamente
    };
  
    console.log("Atualizando meta com ID:", goalId);
    console.log("Dados a serem enviados:", updatedGoal);
  
    try {
      const response = await api.put(`/goal/goal/${goalId}`, updatedGoal);
  
      // Atualiza a lista de metas com a meta modificada
      setGoals(goals.map((goal) =>
        goal.id === goalId ? { ...goal, ...updatedGoal } : goal
      ));
  
      console.log('Meta atualizada com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao atualizar a meta:', error);
    }
  };
  

  // Função para deletar uma meta
  const deleteGoalRecord = async (id) => {
    try {
      await api.delete(`/goal/goal/${id}`);
      setGoals(goals.filter((goal) => goal.id !== id));
    } catch (error) {
      console.error('Erro ao deletar a meta:', error);
    }
  };

  return (
    <section className='metas-page'>
    <div>
      <h1>Gerenciamento de Metas</h1>

      {/* Formulário para criar nova meta */}
      <div className='formMetas'>
        <h2>Criar Nova Meta</h2>
        <input
          type="text"
          placeholder="Título"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <label>
        </label>
        <button onClick={createGoal}>Criar Meta</button>
        
      </div>

      {/* Lista de metas */}
      <div className='listMetas'>
        <h2>Metas</h2>
        {goals.map((goal) => (
          <div key={goal.id}>
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
            
          {/* Botão para editar e atualizar a meta */}
          <button onClick={() => editAndUpdateGoal(goal.id)}>
              Atualizar Meta
            </button>

            {/* Botão de Deletar Meta */}
            <button onClick={() => deleteGoalRecord(goal.id)}>Deletar</button>
           {/* Missao concluida */}
            {!completedMetas.includes(goal.id) ? (
              <button onClick={() => handleCompleteMeta(goal.id)} className="complete-btn">Concluir Meta!</button>
            ) : (
              <span className="completed-text">🎉 Meta Completa! 🎉</span>
            )}
          </div>
          
        ))}
      </div>
    </div>
    </section>
  );
};

export default GoalPage;