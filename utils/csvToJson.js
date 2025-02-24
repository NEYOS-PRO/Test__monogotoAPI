export const csvToJson = (csvString) => {
    const lines = csvString.split("\n").map(line => line.replace(/\"/g, "").trim()).filter(line => line.length > 0);
    console.log("Lines:", lines[1]); // Debug: Afficher les lignes

    const headers = lines[0].split(",").map(header => header.trim());
    console.log("Headers:", headers); // Debug: Afficher les en-têtes

    const jsonData = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(",").map(value => value.trim());
        console.log(`Values at line ${i}:`, values); // Debug: Afficher les valeurs de chaque ligne

        if (headers.length) {
            let obj = {};
            headers.forEach((header, index) => {
                obj[header] = values[index] || "";
            });
            jsonData.push(obj);
        }
    }

    console.log("Filtered JSON Data:", jsonData); // Debug: Afficher le résultat final
    return jsonData;
};


