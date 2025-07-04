import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import facebook from "@/app/assets/img/facebook.svg";
import x from "@/app/assets/img/icons8-twitter.svg";
import instagram from "@/app/assets/img/icons8-instagram.svg";
import tictoc from "@/app/assets/img/icons8-tic-tac.svg";
import PrestationSection from "./components/prestation/PrestationSection";
import ProductSection from "./components/product/ProductSection";
import EmployeeSection from "./components/employee/EmployeeSection";
import PromoSection from "./components/promo/PromoSection";
import MeaSection from "./components/mise-en-avant/Mea";
import styles from "./page.module.scss";
import EventSection from "./components/event/EventSection";
import ArticleSection from "./components/article/ArticleSection";

async function fetchData() {
  try {
    const [
      fetchDataEntreprise,
      fetchDataPrestation,
      fetchDataProduct,
      fetchDataEmployee,
      fetchDataPromo,
      fetchDataMea,
      fetchDataEvent,
      fetchDataArticle,
    ] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_API}/entreprisepublic/${process.env.ID}`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_API}/caprestationspublic/${process.env.ID}`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_API}/caproductspublic/${process.env.ID}`
      ),
      fetch(`${process.env.NEXT_PUBLIC_API}/employeespublic/${process.env.ID}`),
      fetch(`${process.env.NEXT_PUBLIC_API}/promospublic/${process.env.ID}`),
      fetch(`${process.env.NEXT_PUBLIC_API}/measpublic/${process.env.ID}`),
      fetch(`${process.env.NEXT_PUBLIC_API}/eventspublic/${process.env.ID}`),
      fetch(`${process.env.NEXT_PUBLIC_API}/articlespublic/${process.env.ID}`),
    ]);

    if (
      !fetchDataEntreprise.ok ||
      !fetchDataPrestation.ok ||
      !fetchDataProduct.ok ||
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
    const dataProduct = await fetchDataProduct.json();
    const dataEmployee = await fetchDataEmployee.json();
    const dataPromo = await fetchDataPromo.json();
    const dataMea = await fetchDataMea.json();
    const dataEvent = await fetchDataEvent.json();
    const dataArticle = await fetchDataArticle.json();
    console.log(dataProduct);

    return {
      dataEntreprise,
      dataPrestation,
      dataProduct,
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
    dataProduct,
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
          <Link href="#presentations">Présentation</Link>
          {dataPrestation && dataPrestation.length > 0 && (
            <Link href="#prestations">Prestations</Link>
          )}
          {dataProduct && dataProduct.length > 0 && (
            <Link href="#products">Produits</Link>
          )}
          {dataEmployee && dataEmployee.length > 0 && (
            <Link href="#employees">Employés</Link>
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
        <h1>Bienvenue chez {dataEntreprise.name}</h1>
        <section id="presentations" className={styles.presentation}>
          <p>
            {dataEntreprise.adress}, {dataEntreprise.zipcode}{" "}
            {dataEntreprise.city}
          </p>
          <p>
            Email:{" "}
            <a href={`mailto:${dataEntreprise.email}`}>
              {dataEntreprise.email}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${dataEntreprise.phone}`}>{dataEntreprise.phone}</a>
          </p>
          <p>
            Website:{" "}
            <a
              href={dataEntreprise.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dataEntreprise.website}
            </a>
          </p>
        </section>

        {dataPrestation && dataPrestation.length > 0 && (
          <PrestationSection id="prestations" prestations={dataPrestation} />
        )}

        {dataProduct && dataProduct.length > 0 && (
          <ProductSection id="products" products={dataProduct} />
        )}

        {dataEmployee && dataEmployee.length > 0 && (
          <EmployeeSection id="employees" employees={dataEmployee} />
        )}

        {dataPromo && dataPromo.length > 0 && (
          <PromoSection id="promos" promos={dataPromo} />
        )}

        {dataMea && dataMea.length > 0 && (
          <MeaSection id="meas" miseEnAvants={dataMea} />
        )}

        {dataEvent && dataEvent.length > 0 && (
          <EventSection id="events" Events={dataEvent} />
        )}

        {dataArticle && dataArticle.length > 0 && (
          <ArticleSection id="articles" articles={dataArticle} />
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
