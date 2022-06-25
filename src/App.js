/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles.scss";
import pdp from "./moidetoure.png";
import * as React from "react";
import emailjs from 'emailjs-com';

function Card(props) {
  const [press, setPress] = React.useState(false);
  return (
    <div
      id="cardfaq"
      className={press ? `faq-card flipped` : `faq-card`}
      onClick={() => setPress(!press)}
    >
      <div className="front">
        <p>{props.textFront}</p>
        <div id="plus1" className="plus" onClick={() => setPress(true)}>
          +
        </div>
      </div>
      <div className="back">
        <p>{props.textBack}</p>
        <div id="minus1" className="plus" onClick={() => setPress(false)}>
          -
        </div>
      </div>
    </div>
  );
}



function App() {
  const pageTitle = [
    "test",
    "En quoi puis-je vous aider ?",
    "Quel est le budget pour votre projet ?",
    "Avez vous une timeline ?",
    "Vous êtes ?",
    "Une chose à ajouter ?",
    "Comment puis-je vous contacter",
  ];
  const [show, setShow] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [data, setData] = React.useState({
    createWebSite: false,
    updateWebSite: false,
    createMobileApp: false,
    lessThan1k: false,
    between2kand3k: false,
    moreThan3k: false,
    datedeb: "",
    datefin: "",
    entreprise: false,
    particulier: false,
    association: false,
    message: "",
    companyName: "",
    nameandsurname: "",
    email: "",
  });

  function Page(props) {
    switch (page) {
      case 0:
        return <Page1 />;
      case 1:
        return <Page2 />;
      case 2:
        return <Page3 />;
      case 3:
        return <Page4 />;
      case 4:
        return <Page5 />;
      case 5:
        return <Page6 />;
      case 6:
        return <Page7 />;
      case 7:
        return <Page8 />;
      default:
        return <Page1 />;
    }
  }

  function Page1(props) {
    return (
      <div className="page1">
        <div id="form-title">
          <div className="background-test">
            <img
              className="form-img"
              src={pdp}
              alt="Picture of me taking a photo of an image"
            />
          </div>
          <h1>Demande de projet</h1>
        </div>
        <div id="form-content">
          <p>
            Ce formulaire m'aide à rapidement identifier vos besoins et avoir
            une première idée de votre projet. De plus ça permet de clarifier
            certains points à l'avance, alors s'il vous plaît soyez aussi précis
            que possible
          </p>
        </div>
        <div className="start" onClick={() => setPage(1)}>
          <p>Commencer &gt;</p>
        </div>
      </div>
    );
  }


  function Page8(props) {
    return (
      <div className="page1">
        <div id="form-title">
          <div className="background-test">
            <img
              className="form-img"
              src={pdp}
              alt="Picture of me taking a photo of an image"
            />
          </div>
          <h1>Merci beaucoup !</h1>
        </div>
        <div id="form-content">
          <p>
            Merci d'avoir pris le temps de remplir ce formulaire qui nous aidera
            a collaborer plus facilement. Votre demande sera examinée dans les
            plus brefs délais, attendez-vous à une réponse d'ici 2 à trois
            jours.
            <br />
            <br />
            Vous pouvez appuyer sur la touche 'échape' pour quitter le
            formulaire ou cliquer sur la touche quitter en haut à droite
          </p>
        </div>
      </div>
    );
  }

  function Page2(props) {
    return (
      <div className="page2">
        <div id="form-title">
          <h1>{pageTitle[page]}</h1>
        </div>
        <div id="form-content">
          <div className="buttonContainer">
            <div
              className={data.createWebSite ? "radio checked" : "radio"}
              onClick={() =>
                setData({ ...data, createWebSite: !data.createWebSite })
              }
            >
              <div className="answer">
                <p className="">Réalisation complète de votre site web</p>
                <div className="button">
                  {data.createWebSite ? <p>✔</p> : <p className="fade">✔</p>}
                </div>
              </div>
            </div>
            <div
              className={data.updateWebSite ? "radio checked" : "radio"}
              onClick={() =>
                setData({ ...data, updateWebSite: !data.updateWebSite })
              }
            >
              <div className="answer">
                <p className="">Mise à jour d'un site déjà existant</p>
                <div className="button">
                  {data.updateWebSite ? <p>✔</p> : <p className="fade">✔</p>}
                </div>
              </div>
            </div>
            <div
              className={data.createMobileApp ? "radio checked" : "radio"}
              onClick={() =>
                setData({ ...data, createMobileApp: !data.createMobileApp })
              }
            >
              <div className="answer">
                <p className="">Création d'une application mobile</p>
                <div className="button">
                  {data.createMobileApp ? <p>✔</p> : <p className="fade">✔</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Page3(props) {
    return (
      <div className="page2">
        <div id="form-title">
          <h1>{pageTitle[page]}</h1>
        </div>
        <div id="form-content">
          <div className="buttonContainer">
            <div
              className={data.lessThan1k ? "radio checked" : "radio"}
              onClick={() =>
                setData({
                  ...data,
                  lessThan1k: !data.lessThan1k,
                  between2kand3k: false,
                  moreThan3k: false,
                })
              }
            >
              <div className="answer">
                <p className="">-1000 €</p>
                <div className="button">
                  {data.lessThan1k ? <p>✔</p> : <p className="fade">✔</p>}
                </div>
              </div>
            </div>
            <div
              className={data.between2kand3k ? "radio checked" : "radio"}
              onClick={() =>
                setData({
                  ...data,
                  between2kand3k: !data.between2kand3k,
                  lessThan1k: false,
                  moreThan3k: false,
                })
              }
            >
              <div className="answer">
                <p className="">Entre 1000 et 3000 €</p>
                <div className="button">
                  {data.between2kand3k ? <p>✔</p> : <p className="fade">✔</p>}
                </div>
              </div>
            </div>
            <div
              className={data.moreThan3k ? "radio checked" : "radio"}
              onClick={() =>
                setData({
                  ...data,
                  moreThan3k: !data.lessThan1k,
                  between2kand3k: false,
                  lessThan1k: false,
                })
              }
            >
              <div className="answer">
                <p className="">+ de 3000€</p>
                <div className="button">
                  {data.moreThan3k ? <p>✔</p> : <p className="fade">✔</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Page5(props) {
    return (
      <div className="page2">
        <div id="form-title">
          <h1>{pageTitle[page]}</h1>
        </div>
        <div id="form-content">
          <div className="buttonContainer">
            <div
              className={data.entreprise ? "radio checked" : "radio"}
              onClick={() =>
                setData({
                  ...data,
                  entreprise: !data.entreprise,
                  particulier: false,
                  association: false,
                })
              }
            >
              <div className="answer">
                <p className="">Une entreprise</p>
                <div className="button">
                  {data.entreprise ? <p>✔</p> : <p className="fade">✔</p>}
                </div>
              </div>
            </div>
            <div
              className={data.particulier ? "radio checked" : "radio"}
              onClick={() =>
                setData({
                  ...data,
                  particulier: !data.particulier,
                  entreprise: false,
                  association: false,
                })
              }
            >
              <div className="answer">
                <p className="">Un particulier</p>
                <div className="button">
                  {data.particulier ? <p>✔</p> : <p className="fade">✔</p>}
                </div>
              </div>
            </div>
            <div
              className={data.association ? "radio checked" : "radio"}
              onClick={() =>
                setData({
                  ...data,
                  association: !data.association,
                  particulier: false,
                  entreprise: false,
                })
              }
            >
              <div className="answer">
                <p className="">Une association</p>
                <div className="button">
                  {data.association ? <p>✔</p> : <p className="fade">✔</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Page6(props) {
    const [focus1, setFocus1] = React.useState("");
    return (
      <div className="page2">
        <div id="form-title">
          <h1>{pageTitle[page]}</h1>
        </div>
        <div id="form-content">
          <div className="buttonContainer">
            <div className="input radio message">
              <label>
                Ecrivez ici <span className="option">(Optionnel)</span>
              </label>
              <input
                type="text"
                name="message"
                placeholder="Ecrivez ici"
                value={data.message ? data.message : focus1}
                onBlur={(e) => setData({ ...data, message: focus1 })}
                onChange={(e) => setFocus1(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Page7(props) {
    const [focus1, setFocus1] = React.useState("");
    const [focus2, setFocus2] = React.useState("");
    const [focus3, setFocus3] = React.useState("");
    return (
      <div className="page2">
        <div id="form-title">
          <h1>{pageTitle[page]}</h1>
        </div>
        <div id="form-content">
          <div className="buttonContainer">
            <div className="input radio">
              <label>Nom d'entreprise</label>
              <input
                type="text"
                placeholder="Ex : Apple"
                value={data.companyName ? data.companyName : focus1}
                onBlur={(e) => setData({ ...data, companyName: focus1 })}
                onChange={(e) => setFocus1(e.target.value)}
              />
            </div>
            <div className="input radio">
              <label>Nom et prénom</label>
              <input
                type="text"
                placeholder="Ex : Steve Jobs"
                value={data.nameandsurname ? data.nameandsurname : focus2}
                onBlur={(e) => setData({ ...data, nameandsurname: focus2 })}
                onChange={(e) => setFocus2(e.target.value)}
              />
            </div>
            <div className="input radio">
              <label>E-mail</label>
              <input
                type="text"
                placeholder="Ex : steve@apple.com"
                value={data.email ? data.email : focus3}
                onBlur={(e) => setData({ ...data, email: focus3 })}
                onChange={(e) => setFocus3(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Page4() {
    const [focus1, setFocus1] = React.useState("");
    const [focus2, setFocus2] = React.useState("");

    return (
      <div className="page2">
        <div id="form-title">
          <h1>{pageTitle[page]}</h1>
        </div>
        <div id="form-content">
          <div className="buttonContainer">
            <div className="input radio">
              <label>
                Date de début <span className="option">(Optionnel)</span>
              </label>
              <input
                key="text"
                type="text"
                placeholder="JJ/MM/AAAA"
                value={data.datedeb ? data.datedeb : focus1}
                onBlur={(e) => setData({ ...data, datedeb: focus1 })}
                onChange={(e) => setFocus1(e.target.value)}
              />
            </div>
            <div className="input radio">
              <label>
                Date de fin <span className="option">(Optionnel)</span>
              </label>
              <input
                key="text"
                type="text"
                placeholder="JJ/MM/AAAA"
                value={data.datefin ? data.datefin : focus2}
                onBlur={(e) => setData({ ...data, datefin: focus2 })}
                onChange={(e) => setFocus2(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Form(props) {
    if (show) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    //get if user press escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    });

    function Mail() {
      switch (page) {
        case 0:
          return (
            <div id="hate">
              <p>
                Pas envie de passer par un formulaire ?{" "}
                <a href="mailto:moulinneufalex@gmail.com">
                  moulinneufalex@gmail.com
                </a>
              </p>
            </div>
          );
        case 1:
          return (
            <div id="hate">
              <button onClick={() => setPage(page + 1)}>
                <p>Valider</p>
              </button>
            </div>
          );
        case 6:
          return (
            <div id="hate">
              <button onClick={() => setPage(page + 1)}>
                <p>Envoyer</p>
              </button>
            </div>
          );
        case 7:
          return <div id="hate"></div>;
        default:
          return (
            <div id="hate">
              <button onClick={() => setPage(page + 1)}>
                <p>Valider</p>
              </button>
            </div>
          );
      }
    }
    return (
      <div id="formContainer" className={show ? "show" : "noshow"}>
        <div id="form">
          <div className="form-top">
            <div className="flexmid top-left" onClick={() => setPage(page - 1)}>
              {page >= 7 || page <= 0 ? "" : "Retour"}
            </div>
            <div className="flexmid top-center">
              <div
                className={page >= 1 ? "blue rectangle" : "rectangle"}
                onClick={() => setPage(1)}
              ></div>
              <div
                className={page >= 2 ? "blue rectangle" : "rectangle"}
                onClick={() => (page >= 2 ? setPage(2) : console.log("Error"))}
              ></div>
              <div
                className={page >= 3 ? "blue rectangle" : "rectangle"}
                onClick={() => (page >= 3 ? setPage(3) : console.log("Error"))}
              ></div>
              <div
                className={page >= 4 ? "blue rectangle" : "rectangle"}
                onClick={() => (page >= 4 ? setPage(4) : console.log("Error"))}
              ></div>
              <div
                className={page >= 5 ? "blue rectangle" : "rectangle"}
                onClick={() => (page >= 5 ? setPage(5) : console.log("Error"))}
              ></div>
              <div
                className={page >= 6 ? "blue rectangle" : "rectangle"}
                onClick={() => (page >= 6 ? setPage(6) : console.log("Error"))}
              ></div>
              <div
                className={page >= 7 ? "blue rectangle" : "rectangle"}
                onClick={() => (page >= 7 ? setPage(7) : console.log("Error"))}
              ></div>
            </div>
            <div className="flexmid cancel" onClick={() => setShow(false)}>
              Quitter
            </div>
          </div>
          <div className="form-content">
            <Page />
          </div>
          <Mail />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Form />
      <div className="Home">
        <div className="navigation">
          <div className="top">
            <div className="top-gauche">
              <span>Alex Moulinneuf</span>
            </div>
            <div className="top-milieu">
              <ul>
                <li>
                  <a href="#">Accueil</a>
                </li>
                <li>
                  <a href="#">Projets</a>
                </li>
                <li>
                  <a href="#">Procéder</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="top-droite" onClick={() => setShow(true)}>
              Demande de projet &gt;
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="pdp-container">
          <div className="background-test"></div>
          <div className="background-test-2"></div>
          <div className="background-test-3"></div>
          <img
            className="n1 appear"
            src={pdp}
            alt="Picture of me taking a photo of an image"
          />
        </div>
        <h2 className="n2 fadeInUp">Alex Moulinneuf</h2>
        <h1 className="fadeInUp">Développeur Web</h1>
        <h3 className="n3 fadeInUp" onClick={() => setShow(true)}>
          Demande de projet &gt;
        </h3>

        <section>
          <h4 className="gradient-fluid">
            Faites faire votre site par un développeur en freelance
          </h4>
        </section>
      </div>
      <div className="blackBg">
        <div className="projets">
          <div className="project-title">
            <h2>Projets</h2>
            <h3>Je suis votre prochain développeur.</h3>
          </div>
          <section>
            <div className="grid-container">
              <div className="grid-gauche">
                <h4>
                  Développeur Web avec l'équivalent d'années d'expérience en
                  developpement web
                </h4>
                <p>
                  Je transforme vos designs en lignes de codes. Rien n'a de
                  secret pour moi, à la fois développeur, designeur et
                  animateur, je peux créé des designs créé des animations et
                  transformer tout ceci en lignes de code. Ayant une vision sur
                  tout l'ensemble des constituants qui forgent la présence
                  digital d'une marque, Design UI UX, développement, SEO,
                  Marketing, conception, je peux vous apporter un point de vue
                  pertinents sur l'ensemble de vos besoins avant votre lancement
                  digital.
                </p>
              </div>
              <div className="grid-droite">
                <div className="card">
                  <div className="chiffre-1">2</div>
                  <div className="description">Clients heureux</div>
                </div>
                <div className="card">
                  <div className="chiffre-2">
                    2<span>Années</span>
                  </div>
                  <div className="description">D'expériences</div>
                </div>
                <div className="card">
                  <div className="chiffre-3">
                    12<sup className="">+</sup>
                  </div>
                  <div className="description">Projets réalisés</div>
                </div>
                <div className="card">
                  <div className="chiffre-4">
                    100<span>%</span>
                  </div>
                  <div className="description">d'investissements</div>
                </div>
              </div>
              <div className="animations">
                <div className="anim-gauche">
                  <h4>Animations impressionnantes.</h4>
                  <p>
                    Tout est fait pour procurer une expérience utilisateur
                    satisfaisante, de la simple interraction à l'animation qui
                    nous fait dire "WOW"
                  </p>
                </div>
                <div className="anim-droite"></div>
              </div>
              <div className="chargement">
                <h4>Sites optimisés pour chargement rapide</h4>
                <div className="container-2"></div>
              </div>
              <div className="chargement">
                <h4>Architecture responsive</h4>
                <div className="flex-img"></div>
              </div>
            </div>
          </section>
        </div>

        <div className="process-container">
          <div className="process">
            <section>
              <div className="card-container">
                <div className="step-card card1">
                  <div className="card-text">
                    <span>Etape 1</span>
                    <h2>Commencer la journée</h2>
                    <p>
                      Je commence ma journée par un verre de coca je ne bois pas
                      de café
                    </p>
                  </div>
                </div>
                <div className="step-card">
                  <div className="card-text">
                    <span>Etape 2</span>
                    <h2>Demande de projet</h2>
                    <p>
                      Vous m'envoyez votre demande à l'aide du formulaire ici ou
                      par mail
                    </p>
                  </div>
                </div>
                <div className="step-card">
                  <div className="card-text">
                    <span>Etape 3</span>
                    <h2>Examen et entretien</h2>
                    <p>
                      J'examine votre demande et on convient d'un entretien car
                      j'aurais forcément des questions à vous poser
                    </p>
                  </div>
                </div>
                <div className="step-card">
                  <div className="card-text">
                    <span>Etape 4</span>
                    <h2>Planification de projet et devis</h2>
                    <p>
                      j'établie une planification pour votre projet et vous
                      envoie un devis correspondant à votre demande
                    </p>
                  </div>
                </div>
                <div className="step-card">
                  <div className="card-text">
                    <span>Etape 5</span>
                    <h2>Versement de l'acompte et début du travail</h2>
                    <p>
                      Vous acceptez le devis, versez 40% d'acompte à la
                      commande, et puis je me met au travail
                    </p>
                  </div>
                </div>
                <div className="step-card">
                  <div className="card-text">
                    <span>Etape 6</span>
                    <h2>Lancement du projet</h2>
                    <p>
                      Projet terminé, vous versez le reste de l'acompte et
                      recevez le travail accompli et on le lance sur une
                      plateforme
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="faq">
          <section>
            <h2>Foire aux questions</h2>
            <div className="grid-faq">
              <Card
                textFront="Quels services j'offre exactement ?"
                textBack="Je réalise pour vous un site ou un design de site de façon à
                  m'adapter à vos besoins"
              />
              <Card
                textFront="A qui mes services s'adressent-ils ?"
                textBack="A n'importe qui qui a un besoin de site web, que ce soit e-commerce, vitrine ou portfolio je peux tout réaliser"
              />
              <Card
                textFront="Comment se déroule le paiement ?"
                textBack="Après la signature du devis, vous devez me verser un acompte de 40% à la commande et le reste du solde à la livraison du projet."
              />
              <Card
                textFront="Combien coûte la réalisation d'un projet ?"
                textBack="Les prix sont sur-mesures pour s'adapter au maximum à votre projet. Evidemment plus la demande est complexe et nécéssite de
                  features, plus ce sera onéreux. Le prix minimum serait 2000
                  € pour la réalisation d'un site vitrine One page classique."
              />
              <Card
                textFront="Est-ce que je travail à l'internationale ?"
                textBack="En effet le site est traduit à l'internationale (Anglais) de
                  sorte à pouvoir travailler avec tout le monde."
              />
              <Card
                textFront="Combien de temps prends un projet ?"
                textBack="Un projet prends au minimum 2 semaines, et pour les plus
                    complexes plusieurs mois."
              />
              -{" "}
            </div>
          </section>
        </div>
      </div>

      <footer>
        <section>
          <h4 className="gradient-fluid">
            Vous souhaitez travailler avec moi ?
          </h4>
          <h3 className="displayForm" onClick={() => setShow(true)}>
            Demande de projet &gt;
          </h3>
        </section>
      </footer>
    </div>
  );
}

export default App;
