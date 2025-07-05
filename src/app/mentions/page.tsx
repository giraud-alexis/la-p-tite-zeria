import Image from "next/image";
import Link from "next/link";
import facebook from "@/app/assets/img/facebook.svg";
import x from "@/app/assets/img/icons8-twitter.svg";
import instagram from "@/app/assets/img/icons8-instagram.svg";
import tictoc from "@/app/assets/img/icons8-tic-tac.svg";
import styles from "./mentions.module.scss";

async function fetchData() {
  try {
    const [fetchDataEntreprise] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_API}/entreprisepublic/${process.env.ID}`
      ),
    ]);

    if (!fetchDataEntreprise.ok) {
      throw new Error("Failed to fetch data");
    }

    const dataEntreprise = await fetchDataEntreprise.json();

    return {
      dataEntreprise,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function Home() {
  const { dataEntreprise } = await fetchData();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            className={styles.logo}
            src={dataEntreprise.logourl}
            alt={`${dataEntreprise.name} logo`}
            width={40}
            height={40}
            priority
          />
        </div>
        <nav className={styles.nav}>
          <Link href="/">Retour</Link>
        </nav>
        <div className={styles.co}>
          <p></p>
        </div>
      </header>

      <main className={styles.main}>
        <h1>Mentions Légales</h1>
        <p>En vigueur au 05/03/2024</p>

        <section className={styles.section}>
          <h2>Conformité et Acceptation des Mentions Légales</h2>
          <p>
            Conformément aux dispositions des Articles 6-III et 19 de la Loi
            n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
            numérique, dite L.C.E.N., il est porté à la connaissance des
            utilisateurs et visiteurs du site {dataEntreprise.name}, les
            présentes mentions légales.
          </p>
          <p>
            La connexion et la navigation sur le site par l’Utilisateur implique
            acceptation intégrale et sans réserve des présentes mentions
            légales.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Article 1 - L'Éditeur</h2>
          <p>
            L’édition et la direction de la publication du site est assurée par{" "}
            <span>weblume</span>, domicilié Saint-Macaire, dont le numéro de
            téléphone est <span>07.68.73.10.64</span>, et l'adresse e-mail{" "}
            <span>weblume.france@gmail.com</span>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Article 2 - Accès au Site</h2>
          <p>
            Le site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de
            force majeure, interruption programmée ou non et pouvant découlant
            d’une nécessité de maintenance. En cas de modification, interruption
            ou suspension du site, l'Éditeur ne saurait être tenu responsable.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Article 3 - Collecte des Données</h2>
          <p>
            Le site assure à l'Utilisateur une collecte et un traitement
            d'informations personnelles dans le respect de la vie privée
            conformément à la loi n°78-17 du 6 janvier 1978 relative à
            l'informatique, aux fichiers et aux libertés.
          </p>
          <p>
            En vertu de la loi Informatique et Libertés, l'Utilisateur dispose
            d'un droit d'accès, de rectification, de suppression et d'opposition
            de ses données personnelles. L'Utilisateur exerce ce droit via son
            espace personnel.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Propriété Intellectuelle</h2>
          <p>
            Toute utilisation, reproduction, diffusion, commercialisation,
            modification de toute ou partie du site, sans autorisation de
            l’Éditeur est prohibée et pourra entraîner des actions et poursuites
            judiciaires telles que notamment prévues par le Code de la propriété
            intellectuelle et le Code civil.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.logo}>
          <Image
            className={styles.logofooter}
            src={dataEntreprise.logourl}
            alt={`${dataEntreprise.name} logo`}
            width={20}
            height={20}
            priority
          />
        </div>
        <div className={styles.mention}>
          <Link href="/mentions">Mentions légales</Link>
          <p>© 2025 {dataEntreprise.name}. Tous droits réservés.</p>
        </div>
        <div className={styles.reseau}>
          {dataEntreprise.facebook && (
            <a
              href={dataEntreprise.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={facebook}
                alt="Facebook"
                height={30}
                width={30}
                priority
              />
            </a>
          )}
          {dataEntreprise.twitter && (
            <a
              href={dataEntreprise.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={x} alt="Twitter" height={30} width={30} priority />
            </a>
          )}
          {dataEntreprise.instagram && (
            <a
              href={dataEntreprise.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagram}
                alt="Instagram"
                height={30}
                width={30}
                priority
              />
            </a>
          )}
          {dataEntreprise.tictoc && (
            <a
              href={dataEntreprise.tictoc}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={tictoc}
                alt="Tic Toc"
                height={30}
                width={30}
                priority
              />
            </a>
          )}
        </div>
      </footer>
    </div>
  );
}
