import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Alert from "../component/dialogue/Alert";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    private timer: DomNode;

    constructor() {
        this.container = el(".home-view",
            el("img", { src: "/images/logo-text.png" }),
            el(".timer", (this.timer = el("span.timer", "0d 0h 0d 0s"))),
            el(".button-container",
                el("button", "Enter App", {
                    click: () => { new Alert("서비스 준비중입니다.", "2022년 2월 10일에 민팅이 진행됩니다."); }
                }),
                el("button", "Read Docs", {
                    click: () => { window.open("https://docs.gaiaprotocol.com/gaia-protocol/") }
                })
            )
        ).appendTo(BodyNode);

        this.refresh();
        this.interval = setInterval(() => this.refresh(), 1000);
    }

    private async refresh() {
        var dday = new Date("2 10, 2022, 0:00:00").getTime();

        var today = new Date().getTime();
        var gap = dday - today;
        var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
        var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.ceil((gap % (1000 * 60)) / 1000);

        this.timer.empty().appendText(`${day}d ${hour}h ${min}m ${sec}s`);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}