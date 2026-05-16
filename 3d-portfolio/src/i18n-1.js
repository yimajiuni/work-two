import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import {
  meta,
  shopify,
  starbucks,
  tesla,
  eqbo,
  eqch,
  eqcu,
  eqgr1,
  eqgr2,
  eqgr3,
  eqgr4,
  eqhe,
  eqwh,
  app1,
  app2,
  app3,
  app4,
  app5,
  web1,
  web2,
  web3,
  web4,
  web5,
  web6,
  webjt1,
  webjt2,
  dtp1,
  webmock1,
  webmock2,
  webmock3,
  webmock4,
  webmock5,
} from "./assets/images";

import {
  css,
  git,
  github,
  html,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  tailwindcss,
  react,
  sass,
  car,
  estate,
  express,
  linkedin,
  pricewise,
  contact,
  redux,
  snapgram,
  summiz,
  motion,
  mui,
  threads,
  typescript,
  figma,
  illustrator,
  photoshop,
  bootstrap,
  jquery,
  vue,
  procreate,
  fiverr,
  instagram,
  soundcloud,
  n8n,
} from "./assets/icons";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "jp",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "Welcome back",
          CTA: {
            line1: `Have a project in mind?
            Let's build something together!`,
          },
          Contact: {
            line1: "Get in Touch.",
            line2: "Your Name",
            line3: "Your E-mail",
            line4: "Your Message",
          },
          homeInfo: {
            line1: "Hi, I'm",
            line2: "A Frontend Engineer and Graphic Designer from japan",
            line3: "",
            line4:
              "Worked with many companies  and picked up many skills along the way",
            more: "Learn more",
            line5: ` Led multiple projects to success over the years. Curious about the impact?`,
            visit: "Visit Portfolio",
            line6: ` Need a project done or looking for a dev?
             I'm just a few keystrokes away`,
            contact: "Let's Talk",
          },
          aboutDesc: {
            line1: `A designer and developer based in Japan Specialized in technology and designs through the experience working at mainly in advertising agency and the design planning departments of manufacturer and retailer
             as a graphic designer for packaging, sales promotion advertisements, and Web designer for ECommerse in the apparel sector and hands-on learning and building apps.
            I've worked with all sorts of companies, leveling up my skills and teaming up with all sort of people.
            `,
            line2: `Currently, I am accepting from E-commerce website development to illustrations and designs. Please feel free to contact me. 
            I am available for both Japanese and English communication. here' the rundown. `,
          },
          skillTooltip: {
            flow: "Flow",
            experience: "Experience",
            years: "years"
          },
          experiences: [
            {
              title: "Graphic Designer/Illustrator",
              company_name: "Business Partners",
              icon: starbucks,
              iconBg: "#accbe1",
              date: "April 2009 - Aug 2014",
              points: [
                `Web production management for amusement companies, event posters, inserts, POP and store, and design of event posters, inserts, POPs, store signs, panels, packaging, job postings, newspaper articles, free newspapers, and proofreading.
                design, and proofreading of text. Designing portraits for clients, layouts and designs of seating cards, catalogs, guides, and notepads for art exhibitions, etc.
                layout, design, etc. for art exhibitions. Other clients include furniture trading companies, construction and renovation companies.
                Participating in code reviews and providing constructive feedback to other developers.
                Other work includes cutting and other processing, enclosure, shipping arrangements, and all other related work. Printing of data created by outside designers.
                large Printing of data created by outside designers, and printing operations using large commercial printers.`,
              ],
            },
            {
              title: "Graphic Designer/Apparel Assistant Designer",
              company_name: "Alpen",
              icon: tesla,
              iconBg: "#fbc3bc",
              date: "Aug 2014 - Oct -2017",
              points: [
                `Input apparel sewing specifications and other fabric orders, revise design drawings, create new packaging, Designing, adding colors, and revising sportswear patterns, editing and proofreading instruction manuals, etc.
                Creation of comparison charts with other companies' products and planning presentation materials in support of merchandisers.
                also I was in charge of designing sportswear patterns, adding colors, revising, editing and proofreading instruction manuals. 
                yoga wear and sports casual products (athleisure fashion) that remove the boundary between daily life and sports.`,
              ],
            },
            {
              title: "Graphic Designer for Product Promotion",
              company_name: "W Cosmetics",
              icon: shopify,
              iconBg: "#b7e4c7",
              date: "Feb 2018 - Feb 2019",
              points: [
                `Wholesale cosmetics company based in Brisbane, Australia, where I was in charge of product planning for beauty cosmetics, production of sales promotion tools, and printing operators.
                Graphic designer of sales promotion tools such as POP and banners, printing, and localization of product descriptions, catch copy, and instruction manuals for packaging.
                Localization of product descriptions, catch copy, and instruction manuals. Software used includes Adobe photoshop and Illustrator.
                Design and production from a feminine and realistic point of view while focusing on functionality and cost.`,
              ],
            },
            {
              title: "ECommerce developer & Designer",
              company_name: "Nextel to Self-employed",
              icon: meta,
              iconBg: "#a2d2ff",
              date: "June 2020 - Present",
              points: [
                `As an ecommerce developer and web designer, I was responsible for updating online stores using CMS such as Rakuten Ichiba, Shopify and Wix, designing promotional pages for sales and campaigns, 
                creating and distributing email newsletters, and creating the company's official e-commerce website using HTML/CSS/Javascript. Then in 2022, I later expanded my programming knowledge and mastered languages ​​such as Vue, React, and Next.js.
                In 2024, I went independent and started "Imajiyuni", in which is the service specialized in e-commerce development and renovations and graphic design for apparel companies.
                The business is now focused on robust, cutting-edge programming languages ​to provide website development, branding services, and product proposal services.`,
              ],
            },
          ],
          projectDesc: {
            line1: `  I've embarked on numerous projects throughout the years, but these are
            the ones i hold closest to my heart. feel free to explore my github and
            i hope it contributes to further your ideas. And your collaborations are
            highly valued
            `,
            line2: "!",
          },
          //web
          projects: [
            {
              id: 1,
              preview: web1,
              theme: "btn-back-red",
              name: "NEXT.JS E-COMMERCE APPAREL WEBSITE",
              description:
                "A website that achieves high-speed processing with Shopify payment system, backend, and Next.js hybrid rendering.",
              persona:
                "Target audience: A wide range of ages who are socially conscious and have high purchasing desire for valuable items.",
              duration: "1.5 months",
              responsibility:
                "Areas of work: Functional design, UX/UI design, coding, debugging, deployment",
              link: "https://next-ecom-shopify.yimajiuni.com/",
            },
            {
              id: 2,
              preview: web2,
              theme: "btn-back-red",
              name: "E-Commerce Website",
              description:
                "Developed a e-commerce website with purchasing system.",
              persona:
                "Persona:A wide range of people of all ages and ethnicities who are healthy and have high desires to buy fast fashion.",
              duration: "Production Period: 2 weeks(45h)",
              responsibility:
                "Areas of work: Functional design, UX/UI design, coding, debugging, deployment",
              link: "https://se-commerce.yimajiuni.com/",
            },
            {
              id: 3,
              preview: web3,
              theme: "btn-back-green",
              name: "Dashboard App",
              description: "Created a mobile first Dashboard model.",
              duration: "Production Period:4 days (16h)",
              responsibility:
                "Areas of work: Functional design, UX/UI design, coding, debugging, deployment",
              persona:
                "Persona: Store managers and staff in charge of sales and inventory control of houseplants",
              link: "https://dashboard-model.yimajiuni.com/",
            },
            {
              id: 4,
              preview: web4,
              theme: "btn-back-blue",
              name: "Travel App",
              description: `Designed and built a mobile app for finding traveling packages.
                Production Period:: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://travel-web.yimajiuni.com/",
            },
            {
              id: 5,
              preview: web5,
              theme: "btn-back-pink",
              name: "Restaurant Website",
              description: `Built a fully responsive restaurant Website.
                Production Period: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://restau-web.yimajiuni.com/",
            },
            {
              id: 6,
              preview: web6,
              theme: "btn-back-pink",
              name: "LP for general constructing company",
              description: `Built a fully responsive restaurant Website.
                Production Period: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://genecon-lp.yimajiuni.com/",
            },
            {
              id: 7,
              preview: webjt1,
              theme: "btn-back-pink",
              name: "Sales LP for horseriding products1",
              description: `Built a fully responsive restaurant Website.
                Production Period: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://yimajiuni.com/jt-lp-coupon/",
            },
            {
              id: 8,
              preview: webjt2,
              theme: "btn-back-pink",
              name: "Campaign LP for horseriding products2",
              description: `Built a fully responsive restaurant Website.
                Production Period: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://yimajiuni.com/jt-lp-slider/",
            },
          ],
          designDesc: {
            line1: `日本を拠点とするソフトウェア開発者。実践的な学習とアプリの構築を通して、技術とデザインに特化しています。
            `,
            line2: `あらゆる種類の会社と仕事をし、自分のスキルを高め、あらゆる種類の人々とチームを組んできました。
            `,
          },
          //banner
          promoDesigns: [
            {
              id: 9,
              preview: eqbo,
              name: "Ad for rain boots",
              description:
                "The sales promotion,which is with a polaroid-like style design and inspired by the background of SNS culture that is to be used by young people and a wide range of other generations.",
              link: "https://yimajiuni.com/promotions/eq-bo.webp",
            },
            {
              id: 10,
              preview: eqch,
              name: "Ad for horse riding chaps",
              description:
                "Sophisticated, easy-to-read promotion inspired by fashion magazines. Add cuts of model images as needed.",
              link: "https://yimajiuni.com/promotions/eq-ch.webp",
            },
            {
              id: 11,
              preview: eqcu,
              name: "Ad for riding culottes",
              description:
                "Showcase price, catch copy, product images and effectively organize description and functionality display to express overall brand color and promote sales targeting a wide range of ages for the domestic market.",
              link: "https://yimajiuni.com/promotions/eq-cu.webp",
            },
            {
              id: 12,
              preview: eqgr1,
              name: "Ad for riding gloves 1",
              description:
                "Promotion of riding gloves with special fabric for winter moisture retention and warmth.",
              link: "https://yimajiuni.com/promotions/eq-gr1.webp",
            },
            {
              id: 13,
              preview: eqgr2,
              name: "Ad for horse riding leather gloves",
              description:
                "Promotion of well-fitting synthetic leather gloves for riding. Design to match the product emphasizing sportiness and functional aspects.",
              link: "https://yimajiuni.com/promotions/eq-gr2.webp",
            },
            {
              id: 14,
              preview: eqgr3,
              name: "Ad for horseriding accessories",
              description:
                "Promotion that expresses friendliness and elegance, targeting all generations.",
              link: "https://yimajiuni.com/promotions/eq-gr3.webp",
            },
            {
              id: 15,
              preview: eqgr4,
              name: "Ad for horse riding gloves 3",
              description:
                "Promotion of silicone grip glove with cost-effective with sophisticated visual.",
              link: "https://yimajiuni.com/promotions/eq-gr4.webp",
            },
            {
              id: 16,
              preview: eqhe,
              name: "Ad of horse riding helmets",
              description:
                "Easy to read and sophisticated promotion inspired by magazines",
              link: "https://yimajiuni.com/promotions/eq-he.webp",
            },
            {
              id: 17,
              preview: eqwh,
              name: "Ad for a horse riding whip",
              description:
                "Sales promotion with expressions that accentuate 'harmony' and 'monogram' to match the distinctive product Functional display is easy to read and aethethically appealing.",
              link: "https://yimajiuni.com/promotions/eq-wh.webp",
            },
          ],

          //app
          appDesigns: [
            {
              id: 18,
              preview: app1,
              theme: "btn-back-pink",
              name: "EC App UX Design",
              description:
                "UX of shopping application from adding favorites and cart to purchase was designed by Figma.",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=233-88&t=TGbd5tplvGsffkfO-1&starting-point-node-id=236%3A233",
            },
            {
              id: 19,
              preview: app2,
              theme: "btn-back-blue",
              name: "Fitness App UX Design",
              description:
                "Designed an app with an attractive slider for each training menu UX on the login screen by Figma.",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=328-136&t=AMryIaIjpqI2Y7cZ-1&starting-point-node-id=327%3A190",
            },
            {
              id: 20,
              preview: app3,
              theme: "btn-back-red",
              name: "Banking App UX Design",
              description:
                "Mobile Banking App designed with monthly expense comparison graph of deposits, an investment section and purchase history feature.",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=298-558&t=8uCbvN2drsBtXyv6-1&starting-point-node-id=299%3A681",
            },
            {
              id: 21,
              preview: app4,
              theme: "btn-back-red",
              name: "CSS Scaler App Development",
              description:
                "CSS Scaling and Unit Conversion App",
              link: "https://css-scaler.yimajiuni.com/",
            },
            {
              id: 21,
              preview: app5,
              theme: "btn-back-red",
              name: "Blog App Development",
              description:
                "Blog App designed with a blog post list and a blog post detail page.",
              link: "https://blog-app.yimajiuni.com/",
            },
          ],
          //dtp
          dtpDesigns: [
            {
              id: 23,
              preview: dtp1,
              theme: "btn-back-pink",
              name: "DTP and Packages 2017",
              description:
                "desktop publishing data for paper based Advertisements such as flyers and POPs, and packages for products.",
              link: "https://yimajiuni.com/dtp/portfolio-yuko.pdf",
            },
          ],
          // Service page translations
          service: {
            section1: {
              title: "Bespoke",
              title2: "Ecommerce websites",
              titleHighlight: "with Next.js & Shopify",
              yimajiuni: "Introducing Yimajiuni",
              description: "Builds and polishes on Powerful architecture that achieves 30%+ sales increase through branding and high-speed processing. The functional things that are made of dazzling and twinkle things. To make the actions of 'buying' as enjoyable as possible.",
              cta: "Book a video consultation"
            },
            section2: {
              title: "For attractive products, a website with sophisticated experience and convenience is crucial.",
              titleHighlight: "In other words, high-speed and dynamic EC sites are optimal.",
              description: "Experience the power of modern e-commerce with our Next.js x Shopify solution. Built for performance, scalability, and user experience, this platform delivers exceptional results for businesses of all sizes.",
              features: {
                title: "Key Features",
                items: [
                  "Lightning-fast performance with Next.js",
                  "Seamless Shopify integration",
                  "Mobile-first responsive design",
                  "Advanced SEO optimization",
                  "Custom branding and design"
                ]
              },
              demo: {
                title: "Live Demo",
                description: "Next.js x Shopify solution in One stop action",
                button: "Visit Live Demo"
              },
              lcp: {
                imageAlt: "Illustration highlighting LCP (Largest Contentful Paint) optimization for the storefront hero",
                description:
                  "Is your website too slow? LCP core improvement pack From $500 / 10h scope.",
                description2: "Optimize the main content to reduce user abandonment and improve CVR.",
                button: "Order Service",
                modal: {
                  title: "Shopify LCP improvement package — $500 (limited scope)",
                  copy: "Is your Shopify store losing customers to 32 seconds of loading 'silence'?",
                  close: "Close",
                  closeAria: "Close dialog",
                  labels: {
                    price: "Price",
                    scope: "Scope",
                    milestones: "Milestones",
                    content: "Details"
                  },
                  price: "Shopify LCP speed optimization package $500 / 10 hours fixed · no add-on fees",
                  scope: "LCP / FCP / TBT metric improvements (typically ~20–50% reduction).",
                  milestones: `1. Precision audit (1.5h) — pinpoint bottlenecks and assess risk.
2. Core fixes (4.0h) — optimize the LCP image and highest-priority loading path.
3. JS detox (3.0h) — defer non-critical app JavaScript where it helps.
4. Font optimization (1.0h).
5. Results pack (0.5h) — before/after metrics plus a practical ops guide.`,
                  content: `We dramatically improve LCP on one specific product detail page (PDP).
◇ Not ideal if you need someone to own every task across the entire storefront.
◇ If the structure makes improvement impossible, we’ll say so during diagnostics — we won’t bill you for wasted work.
◇ Your business health comes first.
◇ If PageSpeed Insights is deep in the red, think investment — not a quick repair bill.
◇ The fastest path to real gains is a short, expert-led sprint.
◇ For a store doing ~$30,000/mo, a CVR lift from speed alone can mean on the order of +$4,000 the next month.
◇ Positioned as an investment to grow revenue — not just a cost line item.`,
                  thumbs: {
                    left: {
                      label: "BEFORE",
                      linkLabel: "GO TO BEFORE →",
                      alt: "Next.js and Shopify headless demo site thumbnail",
                      url: "https://lcp-improv-before.vercel.app/products/boho-mandala-art-v2"
                    },
                    right: {
                      label: "AFTER",
                      linkLabel: "GO TO AFTER →",
                      alt: "Secondary portfolio thumbnail",
                      url: "https://lcp-improv-after.vercel.app/products/boho-mandala-art-v2"
                    }
                  },
                  comparison: {
                    altBefore: "Storefront before LCP optimization",
                    altAfter: "Same page after LCP optimization",
                    tooltipBeforeHeadline: "Before — Score: 8 / LCP: 32.2s",
                    tooltipBeforeBody:
                      "On 4G or older phones, many users leave before the screen finishes loading.",
                    tooltipAfterHeadline: "After — Score: 99 / LCP: 2.0s",
                    tooltipAfterBody:
                      "UX that doesn't keep people waiting. Stronger SEO signals, less wasted ad spend (CPC), and higher CVR."
                  },
                  orderVia: "Order via",
                  marketplaces: {
                    upwork: {
                      label: "Upwork",
                      url: "https://www.upwork.com/freelancers/~01d8f678ad12f64aa5?viewMode=1",
                      ariaLabel: "Upwork — open freelancer profile"
                    },
                    contra: {
                      label: "Contra",
                      url: "https://contra.com/yuko_imai_ojbjl5ud/services?r=yuko_imai_ojbjl5ud",
                      ariaLabel: "Contra — open profile"
                    },
                    malt: {
                      label: "malt",
                      url: "https://www.malt.com/profile/yukoimai1?overview",
                      ariaLabel: "malt — open profile"
                    }
                  }
                }
              }
            },
            section3: {
              title: "Headless Commerce x Branding",
              description: "Next.js x Shopify x Branding achieves 30%+ sales increase through high-speed loading. Maximize your attractive products' EC business opportunities.",
              technologies: {
                nextjs: {
                  title: "Next.js Technology",
                  description: "Server-side rendering, static generation, and optimized performance for lightning-fast user experiences."
                },
                shopify: {
                  title: "Shopify Integration",
                  description: "Seamless e-commerce functionality with powerful inventory management and payment processing."
                },
                branding: {
                  title: "Branding power",
                  description: "Our dedicated listening Provides you the branding that shapes project-specific purposes and sentiments that resonates with the audience."
                }
              },
              performance: {
                title: "Next.js EC Site Performance Metrics",
                subtitle: "(middle size project)",
                labels: {
                  imageSpeed: "Image Loading Speed",
                  conversionRate: "Conversion Rate",
                  mobileBounce: "Mobile Bounce Rate",

                  organicTraffic: "Organic Traffic",
                  operationHours: "Operation & SEO Work Hours",
                  serverCost: "Server Cost (Monthly)",
                },
                metrics: [
                  "Improved from 1.2s to 0.5s",
                  "Improved from 1.9% to 3.2%",
                  "Improved from 65% to 45%",

                  "From  rank 22 to rank 7",
                  "From 25 to 10",
                  "From $4,500 to $2,800",
                ],
                button: "View the Detail"
              },
              performanceReport: {
                title: "Next.js EC Site Performance Report",
                content: {
                  section1: {
                    title: "The Future standards of E-commerce, Now in Your Hands",
                    description: "This service builds e-commerce sites using a 'headless commerce' approach that integrates Next.js, the cutting-edge web development framework, with Shopify, a reliable e-commerce platform. This fundamentally solves the challenges of display speed and design constraints that traditional e-commerce sites face, providing users (site visitors) with the best purchasing experience and creating digital stores that directly contribute to increased sales."
                  },
                  section2: {
                    title: "Fast, Beautiful, Profitable",
                    description: "The greatest advantages of the e-commerce sites provided by this service can be summarized in three key points:",
                    benefits: {
                      speed: {
                        title: "Exceptional Display Speed",
                        description: "Pages load instantly, so customers never have to wait. Site acceleration dramatically reduces bounce rates and directly contributes to increased sales."
                      },
                      design: {
                        title: "Completely Custom Design",
                        description: "You can fully express your brand's worldview. Without being constrained by template limitations, you can realize your ideal online store."
                      },
                      stability: {
                        title: "Stable Store Operations",
                        description: "The backend of your e-commerce site (inventory management and payment systems) is handled by the trusted Shopify platform used worldwide, allowing you to focus on your business with peace of mind."
                      }
                    }
                  },
                  section3: {
                    title: "Revolutionary Performance of High-speed Framework",
                    description: "Next.js's unique ISR (Incremental Static Regeneration) combines the speed of static generation with the flexibility of dynamic updates. By selecting the optimal rendering method for each page of your e-commerce site, we can reduce the burden of building all pages at once. The improved dynamic experience and performance of your website directly contribute to increased sales.",
                    benefits: {
                      isr: {
                        title: "ISR (Incremental Static Regeneration)",
                        description: "Next.js's unique ISR (Incremental Static Regeneration) combines the speed of static generation with the flexibility of dynamic updates. By selecting the optimal rendering method for each page of your e-commerce site, we can reduce the burden of building all pages at once. The improved dynamic experience and performance of your website directly contribute to increased sales."
                      },
                      conversion: {
                        title: "Improved Conversion Rates",
                        description: "Improved display speed prevents user abandonment and directly leads to improved conversion rates."
                      },
                      performance: {
                        title: "Highest Level Performance Scores",
                        description: "Achieve high scores on Google's evaluation tools. This is comfortable for users and advantageous for SEO."
                      },
                      ssg: {
                        title: "Enourmous Display Speed Creates Truly Joyful Purchase Experiences for the Customers",
                        description: "The core strength of sites built with this service is 'overwhelming display speed'. This speed is achieved through Next.js's unique technology that pre-creates website pages, enabling extremely fast responses. This provides comfortable shopping experiences and prevents site abandonment."
                      }
                    }
                  },
                  section4: {
                    title: "Are You Facing These Challenges?",
                    problems: [
                      "Page loading speed is slow, especially with high bounce rates on mobile",
                      "With many products, SSR for all pages causes soaring server costs",
                      "Low SEO performance and struggling organic traffic growth",
                      "Delayed inventory display causes frequent 'out of stock' cases after orders",
                      "Feeling limited by existing platform designs and unable to fully express your brand image"
                    ]
                  },
                  section5: {
                    title: "Real Example: Achieving 30% Sales Increase with the Technology",
                    case1: "SEO improvements from page speed enhancements led to higher search rankings for many keywords, resulting in 140% increase in organic traffic.",
                    case2: "Global companies like sports brand 'Nike' and cosmetics brand 'Lancôme' have also migrated to headless commerce seeking flexibility and high performance.",
                    return: "A return of approximately 15 times the investment amount is achievable within one year. Initial investment can be recovered in less than 3 months. Once implemented, you can continuously benefit from the effects. The dual effect of reduced server costs and increased sales leads to long-term profit improvement.",
                    comparison: "Traditional e-commerce sites have the challenge of being difficult to modify because design (frontend) and systems (backend) are integrated, meaning even small design changes affect the entire system, making modifications difficult and costly.",
                    table: {
                      title: "Performance Comparison Table",
                      headers: {
                        metric: "Metric",
                        traditional: "Traditional",
                        nextjs: "Next.js + Shopify",
                        improvement: "Improvement"
                      },
                      metrics: {
                        loadingSpeed: {
                          label: "Loading Speed",
                          traditional: "3-5sec",
                          nextjs: "0.5-1sec",
                          improvement: "+80%"
                        },
                        conversionRate: {
                          label: "Conversion Rate",
                          traditional: "1.9%",
                          nextjs: "3.2%",
                          improvement: "+68%"
                        },
                        mobileBounce: {
                          label: "Mobile Bounce Rate",
                          traditional: "65%",
                          nextjs: "45%",
                          improvement: "-31%"
                        },
                        seoRanking: {
                          label: "SEO Ranking",
                          traditional: "22rd",
                          nextjs: "7rd",
                          improvement: "+15rd"
                        },
                        serverCost: {
                          label: "Server Cost",
                          traditional: "$4,500/month",
                          nextjs: "$2,000/month",
                          improvement: "50%"
                        }
                      }
                    }
                  },
                  section6: {
                    title: "Checklist",
                    description: "If even one of the following checklist items applies to you, our service might be the solution.",
                    items: [
                      "Homepage takes more than 3 seconds to display",
                      "When viewed on smartphones, there are display issues or difficult-to-use parts",
                      "You've had to give up on desired expressions due to design template constraints",
                      "You struggle with site update work for every sale or campaign",
                      "SEO rankings don't improve easily, and you feel challenged with customer acquisition",
                      "You're considering future product sales through apps or new devices",
                      "How frequently do you update product information and campaigns?",
                      "Is traffic from search engines important?",
                      "Does content differ for each user?",
                      "Is real-time performance required?",
                      "How much interaction is there?",
                      "Do you need to handle high traffic?"
                    ]
                  },
                  section7: {
                    title: "The 'Freedom' Realized by Headless Commerce",
                    description1: "This service adopts an architecture called 'headless commerce'. This is a concept that separates the 'frontend (= head)' that customers interact with from the 'backend (product management and payment systems)' that runs behind the scenes.",
                    description2: "What are the benefits of this separation?",
                    benefits: {
                      design: {
                        title: "Complete Design Freedom",
                        description: "You can freely design and develop the frontend without being affected by Shopify's backend functionality. This makes it possible to create unique customer experiences that belong exclusively to your brand, unlike anywhere else."
                      },
                      marketing: {
                        title: "Rapid Marketing Initiatives",
                        description: "You can quickly and flexibly perform frontend modifications such as urgent campaigns or adding new content. Since you don't need to worry about backend constraints, you can respond quickly to market trends."
                      }
                    }
                  },
                  section8: {
                    title: "Future-Oriented Technical Advantages",
                    description: "From a more technical perspective, adopting Next.js provides technical advantages essential for business growth.",
                    benefits: {
                      seo: {
                        title: "SEO Contribution",
                        description: "Next.js's strengths in SSG (Static Site Generation) and SSR (Server-Side Rendering) make it easier for search engines to understand site content, greatly contributing to improved SEO evaluation."
                      },
                      scalability: {
                        title: "Extensibility and Scalability",
                        description: "Because frontend and backend are independent, even if your business expands in the future and access increases rapidly, you can scale each independently. For example, expansion to future new devices like smartwatches or VR becomes easier."
                      },
                      efficiency: {
                        title: "Improved Development Efficiency",
                        description: "Next.js, based on React, is suitable for modern development methods and enables efficient, high-quality site construction."
                      }
                    }
                  },
                  section9: {
                    title: "Designing the Ultimate 'Purchase' Experience",
                    description: "Ultimately, profit comes from customers (end users) who visit your site. This service aims to maximize end users' purchasing motivation.",
                    benefits: {
                      stressfree: {
                        title: "Stress-Free Experience",
                        description: "Instantly loading pages and intuitive, easy-to-understand usability give users the satisfaction that 'this site is easy to use' and smooth the process to purchase."
                      },
                      immersion: {
                        title: "Brand Immersion",
                        description: "Design that pays attention to every detail, which templates cannot fully express, conveys your brand's worldview and captures customers' hearts. This creates motivation (fan engagement) for customers to want to 'buy from this brand', not just buy products."
                      },
                      trust: {
                        title: "Trust and Security",
                        description: "Professional and sophisticated sites give customers a sense of security and lower psychological barriers to entering personal information and payment details."
                      }
                    }
                  },
                  section10: {
                    title: "Don't Miss Purchase Opportunities for Attractive Products. E-commerce Sites That Lead to Long-term Sales",
                    description1: "Even though the design of website is exellent, many customers actually give up right before buying if the site is slow. ",
                    description2: "The sites we create are extremely 'fast', so you don't have to worry about that. Plus,The backend product management and payments are handled by Shopify, which has trust and proven its security.",
                    description3: "It achieves'the best appearance and speed' combined with 'world-standard secure systems'. This becomes a powerful weapon for your business."
                  },
                  footer: {
                    contactUs: "Contact Us @ info@yimajiuni.com",
                    askQuote: "Ask Quote",
                    close: "Close"
                  },
                }
              }
            },
            section4: {
              title: "Get Ready with Your Custom Quote",
              description: "To ensure a smooth video consultation, please answer a few questions, which will help us understand your needs such asrequirements, project size, preferences and provide you with a personalized and more accurate quote.",
              calculator: {
                title: "Quote Sheet Creator",
                button: "Start Creating"
              }
            },
            navigation: {
              main: "Main",
              product: "Product",
              services: "Services",
              quote: "Ask Quote"
            },
            decorative: {
              quoteLink: "Request Quote",
              contactLink: "Contact Us!"
            },
            qaForm: {
              title: "Project Quote Request",
              close: "×",
              progress: "Step {{current}} of {{total}}",
              progressPercent: "{{percent}}%",
              required: "*",
              previous: "Previous",
              next: "Next",
              submit: "Submit Request",
              submitting: "Submitting...",
              validation: {
                answerRequired: "Please answer: {{question}}",
                allQuestionsRequired: "Please answer all questions before submitting. Missing: {{question}}"
              },
              questions: {
                projectType: {
                  question: "What type of project do you need?",
                  options: {
                    ecommerce: "E-commerce Website",
                    corporate: "Corporate Website",
                    portfolio: "Portfolio/Blog",
                    landingpage: "Landing Page",
                    webapp: "Web Application",
                    other: "Other"
                  }
                },
                projectScale: {
                  question: "What is the scale of your project?",
                  options: {
                    small: "Small (1-5 pages)",
                    medium: "Medium (5-30 pages)",
                    large: "Large (30-50 pages)",
                    enterprise: "Enterprise Level"
                  }
                },
                budget: {
                  question: "What is your budget range?",
                  options: {
                    under1k: "Under $1,000",
                    "1k-5k": "$1,000 - $5,000",
                    "5k-10k": "$5,000 - $10,000",
                    "10k+": "$10,000+"
                  }
                },
                timeline: {
                  question: "What is your timeline?",
                  options: {
                    asap: "ASAP (1-2 weeks)",
                    "1months-3months": "1 month - 3 months",
                    "3months-6months": "3 months - 6 months",
                    flexible: "Flexible"
                  }
                },
                features: {
                  question: "What features do you need? (Select all that apply)",
                  options: {
                    responsive: "Responsive Design",
                    transformation: "Next.js Migration & Integration",
                    payment: "Ecom Payment Integration with Shopify, Wix, etc.",
                    cms: "Content Management System (CMS)",
                    seo: "SEO Optimization",
                    analytics: "Analytics & Tracking",
                    multilingual: "Multi-language Support",
                    googlemaps: "Google Maps Integration for E-commerce",
                    linechat: "LINE Account × AI Hybrid Shop Chat",
                    maintenance: "Image Registration, Page Updates, System Maintenance"
                  }
                },
                brandingDepth: {
                  question: "Does your project require detailed branding or prefer simple and basic?",
                  options: {
                    detailed: "Detailed Branding",
                    simple: "Simple & Basic"
                  }
                },
                brandVision: {
                  question: "What vision does your brand want to achieve?",
                  placeholder: "Describe the future world your brand envisions..."
                },
                brandMission: {
                  question: "What role should your brand play in achieving this vision?",
                  placeholder: "Describe the mission and purpose of your brand..."
                },
                targetAudience: {
                  question: "Who is your primary target audience?",
                  placeholder: "Describe your ideal customers, their demographics, lifestyle, and needs..."
                },
                websiteReferences: {
                  question: "Website References",
                  atmosphareQuestion: "If you have any websites you'd like to use as a reference for atmosphere/style, please share:",
                  functionQuestion: "If you have any websites you'd like to use as a reference for functionality, please share:",
                  placeholder: "Please enter the website URL(s)"
                },
                brandStory: {
                  question: "Brand Story & Audience Episodes",
                  placeholder: "Please share any episodes, stories, or experiences you want your essential audience to know (happy customer interactions, exclusive stories, failure stories that led to success, etc.)"
                },
                brandPersonality: {
                  question: "How should your brand be perceived by customers?",
                  options: {
                    professional: "Professional & Corporate",
                    friendly: "Friendly & Approachable",
                    luxury: "Luxury & Premium",
                    innovative: "Innovative & Cutting-edge",
                    trustworthy: "Trustworthy & Reliable"
                  }
                },
                designStyle: {
                  question: "What design style do you prefer?",
                  options: {
                    modern: "Modern & Contemporary",
                    minimalist: "Minimalist & Clean",
                    casual: "Casual & Relaxed",
                    elegant: "Elegant & Sophisticated",
                    professional: "Professional & Business-like"
                  }
                },
                colorScheme: {
                  question: "What color scheme do you prefer?",
                  options: {
                    blue: "Blue & Cool Tones",
                    green: "Green & Natural",
                    purple: "Purple & Creative",
                    neutral: "Neutral & Subtle",
                    warm: "Warm & Inviting"
                  }
                },
                targetDemographics: {
                  question: "Describe your target demographics",
                  placeholder: "Age groups, gender, lifestyle, occupation, etc..."
                },
                visualStyle: {
                  question: "What visual style or tone and manner do you want to depict for your project?",
                  instruction: "Please select the keywords from below that best represent your desired visual style:",
                  priorityOrder: "Priority Order (click to reorder)",
                  maxLimitReached: "Maximum of 5 visual styles can be selected. Please deselect one to add another.",
                  options: {
                    // Column 1
                    masculine: "Masculine",
                    fun: "Fun",
                    premium: "Premium",
                    linear: "Linear",
                    formal: "Formal",
                    intellectual: "Intellectual",
                    delicate: "Delicate",
                    monotone: "Monotone",

                    // Column 2
                    feminine: "Feminine",
                    interesting: "Interesting",
                    warm: "Warm",
                    curved: "Curved",
                    mystical: "Mystical",
                    premium2: "Premium",
                    chic: "Chic",
                    pop: "Pop",

                    // Column 3
                    childlike: "Childlike",
                    powerful: "Powerful",
                    decadence: "Decadence",
                    rhythmic: "Rhythmic",
                    trustworthy: "Trustworthy",
                    lively: "Lively",
                    stylish: "Stylish",
                    pastel: "Pastel",

                    // Column 4
                    cute: "Cute",
                    serious: "Serious",
                    business: "Business",
                    natural: "Natural",
                    traditional: "Traditional",
                    refreshing: "Refreshing",
                    metallic: "Metallic",
                    anime: "Anime",

                    // Column 5
                    goodlooking: "Goodlooking",
                    elegant: "Elegant",
                    homey: "Homey",
                    craft: "Craft",
                    modern: "Modern",
                    flashy: "Flashy",
                    complex: "Complex",
                    japanese: "Japanese",

                    // Column 6
                    friendly: "Friendly",
                    luxury: "Luxury",
                    bright: "Bright",
                    unique: "Unique",
                    futuristic: "Futuristic",
                    subdued: "Subdued",
                    simple: "Simple",
                    western: "Western",

                    // Column 7
                    gentle: "Gentle",
                    elegant2: "Elegant",
                    dark: "Dark",
                    casual: "Casual",
                    retro: "Retro",
                    cool: "Cool",
                    colorful: "Colorful",
                    androgynous: "Androgynous"
                  }
                },

                communicationPreference: {
                  question: "What is your preferred communication method?",
                  options: {
                    video: "Video consultation meeting",
                    email: "Email communication",
                    chat: "Chat application"
                  }
                },
                chatDetails: {
                  question: "Which chat application do you prefer?",
                  options: {
                    chatwork: "Chatwork",
                    slack: "Slack",
                    discord: "Discord",
                    other: "Other platform"
                  }
                },
                otherChatPlatform: {
                  question: "Please specify the other chat platform:",
                  placeholder: "Please specify the platform name..."
                },
                companyInfo: {
                  question: "Tell us about your hope and sentiment for your company/project",
                  placeholder: "Describe your business, goals, and any specific requirements..."
                },
                contactInfo: {
                  question: "Your contact information",
                  fields: {
                    name: "Full Name",
                    email: "Email",
                    phone: "Phone (optional)",
                    company: "Company (optional)"
                  }
                }
              },
              success: {
                title: "Thank You!",
                message: "Your project quote request has been submitted. We'll get back to you within 24 working hours!",
                otherChatMessage: "💬 We will contact you via the specified chat platform within 24 working hours.",
                refreshMessage: "💡To start quote again, please refresh the browser.",
                downloadPDF: "Download PDF",
                close: "Close"
              },
              pdf: {
                title: "Project Quote Request",
                generatedOn: "Generated on",
                filename: "project-quote-request"
              },
              labels: {
                contactInfo: "Contact Information",
                projectType: "Project Type",
                projectScale: "Project Scale",
                budget: "Budget",
                timeline: "Timeline",
                features: "Features",
                companyInfo: "Company Information"
              }
            }
          },
          // Work details translations
          workDatas: [
            {
              id: 1,
              titleBk: "NEXT.js Apparel",
              titleBl: "E-commerce Website",
              image: webmock1,
              medium: "website",
              period: "About 1.5 months",
              range: "Design, Coding, Implementation",
              skills: "Next.JS, Typescript, Tailwind",
              summary: "A site that enables fast processing through Shopify's payment system and Next.js hybrid rendering with backend integration.",
              concept_target: "Broad age range with high purchasing intent for socially conscious and valuable items",
              concept_needs: "Systematically incorporating Japanese traditional beauty and international atmosphere while maintaining consistency and beauty, ensuring universal and readable design through aligned layout unity.",
              concept_function: "Emphasizing important information and buttons for better visibility so users can comfortably browse and purchase products. Optimizing data retrieval from APIs. Focusing on processing speed optimization and UX-driven purchase experience improvement.",
              concept_eva: "Customized design based on purchasing keywords for generations where individual style, appearance, and global perspective connect directly with apparel and mindset, showing strong interest in current affairs.",
              persona: "Broad generations and ethnicities with high purchasing intent for healthy and fast fashion",
              persona_basic: "Gender: Female, Age: 20s and up",
              persona_preference: "#No waste #Simple and easy to use #Enjoy variety",
              persona_orientation: "Prefers fast-paced lifestyle, tends to save and focus investment on valuable items. Generally active.",
              wireframe: "Researching and optimizing existing e-commerce sites as models to ensure overall layout and intuitive usability, logical structural flow. Aiming for consistent and understandable specifications for important elements like user interaction, content hierarchy, and responsiveness. Added sliders and other dynamic parts, implemented responsive design to improve usability.",
              link: "https://next-shopify.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 2,
              titleBk: "E-commerce Apparel",
              titleBl: "Website",
              image: webmock2,
              medium: "website",
              period: "About 2 weeks",
              range: "Design, Coding, Implementation",
              skills: "React, Javascript, CSS",
              summary: "E-commerce site with eye-catching slider and shopping cart addition system built using React ContextAPI.",
              concept_target: "Broad age range with high purchasing intent for healthy and fast fashion",
              concept_needs: "Spacious impression and stylish, universally readable design with aligned layout for consistency and beauty, maintaining active impression and unified design for page consistency.",
              concept_function: "Emphasizing important information and buttons for better visibility so users can comfortably browse and purchase products. Optimizing data retrieval from APIs.",
              concept_eva: "Universal perspective on style, healthy beauty, lifestyle, global reach, customized design based on new generation purchasing keywords like SDGs.",
              persona: "Broad generations and ethnicities with high purchasing intent for healthy and fast fashion",
              persona_basic: "Gender: All + Age: Kids to Senior",
              persona_preference: "#No waste #Simple and easy to use #Enjoy variety",
              persona_orientation: "Prefers fast-paced lifestyle, consumption is enjoyment",
              wireframe: "Researched and optimized existing e-commerce sites as models to ensure overall layout and intuitive usability, logical structural flow. Aimed for consistent and understandable specifications for important elements like user interaction, content hierarchy, and responsiveness. Added sliders and other dynamic parts, implemented responsive design to improve usability.",
              link: "https://e-commerce.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 3,
              titleBk: "Dashboard",
              titleBl: "App",
              image: webmock3,
              medium: "website",
              period: "4 days",
              range: "Design, Coding, Implementation",
              skills: "React, Javascript, SCSS",
              summary: "Optimized healing atmosphere and trendy mobile-responsive dashboard model.",
              concept_target: "Store managers and staff in charge of houseplant sales and inventory management",
              concept_needs: "For houseplant sales site management system, inserted key visuals reminiscent of activities with green and healing as keywords.",
              concept_function: "Optimized performance to maintain meditative atmosphere while ensuring professional and stable operation. Lightweight system and versatile simple dashboard.",
              concept_eva: "Theme of 'healing and fun alone time exchange and interaction' - design suitable for product sales of not only houseplants but all healing-themed products.",
              persona: "Store managers and staff in charge of houseplant sales and inventory management",
              persona_basic: "Gender: All + Age: 30s single living generation, conscious of femininity",
              persona_preference: "#Memories #Attention to detail #Be yourself",
              persona_orientation: "Acts at own pace, prefers careful lifestyle",
              wireframe: "Ensured logical flow and intuitive navigation for overall layout and structure, aimed for consistent and understandable specifications for important elements like user interaction, content hierarchy, and responsiveness. Implemented responsive design after introducing dynamic interface with video and other dynamic parts.",
              link: "https://dashboard-model.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 4,
              titleBk: "Travel Booking",
              titleBl: "Website",
              image: webmock4,
              medium: "website",
              period: "4 days",
              range: "Design, Coding, Implementation",
              skills: "React, Javascript, SCSS",
              summary: "Travel package search app & web that effectively communicates appeal.",
              concept_target: "Healthy working adults to middle-aged with economic flexibility, especially domestic inbound travelers in Japan",
              concept_needs: "Combined rich and bold visuals with simple navigation to maximize travel destination appeal, using vivid colors and high-quality photos to evoke travel excitement and anticipation.",
              concept_function: "Focused on visuals while ensuring intuitive user operation, engaging users with playful operability. Minimized image sizes and unnecessary files, optimized functionality by fixing functional errors.",
              concept_eva: "Booking website where package appeal is clearly and realistically communicated, enabling instant booking when inspiration strikes.",
              persona_basic: "Gender: All + Age: Healthy all ages, nuclear family layer",
              persona_preference: "#Leisure #Intellectual curiosity #Hobbies and interaction",
              persona_orientation: "Experience-focused, intuitive and futuristic lifestyle",
              wireframe: "Mobile-first design prioritizing touch-friendly buttons. Enhanced map and search functions, made corrections based on feedback.",
              link: "https://travel-web.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 5,
              titleBk: "Restaurant",
              titleBl: "Website",
              image: webmock5,
              medium: "website",
              period: "5 days",
              range: "Design, Coding, Implementation",
              skills: "React, Javascript",
              summary: "Visually appealing dish presentation. Responsive restaurant website designed and built with frontend focus.",
              concept_target: "Local residents and tourists of all ages seeking good food and comfortable dining experience",
              concept_needs: "Warm colors and fonts that convey restaurant atmosphere and food deliciousness, rational layout that visually enhances photos.",
              concept_function: "Optimized page loading speed and implemented image compression and caching strategies for comfortable site usage.",
              concept_eva: "Lightweight and simple restaurant website that achieves rich experience with limited resources, customizable according to preferences.",
              persona_basic: "Gender: All + Age: Kids, prime age, senior all. Healthy all ages",
              persona_preference: "#Home recipes #Local community #Family bonding through meals",
              persona_orientation: "Old downtown atmosphere, close community formation, traditional family & relationships. Weekend meals with close friends",
              wireframe: "Implemented reusable React components. Focused on easy-to-see menu and reservation information layout, intuitive navigation. Made main functions like menu and reservation system accessible on single page, introduced responsive design for various devices. Tested overall site usability and performance, making corrections as needed.",
              link: "https://restau-web.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 6,
              titleBk: "Construction Company",
              titleBl: "Landing Page",
              image: web6,
              medium: "website",
              period: "5 days",
              range: "Design, Coding, Implementation",
              skills: "React, Javascript",
              summary: "Fully responsive construction company landing page.",
              concept_target: "Customers of all ages seeking construction services",
              concept_needs: "Professional design that conveys trust and reliability in construction services, using corporate colors and clear information hierarchy.",
              concept_function: "Optimized loading speed and implemented responsive design for all devices, ensuring professional presentation of services.",
              concept_eva: "Professional construction company website that builds trust through clear service presentation and responsive design.",
              persona_basic: "Gender: All + Age: All ages seeking construction services",
              persona_preference: "#Professional #Reliable #Quality construction",
              persona_orientation: "Values professional service, quality workmanship, and clear communication",
              wireframe: "Implemented professional layout with clear service categories, contact information, and project showcases. Responsive design ensures accessibility across all devices.",
              link: "https://genecon-lp.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 7,
              titleBk: "Equestrian Equipment",
              titleBl: "Sale Page 1",
              image: webjt1,
              medium: "website",
              period: "5 days",
              range: "Design, Coding, Implementation",
              skills: "React, Javascript",
              summary: "Equestrian equipment specialty store sale landing page.",
              concept_target: "Equestrian enthusiasts and customers seeking riding equipment",
              concept_needs: "Design that conveys the premium quality and functionality of equestrian equipment, using sophisticated colors and clear product presentation.",
              concept_function: "Optimized for conversion with clear pricing, product highlights, and easy purchase flow for equestrian equipment.",
              concept_eva: "Specialized equestrian equipment sale page that effectively communicates product value and encourages purchases.",
              persona_basic: "Gender: All + Age: Equestrian enthusiasts of all ages",
              persona_preference: "#Premium quality #Professional equipment #Riding performance",
              persona_orientation: "Values quality equipment, professional riding, and performance enhancement",
              wireframe: "Clear product showcase with pricing, features, and purchase options. Responsive design optimized for equestrian equipment sales.",
              link: "https://yimajiuni.com/jt-lp-coupon/",
              icon: tesla,
            },
            {
              id: 8,
              titleBk: "Equestrian Equipment",
              titleBl: "Sale Page 2",
              image: webjt2,
              medium: "website",
              period: "5 days",
              range: "Design, Coding, Implementation",
              skills: "React, Javascript",
              summary: "Equestrian equipment specialty store campaign landing page.",
              concept_target: "Equestrian enthusiasts and customers seeking riding equipment",
              concept_needs: "Dynamic campaign presentation that highlights special offers and equestrian equipment benefits with engaging visuals.",
              concept_function: "Campaign-focused design with special offers, limited-time deals, and compelling call-to-action for equestrian equipment sales.",
              concept_eva: "Engaging equestrian equipment campaign page that creates urgency and encourages immediate purchase decisions.",
              persona_basic: "Gender: All + Age: Equestrian enthusiasts of all ages",
              persona_preference: "#Special offers #Limited time #Premium equipment",
              persona_orientation: "Responds to limited-time offers, values premium equipment, seeks good deals",
              wireframe: "Campaign-focused layout with special offers, countdown timers, and compelling product presentations. Mobile-optimized for easy browsing and purchase.",
              link: "https://yimajiuni.com/jt-lp-slider/",
              icon: tesla,
            }
          ]
        }
      },
      jp: {
        translation: {

          greeting: "おかえりなさい。",
          CTA: {
            line1: "プロジェクトを考え中ですか？一緒に何か作りましょう！",
          },
          Contact: {
            line1: "連絡する",
            line2: "お名前",
            line3: "メールアドレス",
            line4: "メッセージ内容",
          },
          homeInfo: {
            line1: "こんにちは！私は",
            line2: "日本出身のフロントエンドエンジニア兼、",
            line3: "グラフィックデザイナーです。",
            line4: "たくさんの企業と働くうちに色々なスキルを身に着けました。",
            more: "もっと見る",
            line5:
              "この数年でいくつものプロジェクトを仕上げました。どれほどの規模や影響を与えられるかが気になりますか?",
            visit: "ポートフォリオを見る",
            line6: `プロジェクトを仕上げるディベロッパーが必要ですか?キーボードをちょっと叩いてご連絡下さい！`,
            contact: "連絡する",
          },

          aboutDesc: {
            line1: `日本を拠点とするデザイナー兼開発者。主に広告代理店やメーカーのデザイン企画部に所属しパッケージや販促広告、アパレル部門のECのグラフィックデザイナーを経験し、
            実践的な学習とアプリの構築を通して、技術とデザインに特化しています。
            あらゆる種類の会社と仕事をし、自分のスキルを高め、あらゆる種類の人々とチームを組んできました。
            `,
            line2: `
            現在ECサイト開発からデザイン、イラスト等中心にお仕事を受け付けております。お気軽にお問い合わせください。日本語/英語コミュニケーションに対応しております。
            `,
          },
          skillTooltip: {
            flow: "工程",
            experience: "使用歴",
            years: "年"
          },
          experiences: [
            {
              title: "Graphic Designer/Illustrator",
              company_name: "Business Partners",
              icon: starbucks,
              iconBg: "#accbe1",
              date: "April 2009 - Aug 2014",
              points: ` アミューズメント企業のウェブ制作管理、イベントのポスター、折込チラシ、POPや店舗看板、パネルのデザイン、パッケージ作成、求人記事、新聞記事、フリーペーパーのデザイン制作、
            文字校正。クライアントの似顔絵作成、美術展の席札、目録、案内状、メモ帳のレイアウト、デザイン等。その他クライアントは家具商社、建築・リフォーム企業等。 
            その他作業としてカッティング等の加工、封入、発送手配等全てに関わる業務。外部デザイナー作成データの印刷、大型業務用プリンターを用いての印刷オペレーション業務。
            `,
            },
            {
              title: "Graphic Designer/Apparel Assistant Designer",
              company_name: "Alpen",
              icon: tesla,
              iconBg: "#fbc3bc",
              date: "Aug 2014 - Oct -2017",
              points: [
                `
                アパレル縫製仕様書その他生地発注書の入力、デザイン画の修正、パッケージ新規制作、刷新、スポーツウェアの柄のデザイン、
                色追加、修正、取扱説明書の編集・校正等マーチャンダイザーのサポートとして他社商品との比較表の作成、
                企画プレゼンテーション資料の作成を担当。ヨガウェアや普段の生活とスポーツの垣根を取り除く
                スポーツカジュアル製品(アスレジャーファッション）の企画デザインに携わる業務。`,
              ],
            },
            {
              title: "Graphic Designer for Product Promotion",
              company_name: "W Cosmetics",
              icon: shopify,
              iconBg: "#b7e4c7",
              date: "Feb 2018 - Feb 2019",
              points: [
                `オーストラリアブリスベンを拠点に持ち英語環境の化粧品の卸売業にて美容化粧品の商
                品企画、販売促進ツールの制作、印刷オペレーター等を担当。POPやバナー等の販促ツール制作、印刷のグラフィックデザイナー業やパッケージの商
                品説明、キャッチコピー、取扱説明書の文言決めからローカライゼーション業務。ソフトウェアはAdobe photoshop とillustrator を使用。
                機能やコストを重視しつつも女性的でリアルな目線に立ったデザイン制作。
                `,
              ],
            },
            {
              title: "E-Commerce developer & Designer",
              company_name: "Nextel to Self-employed",
              icon: meta,
              iconBg: "#a2d2ff",
              date: "June 2020 - Present",
              points: [
                `Eコマース開発とWebグラフィックデザイナーとして楽天市場やShopify, WixなどのCMSを使用したオンラインストア更新業務からセール、キャンペーン時の販促ページデザイン、メールマガジン制作配信、
                HTML/CSS/Javascriptによる自社公式ECサイトの制作にを担当。後に2023年にプログラミングの知見を拡大し、Vue,React,Next.js等の言語を習得。
                2024年には独立し、いまじゆうにを開始。アパレル企業を専門としてEC開発・改修とグラフィックデザイン業務に携わり、現在は強固な最新の言語を用いた
                Webサイトの開発とブランディングのサービス、商品提案事業に携わっております。`,
              ],
            },
          ],
          projectDesc: {
            line1: `開発を始めてしばらく経ちますが、ここで紹介するプロジェクトは、自分の開発してきた中でも思い入れのある作品です。
            `,
            line2:
              "Githubのレポジトリ内では個人プロジェクトが現在も進行中です。よろしければご覧になっていってください。チームによる協力したプロジェクトは随時募集中です。",
          },
          //web
          projects: [
            {
              id: 1,
              preview: web1,
              theme: "btn-back-red",
              name: "NEXT.JS ECアパレルウェブサイト",
              description:
                "Shopifyによる決済システム、バックエンドとNext.jsのハイブリッドレンダリングの高速処理が叶うサイト。",
              persona:
                "社会に関心の高い、価値のあるものに゙対し購買意欲が高い幅広い年代が対象。",
              duration: "1ヶ月半",
              responsibility:
                "機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              link: "https://next-ecom-shopify.yimajiuni.com/",
            },
            {
              id: 2,
              preview: web2,
              theme: "btn-back-red",
              name: "ECアパレルウェブサイト",
              description:
                "購入と買い物カート追加システムによるECサイトをReactのContextAPIを用いて制作しました。",
              persona:
                "健康でファストファッションに対し購買意欲が高い幅広い世代の幅広い人種や年代が対象。",
              duration: "2週間",
              responsibility:
                "機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              link: "https://e-commerce.yimajiuni.com/",
            },
            {
              id: 3,
              preview: web3,
              theme: "btn-back-green",
              name: "ダッシュボードアプリ",
              description:
                "モバイルファーストのCMSタイプのダッシュボードモデルを最適化されたトレンド感のあるUIを用いて制作しました。",
              persona:
                "ペルソナ：観葉植物の販売や在庫管理を担当する店舗経営者やスタッフ。",
              duration: ":4日間",
              responsibility:
                "機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              link: "https://dashboard-model.yimajiuni.com/",
            },
            {
              id: 4,
              preview: web4,
              theme: "btn-back-blue",
              name: "トラベルブッキングWEB",
              description:
                "旅行のパッケージ検索用のアプリのフロントエンド機能をデザイン・実装しました。",
              persona:
                " ペルソナ：国内外の旅行客をターゲットに経済力に余裕がある特に日本国内インバウンド旅行客を中心とした健康な若年層社会人から中高年齢層。",
              duration: "4日間",
              responsibility:
                "機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              link: "https://travel-web.yimajiuni.com/",
            },
            {
              id: 5,
              preview: web5,
              theme: "btn-back-pink",
              name: "レストランウェブサイト",
              description:
                "レスポンシブのレストランのウェブサイトをフロントエンド設計・作成しました。",
              persona:
                "ペルソナ：地元の住民や観光客で、美味しい食事と快適なダイニング体験を求める幅広い年齢層",
              responsibility:
                "機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              duration: "4日間",
              link: "https://restau-web.yimajiuni.com/",
            },
            //修正
            {
              id: 6,
              preview: web6,
              theme: "btn-back-pink",
              name: "建築会社概要LP",
              description: `完全レスポンシブな建築会社のランディングページを制作。
                制作期間: 5日間 (20時間)
                作業範囲: 機能設計、UX/UIデザイン、コーディング、デバグ、実装
                ターゲット: 建築サービスを求める幅広い年齢層の顧客`,
              link: "https://genecon-lp.yimajiuni.com/",
            },
            {
              id: 7,
              preview: webjt1,
              theme: "btn-back-pink",
              name: "乗馬用品専門店のモール用セールLP",
              description: `乗馬用品専門店のセール用ランディングページを制作。
                制作期間: 5日間 (20時間)
                作業範囲: 機能設計、UX/UIデザイン、コーディング、デバグ、実装
                ターゲット: 乗馬愛好家や乗馬用品を求める顧客`,
              link: "https://yimajiuni.com/jt-lp-coupon/",
            },
            {
              id: 8,
              preview: webjt2,
              theme: "btn-back-pink",
              name: "乗馬用品専門店のモール用キャンペーンLP",
              description: `乗馬用品専門店のキャンペーン用ランディングページを制作。
                制作期間: 5日間 (20時間)
                作業範囲: 機能設計、UX/UIデザイン、コーディング、デバグ、実装
                ターゲット: 乗馬愛好家や乗馬用品を求める顧客`,
              link: "https://yimajiuni.com/jt-lp-slider/",
            },
          ],
          //要修正
          designDesc: {
            line1: `日本を拠点とするソフトウェア開発者。実践的な学習とアプリの構築を通して、技術とデザインに特化しています。
            `,
            line2: `あらゆる種類の会社と仕事をし、自分のスキルを高め、あらゆる種類の人々とチームを組んできました。
            `,
          },
          //banner
          promoDesigns: [
            {
              id: 9,
              preview: eqbo,
              name: "レインブーツの販売促進",
              description:
                "ポラロイド風のデザインやSNS文化を彷彿させるデザインを取り入れたヤング世代から他の幅広い世代迄をターゲットとして作成。",
              link: "https://yimajiuni.com/promotions/eq-bo.webp",
            },
            {
              id: 10,
              preview: eqch,
              name: "乗馬用チャップスの販売促進",
              description:
                "ファッション誌からインスパイアされた読みやすく洗練されたプロモーション。必要に応じてモデル画像のカットを追加。",
              link: "https://yimajiuni.com/promotions/eq-ch.webp",
            },
            {
              id: 11,
              preview: eqcu,
              name: "乗馬用キュロットの販売促進",
              description:
                "値段、キャッチコピー、商品画像のショーケースと説明文と機能表示を効果的に整理しブランド色を全体に表現し、国内向けの幅広い年代をターゲットとした販売促進画像。",
              link: "https://yimajiuni.com/promotions/eq-cu.webp",
            },
            {
              id: 12,
              preview: eqgr1,
              name: "乗馬用グローブの販売促進1",
              description:
                "冬用保湿保温特殊生地採用の乗馬用グローブのプロモーション。",
              link: "https://yimajiuni.com/promotions/eq-gr1.webp",
            },
            {
              id: 13,
              preview: eqgr2,
              name: "乗馬用合皮グローブの販売促進2",
              description:
                "フィット感の高い乗馬用合皮グローブのプロモーション。スポーティさと機能面を強調した製品に合わせたデザイン。",
              link: "https://yimajiuni.com/promotions/eq-gr2.webp",
            },
            {
              id: 14,
              preview: eqgr3,
              name: "乗馬用グローブアクセサリーの販売促進",
              description:
                "すべての世代をターゲットにした親しみやすさと上品さが表現されたプロモーション",
              link: "https://yimajiuni.com/promotions/eq-gr3.webp",
            },
            {
              id: 15,
              preview: eqgr4,
              name: "乗馬用グローブの販売促進3",
              description:
                "コストパフォーマンスに優れかつ洗練されたイメージのシリコングリップグローブのプロモーション。",
              link: "https://yimajiuni.com/promotions/eq-gr4.webp",
            },
            {
              id: 16,
              preview: eqhe,
              name: "乗馬用ヘルメットの販売促進",
              description:
                "ファッション誌からインスパイアされた読みやすく洗練されたプロモーション。",
              link: "https://yimajiuni.com/promotions/eq-he.webp",
            },
            {
              id: 17,
              preview: eqwh,
              name: "乗馬用ムチの販売促進",
              description:
                "特徴ある製品に合わせ「和」「モノグラム」を引き立たせる表現の販売促進機能表示は見やすくかつファッション性を加味。",
              link: "https://yimajiuni.com/promotions/eq-wh.webp",
            },
          ],
          //app
          appDesigns: [
            {
              id: 18,
              preview: app1,
              theme: "btn-back-pink",
              name: "ECショッピングアプリ",
              description:
                "お気に入り追加、カート追加機能から購入迄ショッピングアプリのUXをFigmaで設計しました。",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=233-88&t=TGbd5tplvGsffkfO-1&starting-point-node-id=236%3A233",
            },
            {
              id: 19,
              preview: app2,
              theme: "btn-back-blue",
              name: "フィットネスショップアプリ",
              description:
                "ログイン画面で各トレイニングメニューUXを魅力的にスライダー化したアプリをFigmaで設計。",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=328-136&t=AMryIaIjpqI2Y7cZ-1&starting-point-node-id=327%3A190",
            },
            {
              id: 20,
              preview: app3,
              theme: "btn-back-red",
              name: "銀行ネットバンキングアプリ",
              description:
                "預金額の月間比較グラフや投資セクション購入履歴機能を設計したモバイル銀行アプリ。",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=298-558&t=8uCbvN2drsBtXyv6-1&starting-point-node-id=299%3A681",
            },
            {
              id: 21,
              preview: app4,
              theme: "btn-back-red",
              name: "CSS拡大縮小アプリ",
              description:
                "CSSサイズプロパティの拡大縮小、単位変換アプリ",
              link: "https://css-scaler.yimajiuni.com/",
            },
            {
              id: 22,
              preview: app5,
              theme: "btn-back-red",
              name: "ブログ・記事投稿アプリ",
              description:
                "ブログアプリ",
              link: "https://blog-app.yimajiuni.com/",
            },

          ],
          //dtp
          dtpDesigns: [
            {
              id: 23,
              preview: dtp1,
              theme: "btn-back-pink",
              name: "DTPとパッケージ 2017",
              description:
                "desktop publishing data for paper based Advertisements such as flyers and POPs, and packages for products.",
              link: "https://yimajiuni.com/dtp/portfolio-yuko.pdf",
            },
          ],
          workDesc: {
            line1: `日本を拠点とするソフトウェア開発者。実践的な学習とアプリの構築を通して、技術とデザインに特化しています。
            `,
            line2: `あらゆる種類の会社と仕事をし、自分のスキルを高め、あらゆる種類の人々とチームを組んできました。
            `,
          },
          // Service page translations (Japanese)
          service: {
            section1: {
              title: "ECブランド",
              title2: "bespokeサイトを",
              titleHighlight: "Next.js & Shopifyで",
              yimajiuni: "はじめまして、いまじゆうに。",
              description: "パワフルなアーキテクチャ上で重ねる、磨く。ブランディングと高速読み込みで売り上げ30%+増を実現。The functional things that are made of dazzling and twinkle things。「買う」という行為を最大限に楽しく。",
              /*
              description: "私たちは、結果を生み出す高性能なeコマースソリューションの作成を専門としています。カスタムWebアプリケーションからシームレスなショッピング体験まで、あなたのビジョンを実現します。",*/
              cta: "ビデオ相談を予約する"
            },
            section2: {
              title: "魅力的な商品には、洗練された体験と便利さ。",
              titleHighlight: "すなわち、高スピードでダイナミックなECサイトが最適です。",
              description: "Next.js x Shopifyソリューションでモダンなeコマースの力を体験してください。パフォーマンス、スケーラビリティ、ユーザーエクスペリエンスのために構築されたこのプラットフォームは、あらゆる規模のビジネスに卓越した結果をもたらします。",
              features: {
                title: "主要機能",
                items: [
                  "Next.jsによる高速パフォーマンス",
                  "シームレスなShopify統合",
                  "モバイルファーストのレスポンシブデザイン",
                  "高度なSEO最適化",
                  "カスタムブランディングとデザイン"
                ]
              },
              demo: {
                title: "ライブデモ",
                description: "Next.js × Shopify × ブランディングをワンストップで。",
                button: "実際の動作を体験"
              },
              lcp: {
                imageAlt: "ファーストビューとLCP（最大コンテンツ表示）を改善するイメージ",
                description:
                  "表示が遅い？LCP最適化パッケージ $500／10hより",
                description2: "最大コンテンツ表示（LCP）の最適化で、ユーザー離脱を減らしCVR改善へ。",
                button: "サービス申込",
                modal: {
                  title: "Shopify LCP改善パッケージ $500（限定スコープ）",
                  copy: "あなたのShopifyサイト、32秒の「沈黙」で顧客を失っていませんか？",
                  close: "閉じる",
                  closeAria: "ダイアログを閉じる",
                  labels: {
                    price: "価格",
                    scope: "範囲",
                    milestones: "マイルストーン",
                    content: "内容"
                  },
                  price: "Shopify LCP 高速化パッケージ $500 / 10時間固定・追加費用なし",
                  scope: `LCP / FCP / TBT の数値改善（20〜50%減）`,
                  milestones: `1. 精密診断 (1.5h) - ボトルネックの特定とリスクアセスメント。
2. コア改善 (4.0h) - LCP画像の最適化と最優先読み込みの実装。
3. JSデトックス (3.0h) - 不要なアプリJSの遅延読み込み設定。
4. フォント最適化(1.0h)
5. 成果レポート (0.5h) - Before/After数値と今後の運用ガイド納品。`,
                  content: `特定の商品詳細ページ（PDP）1件のLCPを劇的に改善します。
◆全ての作業を引き受けるサービスをお探しの方には向いていないかもしれません。
◆構造上、改善が不可能な場合は、診断フェーズでお伝えし、無駄な費用はいただきません。
◆あなたのビジネスの健全性を最優先したサービスです。
◆PageSpeed Insightsのスコアが「赤」なら、それは修理費用ではなく「投資」が必要です。
◆改善を効果的に得るには専門的な知見とノウハウでの短期集中がベスト。
◆月商$30,000のストアなら、速度改善によるCVR向上だけで、翌月から+$4,000の増収が見込めます。
◆コストでなく、売上を増やすための投資としてのサービスです。`,
                  thumbs: {
                    left: {
                      label: "BEFORE",
                      linkLabel: "GO TO BEFORE →",
                      alt: "Next.js × Shopify デモサイトのサムネイル",
                      url: "https://lcp-improv-before.vercel.app/products/boho-mandala-art-v2"
                    },
                    right: {
                      label: "AFTER",
                      linkLabel: "GO TO AFTER →",
                      alt: "参考用のサムネイル画像",
                      url: "https://lcp-improv-after.vercel.app/products/boho-mandala-art-v2"
                    }
                  },
                  comparison: {
                    altBefore: "LCP改善前のストア画面",
                    altAfter: "LCP改善後の同じページ",
                    tooltipBeforeHeadline: "Beforeスコア：8 / LCP：32.2s",
                    tooltipBeforeBody:
                      "4G回線や旧型スマホのユーザーは、画面が出る前に離脱しています。",
                    tooltipAfterHeadline: "Afterスコア：99 / LCP：2.0s",
                    tooltipAfterBody:
                      "「待たせない」UXへ。 GoogleのSEO評価も「合格」に。広告のクリック単価（CPC）を無駄にせず、CVR（成約率）を最大化します。"
                  },
                  orderVia: "ご依頼はこちらから",
                  marketplaces: {
                    upwork: {
                      label: "Upwork",
                      url: "https://www.upwork.com/freelancers/~01d8f678ad12f64aa5?viewMode=1",
                      ariaLabel: "Upworkのプロフィールを開く"
                    },
                    contra: {
                      label: "Contra",
                      url: "https://contra.com/yuko_imai_ojbjl5ud/services?r=yuko_imai_ojbjl5ud",
                      ariaLabel: "Contraのプロフィールを開く"
                    },
                    malt: {
                      label: "Malt",
                      url: "https://www.malt.com/profile/yukoimai1?overview",
                      ariaLabel: "Maltのプロフィールを開く"
                    }
                  }
                }
              }
            },
            section3: {
              title: "ヘッドレス・コマース×ブランディングで売上30%UP",
              description: `Next.js × Shopify の「ヘッドレスコマース」という手法でECサイトを構築、そこにブランディングを実施することにより、高速化と品質体験の向上を実現。
              貴社の魅力的な商品のECビジネスチャンスを最大化します。`,
              technologies: {
                nextjs: {
                  title: "Next.jsテクノロジー",
                  description: "サーバーサイドレンダリング、静的生成、最適化されたパフォーマンスにより、超高速なユーザーエクスペリエンスを実現。"
                },
                shopify: {
                  title: "Shopify統合",
                  description: `強力な在庫管理と決済処理を備えたシームレスなeコマース機能。
                  世界最高水準のパフォーマンスとセキュリティを実現。`

                },
                branding: {
                  title: "ブランディング力",
                  description: "プロジェクト固有の目的とキモチを形に。事業の意図を汲み、最適な提案を通して、オーディエンスと共鳴するブランディングを提供。"
                }
              },
              performance: {
                title: "本製品のパフォーマンス指標",
                subtitle: "(中規模サイト)",
                labels: {
                  imageSpeed: "画像読み込み速度",
                  conversionRate: "コンバージョン率",
                  mobileBounce: "モバイル離脱率",

                  organicTraffic: "検索流入数",
                  operationHours: "運用・SEO対策工数",
                  serverCost: "サーバーコスト(月額)",
                },
                metrics: [
                  "1.2秒から0.5秒に改善",
                  "1.9%から3.2%に向上",
                  "65%から45%へ改善",

                  "22位から7位へ向上",
                  "25時間から10時間へ削減",
                  "43万円から23万円へ削減",
                ],
                button: "詳しく見る"
              },
              performanceReport: {
                title: "NEXT.js × Shopify × ブランディング戦略とは？",
                content: {
                  section1: {
                    title: "独自のデータ処理による高速化でユーザー体験が大幅に向上。",
                    description: "最先端のウェブ開発フレームワーク「Next.js」と、信頼性の高いECプラットフォーム「Shopify」を連携させ、ユーザーに最高の購入体験を提供し、売上向上に直結するデジタル店舗を実現します。"
                    /*
                                        description: "最先端のウェブ開発フレームワーク「Next.js」と、信頼性の高いECプラットフォーム「Shopify」を連携させた「ヘッドレスコマース」という手法でECサイトを構築、そこにブランディングを実施することにより、従来のECサイトが抱える表示速度やデザインの制約といった課題を根本から解決。ユーザー（サイト訪問者）に最高の購入体験を提供し、売上向上に直結するデジタル店舗を実現します。"*/
                  },
                  section2: {
                    title: "速い、美しい、未来につながる - 導入メリット3点",
                    description: "このサービスが提供するECサイトの最大の利点は、次の3つに集約されます。",
                    benefits: {
                      speed: {
                        title: "驚異的な表示速度",
                        description: "ページが瞬時に表示されるため、お客様を待たせません。サイトの高速化は離脱率を劇的に低下させ、売上向上に直接貢献します。"
                      },
                      design: {
                        title: "完全オーダーメイドのデザイン",
                        description: "ブランドの世界観を余すところなく表現できます。テンプレートの制約に縛られることなく、理想のオンラインストアを実現します。"
                      },
                      stability: {
                        title: "安定した店舗運営",
                        description: "商品の在庫管理や決済システムといったECサイトの裏側（バックエンド）は、世界中で利用されている信頼のShopifyが担うため、安心してビジネスに集中できます。"
                      }
                    }
                  },
                  section3: {
                    title: "高速フレームワークでECサイトを構築するさらなるメリット",
                    benefits: {
                      isr: {
                        title: "パフォーマンスが売上に直結",
                        description: `Next.js独自の生成技術での高速性と動的更新の柔軟性を両立します。ページ表示の負担を大幅に軽減することが可能。向上したウェブサイトのダイナミックな体験とパフォーマンスが売上に直結します。`
                        /*
                        description: `Next.js独自のISR（Incremental Static Regeneration）は、静的生成の高速性と動的更新の柔軟性を両立します。
                        ECサイトの各ページに対して最適なレンダリング方式を選択する事により、全ページを一度にビルドする等の負担を軽減することが可能です。
                        向上したウェブサイトのダイナミックな体験とパフォーマンスが売上に直結します。`
                        */
                      },
                      conversion: {
                        title: "コンバージョン率の向上",
                        description: "表示速度の改善はユーザーの離脱を防ぎ、コンバージョン率の向上に直結します。"
                      },
                      performance: {
                        title: "最高レベルのパフォーマンススコア",
                        description: "Googleが提供する評価ツールにおいて、高スコアを達成。ユーザーに快適でSEOにも有利です。"
                      },
                      ssg: {
                        title: "「圧倒的な表示速度」がもたらす真に喜びにつながる顧客購入体験",
                        description: `サービスの核となる強みは「圧倒的な表示速度」です。Next.js独自の技術によってウェブサイトのページを事前に作成しておく事により、極めて高速なレスポンスが可能。快適なショッピング体験を叶えサイト離脱を防止します。`
                        /*
                        description: `本サービスで構築するサイトの核となる強みは「圧倒的な表示速度」です。この速さは、Next.jsの「静的サイト生成（SSG）」という技術によってウェブサイトのページを事前に作成しておく事により、ユーザーがアクセスするたびにページを生成する従来の方法とは異なり、完成済みのページを瞬時に表示できるため、極めて高速なレスポンスが可能。快適なショッピング体験を叶えサイト離脱を防止します。`
                        */
                      }
                    }
                  },
                  section4: {
                    title: "こんなお悩みに直面していませんか?",
                    problems: [
                      "「ページ読み込み速度が遅く、特にモバイルでの離脱率が高い」",
                      "「商品数が多く、全ページのSSRによりサーバーコストが高騰」",
                      "「SEOパフォーマンスが低く、オーガニック流入が伸び悩み」",
                      "「在庫表示の遅延により、注文後に「在庫切れ」となるケースが多発」",
                      "「既存のプラットフォームのデザインに限界を感じ、ブランドイメージを十分に表現できない」",
                    ],
                  },
                  section5: {
                    title: "実際に導入して売上30%増を達成した中規模ECサイトの例",
                    case1: "ページ速度改善によるSEO効果により多くのキーワードでの検索順位が向上し、オーガニックトラフィックが140%に増加。",
                    case2: "スポーツブランドの「ナイキ」や化粧品ブランドの「ランコム」といった世界的企業も、柔軟性と高いパフォーマンスを求めてヘッドレスコマースへ移行しています。",
                    return: "1年間で投資額の約15倍のリターンが実現可能。初期投資は3ヶ月弱で回収できる計算です。一度実装すれば継続的に効果が得られる点は◎。サーバーコスト削減と売上増加という二重の効果により、長期的な収益向上が見込めます。",
                    comparison: "従来のECサイトは、デザイン（フロントエンド）とシステム（バックエンド）が一体化しているため、少しデザインを変えるだけでもシステム全体に影響が及び、改修が難しくコストが高いという課題がありました。",
                    table: {
                      title: "パフォーマンス比較表",
                      headers: {
                        metric: "指標",
                        traditional: "従来型",
                        nextjs: "Next.js + Shopify",
                        improvement: "改善率"
                      },
                      metrics: {
                        loadingSpeed: {
                          label: "読み込み速度",
                          traditional: "3-5秒",
                          nextjs: "0.5-1秒",
                          improvement: "+80%"
                        },
                        conversionRate: {
                          label: "コンバージョン率",
                          traditional: "1.9%",
                          nextjs: "3.2%",
                          improvement: "+68%"
                        },
                        mobileBounce: {
                          label: "モバイル離脱率",
                          traditional: "65%",
                          nextjs: "45%",
                          improvement: "-31%"
                        },
                        seoRanking: {
                          label: "SEO順位",
                          traditional: "22位",
                          nextjs: "7位",
                          improvement: "+15位"
                        },
                        serverCost: {
                          label: "サーバーコスト",
                          traditional: "月額43万円",
                          nextjs: "月額23万円",
                          improvement: "-50%"
                        }
                      }
                    }
                  },
                  section6: {
                    title: "チェックリスト",
                    description: "以下のチェックリストに一つでも当てはまれば、私たちのサービスが解決策になるかもしれません。",
                    items: [
                      "サイトのトップページ表示に3秒以上かかっている",
                      "スマートフォンで見たとき、表示が崩れたり、操作しにくい部分がある",
                      "検索エンジンからの流入やSEOの順位を上げたい",
                      "商品情報やキャンペーンの更新頻度が高い",
                      "パーソナライズコンテンツを積極導入している",
                      "リアルタイムでの更新が必要",
                      "インタラクションの量が増えてきた",
                      "高トラフィックのページ読み込みが遅い",
                      "デザインのテンプレートに縛られ、実現したい表現を諦めたことがある",
                      "セールやキャンペーンのたびに、サイトの更新作業に手間取っている",
                      "将来的にアプリや新しいデバイスでの商品販売も考えている",
                    ]
                  },
                  section7: {
                    title: "ヘッドレスコマースが実現する「自由」",
                    description1: "本サービスは「ヘッドレスコマース」というアーキテクチャを採用しています。これは、お客様が触れる店頭=フロントヘッド）」と、お店の裏側である「バックエンド（商品管理・決済システム）」を分離する考え方です。",
                    description2: "分離すると、何が良いのでしょうか？",
                    benefits: {
                      design: {
                        title: "デザインの完全な自由",
                        description: "バックエンドであるShopifyの機能に影響されることなく、フロントエンドを自由に設計・開発できます。これにより、他のどこにもない、あなたのブランドだけのユニークな顧客体験を創造することが可能です。"
                      },
                      marketing: {
                        title: "迅速なマーケティング施策",
                        description: "急なキャンペーンや新しいコンテンツの追加など、フロントエンドの改修を迅速かつ柔軟に行えます。バックエンドの制約を気にする必要がないため、市場のトレンドに素早く対応できます。"
                      }
                    }
                  },
                  section8: {
                    title: "未来を見据えた技術的優位性",
                    description: "より専門的な視点から見ると、Next.jsの採用はビジネスの成長に不可欠な技術的優位性をもたらします。",
                    benefits: {
                      seo: {
                        title: "SEOへの貢献",
                        description: "Next.jsが得意とするSSG（静的サイト生成）やSSR（サーバーサイドレンダリング）は、検索エンジンがサイトの内容を理解しやすくするため、SEO評価の向上に大きく貢献します。"
                      },
                      scalability: {
                        title: "拡張性とスケーラビリティ",
                        description: "フロントエンドとバックエンドが独立しているため、将来的にビジネスが拡大し、アクセスが急増しても、それぞれを独立してスケールさせることが可能です。例えば、スマートウォッチやVRなど、未来の新しいデバイスへの展開も容易になります。",
                      },
                      efficiency: {
                        title: "開発効率の向上",
                        description: "ReactをベースとしたNext.jsは、現代的な開発手法に適しており、効率的で高品質なサイト構築を可能にします。"
                      }
                    }
                  },
                  section9: {
                    title: "最高の「買う」をデザインする",
                    description: "最終的に利益をもたらすのは、サイトを訪れるお客様（エンドユーザー）です。このサービスは、エンドユーザーの購買意欲を最大限に引き出すことを目的としています。",
                    benefits: {
                      stressfree: {
                        title: "ストレスフリーな体験",
                        description: "瞬時に表示されるページ、直感的でわかりやすい操作性。これらはユーザーに「このサイトは使いやすい」という満足感を与え、購入までのプロセスをスムーズにします。"
                      },
                      immersion: {
                        title: "ブランドへの没入感",
                        description: "テンプレートでは表現しきれない、細部にまでこだわったデザインは、ブランドの世界観を伝え、お客様の心を掴みます。ただ商品を買うだけでなく、「このブランドで買いたい」という動機（ファン化）を創出します。"
                      },
                      trust: {
                        title: "信頼と安心感",
                        description: "プロフェッショナルで洗練されたサイトは、お客様に安心感を与え、個人情報や決済情報の入力に対する心理的なハードルを下げます。"
                      }
                    }
                  },
                  section10: {
                    title: "魅力的な商品の購買チャンスを逃さない。長期的な売上につながるECサイト",
                    description1: "ブランドの世界観に合ったデザインでも、サイトが重いせいで、買う直前でやめてしまうお客様は結構多いです。",
                    description2: "私たちの作るサイトはとにかく「速い」ので、その心配がありません。そして商品管理や決済は、信頼と実績のあるShopifyにお任せで安心。",
                    description3: "速さも、ブランド世界観も、世界標準の安心なシステムの簡単さも一度に叶え、これがあなたのビジネスの強力な武器になります。"
                  },
                  footer: {
                    contactUs: "お問い合わせ @ info@yimajiuni.com",
                    askQuote: "見積もり依頼",
                    close: "✘"
                  },
                }
              }
            },
            section4: {
              title: "あなたのプロジェクトに合った御見積を準備",
              description: "スムーズなビデオカウンセリングを叶えるため、いくつかの質問にお答えください。要件、プロジェクト規模、好み等のあなたのニーズを理解し、パーソナライズされたより正確な見積もりを提供することに役立ちます。",
              calculator: {
                title: "見積もり依頼シート作成",
                button: "作成を開始"
              }
            },
            navigation: {
              main: "メイン",
              product: "製品",
              services: "サービス",
              quote: "見積依頼"
            },
            decorative: {
              quoteLink: "今すぐ見積依頼",
              contactLink: "質問する!"
            },
            qaForm: {
              title: "プロジェクト見積もり依頼",
              close: "×",
              progress: "ステップ {{current}} / {{total}}",
              progressPercent: "{{percent}}%",
              required: "*",
              previous: "前へ",
              next: "次へ",
              submit: "依頼を送信",
              submitting: "送信中...",
              validation: {
                answerRequired: "回答してください: {{question}}",
                allQuestionsRequired: "送信前にすべての質問に回答してください。不足: {{question}}"
              },
              questions: {
                projectType: {
                  question: "どのようなプロジェクトが必要ですか？",
                  options: {
                    ecommerce: "ECサイト",
                    corporate: "コーポレートサイト",
                    portfolio: "ポートフォリオ/ブログ",
                    landingpage: "ランディングページ",
                    webapp: "Webアプリケーション",
                    other: "その他"
                  }
                },
                projectScale: {
                  question: "プロジェクトの規模はどの程度ですか？",
                  options: {
                    small: "小規模 (1-5ページ)",
                    medium: "中規模 (5-30ページ)",
                    large: "大規模 (30-50ページ)",
                    enterprise: "エンタープライズレベル"
                  }
                },
                budget: {
                  question: "予算の範囲はどの程度ですか？",
                  options: {
                    under1k: "10万円未満",
                    "1k-5k": "10万円〜50万円",
                    "5k-10k": "50万円〜100万円",
                    "10k+": "100万円以上"
                  }
                },
                timeline: {
                  question: "スケジュールはどの程度ですか？",
                  options: {
                    asap: "至急 (1-2週間)",
                    "1months-3months": "1ヶ月〜3ヶ月",
                    "3months-6months": "3ヶ月〜6ヶ月",
                    flexible: "柔軟"
                  }
                },
                features: {
                  question: "どのような機能が必要ですか？（該当するものをすべて選択）",
                  options: {
                    responsive: "レスポンシブデザイン",
                    transformation: "Next.jsへの移行・統合",
                    payment: "Shopify、Wix等のEC決済システム",
                    cms: "WordPress等のコンテンツ管理システム（CMS）",
                    seo: "SEO最適化",
                    analytics: "分析・追跡",
                    multilingual: "多言語対応",
                    googlemaps: "ECサイトのGoogleMap連携",
                    linechat: "ラインアカウント×AIハイブリッド店舗チャット設置",
                    maintenance: "EC画像登録やページの更新、システム保守運用"
                  }
                },
                brandingDepth: {
                  question: "プロジェクトには詳細なブランディングが必要ですか、それともシンプルで基本的なものをお好みですか？",
                  options: {
                    detailed: "詳細なブランディング",
                    simple: "シンプル＆ベーシック"
                  }
                },
                brandVision: {
                  question: "ブランドが実現したい世界は？",
                  placeholder: "ブランドが目指す未来の世界について説明してください..."
                },
                brandMission: {
                  question: "このビジョンを達成する際に、ブランドが担うべき使命、役割は？",
                  placeholder: "ブランドのミッションと目的について説明してください..."
                },
                targetAudience: {
                  question: "主要なターゲットオーディエンスは誰ですか？",
                  placeholder: "理想的な顧客、その人口統計、ライフスタイル、ニーズについて説明してください..."
                },
                websiteReferences: {
                  question: "サイト参考",
                  atmosphareQuestion: "雰囲気をお手本にしたいサイトがありましたら教えて下さい。",
                  functionQuestion: "機能をお手本にしたいサイトが有りましたら教えて下さい。",
                  placeholder: "サイトのURLを入力してください"
                },
                brandStory: {
                  question: "ブランド/御社をする上で欠かせないオーディエンスに知ってほしいエピソード",
                  placeholder: "お客様との嬉しい話、ここだけの話、成功の元となった失敗談etc.)などもしございましたら教えて下さい。"
                },
                brandPersonality: {
                  question: "顧客にブランドをどのように認識してほしいですか？",
                  options: {
                    professional: "プロフェッショナル＆企業的",
                    friendly: "フレンドリー＆親しみやすい",
                    luxury: "ラグジュアリー＆プレミアム",
                    innovative: "革新的＆最先端",
                    trustworthy: "信頼できる＆頼りになる"
                  }
                },
                designStyle: {
                  question: "どのようなデザインスタイルをお好みですか？",
                  options: {
                    modern: "モダン＆コンテンポラリー",
                    minimalist: "ミニマリスト＆クリーン",
                    casual: "カジュアル＆リラックス",
                    elegant: "エレガント＆洗練された",
                    professional: "プロフェッショナル＆ビジネスライク"
                  }
                },
                colorScheme: {
                  question: "どのようなカラースキームをお好みですか？",
                  options: {
                    blue: "ブルー＆クールトーン",
                    green: "グリーン＆ナチュラル",
                    purple: "パープル＆クリエイティブ",
                    neutral: "ニュートラル＆シンプル",
                    warm: "ウォーム＆居心地の良い"
                  }
                },
                targetDemographics: {
                  question: "ターゲット像について説明してください",
                  placeholder: "年齢層、性別、ライフスタイル、職業など..."
                },
                visualStyle: {
                  question: "プロジェクトで表現したいビジュアルスタイルやトーン＆マナーは何ですか？",
                  instruction: "下記から希望するビジュアルスタイルを表すキーワードを選択してください：",
                  priorityOrder: "優先順位（クリックで並び替え）",
                  maxLimitReached: "最大5つのビジュアルスタイルまで選択できます。新しいものを追加するには、既存の選択を解除してください。",
                  options: {
                    // Column 1
                    masculine: "男性的",
                    fun: "楽しい",
                    premium: "重厚感",
                    linear: "直線的",
                    formal: "フォーマル",
                    intellectual: "知的",
                    delicate: "繊細",
                    monotone: "モノトーン",

                    // Column 2
                    feminine: "女性的",
                    interesting: "面白い",
                    warm: "暖かい",
                    curved: "曲線的",
                    mystical: "幻想・神秘的",
                    premium2: "アバンギャルド",
                    chic: "シック",
                    pop: "ポップ",

                    // Column 3
                    childlike: "子供らしい",
                    powerful: "力強い",
                    decadence: "退廃的",
                    rhythmic: "リズミカル",
                    trustworthy: "信頼・誠実",
                    lively: "にぎやか",
                    stylish: "スタイリッシュ",
                    pastel: "パステル",

                    // Column 4
                    cute: "かわいらしい",
                    serious: "真面目",
                    business: "ビジネス",
                    natural: "ナチュラル",
                    traditional: "伝統的",
                    refreshing: "爽やか",
                    metallic: "メタリック",
                    anime: "アニメ",

                    // Column 5
                    goodlooking: "かっこいい",
                    elegant: "上品",
                    homey: "アットホーム",
                    craft: "クラフト",
                    modern: "現代的",
                    flashy: "派手",
                    complex: "複雑",
                    japanese: "和風",

                    // Column 6
                    friendly: "親しみやすい",
                    luxury: "高級感",
                    bright: "明るい",
                    unique: "個性的",
                    futuristic: "未来的",
                    subdued: "渋い",
                    simple: "シンプル",
                    western: "西洋風",

                    // Column 7
                    gentle: "優しい",
                    elegant2: "エレガント",
                    dark: "暗い",
                    casual: "カジュアル",
                    retro: "レトロ",
                    cool: "クール",
                    colorful: "カラフル",
                    androgynous: "中性的",
                  }
                },

                communicationPreference: {
                  question: "どのようなコミュニケーション方法をご希望ですか？",
                  options: {
                    video: "ビデオ相談ミーティング",
                    email: "メールでのやり取り",
                    chat: "チャットアプリでのやり取り"
                  }
                },
                chatDetails: {
                  question: "どのチャットアプリをご希望ですか？",
                  options: {
                    chatwork: "Chatwork",
                    slack: "Slack",
                    discord: "Discord",
                    other: "その他のプラットフォーム"
                  }
                },
                otherChatPlatform: {
                  question: "その他のチャットプラットフォームを指定してください：",
                  placeholder: "プラットフォーム名を入力..."
                },
                companyInfo: {
                  question: "会社とプロジェクトについての想いを教えてください",
                  placeholder: "ビジネス、目標、特定の要件について説明してください..."
                },
                contactInfo: {
                  question: "連絡先情報",
                  fields: {
                    name: "氏名",
                    email: "メールアドレス",
                    phone: "電話番号（任意）",
                    company: "会社名（任意）"
                  }
                }
              },
              success: {
                title: "ありがとうございます！",
                message: "プロジェクト見積依頼が送信されました。24営業時間以内にご連絡いたします！",
                refreshMessage: "※見積を再度開始するには、ブラウザを更新してください。",
                downloadPDF: "PDFをダウンロード",
                close: "閉じる"
              },
              pdf: {
                title: "プロジェクト見積もり依頼",
                generatedOn: "生成日時",
                filename: "プロジェクト見積もり依頼"
              },
              labels: {
                contactInfo: "連絡先情報",
                projectType: "プロジェクトタイプ",
                projectScale: "プロジェクト規模",
                budget: "予算",
                timeline: "スケジュール",
                features: "機能",
                companyInfo: "会社情報"
              }
            }
          },
          // Work details translations
          workDatas: [
            {
              id: 1,
              titleBk: "NEXT.js ECアパレル",
              titleBl: "ウェブサイト",
              image: webmock1,
              medium: "website",
              period: "約1ヶ月半",
              range: "デザイン・コーディング・実装",
              skills: "Next.JS, Typescript, Tailwind",
              summary: "Shopifyによる決済システム、バックエンドとNext.jsのハイブリッドレンダリングの高速処理が叶うサイト。",
              concept_target: "社会に関心の高い、価値のあるものに対し購買意欲が高い幅広い年代が対象",
              concept_needs: "日本の和の伝統美と国際化の雰囲気を規則的に取り入れ一貫性と美しさを保ちながら、普遍的で見やすいデザインを保つため整列されたレイアウト統一。",
              concept_function: "ユーザーが快適に商品を閲覧し購入できるよう、重要な情報やボタンは視認性を高めるために強調。APIからのデータ取得を最適化。処理速度の高速化とUXによる購入体験の向上を意識",
              concept_eva: "国際的な視点での個のスタイル、姿の在り方、世界の広域を対応地域、時事問題に強い興味を示す、アパレルとマインドが直結した世代の購買キーワードを元にカスタマイズされたデザイン。",
              persona: "健康でファストファッションに対し購買意欲が高い幅広い世代の幅広い人種や年代が対象",
              persona_basic: "性別:女性 年代:２０代〜",
              persona_preference: "#無駄なく#シンプルで使いやすい#色々楽しめるのが好き",
              persona_orientation: "速い生活ペースを好む、節約をし価値のあるものに集中投資する傾向。日頃からアクティブ",
              wireframe: "全体のレイアウトと直感的な使用感、構造の論理的な流れを確保するため、既存のモデルとなるECサイトをリサーチし最適化し、ユーザーインタラクション、コンテンツ階層、応答性などの重要な要素に対し、一貫性があり分かりやすい仕様を目指した。スライダーやその他の動的パーツを追加し、レスポンシブデザインを実装し、ユーザビリティの向上を目指しました。",
              link: "https://next-shopify.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 2,
              titleBk: "ECアパレル",
              titleBl: "ウェブサイト",
              image: webmock2,
              medium: "website",
              period: "約2週間",
              range: "デザイン・コーディング・実装",
              skills: "React, Javascript, CSS",
              summary: "スライダーによるアイキャッチと、購入と買い物カート追加システムを搭載したECサイトをReactのContextAPIを用いて制作。",
              concept_target: "健康でファストファッションに対し購買意欲が高い幅広い年代が対象",
              concept_needs: "広々とした印象とスタイリッシュで見やすい普遍的なデザインを保つため整列されたレイアウト、かつアクティブな印象で見やすくページの一貫性と美しさを保つためデザインを統一。",
              concept_function: "ユーザーが快適に商品を閲覧し購入できるよう、重要な情報やボタンは視認性を高めるために強調。APIからのデータ取得を最適化。",
              concept_eva: "ユニバーサルな視点でのスタイル、健康的な美しさ、姿の在り方、世界の広域を対応地域、SDGsといった新しい世代の購買キーワードを元にカスタマイズされたデザイン。",
              persona: "健康でファストファッションに対し購買意欲が高い幅広い世代の幅広い人種や年代が対象",
              persona_basic: "性別:男女他+ 年代:キッズ〜シニア。",
              persona_preference: "#無駄なく#シンプルで使いやすい#色々楽しめるのが好き",
              persona_orientation: "速い生活ペースを好む、消費は楽しみ",
              wireframe: "全体のレイアウトと直感的な使用感、構造の論理的な流れを確保するため、既存のモデルとなるECサイトをリサーチし最適化し、ユーザーインタラクション、コンテンツ階層、応答性などの重要な要素に対し、一貫性があり分かりやすい仕様を目指した。スライダーやその他の動的パーツを追加し、レスポンシブデザインを実装し、ユーザビリティの向上を目指しました。",
              link: "https://e-commerce.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 3,
              titleBk: "ダッシュボード",
              titleBl: "アプリ",
              image: webmock3,
              medium: "website",
              period: "４日間",
              range: "デザイン・コーディング・実装",
              skills: "React, Javascript,SCSS",
              summary: "最適化された癒やしの雰囲気とトレンド感のあるモバイル対応ダッシュボードモデル。",
              concept_target: "観葉植物の販売や在庫管理を担当する店舗経営者やスタッフ",
              concept_needs: "観葉植物の販売サイトを管理するシステムとして緑色と癒しをキーワードにしたアクティビティを彷彿させるキーヴィジュアルを挿入。",
              concept_function: "瞑想的な雰囲気を保ちながらもプロフェッショナルで安定した動作性を叶える為パフォーマンスを最適化。軽量化されたシステムと汎用性のあるシンプルなダッシュボード。",
              concept_eva: "一人時間を癒しに、楽しく、を交換交流。をテーマに観葉植物だけでなくあらゆる癒しをテーマとする商品の物販に向いたデザイン。",
              persona: "観葉植物の販売や在庫管理を担当する店舗経営者やスタッフ",
              persona_basic: "女性性を意識・重視した男女他＋ 年代:30代一人暮らし世代",
              persona_preference: "#想い出、#こだわり、#自分らしく",
              persona_orientation: "自分のペースで行動、丁寧な生活を好む。",
              wireframe: "全体のレイアウトと構造に論理的な流れと直感的なナビゲーションを確保するため、ユーザーインタラクション、コンテンツ階層、応答性などの重要な要素に対し、一貫性があり分かりやすい仕様を目指しました。動画で動きのあるインターフェースとその他の動的パーツを導入後、レスポンシブデザインを実装。",
              link: "https://dashboard-model.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 4,
              titleBk: "旅行予約",
              titleBl: "ウェブサイト",
              image: webmock4,
              medium: "website",
              period: "4日間",
              range: "デザイン・コーディング・実装",
              skills: "React, Javascript,SCSS",
              summary: "魅力が伝わりやすい。旅行のパッケージ検索用のアプリ＆WEB。",
              concept_target: "国内外の経済力に余裕がある健康な社会人から中高年齢層で特に日本国内インバウンド旅行中心の利用者",
              concept_needs: "リッチで大胆なビジュアルとシンプルなナビゲーションを組み合わせ旅行先の魅力を最大限に伝え、鮮やかな色彩と高画質な写真を使用し旅行の楽しさと期待を引き出します。",
              concept_function: "ビジュアルに注力しながらもユーザーが直感的に操作できるデザインを心掛け、遊び心ある操作性でユーザーの関心を惹きつけます。また画像サイズや不要ファイルを最大限に省き機能面でのエラーを修正し機能を最適化。",
              concept_eva: "パッケージの魅力がより明確にリアルに伝わり、思い立ったら予約出来る、ブッキングウェブサイト。",
              persona_basic: "男女＋年代:健康な全年齢、核家族ファミリー層",
              persona_preference: "#レジャー#知的好奇心#趣味と交流",
              persona_orientation: "体験重視、直感的で近未来的なライフスタイル",
              wireframe: "モバイルファーストでデザインし、タッチ操作のしやすさを重視したボタンを優先しデザイン。地図や検索機能などを充実させ、フィードバックを基に修正。",
              link: "https://travel-web.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 5,
              titleBk: "レストラン",
              titleBl: "ウェブサイト",
              image: webmock5,
              medium: "website",
              period: "5日間",
              range: "デザイン・コーディング・実装",
              skills: "React,Javascript",
              summary: "視覚的にも料理の魅力が伝わりやすい。レスポンシブのレストランのウェブサイトをフロントエンド設計・作成しました。",
              concept_target: "地元の住民や観光客で、美味しい食事と快適なダイニング体験を求める幅広い年齢層",
              concept_needs: "店舗の雰囲気と料理の美味しさが伝わる、温かみのある色彩とフォントを使用しながら、合理的なレイアウトで視覚的にも写真を引き立てるデザイン。",
              concept_function: "ページの読み込み速度を最適化し、ユーザーが快適にサイトを利用できるように、画像の圧縮とキャッシング戦略を取り入れました。",
              concept_eva: "限られたリソースでリッチな体験を実現し、嗜好に沿ってカスタマイズ可能な軽量でシンプルなレストランウェブサイト。",
              persona_basic: "性別:男女他+ 年代:キッズ、プライム年代、シニア全て。男女＋年代:健康な全年齢",
              persona_preference: "#ホームレシピ #地域のコミュニティ #一家団欒の食事で家族の絆",
              persona_orientation: "古い下町風情の密なコミュニティ形成、古風な家族＆人間関係。週末は親しい仲で揃って食事",
              wireframe: "再利用可能なコンポーネントをReactで実装。メニューや予約情報は見やすく、ユーザーが簡単に必要な情報にアクセスできるレイアウト、直感的なナビゲーションを重視。メニューや予約システムなどの主要な機能は一枚のページでアクセスしやすく、様々なデバイスからアクセス出来るレスポンシブデザインを導入。サイト全体の使用性とパフォーマンスをテストし、必要に応じて修正。",
              link: "https://restau-web.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 6,
              titleBk: "建築会社",
              titleBl: "ランディングページ",
              image: web6,
              medium: "website",
              period: "5日間",
              range: "デザイン・コーディング・実装",
              skills: "React,Javascript",
              summary: "完全レスポンシブな建築会社のランディングページを制作。",
              concept_target: "建築サービスを求める幅広い年齢層の顧客",
              concept_needs: "建築サービスの信頼性と信頼感を伝えるプロフェッショナルなデザイン、企業カラーと明確な情報階層を使用。",
              concept_function: "読み込み速度を最適化し、すべてのデバイスに対応したレスポンシブデザインを実装、サービスをプロフェッショナルに提示。",
              concept_eva: "明確なサービス提示とレスポンシブデザインを通じて信頼を構築するプロフェッショナルな建築会社ウェブサイト。",
              persona_basic: "性別: すべて、年齢: 建築サービスを求める全年齢",
              persona_preference: "#プロフェッショナル #信頼できる #質の高い建築",
              persona_orientation: "プロフェッショナルなサービス、質の高い職人技、明確なコミュニケーションを重視",
              wireframe: "明確なサービスカテゴリ、連絡先情報、プロジェクト紹介を含むプロフェッショナルなレイアウトを実装。レスポンシブデザインにより、すべてのデバイスでのアクセシビリティを確保。",
              link: "https://genecon-lp.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 7,
              titleBk: "乗馬用品ECサイト",
              titleBl: "セールページ1",
              image: webjt1,
              medium: "website",
              period: "5日間",
              range: "デザイン・コーディング・実装",
              skills: "React,Javascript",
              summary: "乗馬用品専門店のセール用ランディングページを制作。",
              concept_target: "乗馬愛好家や乗馬用品を求める顧客",
              concept_needs: "乗馬用品のプレミアム品質と機能性を伝えるデザイン、洗練された色彩と明確な商品提示を使用。",
              concept_function: "明確な価格、商品ハイライト、乗馬用品の簡単な購入フローでコンバージョンに最適化。",
              concept_eva: "商品価値を効果的に伝え、購入を促進する専門的な乗馬用品セールページ。",
              persona_basic: "性別: すべて、年齢: 全年齢の乗馬愛好家",
              persona_preference: "#プレミアム品質 #プロフェッショナル装備 #ライディング性能",
              persona_orientation: "質の高い装備、プロフェッショナルなライディング、性能向上を重視",
              wireframe: "価格、機能、購入オプションを含む明確な商品紹介。乗馬用品販売に最適化されたレスポンシブデザイン。",
              link: "https://yimajiuni.com/jt-lp-coupon/",
              icon: tesla,
            },
            {
              id: 8,
              titleBk: "乗馬用品ECサイト",
              titleBl: "セールページ2",
              image: webjt2,
              medium: "website",
              period: "5日間",
              range: "デザイン・コーディング・実装",
              skills: "React,Javascript",
              summary: "乗馬用品専門店のキャンペーン用ランディングページを制作。",
              concept_target: "乗馬愛好家や乗馬用品を求める顧客",
              concept_needs: "特別オファーと乗馬用品の利点を強調する動的なキャンペーン提示、魅力的なビジュアルを使用。",
              concept_function: "特別オファー、期間限定取引、乗馬用品販売の魅力的な行動喚起を含むキャンペーン重視のデザイン。",
              concept_eva: "緊急性を創出し、即座の購入決定を促進する魅力的な乗馬用品キャンペーンページ。",
              persona_basic: "性別: すべて、年齢: 全年齢の乗馬愛好家",
              persona_preference: "#特別オファー #期間限定 #プレミアム装備",
              persona_orientation: "期間限定オファーに反応、プレミアム装備を重視、良い取引を求める",
              wireframe: "特別オファー、カウントダウンタイマー、魅力的な商品提示を含むキャンペーン重視のレイアウト。簡単な閲覧と購入のためにモバイル最適化。",
              link: "https://yimajiuni.com/jt-lp-slider/",
              icon: tesla,
            }
          ]
        }
      },
    }
  });

export default i18n;

export const skills = [
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    years: "3",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
    years: "3",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
    years: "6",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
    years: "6",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    years: "5",
  },
  {
    imageUrl: typescript,
    name: "Typescript",
    type: "Frontend",
    years: "1",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
    years: "3",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
    years: "1",
  },
  {
    imageUrl: vue,
    name: "Vue",
    type: "Frontend",
    years: "1",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    years: "1",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    years: "1",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
    years: "2",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
    years: "2",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
    years: "3",
  },
  {
    imageUrl: jquery,
    name: "JQuery",
    type: "Frontend",
    years: "4",
  },
  {
    imageUrl: illustrator,
    name: "Illustrator",
    type: "Design",
    years: "10",
  },
  {
    imageUrl: photoshop,
    name: "Photoshop",
    type: "Design",
    years: "10",
  },
  {
    imageUrl: procreate,
    name: "Procreate",
    type: "Illustration",
    years: "4",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
    years: "3",
  },
  {
    imageUrl: n8n,
    name: "N8N",
    type: "Automation",
    years: "1",
  },
];

export const experiences = [
  {
    title: "Graphic Designer/Illustrator",
    company_name: "Business Partners",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "April 2009 - Aug 2014",
    points: [
      "Web production management for amusement companies, event posters, inserts, POP and store, and design of event posters, inserts, POPs, store signs, panels, packaging, job postings, newspaper articles, free newspapers, and proofreading.",
      "design, and proofreading of text. Designing portraits for clients, layouts and designs of seating cards, catalogs, guides, and notepads for art exhibitions, etc.",
      "layout, design, etc. for art exhibitions. Other clients include furniture trading companies, construction and renovation companies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Other work includes cutting and other processing, enclosure, shipping arrangements, and all other related work. Printing of data created by outside designers,",
      "large Printing of data created by outside designers, and printing operations using large commercial printers.",
    ],
  },
  {
    title: "Graphic Designer/Apparel Assistant Designer",
    company_name: "Alpen",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Aug 2014 - Oct -2017",
    points: [
      "Input apparel sewing specifications and other fabric orders, revise design drawings, create new packaging, Designing, adding colors, and revising sportswear patterns, editing and proofreading instruction manuals, etc.",
      "Creation of comparison charts with other companies' products and planning presentation materials in support of merchandisers.",
      "also I was in charge of designing sportswear patterns, adding colors, revising, editing and proofreading instruction manuals. yoga wear and sports casual wear products (athleisure fashion) that break down the barriers between daily life and sports.",
      "yoga wear and sports casual products (athleisure fashion) that remove the boundary between daily life and sports.",
    ],
  },
  {
    title: "Graphic Designer for Product Promotion",
    company_name: "W Cosmetics",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Feb 2018 - Feb 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ECommerce developer & Designer",
    company_name: "Nextel",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "June 2020 - Present",
    points: [
      "As a graphic designer for website , i was in charge of updating the Rakuten Ichiba online store and designing sales promotions during sales.",
      "and sales promotion design for the company's official e-commerce site. HTML and CSS coding for the company's official e-commerce site.",
      "and updating of the company's official e-commerce site using HTML and CSS, as well as the production and distribution of e-mail magazines. I used HTML and CSS as markup languages.",
      "In addition to HTML and CSS, I used Javascript as a programming language without any framework. For graphic design work, I mainly used adobe photoshop and Illustrator.",
    ],
  }
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "E-Commerce Website",
    description: "Developed a e-commerce website with purchasing system. ",
    link: "https://e-commerce.yimajiuni.com/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Dashboard App",
    description: "Created a mobile first Dashboard model",
    link: "https://dashboard-model.yimajiuni.com/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Travel App",
    description:
      "Designed and built a mobile app for finding traveling packages",
    link: "https://travel-web.yimajiuni.com/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Restraunt Website",
    description: "Built a fully responsive restaurant Website.",
    link: "https://restau-web.yimajiuni.com/",
  },
];

export const promoDesigns = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "E-Commerce Website",
    description: "Developed a e-commerce website with purchasing system. ",
    link: "https://e-commerce.yimajiuni.com/",
  },
];

export const appDesigns = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "E-Commerce Website",
    description: "Developed a e-commerce website with purchasing system. ",
    link: "https://e-commerce.yimajiuni.com/",
  },
];
export const workDatas = [
  {
    id: 1,
    titleBk: "NEXT.js ECアパレル",
    titleBl: "ウェブサイト",
    image: webmock1,
    medium: "website",
    period: "約1ヶ月半",
    range: "デザイン・コーディング・実装",
    skills: "Next.JS, Typescript, Tailwind",
    summary:
      "Shopifyによる決済システム、バックエンドとNext.jsのハイブリッドレンダリングの高速処理が叶うサイト。",
    concept_target: `社会に関心の高い、価値のあるものに゙対し購買意欲が高い幅広い年代が対象`,
    concept_needs:
      "日本の和の伝統美と国際化の雰囲気を規則的に取り入れ一貫性と美しさを保ちながら、普遍的で見やすいデザインを保つため整列されたレイアウト統一。",
    concept_function:
      "ユーザーが快適に商品を閲覧し購入できるよう、重要な情報やボタンは視認性を高めるために強調。APIからのデータ取得を最適化。処理速度の高速化とUXによる購入体験の向上を意識",
    concept_eva:
      "国際的な視点での個のスタイル、姿の在り方、世界の広域を対応地域、 時事問題に強い興味を示す、アパレルとマインドが直結した世代の購買キーワードを元にカスタマイズされたデザイン。",
    persona:
      "健康でファストファッションに対し購買意欲が高い幅広い世代の幅広い人種や年代が対象",
    persona_basic: "性別:女性 年代:２０代〜",
    persona_preference: "#無駄なく#シンプルで使いやすい#色々楽しめるのが好き ",
    persona_orientation: "速い生活ペースを好む、節約をし価値のあるものに゙集中投資する傾向。日頃からアクティブ",
    wireframe: `全体のレイアウトと直感的な使用感、構造の論理的な流れを確保するため、既存のモデルとなるECサイトをリサーチし最適化し、ユーザーインタラクション、コンテンツ階層、応答性などの重要な要素に対し、一貫性があり分かりやすい仕様を目指した。
    スライダーやその他の動的パーツを追加し、レスポンシブデザインを実装し、ユーザビリティの向上を目指しました。`,
    link: "https://next-shopify.yimajiuni.com/",
    icon: tesla,
  },
  {
    id: 2,
    titleBk: "ECアパレル",
    titleBl: "ウェブサイト",
    image: webmock2,
    medium: "website",
    period: "約2週間",
    range: "デザイン・コーディング・実装",
    skills: "React, Javascript, CSS",
    summary:
      "スライダーによるアイキャッチと、購入と買い物カート追加システムを搭載したECサイトをReactのContextAPIを用いて制作。",
    concept_target: `健康でファストファッションに対し購買意欲が高い幅広い年代が対象`,
    concept_needs:
      "広々とした印象とスタイリッシュで見やすい普遍的なデザインを保つため整列されたレイアウト、かつアクティブな印象で見やすくページの一貫性と美しさを保つためデザインを統一。",
    concept_function:
      "ユーザーが快適に商品を閲覧し購入できるよう、重要な情報やボタンは視認性を高めるために強調。APIからのデータ取得を最適化。",
    concept_eva:
      "ユニバーサルな視点でのスタイル、健康的な美しさ、姿の在り方、世界の広域を対応地域、 SDGsといった新しい世代の購買キーワードを元にカスタマイズされたデザイン。",
    persona:
      "健康でファストファッションに対し購買意欲が高い幅広い世代の幅広い人種や年代が対象",
    persona_basic: "性別:男女他+ 年代:キッズ〜シニア。",
    persona_preference: "#無駄なく#シンプルで使いやすい#色々楽しめるのが好き ",
    persona_orientation: "速い生活ペースを好む、消費は楽しみ",
    wireframe: `全体のレイアウトと直感的な使用感、構造の論理的な流れを確保するため、既存のモデルとなるECサイトをリサーチし最適化し、ユーザーインタラクション、コンテンツ階層、応答性などの重要な要素に対し、一貫性があり分かりやすい仕様を目指した。
    スライダーやその他の動的パーツを追加し、レスポンシブデザインを実装し、ユーザビリティの向上を目指しました。`,
    link: "https://e-commerce.yimajiuni.com/",
    icon: tesla,
  },
  {
    id: 3,
    titleBk: "ダッシュボード",
    titleBl: "アプリ",
    image: webmock3,
    medium: "website",
    period: "４日間",
    range: "デザイン・コーディング・実装",
    skills: "React, Javascript,SCSS",
    summary:
      "最適化された癒やしの雰囲気とトレンド感のあるモバイル対応ダッシュボードモデル。",
    concept_target: `観葉植物の販売や在庫管理を担当する店舗経営者やスタッフ`,
    concept_needs:
      "観葉植物の販売サイトを管理するシステムとして緑色と癒しをキーワードにしたアクティビティを彷彿させるキーヴィジュアルを挿入。 ",
    concept_function:
      "瞑想的な雰囲気を保ちながらもプロフェッショナルで安定した動作性を叶える為パフォーマンスを最適化。軽量化されたシステムと汎用性のあるシンプルなダッシュボード。",
    concept_eva:
      "一人時間を癒しに、楽しく、を交換交流。\"をテーマに観葉植物だけでなくあらゆる癒しをテーマとする商品の物販に向いたデザイン。",
    persona: "観葉植物の販売や在庫管理を担当する店舗経営者やスタッフ",
    persona_basic: "女性性を意識・重視した男女他＋ 年代:30代一人暮らし世代 ",
    persona_preference: "#想い出、#こだわり、#自分らしく ",
    persona_orientation: "自分のペースで行動、丁寧な生活を好む。",
    wireframe: `全体のレイアウトと構造に論理的な流れと直感的なナビゲーションを確保するため、ユーザーインタラクション、コンテンツ階層、応答性などの重要な要素に対し、一貫性があり分かりやすい仕様を目指しました。
    動画で動きのあるインターフェースとその他の動的パーツを導入後、レスポンシブデザインを実装。`,
    link: "https://dashboard-model.yimajiuni.com/",
    icon: tesla,
  },
  {
    id: 4,
    titleBk: "旅行予約",
    titleBl: "ウェブサイト",
    image: webmock4,
    medium: "website",
    period: "4日間",
    range: "デザイン・コーディング・実装",
    skills: "React, Javascript,SCSS",
    summary: "魅力が伝わりやすい。旅行のパッケージ検索用のアプリ＆WEB。",
    concept_target:
      "国内外の経済力に余裕がある健康な社会人から中高年齢層で特に日本国内インバウンド旅行中心の利用者",
    concept_needs:
      "リッチで大胆なビジュアルとシンプルなナビゲーションを組み合わせ旅行先の魅力を最大限に伝え、鮮やかな色彩と高画質な写真を使用し旅行の楽しさと期待を引き出します。",
    concept_function:
      "ビジュアルに注力しながらもユーザーが直感的に操作できるデザインを心掛け、遊び心ある操作性でユーザーの関心を惹きつけます。また画像サイズや不要ファイルを最大限に省き機能面でのエラーを修正し機能を最適化。",
    concept_eva:
      "パッケージの魅力がより明確にリアルに伝わり、思い立ったら予約出来る、ブッキングウェブサイト。",
    persona_basic: "男女＋年代:健康な全年齢、核家族ファミリー層 ",
    persona_preference: "#レジャー#知的好奇心#趣味と交流 ",
    persona_orientation: "体験重視、直感的で近未来的なライフスタイル ",
    wireframe: `モバイルファーストでデザインし、タッチ操作のしやすさを重視したボタンを優先しデザイン。地図や検索機能などを充実させ、フィードバックを基に修正。`,
    link: "https://travel-web.yimajiuni.com/",
    icon: tesla,
  },
  {
    id: 5,
    titleBk: "レストラン",
    titleBl: "ウェブサイト",
    image: webmock5,
    medium: "website",
    period: "5日間",
    range: "デザイン・コーディング・実装",
    skills: "React,Javascript",
    summary:
      "視覚的にも料理の魅力が伝わりやすい。レスポンシブのレストランのウェブサイトをフロントエンド設計・作成しました。",
    concept_target: `地元の住民や観光客で、美味しい食事と快適なダイニング体験を求める幅広い年齢層`,
    concept_needs:
      "店舗の雰囲気と料理の美味しさが伝わる、温かみのある色彩とフォントを使用しながら、合理的なレイアウトで視覚的にも写真を引き立てるデザイン。 ",
    concept_function:
      "ページの読み込み速度を最適化し、ユーザーが快適にサイトを利用できるように、画像の圧縮とキャッシング戦略を取り入れました。",
    concept_eva:
      "限られたリソースでリッチな体験を実現し、嗜好に沿ってカスタマイズ可能な軽量でシンプルなレストランウェブサイト。",
    persona_basic:
      "性別:男女他+ 年代:キッズ、プライム年代、シニア全て。男女＋年代:健康な全年齢",
    persona_preference:
      "#ホームレシピ #地域のコミュニティ #一家団欒の食事で家族の絆 ",
    persona_orientation:
      "古い下町風情の密なコミュニティ形成、古風な家族＆人間関係。週末は親しい仲で揃って食事 ",
    wireframe: `再利用可能なコンポーネントをReactで実装。メニューや予約情報は見やすく、ユーザーが簡単に必要な情報にアクセスできるレイアウト、直感的なナビゲーションを重視。
     メニューや予約システムなどの主要な機能は一枚のページでアクセスしやすく、様々なデバイスからアクセス出来るレスポンシブデザインを導入。サイト全体の使用性とパフォーマンスをテストし、必要に応じて修正。`,
    link: "https://restau-web.yimajiuni.com/",
    icon: tesla,
  },
  //要修正
  {
    id: 6,
    titleBk: "建築会社",
    titleBl: "ランディングページ",
    image: web6,
    medium: "website",
    period: "5日間",
    range: "デザイン・コーディング・実装",
    skills: "React,Javascript",
    summary:
      "視覚的にも料理の魅力が伝わりやすい。レスポンシブのレストランのウェブサイトをフロントエンド設計・作成しました。",
    concept_target: `地元の住民や観光客で、美味しい食事と快適なダイニング体験を求める幅広い年齢層`,
    concept_needs:
      "店舗の雰囲気と料理の美味しさが伝わる、温かみのある色彩とフォントを使用しながら、合理的なレイアウトで視覚的にも写真を引き立てるデザイン。 ",
    concept_function:
      "ページの読み込み速度を最適化し、ユーザーが快適にサイトを利用できるように、画像の圧縮とキャッシング戦略を取り入れました。",
    concept_eva:
      "限られたリソースでリッチな体験を実現し、嗜好に沿ってカスタマイズ可能な軽量でシンプルなレストランウェブサイト。",
    persona_basic:
      "性別:男女他+ 年代:キッズ、プライム年代、シニア全て。男女＋年代:健康な全年齢",
    persona_preference:
      "#ホームレシピ #地域のコミュニティ #一家団欒の食事で家族の絆 ",
    persona_orientation:
      "古い下町風情の密なコミュニティ形成、古風な家族＆人間関係。週末は親しい仲で揃って食事 ",
    wireframe: `再利用可能なコンポーネントをReactで実装。メニューや予約情報は見やすく、ユーザーが簡単に必要な情報にアクセスできるレイアウト、直感的なナビゲーションを重視。
     メニューや予約システムなどの主要な機能は一枚のページでアクセスしやすく、様々なデバイスからアクセス出来るレスポンシブデザインを導入。サイト全体の使用性とパフォーマンスをテストし、必要に応じて修正。`,
    link: "https://genecon-lp.yimajiuni.com/",
    icon: tesla,
  },
  //要修正
  {
    id: 7,
    titleBk: "乗馬用品ECサイト",
    titleBl: "セールページ1",
    image: webjt1,
    medium: "website",
    period: "5日間",
    range: "デザイン・コーディング・実装",
    skills: "React,Javascript",
    summary:
      "視覚的にも料理の魅力が伝わりやすい。レスポンシブのレストランのウェブサイトをフロントエンド設計・作成しました。",
    concept_target: `地元の住民や観光客で、美味しい食事と快適なダイニング体験を求める幅広い年齢層`,
    concept_needs:
      "店舗の雰囲気と料理の美味しさが伝わる、温かみのある色彩とフォントを使用しながら、合理的なレイアウトで視覚的にも写真を引き立てるデザイン。 ",
    concept_function:
      "ページの読み込み速度を最適化し、ユーザーが快適にサイトを利用できるように、画像の圧縮とキャッシング戦略を取り入れました。",
    concept_eva:
      "限られたリソースでリッチな体験を実現し、嗜好に沿ってカスタマイズ可能な軽量でシンプルなレストランウェブサイト。",
    persona_basic:
      "性別:男女他+ 年代:キッズ、プライム年代、シニア全て。男女＋年代:健康な全年齢",
    persona_preference:
      "#ホームレシピ #地域のコミュニティ #一家団欒の食事で家族の絆 ",
    persona_orientation:
      "古い下町風情の密なコミュニティ形成、古風な家族＆人間関係。週末は親しい仲で揃って食事 ",
    wireframe: `再利用可能なコンポーネントをReactで実装。メニューや予約情報は見やすく、ユーザーが簡単に必要な情報にアクセスできるレイアウト、直感的なナビゲーションを重視。
     メニューや予約システムなどの主要な機能は一枚のページでアクセスしやすく、様々なデバイスからアクセス出来るレスポンシブデザインを導入。サイト全体の使用性とパフォーマンスをテストし、必要に応じて修正。`,
    link: "https://yimajiuni.com/jt-lp-coupon/",
    icon: tesla,
  },
  //要修正
  {
    id: 8,
    titleBk: "乗馬用品ECサイト",
    titleBl: "セールページ2",
    image: webjt2,
    medium: "website",
    period: "5日間",
    range: "デザイン・コーディング・実装",
    skills: "React,Javascript",
    summary:
      "視覚的にも料理の魅力が伝わりやすい。レスポンシブのレストランのウェブサイトをフロントエンド設計・作成しました。",
    concept_target: `地元の住民や観光客で、美味しい食事と快適なダイニング体験を求める幅広い年齢層`,
    concept_needs:
      "店舗の雰囲気と料理の美味しさが伝わる、温かみのある色彩とフォントを使用しながら、合理的なレイアウトで視覚的にも写真を引き立てるデザイン。 ",
    concept_function:
      "ページの読み込み速度を最適化し、ユーザーが快適にサイトを利用できるように、画像の圧縮とキャッシング戦略を取り入れました。",
    concept_eva:
      "限られたリソースでリッチな体験を実現し、嗜好に沿ってカスタマイズ可能な軽量でシンプルなレストランウェブサイト。",
    persona_basic:
      "性別:男女他+ 年代:キッズ、プライム年代、シニア全て。男女＋年代:健康な全年齢",
    persona_preference:
      "#ホームレシピ #地域のコミュニティ #一家団欒の食事で家族の絆 ",
    persona_orientation:
      "古い下町風情の密なコミュニティ形成、古風な家族＆人間関係。週末は親しい仲で揃って食事 ",
    wireframe: `再利用可能なコンポーネントをReactで実装。メニューや予約情報は見やすく、ユーザーが簡単に必要な情報にアクセスできるレイアウト、直感的なナビゲーションを重視。
     メニューや予約システムなどの主要な機能は一枚のページでアクセスしやすく、様々なデバイスからアクセス出来るレスポンシブデザインを導入。サイト全体の使用性とパフォーマンスをテストし、必要に応じて修正。`,
    link: "https://yimajiuni.com/jt-lp-slider/",
    icon: tesla,
  },

  { id: 9, link: "https://yimajiuni.com/promotions/eq-bo.jpg" },
  { id: 10, link: "https://yimajiuni.com/promotions/eq-ch.jpg" },
  { id: 11, link: "https://yimajiuni.com/promotions/eq-cu.jpg" },
  { id: 12, link: "https://yimajiuni.com/promotions/eq-gr1.jpg" },
  { id: 13, link: "https://yimajiuni.com/promotions/eq-gr2.jpg" },
  { id: 14, link: "https://yimajiuni.com/promotions/eq-gr3.jpg" },
  { id: 15, link: "https://yimajiuni.com/promotions/eq-gr4.jpg" },
  { id: 16, link: "https://yimajiuni.com/promotions/eq-wh.jpg" },
  { id: 17, link: "https://yimajiuni.com/promotions/eq-wh.jpg" },
  {
    id: 18,
    link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=233-88&t=TGbd5tplvGsffkfO-1&starting-point-node-id=236%3A233",
  },
  {
    id: 19,
    link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=328-136&t=AMryIaIjpqI2Y7cZ-1&starting-point-node-id=327%3A190",
  },
  {
    id: 20,
    link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=298-558&t=8uCbvN2drsBtXyv6-1&starting-point-node-id=299%3A681",
  },
  {
    id: 21,
    link: "https://css-scaler.yimajiuni.com/",
  },
  {
    id: 22,
    link: "https://blog-app.yimajiuni.com/",
  },
  {
    id: 23,
    link: "https://yimajiuni.com/dtp/portfolio-yuko.pdf",
  },
];
export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/yimajiuni",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/yimajiuni/",
  },
  {
    name: "Fiverr",
    iconUrl: fiverr,
    link: "https://www.fiverr.com/",
  },
  {
    name: "Instagram",
    iconUrl: instagram,
    link: "https://www.instagram.com/pichgnard",
  },
  {
    name: "Soundcloud",
    iconUrl: soundcloud,
    link: "https://soundcloud.com/sheltre",
  },
];
