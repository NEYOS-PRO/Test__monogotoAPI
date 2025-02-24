export default async function Methode_api(url) { 
    
    if(!url) {
        return console.log("No url provided");
    }

    try {

        const data = await fetch (`${url}`,{
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.Token}`
            }
        }); 

        const Responses = await data.json();

        if(!Responses.ok) {
            return console.log("Error");
        }

        return Responses;

    }catch(error){
        return console.error(" Vous rencontrez une erreur => ",error);
    }
}
