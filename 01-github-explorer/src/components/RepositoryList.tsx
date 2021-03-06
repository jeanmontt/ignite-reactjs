import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos') //Buscando os repositórios
      .then(response => response.json())  //Então quando a resposta é devolvida, é convertida para .json
      .then(data => setRepositories(data))  //Então quando a conversão é terminada, receberá os dados da conversão e salvará na variável repositories
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => { //onde para cada repositório será retornado um item
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  );
}