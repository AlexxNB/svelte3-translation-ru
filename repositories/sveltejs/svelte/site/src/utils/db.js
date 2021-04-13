import { Pool } from 'pg';

// Uses `PG*` ENV vars
export const DB = process.env.PGHOST ? new Pool() : null;

if(DB){
	DB.on('connect', ()=>console.log('>>>>>>>>> (utils/db.js) DB: ','Connected'));
	DB.on('acquire', ()=>console.log('>>>>>>>>> (utils/db.js) DB: ','Acquired'));
	DB.on('remove', ()=>console.log('>>>>>>>>> (utils/db.js) DB: ','Removed'));
	DB.on('error', (err)=>console.log('>>>>>>>>> (utils/db.js) DB Error: ',err));
}else console.log('>>>>>>>>> (utils/db.js) DB: ','No ENV Vars')

export function query(text, values=[]) {
	return DB.query(text, values).then(r => r.rows).catch(err => console.log('>>>>>>>>> (utils/db.js) query: ',err));
}

export function find(text, values=[]) {
	return query(text, values).then(arr => arr[0]);
}
