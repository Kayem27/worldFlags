import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>A propos</h1>
      <br />
      <p>
        L'application de drapeaux du monde est la ressource ultime pour tous les
        amateurs de drapeaux et d'histoire des pays. Avec une collection
        complète de tous les drapeaux nationaux et régionaux reconnus par les
        Nations unies, cette application offre une expérience immersive pour
        apprendre et explorer les différents symboles et couleurs qui
        représentent les cultures et les nations. <br/> <br/>
        En utilisant l'application,
        les utilisateurs peuvent facilement accéder aux drapeaux des pays du
        monde entier. Les drapeaux sont organisés par région, alphabétiquement
        ou par groupe de couleurs, ce qui facilite la navigation dans la
        collection. Chaque drapeau est accompagné d'informations détaillées sur
        son histoire, ses couleurs et leur signification, ainsi que sur la
        signification des symboles qui y sont représentés. <br/> <br/>
        L'application offre également une fonctionnalité de recherche, permettant aux utilisateurs
        de trouver rapidement le drapeau d'un pays en particulier. De plus, les
        utilisateurs peuvent enregistrer leurs drapeaux préférés dans une liste
        de favoris pour une consultation ultérieure ou pour créer des quiz et
        tester leur propre connaissance. <br/> <br/>
        Que vous soyez un voyageur passionné ou un étudiant d'histoire, cette application est un outil indispensable
        pour découvrir les couleurs, les symboles et les cultures qui composent
        le monde. Avec des mises à jour régulières pour inclure les nouveaux
        drapeaux ajoutés ou les changements de conception, cette application est
        une ressource complète et précieuse pour tous les amateurs de drapeaux.
      </p>
    </div>
  );
};

export default About;
