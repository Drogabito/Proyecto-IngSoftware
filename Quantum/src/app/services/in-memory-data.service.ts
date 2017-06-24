import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const urls = [
		{ id: 0, url: 'https://www.google.com/'},
		{ id: 1, url: 'https://www.facebook.com/'},
		{ id: 2, url: 'https://www.youtube.com/'},
		{ id: 3, url: 'https://www.reddit.com/'}
    ];
    return {urls};
  }
}
