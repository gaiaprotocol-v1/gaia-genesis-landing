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
                el("header.bg-black fixed top-0 left-0 right-0 hidden lg:block",
                    el("nav.container mx-auto px-4",
                        el(".max-w-8xl",
                            el(".relative flex items-center justify-between h-16",
                                el(".flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
                                    el(".flex-shrink-0 flex items-center",
                                        el("a", { href: "#STORY" },
                                            el("img.block lg:hidden h-8 w-auto", { src: "/images/logo.png", alt: "gaia protocol logo" })
                                        ),
                                        el("a", { href: "#STORY" },
                                            el("img.hidden lg:block h-8 w-auto", { src: "/images/logo.png", alt: "gaia protocol logo" })
                                        )
                                    )
                                ),
                                el(".hidden sm:block sm:ml-6",
                                    el(".flex space-x-4"),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "WHY", { href: "#DeFi 2.0" }),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "BUYBACK FUND", { href: "#BUYBACK FUND" }),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "SNEAK PEEK", { href: "#SNEAK PEEK" }),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "MINT", { href: "#MINT" }),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "TEAM", { href: "#TEAM" }),
                                    el("a.text-gray-300 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium", "PARTNER", { href: "#PARTNER" }),
                                ),
                            ),
                        )
                    ),
                ),
                el("main", (this.content = el(".content"))),
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
