import React, { useState, useEffect } from 'react';
import Api from "./Api";
import Comment from "./Comment";

function Get() {
    const [dados, setDados] = useState(null);  
  
    useEffect(() => {
         // Verificar se existem dados no localStorage
         const dadosArmazenados = localStorage.getItem('dados');
         if (dadosArmazenados) {
             // Se existirem dados armazenados, converter de volta para objeto e definir no estado
             setDados(JSON.parse(dadosArmazenados));
         } else {
             // Caso contrário, fazer a chamada da API para obter os dados
             Api.get()
                 .then((response) => {
                     setDados(response.data);
                     // Salvar os dados no localStorage
                     localStorage.setItem('dados', JSON.stringify(response.data));
                 })
                 .catch((err) => {
                     console.error("ops! ocorreu um erro" + err);
                 });
         }
     }, []);

  return (
    <>
        <Comment objeto={dados} />
    </>
  )
}

export default Get
