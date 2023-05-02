import React, { useState } from "react";

const AgentManagement = () => {
  const [agents, setAgents] = useState([]);

  const addAgent = (event) => {
    event.preventDefault();
    const agentName = event.target.elements.agentName.value;
    const agentId = event.target.elements.agentId.value;
    setAgents([...agents, { name: agentName, id: agentId }]);
  };

  return (
    <div>
      <h1>Agent Management</h1>
      <form onSubmit={addAgent}>
        <input type="text" name="agentName" placeholder="Agent Name" />
        <input type="text" name="agentId" placeholder="Agent ID" />
        <button type="submit">Add Agent</button>
      </form>
      <ul>
        {agents.map((agent, index) => (
          <li key={index}>
            {agent.name} - {agent.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentManagement;
