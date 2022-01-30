import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class AppLayout implements View {

    public static current: AppLayout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        AppLayout.current = this;

        BodyNode.append(
            (this.container = el(".app-layout",
                el("header.header",
                    el(".nav",
                        el(".logo",
                            el("a", { href: "/app" }, el("img", { src: "/images/logo.png", alt: "gaia protocol logo" })),
                        ),
                        el("input.menu-btn", { type: "checkbox", id: "menu-btn" }),
                        el("label.menu-icon", { for: "menu-btn" },
                            el("span.navicon")
                        ),
                        el("ul.menu",
                            el("li.item", el("a", "Dashboard", { href: "/app" })),
                            el("li.item", el("a", "Mining", { href: "/app/mining" })),
                            el("li.item", el("a", "Buyback", { href: "/app/buyback" })),
                            el("li.item", el("a", "Hourglass", { href: "/app/hourglass" })),
                            el("li.item", el("button", "Connect Wallet"))
                        ),
                    )
                ),
                el("main", (this.content = el(".content"))),
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
    }

    public set title(title: string) {
        document.title = `${title} | Gaia Protocol `;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
