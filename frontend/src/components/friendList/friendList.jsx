import React, { useState, useEffect } from 'react';
import api from '../../services/apiService';
import "./friendList.css";



const FriendList = () => {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newActive, setNewActive] = useState(false);

  // Função para obter todos os usuários
  const getAllUsers = async () => {
    try {
      const response = await api.get('/api/user/all');
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  // UseEffect para chamar getAllUsers uma única vez ao montar o componente
  useEffect(() => {
    getAllUsers();
  }, [users]);

  // Função para criar um novo usuário
  const createUser = async () => {
    try {
      const newUser = {
        name: newName,
        age: newAge
      };

      const response = await api.post('/api/user/new', newUser);
      setUsers([...users, response.data.novoUsuario]);
      setNewName('');
      setNewAge('');
      setNewDescription('');
      setNewActive(false);
      console.log("Usuário criado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao criar novo usuário:", error);
    }
  };

  // Função para atualizar um usuário
  const updateUserRecord = async (id, updatedUser) => {
    try {
      await api.put(`/api/user/update/${id}`, updatedUser);
      setUsers(users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      ));
    } catch (error) {
      console.error('Erro ao atualizar o usuário:', error);
    }
  };

  // Função para deletar um usuário
  const deleteUserRecord = async (id) => {
    try {
      await api.delete(`/api/user/delete/${id}`);
      setUsers(prevUsers => prevUsers.filter((user) => user.id !== id));
      console.log(`Usuário com id ${id} deletado com sucesso.`);
    } catch (error) {
      console.error('Erro ao deletar o usuário:', error);
    }
  };

  return (
    <section className='users-page'>
      <div>
        <h1>Lista de Amigos</h1>

        {/* Formulário para criar novo usuário */}
        <div className='formUsers'>
          <h2>Adicione um amigo próximo</h2>
          <input
            type="text"
            placeholder="Nome"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Idade"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
          />
          <button onClick={createUser}>Criar Usuário</button>
        </div>

        {/* Lista de usuários */}
        <div className='listUsers'>
          <h2>Usuários</h2>
          {users.map((user) => (
            <div key={user.id} className="user-item">
              <h3>Nome: {user.name}</h3>
              <h3>Idade: {user.age}</h3>
              {/* Botão de Atualizar Usuário */}
              <button onClick={() => updateUserRecord(user.id, user)}>Atualizar amigo</button>
              <button onClick={(e) => deleteUserRecord(user.id)}>Deletar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendList;
