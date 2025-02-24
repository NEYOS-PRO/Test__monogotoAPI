export default defineEventHandler(async (event) => {

     try {
        const CVS_report = await fetch("https://console.monogoto.io/report-history/downloadReport/csv/%2Fefs%2Freports%2Fcsv%2F2025%2F2%2F19%2FReport_Rapport_complet2_%23d22a8.csv",{
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.Token}`
            }
        });

        if(!CVS_report.ok) {
            return console.log("Error");
        }

        const Responses = await CVS_report.json();

        return Responses;

     }catch(error){
        return console.error(" Vous rencontrez une erreur => ",error);
     }
}); 

