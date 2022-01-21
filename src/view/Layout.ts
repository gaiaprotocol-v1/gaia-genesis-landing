import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;

        BodyNode.append(
            (this.container = el(".layout",
                el("header.bg-black fixed top-0 left-0 right-0 .hidden lg:block",
                    el("nav",
                        el(".max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
                            el(".relative flex items-center justify-between h-16",
                                el(".flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
                                    el(".flex-shrink-0 flex items-center",
                                        el("img.block lg:hidden h-8 w-auto", { src: "/images/logo.png", alt: "gaia protocol logo" }),
                                        el("img.hidden lg:block h-8 w-auto", { src: "/images/logo.png", alt: "gaia protocol logo" }),
                                    )
                                ),
                                el(".hidden sm:block sm:ml-6",
                                    el(".flex space-x-4"),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "STORY", { href: "#STORY" }),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "DeFi 2.0", { href: "#DeFi 2.0" }),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "BUYBACK FUND", { href: "#BUYBACK FUND" }),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "MINT", { href: "#MINT" }),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "WHITELIST", { href: "#WHITELIST" }),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "ROADMAP", { href: "#ROADMAP" }),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "TEAM", { href: "#TEAM" }),
                                )
                            ),
                        )
                    ),
                ),
                el("main", (this.content = el(".content"))),
                el("footer",
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
