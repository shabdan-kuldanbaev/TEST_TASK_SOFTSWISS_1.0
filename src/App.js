import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { HeroSection } from "@components/hero";
import { InspirationSection } from "@components/inspiration";
import { OffersSection } from "@components/offers";

function App() {
	return (
		<div className="app">
			<Header />
			<main className="main">
				<HeroSection />
				<OffersSection />
				<InspirationSection />
			</main>
			<Footer />
		</div>
	);
}

export default App;
