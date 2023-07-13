//[];

var fechas = ["10/07/2023","11/07/2023","12/07/2023","13/07/2023","14/07/2023","15/07/2023","16/07/2023"];
var asignacion = [{'Monitor' : 'BG','Planta' : 'ABC','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'BG','Planta' : 'ABC','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'ABC','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'ABC','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'ABC','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'ABC','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'BG','Planta' : 'APN','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'BG','Planta' : 'APN','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'APN','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'APN','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'APN','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'APN','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'BG','Planta' : 'BAX','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'BG','Planta' : 'BAX','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'BAX','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'BAX','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'BAX','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'BAX','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'BDR','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'BDR','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'MV','Planta' : 'BDR','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'MV','Planta' : 'BDR','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'BDR','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'BDR','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'VM','Planta' : 'BEN','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'VM','Planta' : 'BEN','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'BEN','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'BEN','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'BEN','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'BEN','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'JD','Planta' : 'BIO','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'JD','Planta' : 'BIO','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'BIO','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'BIO','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'BIO','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'BIO','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'BG','Planta' : 'BOR','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'BG','Planta' : 'BOR','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'BOR','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'BOR','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'BOR','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'BOR','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AO','Planta' : 'CAH','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AO','Planta' : 'CAH','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NN','Planta' : 'CAH','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NN','Planta' : 'CAH','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'CAH','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'CAH','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AO','Planta' : 'CCS','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AO','Planta' : 'CCS','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'MV','Planta' : 'CCS','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'MV','Planta' : 'CCS','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'CCS','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'CCS','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'CPM','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'CPM','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'MV','Planta' : 'CPM','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'MV','Planta' : 'CPM','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'CPM','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'CPM','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'CSM','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'CSM','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'MV','Planta' : 'CSM','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'MV','Planta' : 'CSM','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'CSM','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'CSM','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'CUR','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'CUR','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'DAR','Planta' : 'CUR','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'CUR','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'CUR','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'CUR','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'JD','Planta' : 'CZI','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'JD','Planta' : 'CZI','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'CZI','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'CZI','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'CZI','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'CZI','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'JD','Planta' : 'CZO','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'JD','Planta' : 'CZO','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'CZO','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'CZO','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'CZO','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'CZO','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'VM','Planta' : 'DAR','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'VM','Planta' : 'DAR','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'DAR','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'DAR','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'DAR','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'DAR','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'BG','Planta' : 'ELE','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'BG','Planta' : 'ELE','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'ELE','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'ELE','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'ELE','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'ELE','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AO','Planta' : 'ESE','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AO','Planta' : 'ESE','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NN','Planta' : 'ESE','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NN','Planta' : 'ESE','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'ESE','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'ESE','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'JD','Planta' : 'ESL','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'JD','Planta' : 'ESL','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'ESL','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'ESL','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'ESL','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'ESL','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'JD','Planta' : 'ESS','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'JD','Planta' : 'ESS','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'ESS','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'ESS','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'ESS','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'ESS','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'MM','Planta' : 'FLC','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'MM','Planta' : 'FLC','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'MM','Planta' : 'FLC','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'MM','Planta' : 'FLC','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'MM','Planta' : 'FLC','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'MM','Planta' : 'FLC','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AO','Planta' : 'FLX','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AO','Planta' : 'FLX','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NN','Planta' : 'FLX','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NN','Planta' : 'FLX','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'FLX','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'FLX','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'JD','Planta' : 'HNW','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'JD','Planta' : 'HNW','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'HNW','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'HNW','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'HNW','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'HNW','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AR','Planta' : 'HYC','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AR','Planta' : 'HYC','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'AV','Planta' : 'HYC','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'AV','Planta' : 'HYC','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'HYC','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'HYC','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AR','Planta' : 'HYD','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AR','Planta' : 'HYD','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'HYD','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'HYD','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'HYD','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'HYD','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AV','Planta' : 'HYP','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AV','Planta' : 'HYP','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'AV','Planta' : 'HYP','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'AV','Planta' : 'HYP','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'HYP','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'HYP','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AR','Planta' : 'HYR','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AR','Planta' : 'HYR','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'AR','Planta' : 'HYR','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'AR','Planta' : 'HYR','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'HYR','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'HYR','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AV','Planta' : 'HYS','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AV','Planta' : 'HYS','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'AV','Planta' : 'HYS','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'AV','Planta' : 'HYS','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'HYS','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'HYS','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AV','Planta' : 'HYT','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AV','Planta' : 'HYT','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'AV','Planta' : 'HYT','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'AV','Planta' : 'HYT','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'HYT','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'HYT','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AV','Planta' : 'HYY','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AV','Planta' : 'HYY','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'AV','Planta' : 'HYY','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'AV','Planta' : 'HYY','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'HYY','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'HYY','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'BG','Planta' : 'INF','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'BG','Planta' : 'INF','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NN','Planta' : 'INF','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NN','Planta' : 'INF','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'INF','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'INF','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'JD','Planta' : 'ITG','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'JD','Planta' : 'ITG','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'ITG','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'ITG','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'ITG','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'ITG','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'BG','Planta' : 'KEP','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'BG','Planta' : 'KEP','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'KEP','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'KEP','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'KEP','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'KEP','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AO','Planta' : 'MAB','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AO','Planta' : 'MAB','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NN','Planta' : 'MAB','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NN','Planta' : 'MAB','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'MAB','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'MAB','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'JD','Planta' : 'MAX','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'JD','Planta' : 'MAX','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'MAX','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'MAX','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'MAX','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'MAX','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'VM','Planta' : 'MEC','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'VM','Planta' : 'MEC','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'MEC','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'MEC','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'MEC','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'MEC','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'MED','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'MED','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NN','Planta' : 'MED','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NN','Planta' : 'MED','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'MED','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'MED','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'MLB','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'MLB','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'MV','Planta' : 'MLB','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'MV','Planta' : 'MLB','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'MLB','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'MLB','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'VM','Planta' : 'MOR','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'VM','Planta' : 'MOR','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'MOR','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'MOR','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'MOR','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'MOR','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'MPA','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'MPA','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'MV','Planta' : 'MPA','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'MV','Planta' : 'MPA','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'MPA','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'MPA','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'JD','Planta' : 'OCE','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'JD','Planta' : 'OCE','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'OCE','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'OCE','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'OCE','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'OCE','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'JD','Planta' : 'REB','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'JD','Planta' : 'REB','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'REB','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'REB','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'REB','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'REB','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'YC','Planta' : 'SAM','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'YC','Planta' : 'SAM','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'YC','Planta' : 'SAM','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'YC','Planta' : 'SAM','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'SAM','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'YC','Planta' : 'SAM','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'JD','Planta' : 'SCH','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'JD','Planta' : 'SCH','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'SCH','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'SCH','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'SCH','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'SCH','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'VM','Planta' : 'SCN','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'VM','Planta' : 'SCN','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'SCN','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'SCN','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'SCN','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'SCN','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'VM','Planta' : 'SCT','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'VM','Planta' : 'SCT','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'SCT','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'SCT','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'SCT','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'SCT','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'CP','Planta' : 'SMA','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'CP','Planta' : 'SMA','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'MV','Planta' : 'SMA','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'MV','Planta' : 'SMA','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'SMA','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'SMA','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'JD','Planta' : 'SMC','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'JD','Planta' : 'SMC','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'SMC','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'SMC','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'SMC','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'SMC','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'VM','Planta' : 'SMI','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'VM','Planta' : 'SMI','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'SMI','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'SMI','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'SMI','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'SMI','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AO','Planta' : 'SOU','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AO','Planta' : 'SOU','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NN','Planta' : 'SOU','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NN','Planta' : 'SOU','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'SOU','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'SOU','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'BG','Planta' : 'STG','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'BG','Planta' : 'STG','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'STG','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'STG','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'STG','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'STG','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'BG','Planta' : 'STJ','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'BG','Planta' : 'STJ','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'STJ','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'STJ','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'STJ','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'STJ','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'BG','Planta' : 'STP','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'BG','Planta' : 'STP','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NN','Planta' : 'STP','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NN','Planta' : 'STP','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'STP','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'STP','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'BG','Planta' : 'THD','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'BG','Planta' : 'THD','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'THD','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'THD','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'THD','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'THD','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'BG','Planta' : 'THE','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'BG','Planta' : 'THE','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NN','Planta' : 'THE','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NN','Planta' : 'THE','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'THE','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'THE','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'SC','Planta' : 'TOY','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'SC','Planta' : 'TOY','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'SR','Planta' : 'TOY','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'SR','Planta' : 'TOY','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'AG','Planta' : 'TOY','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'AG','Planta' : 'TOY','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'VM','Planta' : 'TPK','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'VM','Planta' : 'TPK','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NG','Planta' : 'TPK','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NG','Planta' : 'TPK','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'TPK','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'TPK','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'SC','Planta' : 'TRI','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'SC','Planta' : 'TRI','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'SR','Planta' : 'TRI','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'SR','Planta' : 'TRI','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'AG','Planta' : 'TRI','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'AG','Planta' : 'TRI','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AO','Planta' : 'TRU','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AO','Planta' : 'TRU','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'MV','Planta' : 'TRU','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'MV','Planta' : 'TRU','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'TRU','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'TRU','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'MM','Planta' : 'TVM','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'MM','Planta' : 'TVM','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'MM','Planta' : 'TVM','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'MM','Planta' : 'TVM','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'MM','Planta' : 'TVM','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'MM','Planta' : 'TVM','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'MM','Planta' : 'TVT','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'MM','Planta' : 'TVT','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'MM','Planta' : 'TVT','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'MM','Planta' : 'TVT','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'MM','Planta' : 'TVT','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'MM','Planta' : 'TVT','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'AO','Planta' : 'TYC','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'AO','Planta' : 'TYC','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'NN','Planta' : 'TYC','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'NN','Planta' : 'TYC','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'TYC','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'TYC','Turno' : 'T3','E_S' : 'OUT'} ,{'Monitor' : 'VM','Planta' : 'WEL','Turno' : 'T1','E_S' : 'IN'} ,{'Monitor' : 'VM','Planta' : 'WEL','Turno' : 'T1','E_S' : 'OUT'} ,{'Monitor' : 'CG','Planta' : 'WEL','Turno' : 'T2','E_S' : 'IN'} ,{'Monitor' : 'CG','Planta' : 'WEL','Turno' : 'T2','E_S' : 'OUT'} ,{'Monitor' : 'IS','Planta' : 'WEL','Turno' : 'T3','E_S' : 'IN'} ,{'Monitor' : 'IS','Planta' : 'WEL','Turno' : 'T3','E_S' : 'OUT'}];
