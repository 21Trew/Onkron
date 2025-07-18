import "./Block_4_styles.css"
import useMobileWidth from "../../hooks/useMobileWidth.js";

export function Block_4_component() {
    const isMobile = useMobileWidth(1024);

    return (
        <>
            <section className={`block-4 block ${isMobile ? "block-4__mobile" : ""}`}>
                <div className="block-4__left-top block-4__item">
                    <div className="block-4__item-wrapper">
                        <span className="block-4__number">2.5</span>

                        <div className="block-4__text-wrapper">
                            <span className="block-4__stahl">Stahl</span>
                            <div className="block-4__mm">mm</div>
                        </div>
                    </div>
                </div>

                <div className="block-4__left-bottom block-4__item"></div>

                <div className="block-4__right-center"></div>
            </section>
        </>
    )
}