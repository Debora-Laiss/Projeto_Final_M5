import React, { useState, useEffect } from 'react';
import api from '../../services/apiService';
import "./friendList.css";

export class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const FriendList = () => {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(''); // Adicionado campo de idade
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

  useEffect(() => {
    getAllUsers();
  }, [users]);

  // Função para criar um novo usuário
  const createUser = async () => {
    try {
      const newUser = {
        name: newName,
        age: newAge,  // Adicionando idade
        description: newDescription,
        active: newActive,
      };

      const response = await api.post('/api/user/new', newUser);
      setUsers([...users, response.data.novoUsuario]);
      setNewName(''); // Limpar campo
      setNewAge('');  // Limpar campo de idade
      setNewDescription(''); // Limpar campo
      setNewActive(false); // Resetar estado
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
      setUsers(users.filter((user) => user.id !== id));
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
          <h2>Adicione um amigo proximo</h2>
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
              <button onClick={() => updateUserRecord(user.id, user)}>
                Atualizar amigo
              </button>
              <button onClick={() => deleteUserRecord(user.id)}>Deletar</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendList;
