import * as mongoose from 'mongoose';
import { BehaviorSubject } from 'rxjs';

class MongoDb {
    public db: any;

    private setDb = new BehaviorSubject(undefined);

    constructor() { }

    getDb() {
        return this.setDb.asObservable();
    }

    public async connect(): Promise<any> {
        try {
            this.db = await mongoose.connect(
                'mongodb://mongo:27017/ares',
                {
                    
                    useNewUrlParser: true,

                }
            );
            console.log('Connected to db', new Date());
            this.setDb.next(this.db);
            return this.db;
        } catch (error) {
            console.log('Unable to connect to db', error);
        }
    }
}

export default new MongoDb();
