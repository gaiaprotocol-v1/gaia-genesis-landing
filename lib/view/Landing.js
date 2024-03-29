"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const aos_1 = __importDefault(require("aos"));
const msg_js_1 = __importDefault(require("msg.js"));
const BrowserInfo_1 = __importDefault(require("../BrowserInfo"));
class Landing {
  constructor() {
    document.title = (0, msg_js_1.default)("TITLE");
    let select;
    skynode_1.BodyNode.append(
      (this.container = (0, skynode_1.el)(
        ".landing-view",
        (0, skynode_1.el)(
          "header.header",
          (0, skynode_1.el)(
            ".nav",
            (0, skynode_1.el)(
              ".logo",
              (0, skynode_1.el)(
                "a",
                { href: "#init" },
                (0, skynode_1.el)("img", {
                  src: "/images/logo.png",
                  alt: "gaia protocol logo",
                })
              )
            ),
            (0, skynode_1.el)("input.menu-btn", {
              type: "checkbox",
              id: "menu-btn",
            }),
            (0, skynode_1.el)(
              "label.menu-icon",
              { for: "menu-btn" },
              (0, skynode_1.el)("span.navicon")
            ),
            (0, skynode_1.el)(
              "ul.menu",
              (0, skynode_1.el)(
                "li.item",
                (0, skynode_1.el)("a", (0, msg_js_1.default)("WHY_MENU"), {
                  href: "#WHY",
                })
              ),
              (0, skynode_1.el)(
                "li.item",
                (0, skynode_1.el)(
                  "a",
                  (0, msg_js_1.default)("BUYBACK_FUND_MENU"),
                  { href: "#FUND" }
                )
              ),
              (0, skynode_1.el)(
                "li.item",
                (0, skynode_1.el)(
                  "a",
                  (0, msg_js_1.default)("SNEAK_PEEK_MENU"),
                  { href: "#NFT" }
                )
              ),
              (0, skynode_1.el)(
                "li.item",
                (0, skynode_1.el)("a", (0, msg_js_1.default)("TEAM_MENU"), {
                  href: "#TEAM",
                })
              ),
              (0, skynode_1.el)(
                "li.item",
                (0, skynode_1.el)("a", (0, msg_js_1.default)("PARTNER_MENU"), {
                  href: "#PARTNER",
                })
              ),
              (0, skynode_1.el)(
                "li.item",
                (0, skynode_1.el)("a.enter-app", "Mint", {
                  href: "http://mint.gaiaprotocol.com/",
                  target: "_blank",
                })
              ),
              (0, skynode_1.el)(
                "li.item",
                (select = (0, skynode_1.el)(
                  "select.language-select",
                  (0, skynode_1.el)("option", "한국어 🇰🇷 ", { value: "ko" }),
                  (0, skynode_1.el)("option", "English 🇺🇸 ", { value: "en" }),
                  (0, skynode_1.el)("option", "繁體字 🇨🇳 ", { value: "zh-TC" }),
                  (0, skynode_1.el)("option", "简体字 🇨🇳 ", { value: "zh-SC" }),
                  {
                    change: () => {
                      BrowserInfo_1.default.changeLanguage(
                        select.domElement.value
                      );
                    },
                  }
                ))
              )
            )
          )
        ),
        (0, skynode_1.el)(
          "main",
          (0, skynode_1.el)(
            ".init-container",
            { id: "init" },
            (0, skynode_1.el)("img", {
              src: "/images/logo-text.png",
              alt: "gaia protocol logo",
              "data-aos": "fade-up",
            }),
            (0, skynode_1.el)(
              "p",
              { "data-aos": "fade-up" },
              (0, msg_js_1.default)("INIT_DESC")
            )
          ),
          (0, skynode_1.el)(
            ".gaia-container",
            { id: "WHY" },
            (0, skynode_1.el)("h2", (0, msg_js_1.default)("WHY_TITLE"), {
              "data-aos": "fade-up",
            }),
            (0, skynode_1.el)(
              "p",
              { "data-aos": "fade-up" },
              (0, msg_js_1.default)("WHY_DESC")
            )
          ),
          (0, skynode_1.el)(
            ".why-container",
            (0, skynode_1.el)("h2", (0, msg_js_1.default)("DEFI_TITLE"), {
              "data-aos": "fade-up",
            }),
            (0, skynode_1.el)(
              "p",
              { "data-aos": "fade-up" },
              (0, msg_js_1.default)("DEFI_DESC")
            )
          ),
          (0, skynode_1.el)(
            ".buyback-container",
            { id: "FUND" },
            (0, skynode_1.el)(
              "h2",
              (0, msg_js_1.default)("BUYBACK_FUND_TITLE"),
              { "data-aos": "fade-up" }
            ),
            (0, skynode_1.el)(
              "p",
              { "data-aos": "fade-up" },
              (0, msg_js_1.default)("BUYBACK_FUND_DESC")
            )
          ),
          (0, skynode_1.el)("img.fundflow", {
            "data-aos": "fade-up",
            src: "/images/fundflow.png",
          }),
          (0, skynode_1.el)(
            ".nft-container",
            { id: "NFT" },
            (0, skynode_1.el)("h2", (0, msg_js_1.default)("SNEAK_PEEK_TITLE"), {
              "data-aos": "fade-up",
            }),
            (0, skynode_1.el)(
              ".swiper-slide",
              (0, skynode_1.el)("img", {
                src: "/images/nft/sneakpeek1.jpeg",
                "data-aos": "fade-up",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/nft/sneakpeek2.jpeg",
                "data-aos": "fade-up",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/nft/sneakpeek3.jpeg",
                "data-aos": "fade-up",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/nft/sneakpeek4.jpeg",
                "data-aos": "fade-up",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/nft/sneakpeek5.jpeg",
                "data-aos": "fade-up",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/nft/sneakpeek6.jpeg",
                "data-aos": "fade-up",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/nft/sneakpeek7.jpeg",
                "data-aos": "fade-up",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/nft/sneakpeek8.jpeg",
                "data-aos": "fade-up",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/nft/sneakpeek9.jpeg",
                "data-aos": "fade-up",
              })
            ),
            (0, skynode_1.el)("p", (0, msg_js_1.default)("SNEAK_PEEK_DESC"), {
              "data-aos": "fade-up",
            })
          ),
          (0, skynode_1.el)(
            ".mint-container",
            { id: "MINT" },
            (0, skynode_1.el)("h2", (0, msg_js_1.default)("MINT_TITLE"), {
              "data-aos": "fade-up",
            }),
            (0, skynode_1.el)("h3", (0, msg_js_1.default)("PRE_SALE_TITLE"), {
              "data-aos": "fade-up",
            }),
            (0, skynode_1.el)(
              ".caption",
              (0, msg_js_1.default)("PRE_SALE_DESC1"),
              { "data-aos": "fade-up" }
            ),
            (0, skynode_1.el)("h4", (0, msg_js_1.default)("PRE_SALE_DESC2"), {
              "data-aos": "fade-up",
            }),
            (0, skynode_1.el)("p", (0, msg_js_1.default)("PRE_SALE_DESC3"), {
              "data-aos": "fade-up",
            }),
            (0, skynode_1.el)("p", (0, msg_js_1.default)("PRE_SALE_DESC4"), {
              "data-aos": "fade-up",
            }),
            (0, skynode_1.el)(
              "h3",
              (0, msg_js_1.default)("PUBLIC_SALE_TITLE"),
              { "data-aos": "fade-up" }
            ),
            (0, skynode_1.el)(
              "h4",
              (0, msg_js_1.default)("PUBLIC_SALE_DESC1"),
              { "data-aos": "fade-up" }
            ),
            (0, skynode_1.el)("p", (0, msg_js_1.default)("PUBLIC_SALE_DESC2"), {
              "data-aos": "fade-up",
            }),
            (0, skynode_1.el)("p", (0, msg_js_1.default)("PUBLIC_SALE_DESC3"), {
              "data-aos": "fade-up",
            })
          ),
          (0, skynode_1.el)(
            ".team-container",
            { id: "TEAM" },
            (0, skynode_1.el)("h2", (0, msg_js_1.default)("TEAM_TITLE"), {
              "data-aos": "fade-up",
            }),
            (0, skynode_1.el)(
              ".swiper-slide",
              (0, skynode_1.el)(
                ".team",
                { "data-aos": "fade-up" },
                (0, skynode_1.el)(
                  ".content",
                  (0, skynode_1.el)(
                    ".front",
                    (0, skynode_1.el)("img", {
                      src: "/images/team/sim-young-jae.png",
                    })
                  ),
                  (0, skynode_1.el)(
                    ".back",
                    (0, skynode_1.el)(
                      "a",
                      (0, msg_js_1.default)("TEAM_NAME_TITLE1"),
                      {
                        href: "https://twitter.com/DSC_Hanul",
                        target: "_blank",
                      }
                    ),
                    (0, skynode_1.el)(
                      "h4",
                      (0, msg_js_1.default)("TEAM_ROLE_DESC1")
                    ),
                    (0, skynode_1.el)(
                      "p",
                      (0, msg_js_1.default)("TEAM_NAME_DESC1")
                    )
                  )
                )
              ),
              (0, skynode_1.el)(
                ".team",
                { "data-aos": "fade-up" },
                (0, skynode_1.el)(
                  ".content",
                  (0, skynode_1.el)(
                    ".front",
                    (0, skynode_1.el)("img", {
                      src: "/images/team/cho-sun-woo.png",
                    })
                  ),
                  (0, skynode_1.el)(
                    ".back",
                    (0, skynode_1.el)(
                      "a",
                      (0, msg_js_1.default)("TEAM_NAME_TITLE2"),
                      { href: "https://twitter.com/Chowbie_", target: "_blank" }
                    ),
                    (0, skynode_1.el)(
                      "h4",
                      (0, msg_js_1.default)("TEAM_ROLE_DESC2")
                    ),
                    (0, skynode_1.el)(
                      "p",
                      (0, msg_js_1.default)("TEAM_NAME_DESC2")
                    )
                  )
                )
              ),
              (0, skynode_1.el)(
                ".team",
                { "data-aos": "fade-up" },
                (0, skynode_1.el)(
                  ".content",
                  (0, skynode_1.el)(
                    ".front",
                    (0, skynode_1.el)("img", {
                      src: "/images/team/TheGreatHB.png",
                    })
                  ),
                  (0, skynode_1.el)(
                    ".back",
                    (0, skynode_1.el)(
                      "a",
                      (0, msg_js_1.default)("TEAM_NAME_TITLE3"),
                      {
                        href: "https://twitter.com/TheGreatHB_",
                        target: "_blank",
                      }
                    ),
                    (0, skynode_1.el)(
                      "h4",
                      (0, msg_js_1.default)("TEAM_ROLE_DESC3")
                    ),
                    (0, skynode_1.el)(
                      "p",
                      (0, msg_js_1.default)("TEAM_NAME_DESC3")
                    )
                  )
                )
              ),
              (0, skynode_1.el)(
                ".team",
                { "data-aos": "fade-up" },
                (0, skynode_1.el)(
                  ".content",
                  (0, skynode_1.el)(
                    ".front",
                    (0, skynode_1.el)("img", {
                      src: "/images/team/lee-hak-seong.png",
                    })
                  ),
                  (0, skynode_1.el)(
                    ".back",
                    (0, skynode_1.el)(
                      "a",
                      (0, msg_js_1.default)("TEAM_NAME_TITLE4"),
                      { href: "https://twitter.com/dilrong_", target: "_blank" }
                    ),
                    (0, skynode_1.el)(
                      "h4",
                      (0, msg_js_1.default)("TEAM_ROLE_DESC4")
                    ),
                    (0, skynode_1.el)(
                      "p",
                      (0, msg_js_1.default)("TEAM_NAME_DESC4")
                    )
                  )
                )
              ),
              (0, skynode_1.el)(
                ".team",
                { "data-aos": "fade-up" },
                (0, skynode_1.el)(
                  ".content",
                  (0, skynode_1.el)(
                    ".front",
                    (0, skynode_1.el)("img", {
                      src: "/images/team/park-min.png",
                    })
                  ),
                  (0, skynode_1.el)(
                    ".back",
                    (0, skynode_1.el)(
                      "a",
                      (0, msg_js_1.default)("TEAM_NAME_TITLE5"),
                      { href: "https://twitter.com/Medo_DSC", target: "_blank" }
                    ),
                    (0, skynode_1.el)(
                      "h4",
                      (0, msg_js_1.default)("TEAM_ROLE_DESC5")
                    ),
                    (0, skynode_1.el)(
                      "p",
                      (0, msg_js_1.default)("TEAM_NAME_DESC5")
                    )
                  )
                )
              ),
              (0, skynode_1.el)(
                ".team",
                { "data-aos": "fade-up" },
                (0, skynode_1.el)(
                  ".content",
                  (0, skynode_1.el)(
                    ".front",
                    (0, skynode_1.el)("img", {
                      src: "/images/team/kang-hee-min.png",
                    })
                  ),
                  (0, skynode_1.el)(
                    ".back",
                    (0, skynode_1.el)(
                      "a",
                      (0, msg_js_1.default)("TEAM_NAME_TITLE6"),
                      {
                        href: "https://twitter.com/Docent_Mgr",
                        target: "_blank",
                      }
                    ),
                    (0, skynode_1.el)(
                      "h4",
                      (0, msg_js_1.default)("TEAM_ROLE_DESC6")
                    ),
                    (0, skynode_1.el)(
                      "p",
                      (0, msg_js_1.default)("TEAM_NAME_DESC6")
                    )
                  )
                )
              )
            )
          ),
          (0, skynode_1.el)(
            ".partner-container",
            { id: "PARTNER" },
            (0, skynode_1.el)("h2", "PARTNER", { "data-aos": "fade-up" }),
            (0, skynode_1.el)(
              ".swiper-slide",
              (0, skynode_1.el)("img", {
                src: "/images/partner/dexata.svg",
                "data-aos": "fade-up",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/partner/kronosDAO.svg",
                "data-aos": "fade-up",
              }),
              (0, skynode_1.el)("img", {
                src: "/images/partner/klayswap.svg",
                "data-aos": "fade-up",
              })
            )
          )
        ),
        (0, skynode_1.el)(
          "footer",
          (0, skynode_1.el)(
            ".footer-container",
            (0, skynode_1.el)(
              ".sns",
              (0, skynode_1.el)(
                "a.opensea",
                {
                  href: "https://opensea.io/collection/gaia-kronos",
                  target: "_blank",
                },
                (0, skynode_1.el)("img", {
                  src: "/images/community/opensea.svg",
                  width: "40",
                })
              ),
              (0, skynode_1.el)(
                "a.discord",
                {
                  href: "https://discord.com/invite/SjM4meh3hd",
                  target: "_blank",
                },
                (0, skynode_1.el)("img", {
                  src: "/images/community/discord.svg",
                })
              ),
              (0, skynode_1.el)(
                "a.twitter",
                { href: "https://twitter.com/gaia_protocol", target: "_blank" },
                (0, skynode_1.el)("img", {
                  src: "/images/community/twitter.svg",
                })
              ),
              (0, skynode_1.el)(
                "a.gitbook",
                { href: "https://docs.gaiaprotocol.com/kr/", target: "_blank" },
                (0, skynode_1.el)("img", {
                  src: "/images/community/gitbook.svg",
                })
              )
            ),
            (0, skynode_1.el)(
              ".copyright",
              "COPYRIGHT ⓒ Gaia Protocol. ALL RIGHTS RESERVED"
            )
          )
        )
      ))
    );
    this.init();
    select.domElement.value = BrowserInfo_1.default.language;
  }
  async init() {
    aos_1.default.init();
  }
  changeParams(params, uri) {}
  close() {
    this.container.delete();
  }
}
exports.default = Landing;
//# sourceMappingURL=Landing.js.map
