import './Block_6_styles.css';
import useMobileWidth from "../../hooks/useMobileWidth.js";

export function Block_6_component() {
    const isMobile = useMobileWidth(1024);

    return (
        <section className={`block-6 block ${isMobile ? 'block-6__mobile' : ''}`}>
            <h1>Einfache Montage</h1>

            <div className="block-6__left block-6__item">
                <h2>Wasserwaage</h2>
                {!isMobile && <span>Präzise Ausrichtung</span>}
            </div>

            <div className="block-6__middle block-6__item">
                <h2>Montageschablone</h2>
                {!isMobile && <span>Vorbereitung und Staubschutz</span>}
            </div>

            <div className="block-6__right block-6__item">
                <h2>Befestigung</h2>
                {!isMobile && <span>SichereWandfixierung</span>}
            </div>
        </section>
    )
}