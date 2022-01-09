import faker from 'faker-br';
import { Mappable } from './CustomMap';

export class User implements Mappable {
	name: string;
	job: string;
	jobDescription: string;
	location: {
		lat: number;
		log: number;
	};
	color = 'red';

	constructor() {
		this.name = faker.name.firstName();
		this.job = faker.name.jobTitle();
		this.jobDescription = faker.name.jobDescriptor();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			log: parseFloat(faker.address.longitude()),
		};
	}

	markerContent(): string {
		return `
		<div>
			<h3 style="color: ${this.color}; text-transform: uppercase;">User name: ${this.name}</h3>
			<h4>Job: ${this.job}</h4>
			<p>${this.jobDescription}</p>
		</div>
		`;
	}
}
