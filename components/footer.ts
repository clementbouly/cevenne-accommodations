class FooterComponent extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.innerHTML = /*html*/ `
        <footer class="footer">
			<h3 class="heading-secondary">Nos Partenaires :</h3>
			<figure class="partners-logo">
				<img src="/img/Footer/Herault Departement.png" alt="Département hérault" />
				<img
					src="/img/Footer/LPO.png"
					alt="Ligue de Protection des oiseaux"
					class="partners-logo__LPO"
				/>
				<img src="/img/Footer/moto et motards.png" alt="Tourisme hérault" />
				<img src="/img/Footer/moto-trip.png" alt="Tourisme hérault" />
				<img
					src="/img/Footer/Parc cévennes.png"
					alt="Parc des cévennes"
					class="partners-logo__parc-cevennes"
				/>
				<img src="/img/Footer/Pic saint loup.png" alt="Tourisme hérault" />
				<img src="/img/Footer/repaire motards.png" alt="Tourisme hérault" />
				<img
					src="/img/Footer/Tourism_herault.png"
					alt="Tourisme hérault"
					class="partners-logo__tourism-herault"
				/>
			</figure>
			<p class="legal-mentions">
				©CHANTE-CEVENNES.FR | TOUS DROITS RÉSERVÉS | MENTIONS LÉGALES
			</p>
			<img
				src="/img/footer_image-removebg-preview (1).png"
				alt="footer"
				class="footer__image"
			/>
		</footer>
        `
	}
}

customElements.define("footer-component", FooterComponent)
