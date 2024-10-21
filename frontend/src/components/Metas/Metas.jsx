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

  // Função para atualizar uma meta
  const updateGoalRecord = async (id, updatedGoal) => {
    try {
      await api.put(`/goal/goal/${id}`, updatedGoal);
      setGoals(goals.map((goal) =>
        goal.id === id ? { ...goal, ...updatedGoal } : goal
      ));
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
            
            {/* Botão de Atualizar Meta */}
           <button onClick={() => updateGoalRecord(goal.id, goal)}>
            Atualizar Meta
           </button>
            <button onClick={() => deleteGoalRecord(goal.id)}>Deletar</button>
            <label>
            Concluído:
            <input
              type="checkbox"
              checked={newCompleted}
              onChange={(e) => setNewCompleted(e.target.checked)}
            />
          </label>
          </div>
          
        ))}
      </div>
    </div>
    </section>
  );
};

export default GoalPage;
