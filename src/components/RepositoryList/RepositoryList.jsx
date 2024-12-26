import React from "react";
import styles from "./RepositoryList.module.css";
import RepositoryCard from "../RepositoryCard/RepositoryCard";
import Header from "../Header/Header";

const repositories = [
  { name: "design-system", size: "7320", language: "React", visibility: "Public", updated: "1 day" },
  { name: "codeant-ci-app", size: "5871", language: "Javascript", visibility: "Private", updated: "2 days" },
  { name: "analytics-dashboard", size: "4521", language: "Python", visibility: "Private", updated: "5 days" },
  { name: "mobile app", size: "4521", language: "Swift", visibility: "Private", updated: "3 days" },
  { name: "e-commerce", size: "6210", language: "Java", visibility: "Private", updated: "6 days" },
  { name: "blog-website", size: "1876", language: "HTML/CSS", visibility: "Private", updated: "4 days" },
  { name: "social-network", size: "5432", language: "PHP", visibility: "Private", updated: "7 days" },
  // Add more repositories as needed
];

const RepositoryList = () => {
  return (
    <div className={styles.calender}>
        <Header />
        {repositories.map(repo=><RepositoryCard name={repo.name} size={repo.size} language={repo.language} visibility={repo.visibility} updated={repo.updated}/>)}
      </div>
    );
};

export default RepositoryList;
