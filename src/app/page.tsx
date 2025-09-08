import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import facebook from "@/app/assets/img/facebook.svg";
import x from "@/app/assets/img/icons8-twitter.svg";
import instagram from "@/app/assets/img/icons8-instagram.svg";
import tictoc from "@/app/assets/img/icons8-tic-tac.svg";
import pelle from "@/app/assets/img/pelle.svg";
import fleche from "@/app/assets/img/fleche-bas.svg";
import ProductSection from "./components/product/ProductSection";
import EmployeeSection from "./components/employee/EmployeeSection";
import PromoSection from "./components/promo/PromoSection";
import MeaSection from "./components/mise-en-avant/Mea";
import styles from "./page.module.scss";
import EventSection from "./components/event/EventSection";
// import DynamicAnimationLoader from "./components/animation/DynamicAnimationLoader";

async function fetchData() {
  const API = process.env.NEXT_PUBLIC_API;
  const ID = process.env.ID;
  try {
    const [
      fetchDataEntreprise,
      fetchDataPrestation,
      fetchDataCaProduct,
      fetchDataEmployee,
      fetchDataPromo,
      fetchDataMea,
      fetchDataEvent,
      fetchDataArticle,
    ] = await Promise.all([
      fetch(`${API}/entreprisepublic/${ID}`),
      fetch(`${API}/caprestationspublic/${ID}`),
      fetch(`${API}/caproductspublic/${ID}`),
      fetch(`${API}/employeespublic/${ID}`),
      fetch(`${API}/promospublic/${ID}`),
      fetch(`${API}/measpublic/${ID}`),
      fetch(`${API}/eventspublic/${ID}`),
      fetch(`${API}/articlespublic/${ID}`),
    ]);

    if (
      !fetchDataEntreprise.ok ||
      !fetchDataPrestation.ok ||
      !fetchDataCaProduct.ok ||
      !fetchDataEmployee.ok ||
      !fetchDataPromo.ok ||
      !fetchDataMea.ok ||
      !fetchDataEvent.ok ||
      !fetchDataArticle.ok
    ) {
      throw new Error("Failed to fetch data");
    }

    const dataEntreprise = await fetchDataEntreprise.json();
    const dataPrestation = await fetchDataPrestation.json();
    const dataCaProduct = await fetchDataCaProduct.json();
    const dataEmployee = await fetchDataEmployee.json();
    const dataPromo = await fetchDataPromo.json();
    const dataMea = await fetchDataMea.json();
    const dataEvent = await fetchDataEvent.json();
    const dataArticle = await fetchDataArticle.json();
    console.log(dataCaProduct);

    return {
      dataEntreprise,
      dataPrestation,
      dataCaProduct,
      dataEmployee,
      dataPromo,
      dataMea,
      dataEvent,
      dataArticle,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function Home() {
  const {
    dataEntreprise,
    dataPrestation,
    dataCaProduct,
    dataEmployee,
    dataPromo,
    dataMea,
    dataEvent,
    dataArticle,
  } = await fetchData();

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
          {dataPrestation && dataPrestation.length > 0 && (
            <Link href="#prestations">Prestations</Link>
          )}
          {dataCaProduct && dataCaProduct.length > 0 && (
            <Link href="#products">Produits</Link>
          )}
          {dataEmployee && dataEmployee.length > 0 && (
            <Link href="#employees">En savoir plus</Link>
          )}
          {dataPromo && dataPromo.length > 0 && (
            <Link href="#promos">Promotions</Link>
          )}
          {dataMea && dataMea.length > 0 && (
            <Link href="#meas">Mises en avant</Link>
          )}
          {dataEvent && dataEvent.length > 0 && (
            <Link href="#events">Événements</Link>
          )}
          {dataArticle && dataArticle.length > 0 && (
            <Link href="#articles">Articles</Link>
          )}
        </nav>
        <div className={styles.co}>
          <p></p>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.tittle}>{dataEntreprise.name}</h1>
        <div className={styles.introLogo}>
          <Image
            className={styles.logoOne}
            src={dataEntreprise.logourl}
            alt={dataEntreprise.name}
            height={300}
            width={300}
          />
          <Image
            className={`${styles.logoPelleOne} logoPelleOne`}
            src={pelle}
            alt="pelle"
            height={500}
            width={500}
          />
          <Image
            className={`${styles.logoPelleTwo} logoPelleTwo`}
            src={pelle}
            alt="pelle"
            height={500}
            width={500}
          />
        </div>
        <div className={styles.intro}>
          <p>
            Bienvenue à <span> {dataEntreprise.name}</span> , notre pizzeria
            autentique et local ou chacune de nos pizza sont préparé avec soin
            et amour.
          </p>
        </div>
        {/* <DynamicAnimationLoader /> */}
        <div className={styles.scroll}>
          <span>scroll</span>
          <Image
            className={styles.logoScroll}
            src={fleche}
            alt="scroll"
            height={50}
            width={50}
          />
        </div>

        {dataMea && dataMea.length > 0 && (
          <MeaSection id="meas" miseEnAvants={dataMea} />
        )}

        {dataEmployee && dataEmployee.length > 0 && (
          <EmployeeSection id="employees" employees={dataEmployee} />
        )}

        {dataPromo && dataPromo.length > 0 && (
          <PromoSection id="promos" promos={dataPromo} />
        )}

        {dataCaProduct && dataCaProduct.length > 0 && (
          <ProductSection id="products" Caproducts={dataCaProduct} />
        )}

        {dataEvent && dataEvent.length > 0 && (
          <EventSection id="events" Events={dataEvent} />
        )}
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

      <Script id="smooth-scroll" strategy="afterInteractive">
        {`
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            });
          });
        `}
      </Script>
    </div>
  );
}
