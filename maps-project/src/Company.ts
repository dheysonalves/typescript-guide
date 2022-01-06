import faker from 'faker-br';

export class Company {
	name: string;
	catchPhrase: string;
	location: {
		lat: number;
		log: number;
	};

	constructor() {
		this.name = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			log: parseFloat(faker.address.longitude()),
		};
	}
}
