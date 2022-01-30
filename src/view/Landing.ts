import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import AOS from 'aos';
import Alert from "../component/dialogue/Alert";

export default class Landing implements View {

  private container: DomNode;

  constructor() {
    document.title = "Gaia Protocol";

    BodyNode.append(
      (this.container = el(".landing-view",
        el("header.header",
          el(".nav",
            el(".logo",
              el("a", { href: "#init" }, el("img", { src: "/images/logo.png", alt: "gaia protocol logo" })),
            ),
            el("input.menu-btn", { type: "checkbox", id: "menu-btn" }),
            el("label.menu-icon", { for: "menu-btn" },
              el("span.navicon")
            ),
            el("ul.menu",
              el("li.item", el("a", "WHY", { href: "#WHY" })),
              el("li.item", el("a", "BUYBACK FUND", { href: "#FUND" }),),
              el("li.item", el("a", "SNEAK PEEK", { href: "#NFT" })),
              el("li.item", el("a", "TEAM", { href: "#TEAM" })),
              el("li.item", el("a", "PARTNER", { href: "#PARTNER" })),
              el("li.item", el("button", "Enter App", { click: () => { new Alert("현재 준비중입니다.", "Gaia Protocol은 2022년 2월 10일에 민팅이 이루어 집니다.") } })),
            ),
          )
        ),
        el("main",
          el(".init-container", { id: "init" },
            el("img", { src: "/images/logo-text.png", alt: "gaia protocol logo", "data-aos": "fade-up", }),
            el("p", { "data-aos": "fade-up" }, "Gaia Protocol은 최초의 투자형 PFP(프로필 이미지) NFT 프로젝트입니다.\n투자자들의 초기 투자비용을 최대한 보장하고 지지(Backing)합니다.\nNFT 투자자들은 수준 높은 커뮤니티를 구성하고 매력적인 문화를 만들고 최고의 NFT 허브를 구축해 나갑니다.")
          ),
          el(".gaia-container", { id: "WHY" },
            el("h2", "Why Gaia Protocol?", { "data-aos": "fade-up" },),
            el("p", { "data-aos": "fade-up" }, "Gaia Protocol NFT 홀더는 민팅 가격의 절반이 Defi 2.0에 예치되어 복리이자혜택을 영구적으로 받을 수 있게 됩니다.\n 또한 NFT를 소유한 홀더들을 중심으로 NFT & Crypto 투자자들의 사교모임을 형성하여 매력적이고 강력한 커뮤니티 형성을 목표로 합니다.\n 이를 통해 가이아 프로토콜에서 민팅 된 NFT 의 가치상승을 기대할 수 있게 됩니다.\n 최종적으로 가이아 프로토콜이 건강하고 견고하게 성장하는 것을 목표하고 있으며 이는 클레이튼 생태계가 더욱 확장되는 것을 의미합니다.")
          ),
          el(".why-container",
            el("h2", "WHY DeFi 2.0?", { "data-aos": "fade-up" },),
            el("p", { "data-aos": "fade-up" }, "DeFi 2.0 은 창의적인 방법으로 유동성을 프토토콜이 확보하고,\n강력한 커뮤니티 파워에 힘입어 투자들의 이윤의 극대화를 일구어낸 성공적인 프로젝트입니다.\nGaia Protocol 의 지지하는 핵심은 NFT를 구매한 투자자들의 자산을 이에 예치함으로써 투자자들이 영구적으로 혜택을 누릴 수 있도록 하는 것입니다.")
          ),
          el(".buyback-container", { id: "FUND" },
            el("h2", "BUYBACK FUND", { "data-aos": "fade-up", }),
            el("p", { "data-aos": "fade-up", }, "DeFi 2.0 은 창의적인 방법으로 유동성을 프토토콜이 확보하고,\n강력한 커뮤니티 파워에 힘입어 투자들의 이윤의 극대화를 일구어낸 성공적인 프로젝트입니다.\nGaia Protocol 의 지지하는 핵심은 NFT를 구매한 투자자들의 자산을 이에 예치함으로써 투자자들이 영구적으로 혜택을 누릴 수 있도록 하는 것입니다.")
          ),
          el(".nft-container", { id: "NFT" },
            el("h2", "SNEAK PEEK", { "data-aos": "fade-up" }),
            el(".swiper-slide",
              el("img", { src: "/images/nft/sneakpeek1.jpeg", "data-aos": "fade-up" }),
              el("img", { src: "/images/nft/sneakpeek2.jpeg", "data-aos": "fade-up" }),
              el("img", { src: "/images/nft/sneakpeek3.jpeg", "data-aos": "fade-up" }),
              el("img", { src: "/images/nft/sneakpeek4.jpeg", "data-aos": "fade-up" }),
              el("img", { src: "/images/nft/sneakpeek5.jpeg", "data-aos": "fade-up" }),
              el("img", { src: "/images/nft/sneakpeek6.jpeg", "data-aos": "fade-up" }),
              el("img", { src: "/images/nft/sneakpeek7.jpeg", "data-aos": "fade-up" })
            ),
            el("p", "본 이미지는 스닉픽으로 실제 NFT 민팅되는 NFT와 다를 수 있습니다.", { "data-aos": "fade-up" })
          ),
          el(".mint-container", { id: "MINT" },
            el("h2", "MINT", { "data-aos": "fade-up" },),
            el("h3", "Pre Sale", { "data-aos": "fade-up" },),
            el(".caption", "(Whitelist)", { "data-aos": "fade-up" },),
            el("h4", "2월 10일 밤 10:00시", { "data-aos": "fade-up" },),
            el("p", "1,000 Klay", { "data-aos": "fade-up" },),
            el("p", "총 4,000개", { "data-aos": "fade-up" },),
            el("h3", "Public Sale", { "data-aos": "fade-up" },),
            el("h4", "2월 10일 밤 11:00시", { "data-aos": "fade-up" },),
            el("p", "1,000 Klay", { "data-aos": "fade-up" },),
            el("p", "총 6,000개", { "data-aos": "fade-up" },),
          ),
          el(".team-container", { id: "TEAM" },
            el("h2", "TEAM", { "data-aos": "fade-up" },),
            el(".swiper-slide",
              el(".team", { "data-aos": "fade-up" },
                el("h3", "심영재"),
                el("h4", "Director"),
                el("p",
                  "그는 국내 최초로 PFP를 만든 DSC의 개발자이자, 클레이튼 최초의 밈코인 인절미를 만든 떡방앗간 커뮤니티의 창시자이기도 합니다. 가이아 프로토콜에 대한 아이디어를 냈으며 가이아 프로토콜의 디렉터 역할을 맡게 되었습니다."
                ),
              ),
              el(".team", { "data-aos": "fade-up" },
                el("h3", "조선우"),
                el("h4", "Art & Design"),
                el("p",
                  "현직 게임 개발자이자 NFT 아티스트입니다. 다년간 트위터 작품 활동을 통해 32만 팔로워를 보유하고 있으며, 최근에는 한국의 NFT 및 P2E 게임 프로젝트에도 참여하고 있습니다."
                )
              ),
              el(".team", { "data-aos": "fade-up" },
                el("h3", "TheGreatHB"),
                el("h4", "Development"),
                el("p",
                  "SushiSwap의 Contributor (스마트계약 내부 오디터)로서 Shoyu 및 Mirin 개발 등에 참여했습니다. 국내에서는 DSC, MIX 생태계, Klubs 생태계 등의 스마트계약을 감사 및 개발해왔습니다. 또한 클레이튼 최초의 밈코인 인절미의 스마트계약 개발자이기도 합니다."
                ),
              ),
              el(".team", { "data-aos": "fade-up" },
                el("h3", "이학성"),
                el("h4", "Development"),
                el("p",
                  "그는 MIX 웹 사이트, Klubs, 떡방앗간의 웹 디자인 및 프론트 개발을 담당하고 있는 개발자입니다. 웹 뿐 아니라 애플리케이션, 서버 개발 경험도 다수 가지고 있어 가이아 프로토콜의 웹 개발자 역할을 맡게 되었습니다."
                ),
              ),
              el(".team", { "data-aos": "fade-up" },
                el("h3", "박민"),
                el("h4", "Marketing & CS"),
                el("p",
                  "그는 DSC 커뮤니티에서 활동하고 있으며, 떡방앗간 커뮤니티 매니저를 담당하고 있습니다. 트위터 뿐 아니라 여러 커뮤니티에서 활동적인 모습으로 커뮤니티의 원동력이 되고 있습니다.가이아의 기획단계에서 함께 했으며 커뮤니티 에디터를 맡게 되었습니다."
                ),
              ),
              el(".team", { "data-aos": "fade-up" },
                el("h3", "강희민"),
                el("h4", "Marketing & CS"),
                el("p",
                  "Klubs, FoxPunks의 커뮤니티 매니징 및 마케팅을 담당하고 있습니다. 홍콩에 거주하고 있으며 국내 팀 뿐 아니라 다양한 해외 팀과의 협업을 통해 커뮤니티를 확장시키고 나아가 해외 크립토 투자자들까지 참여할 수 있는 프로젝트로 성장시킬 예정입니다."
                ),
              ),
            )
          ),
          el(".partner-container", { id: "PARTNER" },
            el("h2", "PARTNER", { "data-aos": "fade-up" }),
            el(".swiper-slide",
              el("img", { src: "/images/partner/dexata.svg", "data-aos": "fade-up" }),
              el("img", { src: "/images/partner/kronosDAO.svg", "data-aos": "fade-up" }),
              el("img", { src: "/images/partner/klayswap.svg", "data-aos": "fade-up" })
            )
          ),
        ),
        el("footer",
          el(".footer-container",
            el(".sns",
              el("a.discord", { href: "https://discord.com/invite/SjM4meh3hd", target: "_blank" },
                el("img", { src: "/images/community/discord.svg" })
              ),
              el("a.telegram", { href: "https://t.me/gaiaprotocol", target: "_blank" },
                el("img", { src: "/images/community/telegram.svg" })
              ),
              el("a.twitter", { href: "https://twitter.com/gaia_protocol", target: "_blank" },
                el("img", { src: "/images/community/twitter.svg" })
              ),
              el("a.kakaotalk", { href: "https://open.kakao.com/o/ggBYKEUd", target: "_blank" },
                el("img", { src: "/images/community/kakao-talk.svg" })
              ),
              el("a.gitbook", { href: "https://docs.gaiaprotocol.com/kr/", target: "_blank" },
                el("img", { src: "/images/community/gitbook.svg" })
              ),
            ),
            el(".copyright", "COPYRIGHT ⓒ Gaia Protocol. ALL RIGHTS RESERVED")
          )
        )
      ))
    );
    this.init()
  }

  private async init() {
    AOS.init();
  }

  public changeParams(params: ViewParams, uri: string): void { }

  public close(): void {
    this.container.delete();
  }
}
