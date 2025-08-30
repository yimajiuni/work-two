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
  web1,
  web2,
  web3,
  web4,
  web5,
  webjt1,
  webjt2,
  dtp1,
  webmock1,
  webmock2,
  webmock3,
  webmock4,
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
          common: {
            close: "Close"
          },
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
              title: "Web & Graphic Designer and Coder",
              company_name: "Nextel",
              icon: meta,
              iconBg: "#a2d2ff",
              date: "June 2020 - Present",
              points: [
                "As a graphic designer for website , i was in charge of updating the Rakuten Ichiba online store and designing sales promotions during sales.",
                "and sales promotion design for the company's official e-commerce site. HTML and CSS coding for the company's official e-commerce site.",
                "and updating of the company's official e-commerce site using HTML and CSS, as well as the production and distribution of e-mail magazines. I used HTML and CSS as markup languages.",
                "In addition to HTML and CSS, I used Javascript as a programming language without any framework. For graphic design work, I mainly used adobe photoshop and Illustrator for design and editing, then Figma for wire.",
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
              name: "E-Commerce Website",
              description:
                "Developed a e-commerce website with purchasing system.",
              persona:
                "Persona:A wide range of people of all ages and ethnicities who are healthy and have high desires to buy fast fashion.",
              duration: "Production Period: 2 weeks(45h)",
              responsibility:
                "Areas of work: Functional design, UX/UI design, coding, debugging, deployment",
              link: "https://e-commerce.yimajiuni.com/",
            },
            {
              id: 2,
              preview: web2,
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
              id: 3,
              preview: web3,
              theme: "btn-back-blue",
              name: "Travel App",
              description: `Designed and built a mobile app for finding traveling packages.
                Production Period:: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://travel-web.yimajiuni.com/",
            },
            {
              id: 4,
              preview: web4,
              theme: "btn-back-pink",
              name: "Restaurant Website",
              description: `Built a fully responsive restaurant Website.
                Production Period: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://restau-web.yimajiuni.com/",
            },
            //修正
            {
              id: 5,
              preview: web5,
              theme: "btn-back-pink",
              name: "LP for general constructing company",
              description: `Built a fully responsive restaurant Website.
                Production Period: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://genecon-lp.yimajiuni.com/",
            },
            //修正
            {
              id: 6,
              preview: webjt1,
              theme: "btn-back-pink",
              name: "Sales LP for horseriding products1",
              description: `Built a fully responsive restaurant Website.
                Production Period: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://yimajiuni.com/jt-lp-coupon/",
            },
            //修正
            {
              id: 7,
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
              id: 8,
              preview: eqbo,
              name: "Ad for rain boots",
              description:
                "The sales promotion,which is with a polaroid-like style design and inspired by the background of SNS culture that is to be used by young people and a wide range of other generations.",
              link: "https://yimajiuni.com/promotions/eq-bo.jpg",
            },
            {
              id: 9,
              preview: eqch,
              name: "Ad for horse riding chaps",
              description:
                "Sophisticated, easy-to-read promotion inspired by fashion magazines. Add cuts of model images as needed.",
              link: "https://yimajiuni.com/promotions/eq-ch.jpg",
            },
            {
              id: 10,
              preview: eqcu,
              name: "Ad for riding culottes",
              description:
                "Showcase price, catch copy, product images and effectively organize description and functionality display to express overall brand color and promote sales targeting a wide range of ages for the domestic market.",
              link: "https://yimajiuni.com/promotions/eq-cu.jpg",
            },
            {
              id: 11,
              preview: eqgr1,
              name: "Ad for riding gloves 1",
              description:
                "Promotion of riding gloves with special fabric for winter moisture retention and warmth.",
              link: "https://yimajiuni.com/promotions/eq-gr1.jpg",
            },
            {
              id: 12,
              preview: eqgr2,
              name: "Ad for horse riding leather gloves",
              description:
                "Promotion of well-fitting synthetic leather gloves for riding. Design to match the product emphasizing sportiness and functional aspects.",
              link: "https://yimajiuni.com/promotions/eq-gr2.jpg",
            },
            {
              id: 13,
              preview: eqgr3,
              name: "Ad for horseriding accessories",
              description:
                "Promotion that expresses friendliness and elegance, targeting all generations.",
              link: "https://yimajiuni.com/promotions/eq-gr3.jpg",
            },
            {
              id: 14,
              preview: eqgr4,
              name: "Ad for horse riding gloves 3",
              description:
                "Promotion of silicone grip glove with cost-effective with sophisticated visual.",
              link: "https://yimajiuni.com/promotions/eq-gr4.jpg",
            },
            {
              id: 15,
              preview: eqhe,
              name: "Ad of horse riding helmets",
              description:
                "Easy to read and sophisticated promotion inspired by magazines",
              link: "https://yimajiuni.com/promotions/eq-he.jpg",
            },
            {
              id: 16,
              preview: eqwh,
              name: "Ad for a horse riding whip",
              description:
                "Sales promotion with expressions that accentuate 'harmony' and 'monogram' to match the distinctive product Functional display is easy to read and aethethically appealing.",
              link: "https://yimajiuni.com/promotions/eq-wh.jpg",
            },
          ],

          //app
          appDesigns: [
            {
              id: 17,
              preview: app1,
              theme: "btn-back-pink",
              name: "EC App UX Design",
              description:
                "UX of shopping application from adding favorites and cart to purchase was designed by Figma.",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=233-88&t=TGbd5tplvGsffkfO-1&starting-point-node-id=236%3A233",
            },
            {
              id: 18,
              preview: app2,
              theme: "btn-back-blue",
              name: "Fitness App UX Design",
              description:
                "Designed an app with an attractive slider for each training menu UX on the login screen by Figma.",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=328-136&t=AMryIaIjpqI2Y7cZ-1&starting-point-node-id=327%3A190",
            },
            {
              id: 19,
              preview: app3,
              theme: "btn-back-red",
              name: "Banking App UX Design",
              description:
                "Mobile Banking App designed with monthly expense comparison graph of deposits, an investment section and purchase history feature.",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=298-558&t=8uCbvN2drsBtXyv6-1&starting-point-node-id=299%3A681",
            },
          ],
          //dtp
          dtpDesigns: [
            {
              id: 20,
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
              title: "Bespoke Ecommerce websites",
              titleHighlight: "with Next.js & Shopify",
              description: "Builds and polishes on Powerful architecture that achieves 30%+ sales increase through branding and high-speed loading. The functional things that are made of dazzling and twinkle things. To make the actions of 'buying' as enjoyable as possible.",
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
                description: "See our Next.js x Shopify solution in action",
                button: "Visit a Demo"
              }
            },
            section3: {
              title: "Next.js and Branding",
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
                  description: "By our dedicated listening shapes project-specific purposes and feelings Provide branding that resonates with your audience through maximized efficiency and constantly refined technology."
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
                    title: "The Future of E-commerce, Now in Your Hands",
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
                    title: "Next.js's Unique Technology Brings Revolutionary Performance",
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
                        title: "Enourmous Display Speed Creates Truly Joyful Customer Purchase Experiences",
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
                    title: "Real Example: Medium-sized E-commerce Site Achieves 30% Sales Increase with Next.js Implementation",
                    case1: "SEO improvements from page speed enhancements led to higher search rankings for many keywords, resulting in 140% increase in organic traffic.",
                    case2: "Global companies like sports brand 'Nike' and cosmetics brand 'Lancôme' have also migrated to headless commerce seeking flexibility and high performance.",
                    return: "A return of approximately 15 times the investment amount is achievable within one year. Initial investment can be recovered in less than 3 months. Once implemented, you can continuously benefit from the effects. The dual effect of reduced server costs and increased sales leads to long-term profit improvement.",
                    comparison: "Traditional e-commerce sites have the challenge of being difficult to modify because design (frontend) and systems (backend) are integrated, meaning even small design changes affect the entire system, making modifications difficult and costly.",
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
                          traditional: "月額$4,500",
                          nextjs: "月額$2,800",
                          improvement: "-38%"
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
                    description1: "Many customers actually give up right before buying because the site is slow. The sites we create are extremely 'fast', so you don't have to worry about that.",
                    description2: "Plus, instead of typical template designs, we can create cool and user-friendly designs that bring out 100% of your brand's appeal.",
                    description3: "The complex backend product management and payments are handled by Shopify, which has trust and proven results, so you can feel secure.",
                    description4: "In other words, it's the best of both worlds: 'the best appearance and speed' combined with 'world-standard secure systems'. This becomes a powerful weapon for your business."
                  }
                }
              }
            },
            section4: {
              title: "Get Ready with Your Custom Quote",
              description: "Answer a few questions to get a personalized quote for your project. Selecting your requirements, project scale, and preferences helps us understand your needs and provide the most accurate quote to your project.",
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
                    multilingual: "Multi-language Support"
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
                    cool: "Cool",
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
                    cool2: "Cool",
                    colorful: "Colorful"
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
        },
      },
      jp: {
        translation: {
          common: {
            close: "閉じる"
          },
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
              title: "Web & Graphic Designer",
              company_name: "Nextel",
              icon: meta,
              iconBg: "#a2d2ff",
              date: "June 2020 - Present",
              points: [
                `
                Webグラフィックデザイナーとして直属の楽天市場のオンラインストア更新業務、セール、キャンペーン時の販促ページデザインを担当。
                自社公式ECサイトの制作にはHTMLとCSSを使ったコーディング、更新作業とメールマガジン制作配信を行いました。使用言語はマークアップとしてHTMLとCSSに加えプログラミング言語はフレームワークなしのJavascriptを使用しました。
                グラフィックデザインの仕事には主にadobe photoshop とillustratorを細部のデザイン制作に、figmaをワイヤーフレームと全体像のデザインに使用。`,
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
              id: 2,
              preview: web2,
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
              id: 3,
              preview: web3,
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
              id: 4,
              preview: web4,
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
              id: 5,
              preview: web5,
              theme: "btn-back-pink",
              name: "建築会社概要LP",
              description: `Built a fully responsive restaurant Website.
                Production Period: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://genecon-lp.yimajiuni.com/",
            },
            {
              id: 6,
              preview: webjt1,
              theme: "btn-back-pink",
              name: "乗馬用品専門店のモール用セールLP",
              description: `Built a fully responsive restaurant Website.
                Production Period: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://yimajiuni.com/jt-lp-coupon/",
            },
            {
              id: 7,
              preview: webjt2,
              theme: "btn-back-pink",
              name: "乗馬用品専門店のモール用キャンペーンLP",
              description: `Built a fully responsive restaurant Website.
                Production Period: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
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
              id: 8,
              preview: eqbo,
              name: "レインブーツの販売促進",
              description:
                "ポラロイド風のデザインやSNS文化を彷彿させるデザインを取り入れたヤング世代から他の幅広い世代迄をターゲットとして作成。",
              link: "https://yimajiuni.com/promotions/eq-bo.jpg",
            },
            {
              id: 9,
              preview: eqch,
              name: "乗馬用チャップスの販売促進",
              description:
                "ファッション誌からインスパイアされた読みやすく洗練されたプロモーション。必要に応じてモデル画像のカットを追加。",
              link: "https://yimajiuni.com/promotions/eq-ch.jpg",
            },
            {
              id: 10,
              preview: eqcu,
              name: "乗馬用キュロットの販売促進",
              description:
                "値段、キャッチコピー、商品画像のショーケースと説明文と機能表示を効果的に整理しブランド色を全体に表現し、国内向けの幅広い年代をターゲットとした販売促進画像。",
              link: "https://yimajiuni.com/promotions/eq-cu.jpg",
            },
            {
              id: 11,
              preview: eqgr1,
              name: "乗馬用グローブの販売促進1",
              description:
                "冬用保湿保温特殊生地採用の乗馬用グローブのプロモーション。",
              link: "https://yimajiuni.com/promotions/eq-gr1.jpg",
            },
            {
              id: 12,
              preview: eqgr2,
              name: "乗馬用合皮グローブの販売促進2",
              description:
                "フィット感の高い乗馬用合皮グローブのプロモーション。スポーティさと機能面を強調した製品に合わせたデザイン。",
              link: "https://yimajiuni.com/promotions/eq-gr2.jpg",
            },
            {
              id: 13,
              preview: eqgr3,
              name: "乗馬用グローブアクセサリーの販売促進",
              description:
                "すべての世代をターゲットにした親しみやすさと上品さが表現されたプロモーション",
              link: "https://yimajiuni.com/promotions/eq-gr3.jpg",
            },
            {
              id: 14,
              preview: eqgr4,
              name: "乗馬用グローブの販売促進3",
              description:
                "コストパフォーマンスに優れかつ洗練されたイメージのシリコングリップグローブのプロモーション。",
              link: "https://yimajiuni.com/promotions/eq-gr4.jpg",
            },
            {
              id: 15,
              preview: eqhe,
              name: "乗馬用ヘルメットの販売促進",
              description:
                "ファッション誌からインスパイアされた読みやすく洗練されたプロモーション。",
              link: "https://yimajiuni.com/promotions/eq-he.jpg",
            },
            {
              id: 16,
              preview: eqwh,
              name: "乗馬用ムチの販売促進",
              description:
                "特徴ある製品に合わせ「和」「モノグラム」を引き立たせる表現の販売促進機能表示は見やすくかつファッション性を加味。",
              link: "https://yimajiuni.com/promotions/eq-wh.jpg",
            },
          ],
          //app
          appDesigns: [
            {
              id: 17,
              preview: app1,
              theme: "btn-back-pink",
              name: "ECショッピングアプリ",
              description:
                "お気に入り追加、カート追加機能から購入迄ショッピングアプリのUXをFigmaで設計しました。",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=233-88&t=TGbd5tplvGsffkfO-1&starting-point-node-id=236%3A233",
            },
            {
              id: 18,
              preview: app2,
              theme: "btn-back-blue",
              name: "フィットネスショップアプリ",
              description:
                "ログイン画面で各トレイニングメニューUXを魅力的にスライダー化したアプリをFigmaで設計。",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=328-136&t=AMryIaIjpqI2Y7cZ-1&starting-point-node-id=327%3A190",
            },
            {
              id: 19,
              preview: app3,
              theme: "btn-back-red",
              name: "銀行ネットバンキングアプリ",
              description:
                "預金額の月間比較グラフや投資セクション購入履歴機能を設計したモバイル銀行アプリ。",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=298-558&t=8uCbvN2drsBtXyv6-1&starting-point-node-id=299%3A681",
            },
          ],
          //dtp
          dtpDesigns: [
            {
              id: 20,
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
              title: "ECサイトのBespokeブランドを",
              titleHighlight: "Next.js & Shopifyで",
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
                description: "Next.js x Shopifyソリューションの実際の動作をご覧ください。",
                button: "デモサイトを訪問"
              }
            },
            section3: {
              title: "ヘッドレスコマースを導入し売上30%増を達成",
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
                    title: "独自のレンダリング方式により高速化によりユーザー体験が大幅に向上。",
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
                    title: "Next.jsでECサイトを構築するメリットとは？",
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
                    title: "こんなお悩みに直面していませんか",
                    problems: [
                      "「ページ読み込み速度が遅く、特にモバイルでの離脱率が高い」",
                      "「商品数が多く、全ページのSSRによりサーバーコストが高騰」",
                      "「SEOパフォーマンスが低く、オーガニック流入が伸び悩み」",
                      "「在庫表示の遅延により、注文後に「在庫切れ」となるケースが多発」",
                      "「既存のプラットフォームのデザインに限界を感じ、ブランドイメージを十分に表現できない」",
                    ],
                  },
                  section5: {
                    title: "実際にNext.jsを導入して売上30%増を達成した中規模ECサイトの例",
                    case1: "ページ速度改善によるSEO効果により多くのキーワードでの検索順位が向上し、オーガニックトラフィックが140%増加。",
                    case2: "スポーツブランドの「ナイキ」や化粧品ブランドの「ランコム」といった世界的企業も、柔軟性と高いパフォーマンスを求めてヘッドレスコマースへ移行しています。",
                    return: "1年間で投資額の約15倍のリターンが実現可能。初期投資は3ヶ月弱で回収できる計算です。一度実装すれば継続的に効果が得られる点です。サーバーコスト削減と売上増加という二重の効果により、長期的な収益向上が見込めます。",
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
                          traditional: "月額$4,500",
                          nextjs: "月額$2,800",
                          improvement: "-38%"
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
                      "デザインのテンプレートに縛られ、実現したい表現を諦めたことがある",
                      "セールやキャンペーンのたびに、サイトの更新作業に手間取っている",
                      "SEOの順位がなかなか上がらず、集客に課題を感じている",
                      "将来的にアプリや新しいデバイスでの商品販売も考えている",
                      "商品情報やキャンペーンの更新頻度は？",
                      "検索エンジンからの流入が重要か？",
                      "ユーザーごとにコンテンツが異なるか？",
                      "リアルタイム性が求められるか？",
                      "インタラクションの量はどれくらいか？",
                      "高トラフィックに耐える必要があるか？",
                    ]
                  },
                  section7: {
                    title: "The 'Freedom' Realized by Headless Commerce",
                    description1: "This service adopts an architecture called 'headless commerce'. This is a concept that separates the 'frontend (= head)' that customers interact with from the 'backend (product management and payment systems)' that runs behind the scenes.",
                    description2: "What are the benefits of this separation?",
                    benefits: {
                      design: {
                        title: "デザインの完全な自由",
                        description: "バックエンドであるShopifyの機能に影響されることなく、フロントエンドを自由に設計・開発できます。これにより、他のどこにもない、あなたのブランドだけのユニークな顧客体験を創造することが可能です。"
                      },
                      marketing: {
                        title: "迅速なマーケティング施策",
                        description: "You can quickly and flexibly perform frontend modifications such as urgent campaigns or adding new content. Since you don't need to worry about backend constraints, you can respond quickly to market trends."
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
                        description: "Because frontend and backend are independent, even if your business expands in the future and access increases rapidly, you can scale each independently. For example, expansion to future new devices like smartwatches or VR becomes easier."
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
                    description1: "サイトが重いせいで、買う直前でやめてしまうお客様、結構多いんです。私たちの作るサイトはとにかく「速い」ので、その心配がありません。",
                    description2: "それに、よくあるテンプレート通りのデザインじゃなくて、あなたのブランドの魅力を100%引き出す、かっこよくて使いやすいデザインにできます。",
                    description3: "裏側の難しい商品管理や決済は、信頼と実績のあるShopifyにお任せするので安心です。",
                    description4: "つまり、「最高の見た目と速さ」と「世界標準の安心なシステム」の、いいとこ取り。これが、あなたのビジネスの強力な武器になります。"
                  }
                }
              }
            },
            section4: {
              title: "あなたに合った御見積もりを準備",
              description: "プロジェクトのパーソナライズされた見積もりを取得するために、いくつかの質問にお答えください。要件、プロジェクト規模、好み等のあなたのニーズを理解し、最も正確な見積もりを提供するのに役立ちます。",
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
                    cool: "かっこいい",
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
                    cool2: "クール",
                    colorful: "カラフル"
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
          }
        }
      }
    }
  });

export default i18n;

export const skills = [
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    years: "1",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
    years: "1",
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
    years: "1",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
    years: "1",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
    years: "2",
  },
  {
    imageUrl: jquery,
    name: "JQuery",
    type: "Frontend",
    years: "2",
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
    years: "2",
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
    title: "Web & Graphic Designer",
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
  },
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
  /*
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },*/
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
    titleBk: "ECアパレル",
    titleBl: "ウェブサイト",
    image: webmock1,
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
    id: 2,
    titleBk: "ダッシュボード",
    titleBl: "アプリ",
    image: webmock2,
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
    id: 3,
    titleBk: "旅行予約",
    titleBl: "ウェブサイト",
    image: webmock3,
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
    id: 4,
    titleBk: "レストラン",
    titleBl: "ウェブサイト",
    image: webmock4,
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
    id: 5,
    titleBk: "建築会社",
    titleBl: "ランディングページ",
    image: web5,
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
    id: 6,
    titleBk: "レストラン",
    titleBl: "ウェブサイト",
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
    id: 7,
    titleBk: "レストラン",
    titleBl: "ウェブサイト",
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

  { id: 8, link: "https://yimajiuni.com/promotions/eq-bo.jpg" },
  { id: 9, link: "https://yimajiuni.com/promotions/eq-ch.jpg" },
  { id: 10, link: "https://yimajiuni.com/promotions/eq-cu.jpg" },
  { id: 11, link: "https://yimajiuni.com/promotions/eq-gr1.jpg" },
  { id: 12, link: "https://yimajiuni.com/promotions/eq-gr2.jpg" },
  { id: 13, link: "https://yimajiuni.com/promotions/eq-gr3.jpg" },
  { id: 14, link: "https://yimajiuni.com/promotions/eq-gr4.jpg" },
  { id: 15, link: "https://yimajiuni.com/promotions/eq-wh.jpg" },
  { id: 16, link: "https://yimajiuni.com/promotions/eq-wh.jpg" },
  {
    id: 17,
    link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=233-88&t=TGbd5tplvGsffkfO-1&starting-point-node-id=236%3A233",
  },
  {
    id: 18,
    link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=328-136&t=AMryIaIjpqI2Y7cZ-1&starting-point-node-id=327%3A190",
  },
  {
    id: 19,
    link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=298-558&t=8uCbvN2drsBtXyv6-1&starting-point-node-id=299%3A681",
  },
  {
    id: 20,
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
