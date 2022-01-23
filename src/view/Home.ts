import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        Layout.current.content.append(
            this.container = el(".home-view flex h-screen flex-col",
                el(".m-auto flex flex-col items-center m-4 container mx-auto px-4", { id: "STORY" },
                    el("img.block lg:hidden mt-16 content-center", { src: "/images/logo-text.png", alt: "gaia protocol logo" }),
                    el("img.hidden lg:block w-1/3 mt-16 content-center", { src: "/images/logo-text.png", alt: "gaia protocol logo" }),
                    el(".story content-center mt-4",
                        el(".text-base text-secondary drop-shadow-sm leading-7 text-center", "Gaia Protocol은 최초의 투자형 PFP(프로필 이미지) NFT 프로젝트입니다.\n투자자들의 초기 투자비용을 최대한 보장하고 지지(Backing)합니다.\nNFT 투자자들은 수준 높은 커뮤니티를 구성하고 매력적인 문화를 만들고 최고의 NFT 허브를 구축해 나갑니다.")
                    ),
                    el(".deFi2.0 content-center mt-64", { id: "DeFi 2.0" },
                        el("h1.text-5xl font-bold text-center text-primary", "WHY DeFi2.0?"),
                        el(".text-base text-center mt-8 leading-7", "DeFi 2.0 은 창의적인 방법으로 유동성을 프토토콜이 확보하고,\n강력한 커뮤니티 파워에 힘입어 투자들의 이윤의 극대화를 일구어낸 성공적인 프로젝트입니다.\n Gaia Protocol 의 지지하는 핵심은 NFT를 구매한 투자자들의 자산을 이에 예치함으로써 투자자들이 영구적으로 혜택을 누릴 수 있도록 하는 것입니다."),
                    ),
                    el(".buyback content-center mt-64", { id: "BUYBACK FUND" },
                        el("h1.text-5xl font-bold text-center text-primary", "BUYBACK FUND"),
                        el(".text-base text-center mt-8 leading-7", "Buyback Fund 는 민팅액의 45%로 구성되며 추후 NFT의 오픈씨 거래 수수료(로열티)가 배분됩니다.\n민팅으로 NFT 를 구매한 사용자는 최초 민팅가에서 수령한 이자 수익을 제한 금액을 바이백 펀드를 통해 청구할 수 있고 NFT 는 팀이 거래소를 통해 재판매합니다."),
                    ),
                    el(".gaiaNFT content-center mt-64", { id: "SNEAK PEEK" },
                        el("h1.text-5xl font-bold text-center text-primary", "SNEAK PEEK"),
                        el(".swiper-container mt-8 grid grid-cols-2 gap-4",
                            el(".swiper-slide",
                                el("img.w-64 rounded", { src: "/images/nft/sneakpeek1.png" })
                            ),
                            el(".swiper-slide",
                                el("img.w-64 rounded", { src: "/images/nft/sneakpeek2.png" })
                            )
                        ),
                        el(".text-xs text-center mt-4 leading-7", "본 이미지는 스닉픽으로 실제 NFT 민팅되는 NFT와 다를 수 있습니다."),
                    ),
                    el(".mint content-center mt-64", { id: "MINT" },
                        el("h1.text-5xl font-bold text-center text-primary", "MINT"),
                        el("h2.text-3xl font-bold mt-8  text-center", "Pre Sale"),
                        el(".text-xs text-center font-medium", "(White List)"),
                        el("h3.text-2xl mt-8 text-center font-medium", "2월 10일 밤 10:00시"),
                        el(".text-gray-300 text-base mt-2 text-center", "1,000 Klay"),
                        el(".text-gray-300 text-base mt-2 text-center", "총 4,000개"),
                        el("h2.text-3xl font-bold mt-8  text-center", "Public Sale"),
                        el("h3.text-2xl mt-8 text-center font-medium", "2월 10일 밤 11:00시"),
                        el(".text-gray-300 text-base mt-2 text-center", "1,000 Klay"),
                        el(".text-gray-300 text-base mt-2 text-center", "총 6,000 개"),
                    ),
                    el(".team-container content-center mt-64", { id: "TEAM" },
                        el("h1.text-5xl mb-8 font-bold text-center text-primary", "TEAM"),
                        el(".content grid grid-cols-3 gap-8",
                            el(".team",
                                el("h3.text-3xl font-medium text-center mt-8 text-secondary", "심영재"),
                                el(".text-base font-medium text-center text-gray-300", "Director"),
                                el(".text-base text-center mt-8",
                                    "그는 국내 최초로 PFP를 만든 DSC의 개발자이자, 클레이튼 최초의 밈코인 인절미를 만든 떡방앗간 커뮤니티의 창시자이기도 합니다. 가이아 프로토콜에 대한 아이디어를 냈으며 가이아 프로토콜의 디렉터 역할을 맡게 되었습니다."
                                ),
                            ),
                            el(".team",
                                el("h3.text-3xl font-medium text-center mt-8 text-secondary", "이학성"),
                                el(".text-base font-medium text-center text-gray-300", "Development"),
                                el(".text-base text-center mt-8",
                                    "그는 MIX 웹 사이트, Klubs, 떡방앗간의 웹 디자인 및 프론트 개발을 담당하고 있는 개발자입니다. 웹 뿐 아니라 애플리케이션, 서버 개발 경험도 다수 가지고 있어 가이아 프로토콜의 메인 개발자 역할을 맡게 되었습니다."
                                ),
                            ),
                            el(".team",
                                el("h3.text-3xl font-medium text-center mt-8 text-secondary", "TheGreatHB"),
                                el(".text-base font-medium text-center text-gray-300", "Development"),
                                el(".text-base text-center mt-8",
                                    "SushiSwap의 Contributor (스마트계약 내부 오디터)로서 Shoyu 및 Mirin 개발 등에 참여했습니다. 국내에서는 DSC, MIX 생태계, Klubs 생태계 등의 스마트계약을 감사 및 개발해왔습니다. 또한 클레이튼 최초의 밈코인 인절미의 스마트계약 개발자이기도 합니다."
                                ),
                            ),
                            el(".team",
                                el("h3.text-3xl font-medium text-center mt-8 text-secondary", "박민"),
                                el(".text-base font-medium text-center text-gray-300", "Marketing & CS"),
                                el(".text-base text-center mt-8",
                                    "그는 DSC 커뮤니티에서 활동하고 있으며, 떡방앗간 커뮤니티 매니저를 담당하고 있습니다. 트위터 뿐 아니라 여러 커뮤니티에서 활동적인 모습으로 커뮤니티의 원동력이 되고 있습니다.가이아의 기획단계에서 함께 했으며 커뮤니티 에디터를 맡게 되었습니다."
                                ),
                            ),
                            el(".team",
                                el("h3.text-3xl font-medium text-center mt-8 text-secondary", "강희민"),
                                el(".text-base font-medium text-center text-gray-300", "Marketing & CS"),
                                el(".text-base text-center mt-8",
                                    "Klubs, FoxPunks의 커뮤니티 매니징 및 마케팅을 담당하고 있습니다. 홍콩에 거주하고 있으며 국내 팀 뿐 아니라 다양한 해외 팀과의 협업을 통해 커뮤니티를 확장시키고 나아가 해외 크립토 투자자들까지 참여할 수 있는 프로젝트로 성장시킬 예정입니다."
                                ),
                            ),
                            el(".team",
                                el("h3.text-3xl font-medium text-center mt-8 text-secondary", "조선우"),
                                el(".text-base font-medium text-center text-gray-300", "Art & Design"),
                                el(".text-base text-center mt-8 mb-8",
                                    "현직 게임 개발자이자 NFT 아티스트입니다. 다년간 트위터 작품 활동을 통해 32만 팔로워를 보유하고 있으며, 최근에는 한국의 NFT 및 P2E 게임 프로젝트에도 참여하고 있습니다."
                                )
                            )
                        ),
                    ),
                    el(".partner content-center mt-64", { id: "PARTNER" },
                        el("h1.text-5xl font-bold text-center text-primary", "PARTNER"),
                        el(".partner-container mt-16 flex md:flex-col lg:flex-row",
                            el("img.rounded h-16 md:mt-8 lg:mr-16", { src: "/images/partner/kronosDAO.svg" }),
                            el("img.rounded h-16 md:mt-8 lg:mr-16", { src: "/images/partner/dexataLogo.svg" }),
                            el("img.rounded h-16 md:mt-8", { src: "/images/partner/klayswap.svg" })
                        ),
                    )
                ),
                el("footer.bg-black p-8 mt-32",
                    el(".footer-container container mx-auto px-4 flex justify-center m-auto",
                        el(".content flex text-gray-300 mt-4",
                            el("a.discord.mr-4", { href: "https://discord.com/invite/SjM4meh3hd", target: "_blank" },
                                el("img", { src: "/images/community/discord.svg" })
                            ),
                            el("a.telegram mr-4", { href: "https://t.me/gaiaprotocol", target: "_blank" },
                                el("img", { src: "/images/community/telegram.svg" })
                            ),
                            el("a.twitter mr-4", { href: "https://twitter.com/gaia_protocol", target: "_blank" },
                                el("img", { src: "/images/community/twitter.svg" })
                            ),
                            el("a.kakaotalk mr-4", { href: "https://open.kakao.com/o/ggBYKEUd", target: "_blank" },
                                el("img", { src: "/images/community/kakao-talk.svg" })
                            ),
                            el("a.gitbook mr-4", { href: "https://docs.gaiaprotocol.com/kr/", target: "_blank" },
                                el("img", { src: "/images/community/gitbook.svg" })
                            ),
                        )
                    ),
                    el(".text-xs text-center mt-16", "COPYRIGHT ⓒ Gaia Protocol. ALL RIGHTS RESERVED")
                )
            ).appendTo(BodyNode)
        )
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}