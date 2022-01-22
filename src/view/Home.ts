import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        Layout.current.content.append(
            this.container = el(".home-view flex h-screen flex-col",
                el(".m-auto flex flex-col items-center m-4", { id: "STORY" },
                    el("img.block lg:hidden mt-16 content-center", { src: "/images/logo-text.png", alt: "gaia protocol logo" }),
                    el("img.hidden lg:block w-1/3 mt-16 content-center", { src: "/images/logo-text.png", alt: "gaia protocol logo" }),
                    el(".story content-center mt-32",
                        el("h1.text-5xl font-bold text-center", "What is Gaia PFP NFTs?"),
                        el(".text-base text-center", `
                        Gaia Protocol은 최초의 투자형 PFP(프로필 이미지) NFT 프로젝트입니다. 
                        
                        투자자들의 초기 투자비용을 최대한 보장하고 지지(Backing)합니다. 
                        
                        NFT 투자자들은 수준 높은 커뮤니티를 구성하고 매력적인 문화를 만들고 최고의 NFT 허브를 구축해 나갑니다.`)
                    ),
                    el(".deFi2.0 content-center mt-32", { id: "DeFi 2.0" },
                        el("h1.text-5xl font-bold text-center", "Why DeFi 2.0"),
                        el(".text-base text-center", `
                        DeFi 2.0 은 창의적인 방법으로 유동성을 프토토콜이 확보하고, 강력한 커뮤니티 파워에 힘입어 투자들의 이윤의 극대화를 일구어낸 성공적인 프로젝트입니다. 
                        
                        Gaia Protocol 의 지지하는 핵심은 NFT를 구매한 투자자들의 자산을 이에 예치함으로써 투자자들이 영구적으로 혜택을 누릴 수 있도록 하는 것입니다.`),
                    ),
                    el(".buyback content-center mt-32", { id: "BUYBACK FUND" },
                        el("h1.text-5xl font-bold text-center", "BUYBACK FUND"),
                        el(".text-base text-center", `
                        Buyback Fund 는 민팅액의 45%로 구성되며 추후 NFT의 오픈씨 거래 수수료(로열티)가 배분됩니다. 
                        
                        민팅으로 NFT 를 구매한 사용자는 최초 민팅가에서 수령한 이자 수익을 제한 금액을 바이백 펀드를 통해 청구할 수 있고 NFT 는 팀이 거래소를 통해 재판매합니다.`),
                    ),
                    el(".mint content-center mt-32", { id: "MINT" },
                        el("h1.text-5xl font-bold text-center", "MINT"),
                        el("h2.text-3xl font-bold mt-8  text-center", "Pre-Sale (Whitelist)"),
                        el("h3.text-2xl mt-8 text-center font-medium", "2월 10일 밤 10:00시"),
                        el(".text-gray-300 text-base mt-2 text-center", "1,000 Klay"),
                        el(".text-gray-300 text-base mt-2 text-center", "총 4,000개"),
                        el("h2.text-3xl font-bold mt-8  text-center", "Public-Sale"),
                        el("h3.text-2xl mt-8 text-center font-medium", "2월 10일 밤 11:00시"),
                        el(".text-gray-300 text-base mt-2 text-center", "1,000 Klay"),
                        el(".text-gray-300 text-base mt-2 text-center", "총 6,000 개"),
                    ),
                    /*el(".whiteList content-center mt-32", { id: "WHITELIST" },
                        el("h1.text-5xl font-bold text-center", "WHITELIST"),
                        el(".text-base text-center", `
                        - 커뮤니티 빌딩

                        - 민팅

                        - Kronos DAO 예치

                        - 이자 채굴 시스템 오픈

                        - 바이백 프로토콜 개시

                        - 이자 수익 원금 상환 축하 파티 개최ß
                        
                        - Olympus DAO를 사용하는 V2 발행 (3D)
                        `),
                    ),
                    el(".whiteList content-center mt-32", { id: "ROADMAP" },
                        el("h1.text-5xl font-bold text-center", "ROADMAP"),
                        el(".text-base text-center", `
                    1. 화리 물량 총 4,000개 

                    2. 해당 자산 1천클에 화리 1개, 인당 5개
                    
                    3. 24일 타입폼으로 신청 받기

                    4. 2월 9일까지 자산 유지 필수, 민팅 때 자산 재체크 들어감

                    5. 1월 21일 금요일 공지`),
                    ),*/
                    el(".team content-center mt-32", { id: "TEAM" },
                        el("h1.text-5xl font-bold text-center", "TEAM"),
                        el("h3.text-3xl font-medium text-center mt-8", "Director 심영재"),
                        el(".text-base text-center mt-8",
                            `그는 국내 최초로 PFP를 만든 DSC의 개발자이자, 클레이튼 최초의 밈코인 인절미를 만든 떡방앗간 커뮤니티의 창시자이기도 합니다. 
                            가이아 프로토콜에 대한 아이디어를 냈으며 가이아 프로토콜의 디렉터 역할을 맡게 되었습니다.`
                        ),
                        el("h3.text-3xl font-medium text-center mt-8", "Development 이학성"),
                        el(".text-base text-center mt-8",
                            `그는 MIX 웹 사이트, Klubs, 떡방앗간의 웹 디자인 및 프론트 개발을 담당하고 있는 개발자입니다. 
                            웹 뿐 아니라 애플리케이션, 서버 개발 경험도 다수 가지고 있어 가이아 프로토콜의 메인 개발자 역할을 맡게 되었습니다.`
                        ),
                        el("h3.text-3xl font-medium text-center mt-8", "Development TheGreatHB"),
                        el(".text-base text-center mt-8",
                            `SushiSwap의 Contributor (스마트계약 내부 오디터)로서 Shoyu 및 Mirin 개발 등에 참여했습니다. 
                            국내에서는 DSC, MIX 생태계, Klubs 생태계 등의 스마트계약을 감사 및 개발해왔습니다. 
                            또한 클레이튼 최초의 밈코인 인절미의 스마트계약 개발자이기도 합니다.`
                        ),
                        el("h3.text-3xl font-medium text-center mt-8", "Marketing & CS 박민"),
                        el(".text-base text-center mt-8",
                            `그는 DSC 커뮤니티에서 활동하고 있으며, 떡방앗간 커뮤니티 매니저를 담당하고 있습니다. 
                            트위터 뿐 아니라 여러 커뮤니티에서 활동적인 모습으로 커뮤니티의 원동력이 되고 있습니다.
                            가이아의 기획단계에서 함께 했으며 커뮤니티 에디터를 맡게 되었습니다.`
                        ),
                        el("h3.text-3xl font-medium text-center mt-8", "Marketing & CS 강희민"),
                        el(".text-base text-center mt-8",
                            `Klubs, FoxPunks의 커뮤니티 매니징 및 마케팅을 담당하고 있습니다. 
                            홍콩에 거주하고 있으며 국내 팀 뿐 아니라 다양한 해외 팀과의 협업을 통해 커뮤니티를 확장시키고 
                            나아가 해외 크립토 투자자들까지 참여할 수 있는 프로젝트로 성장시킬 예정입니다.`
                        ),
                        el("h3.text-3xl font-medium text-center mt-8", "Art & Design 조선우"),
                        el(".text-base text-center mt-8 mb-8",
                            `현직 게임 개발자이자 NFT 아티스트입니다. 
                            다년간 트위터 작품 활동을 통해 32만 팔로워를 보유하고 있으며, 최근에는 한국의 NFT 및 P2E 게임 프로젝트에도 참여하고 있습니다.`
                        )
                    ),
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