import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        Layout.current.content.append(
            this.container = el(".home-view flex h-screen flex-col",
                el(".m-auto flex flex-col items-center", { id: "STORY" },
                    el("img.lg:block w-1/2 mt-16 content-center", { src: "/images/logo-text.png", alt: "gaia protocol logo" }),
                    el(".story content-center mt-32",
                        el("h1.text-5xl font-bold text-center", "STORY"),
                        el(".text-base text-center", `
                        PFP 프로젝트는 민팅 이후의 가치 부양이 굉장히 어렵다.
                        
                        이를 해소하기 위해 토큰이 채굴되는 PFP 프로젝트가 나왔으나, 채굴되는 토큰의 가치부양은 더욱 어려운 과제로 남게 되었다.
                        
                        그리하여 기존에 가치 부양이 잘 형성되어 있는 프로토콜을 사용하여 채굴이 되는 PFP를 설계했다.
                        
                        > 디파이 2.0의 높은 이자율을 적용해 지속적으로 이자 채굴이 되게하는 한편, 바이백 펀드를 구성해 민팅가(원금)를 최대한 보장하여 투자 리스크를 줄인다.`)
                    ),
                    el(".deFi2.0 content-center mt-32", { id: "DeFi 2.0" },
                        el("h1.text-5xl font-bold text-center", "DeFi 2.0"),
                        el(".text-base text-center", `
                        디파이 2.0의 특징은 강력한 홀더들이 많아지면 많아질수록 이자율이 늘어난다는 것이다. 
                        
                        NFT에 토큰을 영구적으로 스테이킹한다면, 다이아몬드 핸드(강성 홀더)를 뛰어넘는 인피니티 핸드가 되는 것이다.`),
                    ),
                    el(".kronosDAO mt-32 flex flex-col items-center", { id: "KRONOS DAO" },
                        el("h1.text-5xl font-bold text-center", "KRONOS DAO"),
                        el("img.lg:block center w-1/3 mt-8 rounded", { src: "/images/kronos.png" }),
                        el(".text-base text-center", `
                    Kronos DAO는 클레이튼에서 가장 명망있는 DeFi 2.0 프로토콜이다. 
                    
                    최근 APR은 236,000%에 육박하며, 매우 단단한 커뮤니티를 갖고 있다.`),
                    ),
                    el(".buyback content-center mt-32", { id: "BUYBACK FUND" },
                        el("h1.text-5xl font-bold text-center", "BUYBACK FUND"),
                        el(".text-base text-center", `
                        민팅액의 45%와 오픈씨 거래 수수료(로열티)를 바이백 펀드에 넣는다. 
                        이후 NFT 홀더가 원하면 바이백 펀드를 통해 그간 받은 이자를 제외한 금액만큼 NFT를 납부하고 돌려받을 수 있다. 
                        납부받은 NFT는 개발팀에서 시장에 팔아 바이백 펀드를 채운다.

                        즉 민팅 직후에는 바이백 펀드에서 민팅가를 100% 되돌려 받을 수 있다. 
                        이후 이자 수익이 나오게 된다면 복리 수익에 따라 점차 되돌려받는 수치가 내려가고, 
                        복리 수익으로 원금 회수가 확정되면 되돌려받는 수치가 0에 수렴하여 바이백 펀드는 종료된다.
                        
                        이로써 최대한 원금을 보장한다.`),
                    ),
                    el(".mint content-center mt-32", { id: "MINT" },
                        el("h1.text-5xl font-bold text-center", "MINT"),
                        el("h3.text-3xl mt-8 text-center font-medium", "2월 10일 밤 10:00시"),
                        el(".text-2xl mt-8 text-center", "민팅가 1,000 클레이"),
                        el(".text-gray-300 text-sm mt-2 text-center", "민팅가의 50% 스테이킹, 45% 바이백 펀드, 5% 데브 펀드"),
                        el(".text-gray-300 text-sm text-center", "민팅 개수 10,000개, 팀 보유 물량 없으며 팀에서도 구매를 진행"),
                    ),
                    el(".whiteList content-center mt-32", { id: "WHITELIST" },
                        el("h1.text-5xl font-bold text-center", "WHITELIST"),
                        el(".text-base text-center", `
                        1. 화리 물량 총 4,000개 

                        2. 해당 자산 1천클에 화리 1개, 인당 5개
                        
                        3. 24일 타입폼으로 신청 받기

                        4. 2월 9일까지 자산 유지 필수, 민팅 때 자산 재체크 들어감

                        5. 1월 21일 금요일 공지`),
                    ),
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
                        el(".text-base text-center mt-8",
                            `현직 게임 개발자이자 NFT 아티스트입니다. 
                            다년간 트위터 작품 활동을 통해 32만 팔로워를 보유하고 있으며, 최근에는 한국의 NFT 및 P2E 게임 프로젝트에도 참여하고 있습니다.`
                        )
                    ),
                    el(".faq content-center mt-32", { id: "FAQ" },
                        el("h1.text-5xl font-bold text-center", "FAQ"),
                        el("h3.text-2xl font-medium text-center mt-8", "Q. 한정판 NFT 여부"),
                        el("h3.text-base text-center mt-4", "A. 없음"),
                        el("h3.text-2xl font-medium text-center mt-8", "Q. NFT별 채굴 차등 여부"),
                        el("h3.text-base text-center mt-4", "A. 없음"),
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