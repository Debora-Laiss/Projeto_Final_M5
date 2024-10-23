// import React, { useState } from 'react';

// const FeedbackList = ({ initialFeedbacks }) => {
//   const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
//   const getFeedbackById = (request, response) => {
//     try {
//         const idParametro = parseInt(request.params.id, 10);
//         const feedbackEncontrado = feedbacks.find(f => f.id === idParametro);

//         if (!feedbackEncontrado) {
//             throw new Error("Feedback não encontrado");
//         }

//         response.status(200).send(feedbackEncontrado);
//     } catch (e) {
//        response.status(404).send({
//             error: e.message,
//         });
//     }
// };

//   // Função para deletar feedback pelo ID
//   const deleteFeedbackById = (id) => {
//     const updatedFeedbacks = feedbacks.filter(feedback => feedback.id !== id);
//     setFeedbacks(updatedFeedbacks);
//     console.log(`Feedback com ID ${id} deletado com sucesso.`);
//   };

//   return (
//     <div>
//       <h2>Lista de Feedbacks</h2>
//       <ul>
//         {feedbacks && feedbacks.length > 0 ? (
//           feedbacks.map((feedback) => (
//             <li key={feedback.id}>
//               <strong>Usuário:</strong> {feedback.user} <br />
//               <strong>Mensagem:</strong> {feedback.message} <br />
//               <button onClick={() => deleteFeedbackById(feedback.id)}>Deletar Feedback</button>
//             </li>
//           ))
//         ) : (
//           <li>Não há feedbacks disponíveis.</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default FeedbackList;

