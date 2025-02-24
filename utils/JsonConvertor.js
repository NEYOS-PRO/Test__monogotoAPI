export const JsonConvertor = (csvText) => {


    const lines = csvText.split("\n"); // Séparer les lignes
    const headers = lines[0].split(","); // Extraire les en-têtes
    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(",");
        if (values.length === headers.length) { // Éviter les lignes vides
            let obj = {};
            headers.forEach((header, index) => {
                obj[header] = values[index].trim(); // Supprimer les espaces inutiles
            });
            result.push(obj);
        }
    }

    return JSON.stringify(result, null, 4); 
};


