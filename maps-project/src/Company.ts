import faker from 'faker-br';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
	name: string;
	catchPhrase: string;
	description: string;
	location: {
		lat: number;
		log: number;
	};
	color = 'blue';

	constructor() {
		this.name = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.description = faker.company.catchPhraseDescriptor();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			log: parseFloat(faker.address.longitude()),
		};
	}

	markerContent(): string {
		return `
		<div>
			<h3 style="color: ${this.color}; text-transform: uppercase;">Company name: ${this.name}</h3>
			<h4>CatchPhrase: ${this.catchPhrase}</h4>
			<p>${this.description}</p>
		</div>
		`;
	}
}
