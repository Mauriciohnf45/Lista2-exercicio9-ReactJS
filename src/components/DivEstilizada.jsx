import React from 'react';

function DivEstilizada() {
  const divStyle = {
    backgroundColor: '#3498db', // Cor de fundo
    color: '#ffffff', // Cor do texto
    padding: '20px', // Espaço interno
    margin: '20px', // Espaço externo
    borderRadius: '8px', // Bordas arredondadas
    textAlign: 'center', // Centraliza o texto
  };

  return (
    <div style={divStyle}>
      <h2>Esta é uma div estilizada!</h2>
      <p>Ela tem cor de fundo, margens e bordas arredondadas.</p>
    </div>
  );
}

export default DivEstilizada;
