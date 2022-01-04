var database = require("./database");

// INSERT 
// var data = [
//     {
//     nome: "Grand Theft Auto V",
//     preco: 200,
//     },
//     {
//         nome: "Habbo Hotel",
//         preco: 0,
//     },
//     {
//         nome: "Fri fairi",
//         preco: 1,
//     }
// ]

// var query = database.insert(data).into("GAMES").then(d => {
//     console.log(d);
// }).catch(err => {
//     console.log(err);
// });

// SELECT
// database.select(["nome","preco"]).table("games").then(d => {
//     console.log(d);
// }).catch(err => {
//     console.log(err);
// })

// NESTED QUERIES
// database.insert({nome: "Fifa 21", preco: 5}).into("GAMES").then(d => {
//     database.select(["nome","preco"]).table("games").then(d => {
//         console.log(d);
//     }).catch(err => {
//         console.log(err);
//     })
// }).catch(err => {
//     console.log(err);
// });

// WHERE (JUST EQUAL)
// var query = database.select(["nome","preco"])
//                         .where({nome: "Grand The Auto 5"})
//                         .orWhere({id: 2})
//                         .table("games");
// console.log(query.toQuery())

// WHERE RAW (LIKE, NOT LIKE)
// var query = database.select(["nome","preco"])
//                         .whereRaw("nome LIKE 'Grand%' OR preco > 2")
//                         .table("games").then(data => {
//                             console.log(data);
//                         }).catch(err => {
//                             console.log(err);
//                         });

// QUERY RAW
// CASE LIBRARY IS NOT FLEXIBLE YOU CAN USE RAW E USE ANY SQL CODE
// database.raw("SELECT * FROM games").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

// DELETE
// database.whereRaw("nome LIKE 'Habbo%'").delete().table("games").then(d => {
//     console.log(d);
// }).catch(err => {
//     console.log(err);
// });

// UPDATE
// database.where({id: 3}).update({preco: 100}).table("games").then(d => {
//     console.log(d);
// }).catch(err => {
//     console.log(err);
// });

// ORDER BY
// database.select("nome","preco").table("games").orderBy("preco","ASC").then(d => {
//     console.log(d);
// }).catch(err => {
//     console.log(err);
// });

// ASSOCIATED INSERT
// database.insert({
//     nome: "Rockstar",
//     game_id: 3
// }).table("estudios").then(d => {
//     console.log(d);
// }).catch(err => {
//     console.log(err);
// })

// INNER JOIN
// database.select(["games.*","estudios.nome as estudio"]).table("games").innerJoin("estudios","estudios.game_id","games.id").then(d => {
//     console.log(d);
// }).catch(err => {
//     console.log(err);
// });

// LEFT JOIN
// database.select(["games.*","estudios.nome as estudio"]).table("games").leftJoin("estudios","estudios.game_id","games.id").where("games.id","2").then(d => {
//     console.log(d);
// }).catch(err => {
//     console.log(err);
// });

// M to M
// database.select([
//             "estudios.nome as Estudio",
//             "games.nome as Game",
//             "games.preco"
//     ]).table("games_estudios")
//     .innerJoin("games","games.id","games_estudios.game_id")
//     .innerJoin("estudios","estudios.id","games_estudios.estudio_id")
//     .then(d => {
//         console.log(d)
// }).catch(err => {
//     console.log(err);
// })

async function transacao(){
    try{
        await database.transaction(async trans => {
            await database.insert({nome: "Estudiozão"}).table("estudios");
            await database.insert({nome: "Estudiozão pequeno"}).table("estudios");
        });

    }catch(err){
        console.log(err)
    };
}

transacao();