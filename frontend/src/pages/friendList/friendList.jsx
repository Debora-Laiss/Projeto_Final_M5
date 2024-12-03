import React, { useState, useEffect } from 'react';
import api from '../../services/apiService';
import "./friendList.css";

const FriendList = () => {
    const [users, setUsers] = useState([]);
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const [editUserId, setEditUserId] = useState(null); // Novo estado para o ID do usuário a ser editado

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

    // Função para criar ou atualizar um usuário
    const createUser = async () => {
        try {
            const newUser = {
                name: newName,
                age: newAge
            };

            if (editUserId) { // Verifica se um usuário está sendo editado
                await api.put(`/api/user/update/${editUserId}`, newUser);
                setUsers(users.map((user) =>
                    user.id === editUserId ? { ...user, ...newUser } : user
                ));
                setEditUserId(null); // Limpa o ID do usuário após a edição
                console.log("Usuário atualizado com sucesso:", newUser);
            } else {
                const response = await api.post('/api/user/new', newUser);
                setUsers([...users, response.data.novoUsuario]);
                console.log("Usuário criado com sucesso:", response.data);
            }

            setNewName('');
            setNewAge('');
        } catch (error) {
            console.error("Erro ao criar ou atualizar o usuário:", error);
        }
    };

    // Função para preparar a edição de um usuário
    const prepareEditUser = (user) => {
        setNewName(user.name);
        setNewAge(user.age);
        setEditUserId(user.id); // Define o ID do usuário a ser editado
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

                {/* Formulário para criar ou editar um usuário */}
                <div className='formUsers'>
                    <h2>{editUserId ? 'Editar amigo' : 'Adicionar amigo'}</h2>
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
                    <button onClick={createUser}>{editUserId ? 'Atualizar Usuário' : 'Criar Usuário'}</button>
                </div>

                {/* Lista de usuários */}
                <div className='listUsers'>
                    <h2>Usuários</h2>
                    {users.map((user) => (
                        <div key={user.id} className="user-item">
                            <h3>Nome: {user.name}</h3>
                            <h3>Idade: {user.age}</h3>
                            {/* Botão de Atualizar Usuário */}
                            <button onClick={() => prepareEditUser(user)}>Atualizar amigo</button>
                            <button onClick={() => deleteUserRecord(user.id)}>Deletar</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FriendList;
