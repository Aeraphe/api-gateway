import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { BehaviorSubject } from 'rxjs';



class DbSequelize {



    private dbSequalize$ = new BehaviorSubject(new Sequelize('mysql://root:adm@localhost:3306/costumers'));

    public db = this.dbSequalize$.asObservable();
    constructor() { }

}

export default new DbSequelize();
