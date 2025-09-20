var dynamicContent = dynamicContent || {};
(dynamicContent.articles = {
  content: {
    mortgage: {
      base_url: "https://discover.rbcroyalbank.com/wp-json/rbcwp/v1/posts/",
      params: { category: ["homes"] },
    },
    smallbusiness: {
      base_url: "https://discover.rbcroyalbank.com/wp-json/rbcwp/v1/posts/",
      params: { category: ["business"] },
    },
    retirement: {
      base_url: "https://discover.rbcroyalbank.com/wp-json/rbcwp/v1/posts/",
      params: { topic: ["retirement"] },
    },
    newcomer: {
      base_url: "https://discover.rbcroyalbank.com/wp-json/rbcwp/v1/posts/",
      params: { topic: ["new-to-canada"] },
    },
    students: {
      base_url: "https://discover.rbcroyalbank.com/wp-json/rbcwp/v1/posts/",
      params: { topic: ["students"] },
    },
    crossborder: {
      base_url: "https://discover.rbcroyalbank.com/wp-json/rbcwp/v1/posts/",
      params: { topic: ["cross-border"] },
    },
    "credit-card": {
      base_url: "https://discover.rbcroyalbank.com/wp-json/rbcwp/v1/posts/",
      params: { category: ["travel"] },
    },
    account: {
      base_url: "https://discover.rbcroyalbank.com/wp-json/rbcwp/v1/posts/",
      params: { topic: ["banking"] },
    },
    investing: {
      base_url: "https://discover.rbcroyalbank.com/wp-json/rbcwp/v1/posts/",
      params: { topic: ["personal-finance"] },
    },
    loan: {
      base_url: "https://discover.rbcroyalbank.com/wp-json/rbcwp/v1/posts/",
      params: { topic: ["personal-finance"] },
    },
    rewards: {
      base_url: "https://discover.rbcroyalbank.com/wp-json/rbcwp/v1/posts/",
      params: { topic: [""] },
    },
  },
}),
  (dynamicContent.banners = {
    mappings: {
      account: ["ID01_account"],
      "credit-card": ["ID02_credit-card"],
      crossborder: ["ID09_crossborder"],
      investing: ["ID05_investing-options", "ID13_investing-advice"],
      loan: ["ID04_loan"],
      mortgage: ["ID03_mortgage-buy", "ID12_mortgage-buy-and-sell"],
      newcomer: ["ID11_newcomer"],
      retirement: ["ID10_retirement"],
      smallbusiness: ["ID06_smallbusiness"],
      students: ["ID08_students"],
      rewards: ["ID14_rewards"],
      autofinance: ["ID15_autofinance"],
    },
    content: {
      ID01_account: {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID01_account.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Accounts_2019_05_null&digplacement=hero_banner",
        },
        heading: "Need Help Choosing a Chequing Account?",
        text: "We can help you get the right account, and we can do it all online in 5 minutes or less.",
        button: {
          text: "Choose an Account",
          link: "https://www.rbcroyalbank.com/accounts/account-selector.html",
        },
      },
      "ID02_credit-card": {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID02_credit-card.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Cards_2019_05_null&digplacement=hero_banner",
        },
        heading: "Help Me Choose the Right Credit Card",
        text: "Whether you're looking for travel, rewards, cash back, or a lower interest rate, our credit card selector can help you find the right card in 30 seconds.",
        button: {
          text: "Choose a Credit Card",
          link: "https://www.rbcroyalbank.com/credit-cards/tools/choose-a-credit-card.html",
        },
      },
      "ID03_mortgage-buy": {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID03_mortgage.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Mortgages_2019_05_null&digplacement=hero_banner",
        },
        heading: "Thinking About Buying a Home?",
        text: "Get pre-qualified today and find out what you can afford, how much to set aside for closing, and what kind of mortgage suits you best.",
        button: {
          text: "Pre-qualify Today",
          link: "https://online.royalbank.com/cgi-bin/tools/true-house-affordability/start.cgi?_ga=2.228900121.483322978.1562083182-652518672.1460732986#/welcome?lang=en",
        },
      },
      ID04_loan: {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID04_loan.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Loans_2019_05_null&digplacement=hero_banner",
        },
        heading: "Find the Right Borrowing Solution",
        text: "Whether you want to  buy a new car, renovate your home, borrow to invest or consolidate debt, we have a borrowing solution to meet your needs and budget.",
        button: {
          text: "Tell Me More",
          link: "https://www.rbcroyalbank.com/borrowing-solutions/index.html",
        },
      },
      "ID05_investing-options": {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID05_investing.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Investing_2019_05_null&digplacement=hero_banner",
        },
        heading: "Discover Your Investment Options",
        text: "Whether it’s for a rainy day, a child’s education or a major purchase, we can help you save and invest for what’s important to you.",
        button: {
          text: "Tell Me More",
          link: "https://www.rbcroyalbank.com/investments/goals-overview.html",
        },
      },
      ID06_smallbusiness: {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID06_smallbusiness.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Small_Business_2019_05_null&digplacement=hero_banner",
        },
        heading: "5 Steps to Starting a Business",
        text: "If you’re thinking about starting a business, we can  provide you with five start-up steps to help move you  closer to becoming a business owner.",
        button: {
          text: "Get Started Now",
          link: "https://www.rbcroyalbank.com/business/advice/starting-a-business.html",
        },
      },
      ID07_commercial: {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID07_commercial.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Commercial_2018_11_null&digplacement=hero_banner",
        },
        heading: "Helping Your Business Reach Its Full Potential",
        text: "We offer a broad range of financial solutions and industry expertise to help meet your company’s needs.",
        button: {
          text: "Tell Me More",
          link: "http://www.rbcroyalbank.com/commercial/index.html",
        },
      },
      ID08_students: {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID08_students.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Students_2019_05_null&digplacement=hero_banner",
        },
        heading: "Are You a Student?",
        text: "Find the right Account, enjoy Rewards & benefits, build your career and so much more!",
        button: {
          text: "Explore Student Solutions",
          link: "http://www.rbcroyalbank.com/student-solution/index.html",
        },
      },
      ID09_crossborder: {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID09_crossborder.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Cross%20Border_2018_11_null&digplacement=hero_banner",
        },
        heading: "Easily Bank on Both Sides of the Border",
        text: "Discover how our cross-border banking solutions make it easy to live, work, shop and play in Canada and the U.S.",
        button: { text: "Tell Me More", link: "https://www.rbcbank.com/" },
      },
      ID10_retirement: {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID10_retirement.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Retiree_2019_05_null&digplacement=hero_banner",
        },
        heading: "Planning for Retirement or Already Retired?",
        text: "Whether you’re still working and need a better savings strategy or you’re retired and want to fine-tune an existing plan, we can help you get on the right path! ",
        button: {
          text: "Explore  Options",
          link: "https://www.rbcroyalbank.com/retirement/",
        },
      },
      ID11_newcomer: {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID11_newcomer.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Newcomer_2019_05_null&digplacement=hero_banner",
        },
        heading: "Moving or New to Canada?",
        text: "We can help you get started financially in Canada - take advantage of banking, credit and investment solutions created specifically with newcomers in mind!",
        button: {
          text: "View Special Offers",
          link: "https://www.rbc.com/newcomers/what-we-offer.html",
        },
      },
      "ID12_mortgage-buy-and-sell": {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID12_mortgage-buy-and-sell.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Mortgages_2018_11_null&digplacement=hero_banner",
        },
        heading: "Thinking About Buying or Selling Your Home?",
        text: "We can help you understand your options and go over your next steps, so you achieve your real estate goal.",
        button: {
          text: "Tell Me More",
          link: "https://www.rbcroyalbank.com/mortgages/index.html",
        },
      },
      "ID13_investing-advice": {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID13_investing-advice.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Investing_2018_11_null&digplacement=hero_banner",
        },
        heading: "Need Investment Advice?",
        text: "No matter what stage of life you’re in, we have the tools and resources to help you achieve your goals.",
        button: {
          text: "Tell Me More",
          link: "https://www.rbcroyalbank.com/investments/goals-overview.html",
        },
      },
      ID14_rewards: {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID14_rewards.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_Rewards_2018_8_null&digplacement=hero_banner",
        },
        heading: "Get Rewarded for Everyday Spending",
        text: "From redeeming for your favourite brands or travel, RBC Rewards offers something for everyone.",
        button: {
          text: "Learn More",
          link: "https://www.rbcroyalbank.com/rbcrewards/index.html",
        },
      },
      ID15_autofinance: {
        image: {
          url: "/_assets-custom/homepage/images/banners/ID15_autofinance.jpg?digtype=pi&digpromo=00000&digname=Personal_HP_AutoFinance_2020_02_null&digplacement=hero_banner",
        },
        heading:
          "Thinking about buying a car? Find out what’s within your budget.",
        text: "Instantly see how much your trade-in maybe worth and how much you can afford, without affecting your credit score.",
        button: {
          text: "Pre-Qualify Today",
          link: "https://apps.royalbank.com/apps/my-auto-affordability?lang=en",
        },
      },
    },
  }),
  (dynamicContent.menu = [
    { name: "Personal", url: "/personal.html" },
    {
      name: "Business",
      url: "http://www.rbcroyalbank.com/business-select.html",
    },
    { name: "About RBC", url: "http://www.rbc.com/canada.html" },
  ]),
  (dynamicContent["special-offers"] = {
    mappings: {
      account: [
        "MS39_all-inclusive-offer",
        "MS43_eSavings",
        "MS47_iPad-2019",
        "MS54_HISA",
        "MS59_Switch300",
      ],
      "credit-card": ["MS06_cash-back-mc", "MS04_rewards-plus", "MS05_avion"],
      crossborder: ["MS30_us-account"],
      investing: [
        "MS10_savings-goal",
        "MS37_InvestEaseYoga",
        "MS43_eSavings",
        "MS54_HISA",
        "MS60_MyAdvisor2020",
      ],
      loan: [
        "MS08_line-of-credit",
        "MS09_personal-loan",
        "MS50_Debt-Reduction",
      ],
      mortgage: [
        "MS07_prequalification",
        "MS45_kickstart-mortgage",
        "MS55_Kickstart-Fall",
      ],
      newcomer: [
        "MS44a_newcomer-offer",
        "MS52_IntlStudent",
        "MS58_Newcomer100",
      ],
      retirement: ["MS12_next-30"],
      smallbusiness: [
        "MS41_business-advice",
        "MS42_business-loan-calc",
        "MS48_Med-School",
        "MS56_Business-Bank-Account",
      ],
      students: [
        "MS38_JanuaryCash",
        "MS46_future-launch-2019",
        "MS49_60-Reasons",
        "MS57_Student60",
      ],
      rewards: ["MS53_Gift-Cards"],
    },
    content: {
      "MS03_mobile-app": {
        layout: 0,
        endDate: "0",
        title: "Discover Convenience",
        image: {
          url: "/_assets-custom/homepage/images/MS03_mobile-app.jpg?digtype=pi&digpromo=00000&digname=ENT_DIG_MOB_17_10_RBC_MS03-mobile-app_ENG&digplacement=marketing_spotlight",
          focus: ["center"],
        },
        lead: "The RBC Mobile App",
        text: "Pay bills, send money, deposit cheques and more with our mobile banking app.",
        link: {
          text: "Learn More",
          target:
            "https://www.rbcroyalbank.com/ways-to-bank/mobile/rbc-mobile-app/index.html",
        },
      },
      "MS04_rewards-plus": {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS04_rewards-plus.jpg?digtype=pi&digpromo=00000&digname=PB_CC_RVC_17_10_RBC_MS04-rewards-plus_ENG&digplacement=marketing_spotlight",
          focus: ["card"],
        },
        lead: "Rewards Credit Card",
        text: "Pay no annual fee and earn Rewards points<sup>1</sup> every time you shop with our RBC Rewards+ Visa credit card.",
        link: {
          text: "View Additional Benefits",
          target:
            "http://www.rbcroyalbank.com/credit-cards/rewards-credit-cards/rewards-plus.html",
        },
      },
      MS05_avion: {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS05_avion.jpg?digtype=pi&digpromo=00000&digname=PB_CC_IAV_19_08_RBC_MS05-avion_ENG&digplacement=marketing_spotlight",
          focus: ["card"],
        },
        lead: "Get 15,000 Welcome Points<sup>†</sup> Upon Approval",
        text: "Plus you can choose any airline, any flight, any time with no blackouts or seat restrictions!",
        link: {
          text: "Visit RBC Avion Visa Infinite",
          target:
            "https://www.rbcroyalbank.com/credit-cards/travel/rbc-avion-visa-infinite-b.html?utm_expid=.izGUGT9YTBeqM62RbXVtSw.1&utm_referrer=",
        },
      },
      "MS06_cash-back-mc": {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS06_cash-back-mc.jpg?digtype=pi&digpromo=00000&digname=PB_CC_MC1_19_08_RBC_MS06-cash-back-mc_ENG&digplacement=marketing_spotlight",
          focus: ["card"],
        },
        lead: "2% Cash Back Credits<sup>†</sup> on Groceries",
        text: "Pay no annual fee and get unlimited cash back credits on your purchases, with RBC Cash Back MasterCard.",
        link: {
          text: "Sign Me Up",
          target:
            "https://www.rbcroyalbank.com/credit-cards/cash-back/rbc-cashback-mastercard.html",
        },
      },
      MS07_prequalification: {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS07_prequalification.jpg?digtype=pi&digpromo=00000&digname=PB_LN_MTG_18_04_RBC_MS07-prequalification_ENG&digplacement=marketing_spotlight",
        },
        lead: "Special Offers on RBC Mortgages",
        text: "View all offers and benefits that you could be eligible for, when you get a Mortgage with us!",
        link: {
          text: "View Current Offers",
          target:
            "https://www.rbcroyalbank.com/mortgages/special-mortgage-offers.html",
        },
      },
      "MS08_line-of-credit": {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS08_line-of-credit.jpg?digtype=pi&digpromo=00000&digname=PB_LN_SLC_17_10_RBC_MS08-line-of-credit_ENG&digplacement=marketing_spotlight",
          focus: ["left"],
        },
        lead: "A line of credit is a flexible, low cost way to borrow money",
        text: "to help you pay down your higher interest debts and improve your cash flow.",
        link: {
          text: "Calculate Your Payments",
          target:
            "http://www.rbcroyalbank.com/personalloans/payment/index.html?t=loc&tog=loc",
        },
      },
      "MS09_personal-loan": {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS09_personal-loan.jpg?digtype=pi&digpromo=00000&digname=PB_LN_PL_18_10_RBC_MS09-personal-loan_ENG&digplacement=marketing_spotlight",
          focus: ["left"],
        },
        lead: "A personal loan is a simple way to borrow for a specific goal",
        text: "Offering choice, flexibility and structured payments.",
        link: {
          text: "Calculate Your Payments",
          target:
            "http://www.rbcroyalbank.com/personalloans/payment/index.html?t=loan&tog=loan",
        },
      },
      "MS10_savings-goal": {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS10_savings-goal.jpg?digtype=pi&digpromo=00000&digname=PB_INV_ALL_17_10_RBC_MS10-savings-goal_ENG&digplacement=marketing_spotlight",
        },
        lead: "Try Our Investment Wizard",
        text: "In 5 easy steps, we can help you save for your short-term or long-term goals.",
        link: {
          text: "Get Started",
          target: "https://www.rbcroyalbank.com/investment-wizard/index.html",
        },
      },
      "MS12_next-30": {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS12_next-30.jpg?digtype=pi&digpromo=00000&digname=PB_INV_RETP_17_10_RBC_MS12-next-30_ENG&digplacement=marketing_spotlight",
        },
        lead: "Imagine the possibilities of a 30-year retirement",
        text: "Are you ready? Retirement has changed and it’s lasting longer than ever before.",
        link: {
          text: "Find Out More",
          target:
            "https://www.rbcroyalbank.com/dms/investments/retirement/mfd-retirement-d-or.html",
        },
      },
      "MS13_newcomer-credit-card": {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS13_newcomer-credit-card.jpg?digtype=pi&digpromo=00000&digname=PB_NWC_ALL_17_10_RBC_MS13-newcomer-credit-card_ENG&digplacement=marketing_spotlight",
          focus: ["right"],
        },
        lead: "Newcomer? No credit history?",
        text: "Perfect your landing with your 1st Canadian credit card.",
        link: {
          text: "Learn More",
          target: "http://www.rbcroyalbank.com/dms/enterprise/credit.html",
        },
      },
      "MS30_us-account": {
        layout: 1,
        endDate: "2020-10-31",
        image: {
          url: "/_assets-custom/homepage/images/MS30_us-account.jpg?digtype=pi&digpromo=00000&digname=ENT_ENT_ENT_18_09_RBC_Crossborder NAF_ENG&digplacement=marketing_spotlight",
          focus: ["contain"],
        },
        lead: "No Annual Fee Cross-Border Banking for 1 Year<sup>1,2</sup>",
        text: "Apply online for a U.S. credit card and U.S. bank account.<br><br>Offer ends October 31, 2020.",
        link: {
          text: "Learn more",
          target:
            "http://www.rbcroyalbank.com/dms/cross-border-banking/index-i-or.html?utm_source=rbc_royal_homepage&utm_medium=web&utm_content=12_month_offer_fall_2018",
        },
      },
      MS37_InvestEaseYoga: {
        layout: 1,
        endDate: "2019-07-31",
        image: {
          url: "/_assets-custom/homepage/images/MS36_InvestEaseBall.jpg?digtype=pi&digpromo=00000&digname=OI_INV_IE_18_11_RBC_InvestEaseYoga_ENG&digplacement=marketing_spotlight",
          focus: ["mtop"],
        },
        lead: "Try smart, automated investing with RBC InvestEase",
        text: "Open an account by July 31, 2019 and pay no management fees for 6 months.",
        link: {
          text: "View More Details",
          target: "https://www.rbcinvestease.com/",
        },
      },
      MS38_JanuaryCash: {
        layout: 1,
        endDate: "2019-04-01",
        image: {
          url: "/_assets-custom/homepage/images/MS38_JanuaryCash.jpg?digtype=pi&digpromo=00000&digname=PB_CHEQ_NFSA_19_01_RBC_January Cash Campaign_ENG&digplacement=marketing_spotlight",
        },
        lead: "Get $60 when you open a new eligible student bank account<sup>1</sup>",
        text: "Offer ends April 1, 2019",
        link: {
          text: "Learn more",
          target:
            "http://www.rbcroyalbank.com/dms/students/multi/offer-m-or.html",
        },
      },
      "MS39_all-inclusive-offer": {
        layout: 1,
        endDate: "2019-04-30",
        image: {
          url: "/_assets-custom/homepage/images/MS39_all-inclusive-offer.jpg?digtype=pi&digpromo=00000&digname=PB_CHEQ_NLB_19_01_RBC_All Inclusive Offer_ENG&digplacement=marketing_spotlight",
          focus: ["right"],
        },
        lead: "Last Chance: Switch to RBC and Get $300",
        text: "When You Open an All-Inclusive Bank Account.<br><br>Conditions apply",
        link: {
          text: "Learn more",
          target:
            "https://www.rbcroyalbank.com/dms/pba/open-an-account/offer-n-or.html",
        },
      },
      MS40_taxtime_2019: {
        layout: 0,
        endDate: "2019-04-30",
        image: {
          url: "/_assets-custom/homepage/images/MS18_taxtime_2018.jpg?digtype=pi&digpromo=00000&digname=PB_SRV_PMT_19_02_RBC_Tax Time 2019_ENG&digplacement=marketing_spotlight",
        },
        title: "Tax Time Made Easy",
        lead: "Special tax filing offer for RBC Clients",
        text: "Save 20% off TurboTax Online products.",
        link: {
          text: "Learn More",
          target: "http://www.rbcroyalbank.com/taxtime/",
        },
      },
      "MS41_business-advice": {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS41_business-advice.jpg?digtype=pi&digpromo=00000&digname=BB_B-SRV_DE_19_02_RBC_Digital Business Advisor_ENG&digplacement=marketing_spotlight",
        },
        lead: "Get Advice & Solutions for Your Business in 60 Seconds.",
        text: "Tell us a bit about your needs and we'll provide you with recommendations to help your business succeed.",
        link: {
          text: "Get Started",
          target:
            "https://apps.royalbank.com/uaw0/your-digital-business-advisor",
        },
      },
      "MS42_business-loan-calc": {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS42_business-loan-calc.jpg?digtype=pi&digpromo=00000&digname=BB_B-LNS_BLC_19_02_RBC_Business Loan Calculator_ENG&digplacement=marketing_spotlight",
          focus: ["top"],
        },
        lead: "Need to Borrow Money for Your Business?",
        text: "Find out how much your monthly payments will be with our business loan calculator.",
        link: {
          text: "Calculate Your Payments",
          target:
            "https://www.rbcroyalbank.com/business/loans/business-loan-calculator.html",
        },
      },
      MS43_eSavings: {
        layout: 1,
        endDate: "2019-07-31",
        image: {
          url: "/_assets-custom/homepage/images/MS43_eSavings.jpg?digtype=pi&digpromo=00000&digname=PB_SAV_HIES_19_04_RBC_eSavings Bonus_ENG&digplacement=marketing_spotlight",
        },
        lead: "Show your money 3.00% interest<sup>1</sup> for the first 3 months<sup>2</sup>!",
        text: "Open your first RBC High Interest eSavings Account before July 31, 2019.",
        link: {
          text: "Find out more",
          target:
            "https://www.rbcroyalbank.com/dms/investments/e-savings/bonus-d-or.html",
        },
      },
      "MS44a_newcomer-offer": {
        layout: 1,
        endDate: "2019-10-31",
        image: {
          url: "/_assets-custom/homepage/images/MS44_newcomer-offer.jpg?digtype=pi&digpromo=00000&digname=ENT_NWC_ALL_19_04_RBC_Newcomer-OfferA_ENG&digplacement=marketing_spotlight",
          focus: ["top"],
        },
        lead: "Newcomers Get No-Monthly-Fee Banking for a Year",
        text: "Visit an RBC branch to open your RBC No Limit Banking account today.<br><br>Offer expires October 31, 2019.",
        link: {
          text: "Get More Details",
          target:
            "https://www.rbcroyalbank.com/dms/enterprise/newcomers/offers.html",
        },
      },
      "MS45_kickstart-mortgage": {
        layout: 1,
        endDate: "2019-06-30",
        image: {
          url: "/_assets-custom/homepage/images/MS45_kickstart-mortgage.jpg?digtype=pi&digpromo=00000&digname=PB_MTG_MTG_19_04_RBC_Kickstart-Mortgage_ENG&digplacement=marketing_spotlight",
        },
        lead: "Special Offers on Eligible Mortgages",
        text: "Get an eligible RBC Mortgage and receive up to $1000<sup>3</sup> cash or $750 WestJet<sup>‡</sup> gift card<sup>4</sup>.<br><br><span class='disclaimer'>Offer available from March 1 to June 30, 2019. Conditions apply.</span>",
        link: {
          text: "Prequalify Today",
          target:
            "http://www.rbcroyalbank.com/dms/mortgages/buying/kickstart/redirect-personal.html",
        },
      },
      "MS46_future-launch-2019": {
        layout: 1,
        endDate: "2019-07-15",
        image: {
          url: "/_assets-custom/homepage/images/MS46_future-launch-2019.jpg?digtype=pi&digpromo=00000&digname=ENT_StdntSol_ALL_19_04_RBC_Future-Launch-2019_ENG&digplacement=marketing_spotlight",
        },
        lead: "RBC Future Launch",
        text: "Empowering youth for the jobs of tomorrow by increasing access to skill development, networking & work experience.",
        link: { text: "Learn more", target: "http://www.rbc.com/futurelaunch" },
      },
      "MS47_iPad-2019": {
        layout: 1,
        endDate: "2019-09-30",
        image: {
          url: "/_assets-custom/homepage/images/MS47_iPad-2019.jpg?digtype=pi&digpromo=00000&digname=PB_CHEQ_ALL_19_05_RBC_iPad-Campaign-2019_ENG&digplacement=marketing_spotlight",
          focus: ["contain"],
        },
        lead: "Get the Latest 10.2” iPad<sup>1</sup> in Your Choice of Colour at No Cost",
        text: "When you open an all-inclusive bank account. OFFER EXTENDED until September 30! Conditions apply.",
        link: {
          text: "Sign Me Up",
          target:
            "https://www.rbcroyalbank.com/dms/pba/open-an-account/offer-m-or.html",
        },
      },
      "MS48_Med-School": {
        layout: 1,
        endDate: "2019-09-30",
        image: {
          url: "/_assets-custom/homepage/images/MS48_Med-School.jpg?digtype=pi&digpromo=00000&digname=BB_B-GBE_GRA_19_07_RBC_Med School_ENG&digplacement=marketing_spotlight",
        },
        lead: "Membership for Medical & Dental Students",
        text: "As a member you’ll save on fees, enjoy discounts on premium products, plus receive bonus RBC Rewards points.",
        link: {
          text: "Join Healthcare Advantage",
          target:
            "https://www.rbcroyalbank.com/healthcare/en/offers/index.html",
        },
      },
      "MS49_60-Reasons": {
        layout: 1,
        endDate: "2019-10-31",
        image: {
          url: "/_assets-custom/homepage/images/MS49_60-Reasons.jpg?digtype=pi&digpromo=00000&digname=ENT_StdntSol_ALL_19_07_60-Reasons_ENG&digplacement=marketing_spotlight",
        },
        lead: "Get $60 cash when you open a new student bank account<sup>1</sup>",
        text: "Limited time offer. Conditions apply.",
        link: {
          text: "View Offer Details",
          target:
            "https://www.rbcroyalbank.com/dms/students/multi/summer-m-or.html",
        },
      },
      "MS50_Debt-Reduction": {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS50_Debt-Reduction.jpg?digtype=pi&digpromo=00000&digname=PB_LN_PL_19_07_RBC_MS50-Debt-Reduction_ENG&digplacement=marketing_spotlight",
        },
        lead: "Get a FREE Customized Debt Reduction Plan",
        text: "Our easy planner is 5 simple steps and takes about 10 minutes to complete.",
        link: {
          text: "Create Your Plan Today",
          target:
            "https://www.rbcroyalbank.com/cgi-bin/personalloans/debt-reduction/debt-reduction-plan.pl",
        },
      },
      MS51_WestJet: {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS51_WestJet.jpg?digtype=pi&digpromo=00000&digname=PB_CC_MC2_19_08_RBC_MS51-WestJet_ENG&digplacement=marketing_spotlight",
          focus: ["card"],
        },
        lead: "Receive 50 Welcome WestJet Dollars With Your First Purchase<sup>1</sup>",
        text: "Plus earn WestJet dollars on your everyday purchases<sup>2</sup> with the WestJet RBC Credit Card.",
        link: {
          text: "View Additional Benefits",
          target:
            " https://www.rbcroyalbank.com/credit-cards/travel/westjet-rbc-mastercard.html",
        },
      },
      MS52_IntlStudent: {
        layout: 1,
        endDate: "2019-09-30",
        image: {
          url: "/_assets-custom/homepage/images/MS52_IntlStudent.jpg?digtype=pi&digpromo=00000&digname=ENT_NWC_ALL_19_08_RBC_MS52-Intl-Student_ENG&digplacement=marketing_spotlight",
        },
        lead: "Special Offer for International Students",
        text: "Get $60 cash<sup>1</sup> and a $50 Prepaid top-up PIN from TELUS<sup>2</sup> when you open an RBC student banking account.<br><br><span class='disclaimer'>Offer expires September 30, 2019.</span>",
        link: {
          text: "View Offer Conditions",
          target:
            "https://www.rbcroyalbank.com/dms/enterprise/newcomers/internationalstudent/index.html",
        },
      },
      "MS53_Gift-Cards": {
        layout: 1,
        endDate: "0",
        image: {
          url: "/_assets-custom/homepage/images/MS53_Gift-Cards.jpg?digtype=pi&digpromo=00000&digname=LTY_REW_GC_19_08_RBC_MS53-Gift-Card_ENG&digplacement=marketing_spotlight",
        },
        lead: "70+ gift card options – on points.",
        text: "Starting at only 1,400 points, you can redeem points for a $10 gift card<sup>*</sup>.",
        link: {
          text: "Check It Out",
          target:
            "https://www.rbcrewards.com/#!/whats-new/20180104VMEgiftcards",
        },
      },
      MS54_HISA: {
        layout: 1,
        endDate: "2020-01-31",
        image: {
          url: "/_assets-custom/homepage/images/MS54_HISA.jpg?digtype=pi&digpromo=00000&digname=PB_SAV_HIES_19_09_RBC_MS54-HISA_ENG&digplacement=marketing_spotlight",
        },
        lead: "Get 2.5% Interest for 3 Months",
        text: "Open your first RBC High Interest eSavings Account to take advantage of this offer.",
        link: {
          text: "View Limited Time Offer",
          target:
            "https://www.rbcroyalbank.com/dms/investments/psi/fa-hisa-c/index.html",
        },
      },
      "MS55_Kickstart-Fall": {
        layout: 1,
        endDate: "2019-11-15",
        image: {
          url: "/_assets-custom/homepage/images/MS55_Kickstart-Fall.jpg?digtype=pi&digpromo=00000&digname=PB_MTG_MTG_19_09_RBC_MS55-Kickstart-Fall_ENG&digplacement=marketing_spotlight",
        },
        lead: "Limited Time Mortgage Offers",
        text: "Get an eligible RBC mortgage and receive between $750 - $2,500 cash<sup>1,2</sup>!<br><br> <span class='text-script'>Offer expires November 15, 2019</span>",
        link: {
          text: "Ask Us About Our Offers ",
          target:
            "https://www.rbcroyalbank.com/dms/mortgages/kickstartfall/redirect-personal.html",
        },
      },
      "MS56_Business-Bank-Account": {
        layout: 1,
        endDate: "2019-11-30",
        image: {
          url: "/_assets-custom/homepage/images/MS56_Business-Bank-Account.jpg?digtype=pi&digpromo=00000&digname=BB_ACC_SDA_19_10_RBC_MS56-Business-Bank-Account_ENG&digplacement=marketing_spotlight",
          focus: ["right"],
        },
        lead: "Reduce the Hassle of Managing Your Business Finances",
        text: "Get a business bank account and account number online in less than 15 minutes<sup>1</sup>.",
        link: {
          text: "Find Out How",
          target:
            "https://www.rbcroyalbank.com/dms/business/accounts/spring2019/14-d-or.html",
        },
      },
      MS57_Student60: {
        layout: 1,
        endDate: "2031-01-31",
        image: {
          url: "/_assets-custom/homepage/images/MS57_Student60.jpg?digtype=pi&digpromo=00000&digname=PB_CHEQ_NFSA_19_01_RBC_MS57-Student60_ENG&digplacement=marketing_spotlight",
          focus: ["right"],
        },
        lead: "Get $60<sup>*</sup> and the student banking app that gets you.",
        text: "Limited time offer. Conditions apply.",
        link: {
          text: "View Offer Details",
          target:
            "https://www.rbcroyalbank.com/dms/students/multi/offer-m-or.html",
        },
      },
      MS58_Newcomer100: {
        layout: 1,
        endDate: "2020-02-27",
        image: {
          url: "/_assets-custom/homepage/images/MS58_Newcomer100.jpg?digtype=pi&digpromo=00000&digname=ENT_NWC_ALL_19_08_RBC_MS58-Newcomer100_ENG&digplacement=marketing_spotlight",
        },
        lead: "Newcomers Get $100 Cash and No-Monthly-Fee Banking for a Year",
        text: "Visit an RBC branch to open your RBC No Limit Banking account today.<br /><br /> Offer expires February 27, 2020.",
        link: {
          text: "View Full Offer Details",
          target:
            "https://www.rbcroyalbank.com/dms/enterprise/newcomers/offers.html",
        },
      },
      MS59_Switch300: {
        layout: 1,
        endDate: "2020-02-27",
        image: {
          url: "/_assets-custom/homepage/images/MS59_Switch300.jpg?digtype=pi&digpromo=00000&digname=PB_CHEQ_NLB_19_01_RBC_MS59-Switch300_ENG&digplacement=marketing_spotlight",
        },
        lead: "Get up to $300 Cash with an Eligible Bank Account",
        text: "Switch to RBC today to take advantage of this offer. Conditions apply.",
        link: {
          text: "Continue",
          target:
            "https://www.rbcroyalbank.com/dms/pba/open-an-account/offer-n-or.html",
        },
      },
      MS60_MyAdvisor2020: {
        layout: 1,
        endDate: "2020-02-29",
        image: {
          url: "/_assets-custom/homepage/images/MS60_MyAdvisor2020.jpg?digtype=pi&digpromo=00000&digname=PB_INV_ADV_20_01_RBC_MyAdvisor2020_ENG&digplacement=marketing_spotlight",
        },
        lead: "Get Your Finances in Shape with MyAdvisor",
        text: "It’s like a personal trainer for your money, available for free to RBC clients.",
        link: {
          text: "Get More Details",
          target:
            "https://www.rbcroyalbank.com/dms/investments/psi/wi-mya-a/index.html",
        },
      },
    },
  }),
  (this.templates = this.templates || {}),
  (this.templates.articles = function (data) {
    var __t,
      __p = "",
      numItems =
        (_.escape, Array.prototype.join, Math.min(data.items.length, 3));
    __p += '<div class="grid-wpr eh-wpr">';
    for (var i = 0; i < numItems; i++) {
      var item = data.items[i],
        doubleWidthLayout = numItems < 3 || 0 === i;
      (__p += doubleWidthLayout
        ? '<div class="grid-half flex ga-trigger-onload" id="db' +
          (null == (__t = i + 1) ? "" : __t) +
          "-" +
          (null == (__t = item.slug) ? "" : __t) +
          '" ga-event-category="rbcroyalbank new personal homepage" ga-event-action="banner impression" ga-event-label="discover box ' +
          (null == (__t = i + 1) ? "" : __t) +
          " - " +
          (null == (__t = item.category_list.join(", ")) ? "" : __t) +
          " - " +
          (null == (__t = item.slug) ? "" : __t) +
          '"><a href="' +
          (null == (__t = item.link) ? "" : __t) +
          '" id="db' +
          (null == (__t = i + 1) ? "" : __t) +
          "-" +
          (null == (__t = item.slug) ? "" : __t) +
          '-click" class="callout half-img" style="height:auto" ga-on="click" ga-event-category="rbcroyalbank new personal homepage" ga-event-action="banner click" ga-event-label="discover box ' +
          (null == (__t = i + 1) ? "" : __t) +
          " - " +
          (null == (__t = item.category_list.join(", ")) ? "" : __t) +
          " - " +
          (null == (__t = item.slug) ? "" : __t) +
          '"><div class="callout-img grid-half grid-mob-half" title="' +
          (null == (__t = item.title.rendered) ? "" : __t) +
          '"  data-img="' +
          (null == (__t = item.custom_fields.thumbnail_standard.url)
            ? ""
            : __t) +
          '"></div><div class="callout-content grid-half grid-mob-half">'
        : '<div class="grid-one-fourth flex ga-trigger-onload" id="db' +
          (null == (__t = i + 1) ? "" : __t) +
          "-" +
          (null == (__t = item.slug) ? "" : __t) +
          '" ga-event-category="rbcroyalbank new personal homepage" ga-event-action="banner impression" ga-event-label="discover box ' +
          (null == (__t = i + 1) ? "" : __t) +
          " - " +
          (null == (__t = item.category_list.join(", ")) ? "" : __t) +
          " - " +
          (null == (__t = item.slug) ? "" : __t) +
          '"><a href="' +
          (null == (__t = item.link) ? "" : __t) +
          '" id="db' +
          (null == (__t = i + 1) ? "" : __t) +
          "-" +
          (null == (__t = item.slug) ? "" : __t) +
          '-click" class="callout" style="height:auto" ga-on="click" ga-event-category="rbcroyalbank new personal homepage" ga-event-action="banner click" ga-event-label="discover box ' +
          (null == (__t = i + 1) ? "" : __t) +
          " - " +
          (null == (__t = item.category_list.join(", ")) ? "" : __t) +
          " - " +
          (null == (__t = item.slug) ? "" : __t) +
          '"><div class="callout-img grid-mob-half" title="' +
          (null == (__t = item.title.rendered) ? "" : __t) +
          '" data-img="' +
          (null == (__t = item.custom_fields.thumbnail_standard.url)
            ? ""
            : __t) +
          '"></div><div class="callout-content grid-mob-half">'),
        (__p +=
          '<div class="callout-copy"><div class="callout-img" title="' +
          (null == (__t = item.title.rendered) ? "" : __t) +
          '" data-img="' +
          (null == (__t = item.custom_fields.thumbnail_standard.url)
            ? ""
            : __t) +
          '"></div><span class="h4">' +
          (null == (__t = item.title.rendered) ? "" : __t) +
          "</span>"),
        doubleWidthLayout &&
          (__p +=
            '<p class="excerpt">' +
            (null == (__t = item.excerpt.raw) ? "" : __t) +
            "</p>"),
        (__p +=
          '</div><div class="callout-link"><span class="goto-link">View More</span></div></div></a></div>');
    }
    return (__p += "</div>");
  }),
  (this.templates.banner = function (data) {
    var __t,
      __p = "";
    _.escape;
    return (__p +=
      '<div class="section-inner"><div class="banner-wpr" id="hb-' +
      (null == (__t = data.affinityID) ? "" : __t) +
      "-" +
      (null == (__t = data.bannerID) ? "" : __t) +
      '"><div class="banner-img banner-img-mobile"></div><div class="banner-text"><h1 id="page-title">' +
      (null == (__t = data.heading) ? "" : __t) +
      "</h1><p>" +
      (null == (__t = data.text) ? "" : __t) +
      '</p><a class="btn primary" href="' +
      (null == (__t = data.button.link) ? "" : __t) +
      '" id="hb-' +
      (null == (__t = data.affinityID) ? "" : __t) +
      "-" +
      (null == (__t = data.bannerID) ? "" : __t) +
      '-click">' +
      (null == (__t = data.button.text) ? "" : __t) +
      "</a></div></div></div>");
  }),
  (this.templates.special_offers_callout = function (data) {
    var __t,
      __p = "";
    _.escape, Array.prototype.join;
    return (
      (__p +=
        '<a class="callout special-offers-callout no-hover" id="ms-' +
        (null == (__t = data.affinityID) ? "" : __t) +
        "-" +
        (null == (__t = data.offerID) ? "" : __t) +
        '-click" href="' +
        (null == (__t = data.link.target) ? "" : __t) +
        '">'),
      1 === data.layout &&
        (__p +=
          '<div class="callout-img gaSpotlight dynamic-height-img ' +
          (null ==
          (__t =
            data.image && data.image.focus && data.image.focus.length
              ? "focus-" + data.image.focus.join(" focus-")
              : "")
            ? ""
            : __t) +
          '" id="ms-' +
          (null == (__t = data.affinityID) ? "" : __t) +
          "-" +
          (null == (__t = data.offerID) ? "" : __t) +
          '-img" style="background-image:url(\'' +
          (null == (__t = data.image && data.image.url) ? "" : __t) +
          "')\"></div>"),
      (__p +=
        '<div class="callout-content" id="ms-' +
        (null == (__t = data.affinityID) ? "" : __t) +
        "-" +
        (null == (__t = data.offerID) ? "" : __t) +
        '"><div class="callout-copy">'),
      1 !== data.layout &&
        data.title &&
        (__p +=
          '<h2 class="text-center text-black h3">' +
          (null == (__t = data.title) ? "" : __t) +
          "</h2>"),
      (__p +=
        '<div class="callout-img gaSpotlight ' +
        (null ==
        (__t =
          data.image && data.image.focus && data.image.focus.length
            ? "focus-" + data.image.focus.join(" focus-")
            : "")
          ? ""
          : __t) +
        '" style="background-image:url(\'' +
        (null == (__t = data.image && data.image.url) ? "" : __t) +
        "')\"></div>"),
      2 === data.layout &&
        (__p +=
          '<div class="text-script text-black" style="margin-top: -10px; margin-bottom: 15px; font-size: 16px;">' +
          (null == (__t = data.imageCaption) ? "" : __t) +
          "</div>"),
      (__p +=
        '<h3 class="mar-t-0 mar-b-qtr h4"><span>' +
        (null == (__t = data.lead) ? "" : __t) +
        '</span></h3><p class="text-black">' +
        (null == (__t = data.text) ? "" : __t) +
        "</p>"),
      2 === data.layout &&
        (__p +=
          '<img style="width: 100px; float: right;" src=' +
          (null == (__t = data.bottomImage) ? "" : __t) +
          " />"),
      (__p +=
        '</div><div class="callout-link"><span class="goto-link">' +
        (null == (__t = data.link.text) ? "" : __t) +
        "</span></div></div></a>")
    );
  });
var sfJsonPayload = [];
!(function ($, window, document, undefined) {
  function ajaxReorderLinks(data, status) {
    var $betterBankingList = $("#better-banking-list"),
      arr = $("#better-banking-list > li").map(function () {
        return this.id;
      }),
      betterBankingListItems = [];
    if ("success" === status && data && data[0] && data[0].items) {
      for (var i = 0; i < data[0].items.length; i++)
        arr.each(function () {
          data[0].items[i].banner_id.indexOf(this) > -1 &&
            betterBankingListItems.push($betterBankingList.find("#" + this));
        });
      $betterBankingList.empty().append(betterBankingListItems);
    }
    $betterBankingList.removeClass("invisible");
  }
  function ajaxBuildDynamicContent(data, status) {
    var affinityID = forceAffinity || undefined;
    if (dynamicContent && dynamicContent.banners)
      var availAffinityIDs = Object.keys(dynamicContent.banners.mappings);
    if ("success" === status && data && data.length > 0 && !affinityID) {
      var items = data[0].items;
      items && items.length > 0 && (affinityID = items[0].banner_id);
    }
    (!affinityID ||
      (availAffinityIDs && -1 === availAffinityIDs.indexOf(affinityID))) &&
      (affinityID = "account"),
      console.log(affinityID),
      affinityID &&
        (dynamicContent.banners,
        dynamicContent["special-offers"] &&
          buildSpecialOffersCallout(affinityID),
        dynamicContent.articles &&
          buildArticleCallouts(dynamicContent.articles, affinityID),
        dvlFixes());
  }
  function buildSpecialOffersCallout(affinityID) {
    var ci,
      $specialOffersCallout = $(".special-offers-callout"),
      defaultOfferData = {
        layout: 0,
        title: "Discover Convenience",
        image: {
          url: "/_assets-custom/homepage/images/MS03_mobile-app.jpg?digtype=pi&digpromo=00000&digname=ENT_DIG_MOB_17_10_RBC_MS03-mobile-app_ENG&digplacement=marketing_spotlight",
          focus: ["center"],
        },
        lead: "The RBC Mobile App",
        text: "Pay bills, send money, deposit cheques and more with our mobile banking app.",
        link: {
          text: "Learn More",
          target:
            "https://www.rbcroyalbank.com/ways-to-bank/mobile/rbc-mobile-app/index.html",
        },
        affinityID: affinityID,
        offerID: "MS03_mobile-app",
      };
    if (
      ("function" == typeof ga && "function" == typeof ga.getAll) ||
      getGaCount >= 4
    ) {
      try {
        var trackers = ga.getAll();
        if (trackers.length) {
          ci = "GA-" + trackers[0].get("clientId").replace(".", "o");
        }
      } catch (e) {}
      if (getGaCount >= 4)
        if ((ci = getCookie("_ga"))) ci = ci.replace(/\./g, "o");
        else if (!(ci = localStorage.getItem("RBH"))) {
          var randy = parseInt((9 * Math.random() + 1) * Math.pow(10, 9), 10);
          (ci = "RBH." + randy + "." + Date.now()),
            localStorage.setItem("RBH", ci);
        }
      if (ci) {
        var url =
          "https://offer.rbc.com/od?ci=" +
          ci +
          "&p=rbcroyalbank&la=en&ca=" +
          affinityID;
        $.ajax({
          url: url,
          dataType: "json",
          success: function (json) {
            try {
              var offer = json.filter(function (data) {
                  return "rbcroyalbank_homepage_m1" === data.area;
                })[0],
                msData = offer.recs[0],
                ca = msData.customAttributes;
              if (
                (sfJsonPayload.push(msData),
                console.log(sfJsonPayload),
                $specialOffersCallout && $specialOffersCallout.length)
              ) {
                var offerID = getFileName(msData.imageUrl);
                (offerData = {
                  layout: isNaN(Number(ca.HTML_LAYOUT))
                    ? 1
                    : Number(ca.HTML_LAYOUT),
                  image: { url: msData.imageUrl },
                  lead: ca.HTML_TITLE_TEXT,
                  text: ca.HTML_BODY_TEXT,
                  link: {
                    text: ca.HTML_CLICK_TEXT,
                    target: msData.clickUrlNoJs,
                  },
                  affinityID: affinityID,
                  offerID: offerID,
                }),
                  ca.HTML_FOCUS && (offerData.image.focus = [ca.HTML_FOCUS]),
                  0 == Number(ca.HTML_LAYOUT) &&
                    (offerData.title = ca.HTML_HEADER);
                var displayName = msData.offerName || msData.name,
                  dataLayerPush = {
                    event: "salesForceImp",
                    area: "" + offer.title,
                    title: "" + offer.title,
                    category:
                      "" + msData.categories && msData.categories.length
                        ? msData.categories[0]
                        : "",
                    creativeId: "" + msData.creativeId,
                    merchantId: "" + msData.merchantId,
                    merchantName: "" + msData.merchantName,
                    displayName: "" + displayName,
                    offerId: "" + msData.offerId,
                    offerType: "" + msData.offerType,
                    offerStart: "" + msData.offerStart,
                    offerEnd: "" + msData.offerEnd,
                    creativeImg: "" + msData.imageUrl,
                    campaignMnenomic: "" + msData.campaignMnemonic,
                    ecommerce: {
                      promoView: {
                        promotions: [
                          {
                            id: msData.offerId,
                            name: displayName,
                            creative: msData.imageUrl,
                            position: offer.title,
                          },
                        ],
                      },
                    },
                  };
                $specialOffersCallout.replaceWith(
                  templates.special_offers_callout(offerData)
                ),
                  dataLayer.push(dataLayerPush);
                var dataLayerPushClick = {
                  event: "salesForceClick",
                  area: "" + offer.title,
                  title: "" + offer.title,
                  category:
                    "" + msData.categories && msData.categories.length
                      ? msData.categories[0]
                      : "",
                  creativeId: "" + msData.creativeId,
                  merchantId: "" + msData.merchantId,
                  merchantName: "" + msData.merchantName,
                  displayName: "" + displayName,
                  offerId: "" + msData.offerId,
                  offerType: "" + msData.offerType,
                  offerStart: "" + msData.offerStart,
                  offerEnd: "" + msData.offerEnd,
                  creativeImg: "" + msData.imageUrl,
                  campaignMnenomic: "" + msData.campaignMnemonic,
                  ecommerce: {
                    promoClick: {
                      promotions: [
                        {
                          id: msData.offerId,
                          name: displayName,
                          creative: msData.imageUrl,
                          position: offer.title,
                        },
                      ],
                    },
                  },
                };
                $(".special-offers-callout").on("click", function () {
                  dataLayer.push(dataLayerPushClick);
                });
              }
            } catch (e) {
              $specialOffersCallout.replaceWith(
                templates.special_offers_callout(defaultOfferData)
              );
            }
          },
          error: function () {
            $specialOffersCallout.replaceWith(
              templates.special_offers_callout(defaultOfferData)
            );
          },
          timeout: 2e3,
        });
      } else
        $specialOffersCallout.replaceWith(
          templates.special_offers_callout(defaultOfferData)
        );
    } else
      getGaCount < 4
        ? (getGaCount++,
          setTimeout(function () {
            buildSpecialOffersCallout(affinityID);
          }, 150))
        : $specialOffersCallout.replaceWith(
            templates.special_offers_callout(defaultOfferData)
          );
  }
  function buildArticleCallouts(data, affinityID) {
    var articleFeedData = data.content[affinityID],
      articleFeedBase = articleFeedData.base_url,
      articleFeedParams = [];
    for (var key in articleFeedData.params)
      articleFeedData.params.hasOwnProperty(key) &&
        articleFeedParams.push(
          key + "=" + articleFeedData.params[key].join(",")
        );
    articleFeedBase &&
      $.ajax({
        url: articleFeedParams.length
          ? articleFeedBase + "?" + articleFeedParams.join("&")
          : articleFeedBase,
        crossDomain: !0,
        dataType: "json",
        type: "GET",
      }).done(function (data, status) {
        if ("success" === status && data) {
          $(".discover-and-learn-section .grid-wpr").replaceWith(
            templates.articles({ items: data })
          );
          for (
            var numItems = Math.min(data.length, 3),
              d = new Date(),
              month = pad(d.getMonth() + 1),
              date = pad(d.getDate()),
              i = 0;
            i < numItems;
            i++
          ) {
            var post = data[i],
              id = "db" + (i + 1) + "-" + post.slug,
              dl = { event: "impression", promoLib: {} };
            (dl.promoLib[id] = {
              id: "00000",
              name: "ENT_DNL_ALL_" + date + "_" + month + "_RBC",
              creative: post.title.raw,
              position: "rb-homepage-bottombanner" + (i + 1),
              adType: "pi",
            }),
              dataLayer.push(dl);
          }
          "undefined" != typeof bgimage && bgimage.init && bgimage.init();
        }
      });
  }
  function getQueryString(url) {
    for (
      var qsObj = {},
        qsArr = (url || window.location.href).split(/[\?&]/),
        i = 1;
      i < qsArr.length;
      i++
    ) {
      var param = qsArr[i].split("=");
      qsObj[param[0]] = param[1] || "";
    }
    return Object.keys(qsObj).length ? qsObj : null;
  }
  function getQueryStringParam(field, url) {
    var qsObj = queryString !== undefined ? queryString : getQueryString(url);
    return qsObj && qsObj.hasOwnProperty(field) ? qsObj[field] : null;
  }
  function setCookie(a, b, c) {
    var d = new Date();
    d.setDate(d.getDate() + c);
    var e = escape(b) + (null == c ? "" : "; expires=" + d.toUTCString());
    document.cookie =
      a +
      "=" +
      e +
      ";path=/;domain=" +
      window.location.hostname.replace(/^www\./, "");
  }
  function getCookie(a) {
    var b,
      c,
      d,
      e = document.cookie.split(";");
    for (b = 0; b < e.length; b++)
      if (
        ((c = e[b].substr(0, e[b].indexOf("="))),
        (d = e[b].substr(e[b].indexOf("=") + 1)),
        (c = c.replace(/^\s+|\s+$/g, "")) == a)
      )
        return unescape(d);
  }
  function dvlFixes() {
    "undefined" != typeof DVL &&
      (DVL.device &&
        (DVL.device.os("ios") ||
          DVL.device.browser("safari") ||
          (DVL.device.os("android") &&
            (DVL.device.browser("samsungBrowser") ||
              (DVL.device.browser("chrome") &&
                parseInt(bowser.osversion) < 5 &&
                -1 !== window.navigator.userAgent.indexOf("SAMSUNG"))))) &&
        $(
          ".grid-half,.grid-three-fourths,.grid-two-thirds,.grid-one-fourth,.grid-one-third"
        ).each(function (i, el) {
          var $el = $(el),
            $calloutChildren = $el.children(".callout");
          $calloutChildren.length > 0 &&
            ($calloutChildren.css("height", "auto"), $el.addClass("flex"));
        }),
      $('[name="header-region"],[name="sidebar-region"]').trigger("change"));
  }
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }
  function getFileName(url) {
    return (
      (url = url.substring(
        0,
        -1 == url.indexOf("#") ? url.length : url.indexOf("#")
      )),
      (url = url.substring(
        0,
        -1 == url.indexOf("?") ? url.length : url.indexOf("?")
      )),
      (url = url.substring(url.lastIndexOf("index.html") + 1, url.length)),
      (url = url.substring(0, url.indexOf(".")))
    );
  }
  var $window = $(window),
    $body = ($(document), $(document.body)),
    queryString = getQueryString(),
    forceAffinity = getQueryStringParam("aff"),
    isOnProduction =
      (getQueryStringParam("ban"),
      getQueryStringParam("off"),
      "www.rbcroyalbank.com" === window.location.hostname),
    getGaCount = 0;
  $(function () {
    $("#events-close").click(function () {
      $(".events-message").slideUp(), s;
    }),
      $("header")
        .on(
          "mousedown touchstart pointerdown mspointerdown",
          ":focusable",
          function () {
            $(this).addClass("mousedown");
          }
        )
        .on("keyup", ".mousedown", function (e) {
          9 === e.which && $(this).removeClass("mousedown");
        })
        .on("blur", ".mousedown", function (e) {
          $(this).removeClass("mousedown");
        }),
      $window.on("load", function () {
        $(".ga-trigger-onload").each(function (i, el) {
          var $el = $(el);
          $body.trigger("ga-event", {
            eventCategory: $el.attr("ga-event-category"),
            eventAction: $el.attr("ga-event-action"),
            eventLabel: $el.attr("ga-event-label"),
            nonInteraction: !0,
          });
        }),
          dvlFixes();
      }),
      "undefined" != typeof dynamicContent &&
        "undefined" != typeof templates &&
        ($.ajax({
          url: isOnProduction
            ? "https://recs.rbcroyalbank.com/a/v2/1068860/homepage_bannerlinks/recommend.json"
            : "https://recs.sterbcroyalbank.com/a/v2/1069320/bannerpage/recommend.json",
          crossDomain: !0,
          dataType: "jsonp",
          type: "GET",
          timeout: 1e4,
        }).always(ajaxReorderLinks),
        $.ajax({
          url: isOnProduction
            ? "https://recs.rbcroyalbank.com/a/v2/1068860/homepage_bannerhero/recommend.json"
            : "https://recs.sterbcroyalbank.com/a/v2/1069320/bannerhero/recommend.json",
          crossDomain: !0,
          dataType: "jsonp",
          type: "GET",
          timeout: 1e4,
        }).always(ajaxBuildDynamicContent)),
      $(
        '#menu-list [href="http://www.rbcroyalbank.com/products/deposits/index.html"]'
      ).attr("id", "mobile-menu-accounts"),
      $(
        '#menu-list [href="http://www.rbcroyalbank.com/credit-cards/index.html"]'
      ).attr("id", "mobile-menu-credit-cards"),
      $(
        '#menu-list [href="http://www.rbcroyalbank.com/mortgages/index.html"]'
      ).attr("id", "mobile-menu-mortgages"),
      $(
        '#menu-list [href="http://www.rbcroyalbank.com/personal-loans/index.html"]'
      ).attr("id", "mobile-menu-loans"),
      $(
        '#menu-list [href="http://www.rbcroyalbank.com/investing/index.html"]'
      ).attr("id", "mobile-menu-investments"),
      $(
        '#menu-list [href="https://www.rbcroyalbank.com/ways-to-bank/index.html"]'
      ).attr("id", "mobile-menu-ways-to-bank"),
      $(
        '#menu-list [href="http://www.rbcroyalbank.com/business-select.html"]'
      ).attr("id", "mobile-menu-business"),
      $('#menu-list [href="http://www.rbc.com/canada.html"]').attr(
        "id",
        "mobile-menu-about-rbc"
      );
  }),
    (window.setCookie = setCookie),
    (window.getCookie = getCookie),
    setTimeout(function () {
      $("#help-accordion")
        .find(".collapse-content")
        .each(function () {
          $(this).off();
        });
    }, 500);
})(jQuery, window, document);
