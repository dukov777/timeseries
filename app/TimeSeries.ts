import Influx = require('influx');
import { resolve } from 'dns';
import { rejects } from 'assert';

export class TimeSeries {
    influx: Influx.InfluxDB;
    
    constructor(){
        this.influx = new Influx.InfluxDB({
            host: 'localhost',
            database: 'mybd',
            schema: [
                {
                    measurement: 'temp',
                    fields: {
                        value: Influx.FieldType.FLOAT
                    },
                    tags: [
                        'origin'
                    ]
                }
            ]
        })

    }

    write(origin: string, value: number): Promise<void> {
        return this.influx.writePoints([{
                measurement: 'temp',
                tags: { origin: origin },
                fields: { value: value }}]
            );
    }
    // write(origin: string, value: number): Promise<void> {
    //     return new Promise((resolve, reject) => {
    //         this.influx.writePoints([{
    //             measurement: 'temp',
    //             tags: { origin: origin },
    //             fields: { value: value },
    //         }]).catch((err: any) => {
    //             reject(err);
    //         })
    //     })
    // }

    readAll(): Promise<any> {
        return this.influx.query(`select * from temp`);
    }

    read(name:string): Promise<any> {
        return this.influx.query(`select * from temp WHERE origin = '${name}'`);
    }
}
