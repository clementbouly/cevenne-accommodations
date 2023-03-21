class HeaderComponent extends HTMLElement {
	constructor() {
		super()
	}
	connectedCallback() {
		this.innerHTML = /*html*/ `
		<header class="header">
		<div class="header__logo">
			<a href="#"
				><img
					src="/img/logo-web-transparent.png"
					alt="Logo"
					class="header__logo-img"
			/></a>
		</div>
		<nav class="header__nav">
			<ul class="header__list">
				<li class="header__item">
					<a href="/index.html" class="header__link"
						>Accueil
						<svg
							class="header__link__graphic header__link__graphic--slide"
							width="300%"
							height="100%"
							viewBox="0 0 1200 60"
							preserveAspectRatio="none"
						>
							<path
								d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"
							></path>
						</svg>
					</a>
				</li>
				<li class="header__item">
					<a href="#price" class="header__link"
						>Tarif
						<svg
							class="header__link__graphic header__link__graphic--slide"
							width="300%"
							height="100%"
							viewBox="0 0 1200 60"
							preserveAspectRatio="none"
						>
							<path
								d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"
							></path>
						</svg>
					</a>
				</li>
				<li class="header__item">
					<a href="#tourism" class="header__link"
						>Tourisme
						<svg
							class="header__link__graphic header__link__graphic--slide"
							width="300%"
							height="100%"
							viewBox="0 0 1200 60"
							preserveAspectRatio="none"
						>
							<path
								d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"
							></path>
						</svg>
					</a>
				</li>
				<li class="header__item">
					<a href="#contact" class="header__link"
						>Contact
						<svg
							class="header__link__graphic header__link__graphic--slide"
							width="300%"
							height="100%"
							viewBox="0 0 1200 60"
							preserveAspectRatio="none"
						>
							<path
								d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"
							></path>
						</svg>
					</a>
				</li>
			</ul>
		</nav>
		<div class="header__btn">
			<a href="#" class="btn btn--primary">Réservez maintenant</a>
		</div>
	</header>
		`
	}
}

// Define the custom element
customElements.define("header-component", HeaderComponent)
