import  *  as jsonFile  from '../static/starwar.info.json';

export class StarWarService {
    
    list(object: string): Array<any> {
        
        switch (object) {
            case 'planets':
                return jsonFile.planets;
            case 'films':
                return jsonFile.films;
            case 'people':
                return jsonFile.people;
            default:
                return jsonFile.crawls;
        }
    }

    getElement(object: string, id: number): any {

        switch (object) {
            case 'planets':
                return jsonFile.planets[id - 1];
            case 'films':
                return jsonFile.films[id - 1];
            case 'people':
                return jsonFile.people[id - 1];
            default:
                return jsonFile.crawls;
        }
    }


}