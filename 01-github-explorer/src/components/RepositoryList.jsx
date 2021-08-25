import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos') //Buscando os repositórios
      .then(response => response.json())  //Então quando a resposta é devolvida, é convertida para .json
      .then(data => setRepositories(data))  //Então quando a conversão é terminada, receberá os dados da conversão e salvará na variável repositories
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}