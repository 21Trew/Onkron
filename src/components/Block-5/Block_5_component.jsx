import "./Block_5_styles.css"
import useMobileWidth from "../../hooks/useMobileWidth.js";

export function Block_5_component() {
    const isMobile = useMobileWidth(1024);

    return (
        <>
            <section className={`block-5 block ${isMobile ? "block-5__mobile" : ""}`}>
                <article className="block-5__left">
                    <span className="block-5__bottom-text block-5__bottom-left">Andere Marke</span>
                </article>

                <article className="block-5__right">
                    <div className="block-5__center">
                        <div className="block-5__center-arrows"></div>
                        <span className="block-5__center-numbers">3.4 cm</span>
                        <span className="block-5__center-text">Minimale<br />Wandabstand</span>
                    </div>
                    <span className="block-5__bottom-text block-5__bottom-right">ONKRON</span>
                </article>
            </section>
        </>
    )
}